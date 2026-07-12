import type { ChatApiRequest } from "../types/chat";
import type {
  ConversationTopic,
  ProjectFocus,
  ProjectStage,
  SessionContext,
} from "../types/consultant";
import { normalizeText } from "./normalization";

const FOCUS_PATTERNS: Array<{ focus: ProjectFocus; patterns: RegExp }> = [
  { focus: "erp", patterns: /\b(erp|enterprise resource|inventory system|supply chain software|procurement system|warehouse system)\b/i },
  { focus: "mvp", patterns: /\b(mvp|minimum viable|prototype|proof of concept|poc|idea stage|launch product)\b/i },
  { focus: "saas", patterns: /\b(saas|software as a service|subscription platform|multi tenant|multi-tenant)\b/i },
  { focus: "mobile", patterns: /\b(mobile app|ios|android|smartphone app|react native|app store)\b/i },
  { focus: "web", patterns: /\b(web app|website|web application|portal|online platform)\b/i },
  { focus: "cloud", patterns: /\b(cloud|aws|migration|infrastructure|hosting)\b/i },
  { focus: "fintech", patterns: /\b(fintech|payment|crypto|wallet|banking|stablecoin|digital finance)\b/i },
  { focus: "automation", patterns: /\b(automation|automate|workflow|rpa|process automation)\b/i },
  { focus: "devops", patterns: /\b(devops|ci cd|cicd|deployment|pipeline|kubernetes|docker)\b/i },
  { focus: "uiux", patterns: /\b(ui ux|ux|user experience|user interface|design|wireframe|figma)\b/i },
  { focus: "api", patterns: /\b(api|integration|integrate|webhook|connect systems|third party)\b/i },
  { focus: "startup", patterns: /\b(startup|start up|early stage|pre-seed|seed|series a|scale up)\b/i },
  { focus: "enterprise", patterns: /\b(enterprise|large company|corporate|institutional|series b|series c)\b/i },
  { focus: "consulting", patterns: /\b(consulting|consultant|advisory|strategy|audit)\b/i },
];

