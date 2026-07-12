import type { ChatApiRequest } from "../types/chat";
import type { ProjectFocus, SessionContext } from "../types/consultant";
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
  { topic: "pricing", pattern: /\b(price|pricing|cost|budget|investment|quote|fee)\b/i },
  { topic: "timeline", pattern: /\b(timeline|how long|duration|deadline|when can)\b/i },
  { topic: "process", pattern: /\b(process|methodology|how do you work|discovery|agile)\b/i },
  { topic: "contact", pattern: /\b(contact|email|phone|book|call|consultation|meeting)\b/i },
  { topic: "services", pattern: /\b(service|offer|capability|what do you do)\b/i },
  { topic: "technology", pattern: /\b(tech|stack|technology|framework|react|aws)\b/i },
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

  const projectFocus = new Set<ProjectFocus>();
  for (const { focus, patterns } of FOCUS_PATTERNS) {
    if (patterns.test(userText)) {
      projectFocus.add(focus);
    }
  }

  const challenges: string[] = [];
  for (const { label, pattern } of CHALLENGE_PATTERNS) {
    if (pattern.test(userText)) challenges.push(label);
  }

  const discussedTopics: string[] = [];
  for (const { topic, pattern } of TOPIC_PATTERNS) {
    if (pattern.test(userText)) discussedTopics.push(topic);
  }

  return {
    turnCount: messages.length,
    userMessageCount: userMessages.length,
    projectFocus: [...projectFocus],
    mentionedTimeline: /\b(timeline|how long|when|deadline|schedule|weeks|months)\b/i.test(userText),
    mentionedBudget: /\b(budget|cost|price|afford|investment|quote|\$|spend)\b/i.test(userText),
    mentionedTeam: /\b(team|employees|headcount|staff|developers)\b/i.test(userText),
    mentionedScale: /\b(scale|users|customers|traffic|volume)\b/i.test(userText),
    challenges,
    discussedTopics,
    userText,
  };
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
    /^(what is your|email|phone|contact|how do i contact|book a call|website|url)/;
  if (directPatterns.test(q)) return true;
  if (category === "contact-information") return q.length < 80;
  return false;
}
