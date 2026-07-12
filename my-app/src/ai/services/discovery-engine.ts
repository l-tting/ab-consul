import type { KnowledgeCategory } from "../types/knowledge";
import type { SessionContext } from "../types/consultant";
import { pickVariant } from "./response-variation";
import { focusLabel, prefersDirectAnswer } from "./session-context";

const PROBE_CATEGORIES: KnowledgeCategory[] = [
  "pricing-philosophy",
  "erp-systems",
  "mvp-development",
  "services",
  "web-applications",
  "mobile-applications",
  "cloud-solutions",
  "business-automation",
  "api-integrations",
];

/** Whether the query is too short/vague for a full answer without discovery. */
export function isVagueQuery(query: string): boolean {
  const trimmed = query.trim();
  const words = trimmed.split(/\s+/).filter(Boolean);
  return words.length <= 10 && trimmed.length < 80;
}

/** Whether we already have enough session context for this topic. */
export function hasEnoughContext(
  category: KnowledgeCategory,
  session: SessionContext,
): boolean {
  if (session.contextRichness >= 3) return true;

  switch (category) {
    case "pricing-philosophy":
      return (
        session.projectFocus.length > 0 &&
        (session.mentionedBudget || session.userMessageCount >= 2)
      );
    case "erp-systems":
      return (
        session.projectFocus.includes("erp") &&
        (session.businessHint !== undefined ||
          session.challenges.length > 0 ||
          session.mentionedTeam)
      );
    case "mvp-development":
      return session.projectFocus.includes("mvp") && session.projectStage !== "unknown";
    case "services":
    case "web-applications":
    case "mobile-applications":
      return session.projectFocus.length > 0 && session.projectStage !== "unknown";
    case "cloud-solutions":
    case "devops":
    case "api-integrations":
      return session.projectFocus.length > 0 || session.challenges.includes("legacy systems");
    default:
      return session.projectFocus.length > 0 || session.userMessageCount >= 3;
  }
}

/** Lead with a discovery question instead of a long FAQ-style answer. */
export function shouldProbeFirst(
  category: KnowledgeCategory,
  query: string,
  session: SessionContext,
): boolean {
  if (prefersDirectAnswer(query, category)) return false;
  if (!PROBE_CATEGORIES.includes(category)) return false;
  if (!isVagueQuery(query)) return false;
  return !hasEnoughContext(category, session);
}

/** Discovery-first response — concise, confident, one clear question. */
export function composeDiscoveryProbe(
  category: KnowledgeCategory,
  session: SessionContext,
  seed: string,
): string {
  const turn = session.userMessageCount;
  const ref = session.projectFocus[0]
    ? `For ${focusLabel(session.projectFocus[0])}, `
    : "";

  const probes: Partial<Record<KnowledgeCategory, string[]>> = {
    "pricing-philosophy": [
      `${ref}investment depends on scope, complexity, and timeline — the kind of detail that comes through in a brief discovery conversation. What are you planning to build or improve?`,
      `${ref}pricing aligns to outcomes rather than hours, so scope drives the estimate. Tell me about the project or operational challenge you're working through.`,
    ],
    "erp-systems": [
      "ERP investments vary widely based on operations — inventory, finance, procurement, and how many teams need access. What type of business do you run, and what's creating the most friction today?",
      "Before discussing approach or investment, it helps to understand your operations. What industry are you in, and which processes are causing the biggest headaches right now?",
    ],
    "mvp-development": [
      "MVP scope drives both timeline and investment. Are you validating a new idea, or do you have early traction you're building on?",
      "The right MVP strategy depends on your market and goals. What problem are you solving, and who needs to experience it first?",
    ],
    services: [
      "We tailor our approach to where you are — new build, platform upgrade, or scaling operations. Are you starting something new or improving systems you already have?",
      "The best starting point depends on your situation. What's the business challenge you're trying to solve right now?",
    ],
    "web-applications": [
      "Web platforms range from customer-facing products to internal operations tools — each with different priorities. Are you building something new or modernizing an existing platform?",
      "Scope and architecture depend on your users and growth plans. What role will this platform play in your business?",
    ],
    "mobile-applications": [
      "Mobile projects differ significantly based on audience, platform, and whether you're launching new or replacing an existing app. What are you looking to build?",
      "To recommend the right approach, it helps to understand your users and timeline. Is this a new product or an upgrade to something live today?",
    ],
    "cloud-solutions": [
      "Cloud strategy depends on your current infrastructure and growth trajectory. Are you migrating from legacy systems or optimizing something already in the cloud?",
      "The right architecture follows from your scale targets and operational needs. What's driving this conversation — cost, reliability, or preparing to grow?",
    ],
    "business-automation": [
      "Automation ROI depends on which processes consume the most time or create the most errors. Which part of your operations feels most manual or fragmented today?",
      "We prioritize automations with clear business impact. Where are bottlenecks slowing your team down?",
    ],
    "api-integrations": [
      "Integration complexity depends on the systems involved and how real-time the data needs to be. What platforms are you connecting, and what business outcome are you targeting?",
      "The right integration approach follows from your architecture and data flows. What systems need to work together?",
    ],
  };

  const pool =
    probes[category] ??
    [
      "Understanding your situation helps me give more relevant guidance. What business challenge or project are you exploring?",
    ];

  return pickVariant(pool, seed, turn);
}

/** Whether the conversation has enough depth to recommend a consultation. */
export function shouldOfferConsultation(session: SessionContext): boolean {
  return session.contextRichness >= 4 && session.userMessageCount >= 3;
}

/** Summarize gathered context and recommend next step. */
export function composeConsultationNudge(
  session: SessionContext,
  seed: string,
): string | null {
  if (!shouldOfferConsultation(session)) return null;

  const turn = session.userMessageCount;
  const focus = session.projectFocus[0]
    ? focusLabel(session.projectFocus[0])
    : "your initiative";
  const challenge = session.challenges[0];

  const templates = [
    challenge
      ? `From what you've shared about ${focus} and your ${challenge} challenges, a focused discovery call with our partners would help map scope, timeline, and the right approach.`
      : `Based on what you've outlined around ${focus}, a discovery call with our consulting team would help translate this into a clear roadmap and investment range.`,
    `You've given good context on ${focus}. The next step we'd typically recommend is a discovery session — our partners can assess fit, outline options, and identify the highest-impact path forward.`,
  ];

  return pickVariant(templates, `${seed}:nudge`, turn);
}

/** Filter follow-up questions that ask for information already provided. */
export function filterFollowUpQuestions(
  questions: string[],
  session: SessionContext,
): string[] {
  return questions.filter((q) => {
    const lower = q.toLowerCase();
    if (session.projectFocus.length && /what are you (building|planning)|what (type|kind) of/.test(lower)) {
      return false;
    }
    if (session.mentionedTimeline && /timeline|how long|when|deadline/.test(lower)) {
      return false;
    }
    if (session.mentionedBudget && /budget|cost|price|investment/.test(lower)) {
      return false;
    }
    if (session.businessHint && /type of business|industry|what business/.test(lower)) {
      return false;
    }
    if (session.projectStage !== "unknown" && /new or existing|starting something|from scratch/.test(lower)) {
      return false;
    }
    if (session.challenges.length && /biggest challenge|pain point|friction|problem/.test(lower)) {
      return false;
    }
    return true;
  });
}

/** Whether a follow-up topic was already discussed. */
export function isTopicAlreadyDiscussed(
  question: string,
  discussedTopics: string[],
): boolean {
  const lower = question.toLowerCase();
  return discussedTopics.some((t) => lower.includes(t));
}