const CHALLENGE_PATTERNS: Array<{ label: string; pattern: RegExp }> = [
  { label: "scaling", pattern: /\b(scale|scaling|growth bottleneck|can't scale)\b/i },
  { label: "legacy systems", pattern: /\b(legacy|outdated|technical debt|old system)\b/i },
  { label: "revenue", pattern: /\b(revenue|monetization|billing|pricing model)\b/i },
  { label: "operations", pattern: /\b(operations|inefficient|manual process|bottleneck)\b/i },
  { label: "security", pattern: /\b(security|compliance|hipaa|pci|data breach)\b/i },
];

const TOPIC_PATTERNS: Array<{ topic: string; pattern: RegExp }> = [
  { topic: "pricing", pattern: /\b(price|pricing|cost|budget|investment|quote|fee|how much)\b/i },
  { topic: "timeline", pattern: /\b(timeline|how long|duration|deadline|when can)\b/i },
  { topic: "process", pattern: /\b(process|methodology|how do you work|discovery|agile)\b/i },
  { topic: "contact", pattern: /\b(contact|email|phone|book|call|consultation|meeting)\b/i },
  { topic: "services", pattern: /\b(service|offer|capability|what do you do)\b/i },
  { topic: "technology", pattern: /\b(tech|stack|technology|framework|react|aws|architecture)\b/i },
];

const BUSINESS_PATTERNS: Array<{ hint: string; pattern: RegExp }> = [
  { hint: "logistics and warehousing", pattern: /\b(warehouse|logistics|supply chain|distribution|freight)\b/i },
  { hint: "retail and e-commerce", pattern: /\b(retail|ecommerce|e-commerce|store|shop)\b/i },
  { hint: "financial services", pattern: /\b(fintech|bank|insurance|lending|payments)\b/i },
  { hint: "healthcare", pattern: /\b(healthcare|health|medical|clinic|hospital)\b/i },
  { hint: "manufacturing", pattern: /\b(manufacturing|factory|production line)\b/i },
  { hint: "SaaS and technology", pattern: /\b(saas|software company|tech startup|platform)\b/i },
];

/**
 * Builds session context from full conversation history.
 * Enables continuous, personalized consulting dialogue within a session.
 */
export function buildSessionContext(
  messages: ChatApiRequest["messages"],
): SessionContext {
  const userMessages = messages.filter((m) => m.role === "user");
  const userText = userMessages.map((m) => m.content).join(" ");
  const lastUserMessage = userMessages[userMessages.length - 1]?.content ?? "";

  const projectFocus = new Set<ProjectFocus>();
  for (const { focus, patterns } of FOCUS_PATTERNS) {
    if (patterns.test(userText)) projectFocus.add(focus);
  }

  const challenges: string[] = [];
  for (const { label, pattern } of CHALLENGE_PATTERNS) {
    if (pattern.test(userText)) challenges.push(label);
  }

  const discussedTopics: string[] = [];
  for (const { topic, pattern } of TOPIC_PATTERNS) {
    if (pattern.test(userText)) discussedTopics.push(topic);
  }

  let businessHint: string | undefined;
  for (const { hint, pattern } of BUSINESS_PATTERNS) {
    if (pattern.test(userText)) {
      businessHint = hint;
      break;
    }
  }

  const mentionedTimeline = /\b(timeline|how long|when|deadline|schedule|weeks|months|asap|urgent)\b/i.test(userText);
  const mentionedBudget = /\b(budget|cost|price|afford|investment|quote|\$|spend|capital)\b/i.test(userText);
  const mentionedTeam = /\b(team|employees|headcount|staff|developers|\d+\s*(people|employees|staff))\b/i.test(userText);
  const mentionedScale = /\b(scale|users|customers|traffic|volume|\d+k?\s*(users|customers))\b/i.test(userText);

  const projectStage = detectProjectStage(userText);
  const activeTopic = detectActiveTopic(lastUserMessage, [...projectFocus]);
  const contextRichness = computeRichness({
    projectFocus: [...projectFocus],
    challenges,
    mentionedTimeline,
    mentionedBudget,
    mentionedTeam,
    mentionedScale,
    businessHint,
    projectStage,
    userMessageCount: userMessages.length,
  });

  return {
    turnCount: messages.length,
    userMessageCount: userMessages.length,
    projectFocus: [...projectFocus],
    projectStage,
    mentionedTimeline,
    mentionedBudget,
    mentionedTeam,
    mentionedScale,
    challenges,
    discussedTopics,
    businessHint,
    userText,
    contextRichness,
    activeTopic,
  };
}

function detectProjectStage(text: string): ProjectStage {
  if (/\b(from scratch|new product|greenfield|starting|build something new|launch|idea)\b/i.test(text)) {
    return "new";
  }
  if (/\b(improve|upgrade|modernize|refactor|redesign|fix|enhance|existing)\b/i.test(text)) {
    return "improve";
  }
  if (/\b(scale|scaling|grow|expansion|series [abc]|post-pmf|product-market fit)\b/i.test(text)) {
    return "scale";
  }
  return "unknown";
}

function detectActiveTopic(
  lastMessage: string,
  focus: ProjectFocus[],
): ConversationTopic {
  const q = lastMessage.toLowerCase();
  if (/\b(price|pricing|cost|budget|quote|how much|investment)\b/.test(q)) return "pricing";
  if (/\b(contact|email|phone|book|call|consultation|meeting)\b/.test(q)) return "contact";
  if (/\b(process|methodology|discovery|how do you work|timeline|how long)\b/.test(q)) return "process";
  if (/\b(service|offer|capability|what do you do)\b/.test(q)) return "services";
  if (focus.includes("erp") || /\b(erp|inventory|warehouse|procurement)\b/.test(q)) return "erp";
  if (focus.includes("mvp") || /\b(mvp|prototype|startup)\b/.test(q)) return "mvp";
  if (/\b(tech|stack|architecture|cloud|devops|api|integration|scalab)\b/.test(q)) return "technical";
  return "general";
}

function computeRichness(input: {
  projectFocus: ProjectFocus[];
  challenges: string[];
  mentionedTimeline: boolean;
  mentionedBudget: boolean;
  mentionedTeam: boolean;
  mentionedScale: boolean;
  businessHint?: string;
  projectStage: ProjectStage;
  userMessageCount: number;
}): number {
  let score = 0;
  if (input.projectFocus.length) score += 1;
  if (input.challenges.length) score += 1;
  if (input.mentionedTimeline) score += 1;
  if (input.mentionedBudget) score += 1;
  if (input.mentionedTeam || input.mentionedScale) score += 1;
  if (input.businessHint) score += 1;
  if (input.projectStage !== "unknown") score += 1;
  if (input.userMessageCount >= 3) score += 1;
  return Math.min(6, score);
}

/** Category → project focus affinity for context-aware scoring boosts. */
export const CATEGORY_FOCUS_MAP: Partial<
  Record<string, ProjectFocus[]>
> = {
  "erp-systems": ["erp", "enterprise"],
  "mvp-development": ["mvp", "startup"],
  "web-applications": ["web", "saas"],
  "mobile-applications": ["mobile", "fintech"],
  "cloud-solutions": ["cloud", "enterprise"],
  "ui-ux-design": ["uiux", "saas"],
  devops: ["devops", "cloud"],
  "business-automation": ["automation", "enterprise"],
  "api-integrations": ["api", "saas", "erp"],
  "pricing-philosophy": ["consulting"],
};

/** Human-readable label for a project focus. */
export function focusLabel(focus: ProjectFocus): string {
  const labels: Record<ProjectFocus, string> = {
    erp: "an ERP or operations platform",
    mvp: "an MVP or early product",
    saas: "a SaaS platform",
    mobile: "a mobile application",
    web: "a web application",
    cloud: "cloud infrastructure",
    fintech: "a fintech product",
    automation: "business process automation",
    devops: "DevOps and deployment",
    uiux: "UI/UX design",
    api: "system integrations",
    startup: "a startup initiative",
    enterprise: "an enterprise-scale build",
    consulting: "strategic consulting",
  };
  return labels[focus];
}

/** Detect if user wants a quick factual answer (skip probing follow-up). */
export function prefersDirectAnswer(query: string, category?: string): boolean {
  const q = normalizeText(query);
  const directPatterns =
    /^(what is your|email|phone|contact|how do i contact|book a call|website|url|call you|reach you)/;
  if (directPatterns.test(q)) return true;
  if (category === "contact-information") return q.length < 100;
  return false;
}

/** Build a natural reference to information already shared in the session. */
export function buildContextReference(session: SessionContext): string | null {
  const parts: string[] = [];

  if (session.businessHint) {
    parts.push(`your ${session.businessHint} business`);
  } else if (session.projectFocus.length) {
    parts.push(focusLabel(session.projectFocus[0]!));
  }

  if (session.challenges.length) {
    parts.push(`the ${session.challenges[0]} challenges you mentioned`);
  }

  if (!parts.length) return null;

  const refs =
    parts.length === 2
      ? `${parts[0]} and ${parts[1]}`
      : parts[0]!;

  return `Given ${refs}, `;
}
