import type { EnrichedKnowledgeEntry, MatchResult } from "../types/knowledge";
import type { SessionContext } from "../types/consultant";
import { pickContextualHook } from "../data/consultant-content";
import {
  focusLabel,
  prefersDirectAnswer,
} from "./session-context";
import {
  pickFollowUpQuestion,
  pickVariant,
} from "./response-variation";

export interface ComposedResponse {
  content: string;
  suggestions: string[];
}

/**
 * Assembles a consultative reply: acknowledge → explain → reason → (context) → follow-up.
 */
export function composeConsultantResponse(
  entry: EnrichedKnowledgeEntry,
  query: string,
  session: SessionContext,
  alternates: MatchResult[] = [],
): ComposedResponse {
  const content = entry.consultant;
  const seed = `${entry.id}:${query}`;
  const turn = session.userMessageCount;

  const hook = pickContextualHook(
    content.contextualHooks,
    session.projectFocus,
  );

  let acknowledgment = pickVariant(content.acknowledgments, seed, turn);
  if (hook && session.projectFocus.length) {
    acknowledgment = `${hook}${acknowledgment.charAt(0).toLowerCase()}${acknowledgment.slice(1)}`;
  }

  const explanation = pickVariant(content.explanations, `${seed}:exp`, turn);
  const reasoning = pickVariant(content.reasoning, `${seed}:reason`, turn);

  const parts: string[] = [acknowledgment, explanation, reasoning];

  // Reference prior session context naturally
  if (session.projectFocus.length && !hook) {
    const focusRef = session.projectFocus
      .slice(0, 2)
      .map((f) => focusLabel(f))
      .join(" and ");
    parts.push(
      `Given you're exploring ${focusRef}, this is especially relevant to getting scope and architecture right early.`,
    );
  }

  // Occasionally add business context or example for depth
  if (content.businessContext?.length && turn % 2 === 0) {
    parts.push(
      pickVariant(content.businessContext, `${seed}:ctx`, turn),
    );
  } else if (content.examples?.length && turn % 3 === 0) {
    parts.push(pickVariant(content.examples, `${seed}:ex`, turn));
  }

  if (content.considerations?.length && turn % 4 === 0) {
    parts.push(
      pickVariant(content.considerations, `${seed}:con`, turn),
    );
  }

  const direct = prefersDirectAnswer(query, entry.category);
  if (!direct) {
    const followUp = pickFollowUpQuestion(
      content.followUpQuestions,
      session.discussedTopics,
      `${seed}:fu`,
      turn,
    );
    if (followUp) {
      parts.push(followUp);
    }
  }

  const suggestions = buildSuggestionChips(
    content.suggestionChips,
    entry,
    session,
    alternates,
    seed,
    turn,
  );

  return {
    content: parts.join("\n\n"),
    suggestions,
  };
}

/** Build context-aware suggestion chips — deduplicated and capped. */
function buildSuggestionChips(
  baseChips: string[],
  entry: EnrichedKnowledgeEntry,
  session: SessionContext,
  alternates: MatchResult[],
  seed: string,
  turn: number,
): string[] {
  const chips: string[] = [];

  // Context-driven chips
  if (session.projectFocus.includes("mvp") && !baseChips.some((c) => /mvp/i.test(c))) {
    chips.push("MVP Timeline", "MVP Pricing");
  }
  if (session.projectFocus.includes("erp") && !baseChips.some((c) => /erp/i.test(c))) {
    chips.push("ERP Integration", "Legacy Migration");
  }
  if (session.mentionedBudget && !baseChips.some((c) => /pric/i.test(c))) {
    chips.push("Pricing Approach");
  }
  if (session.mentionedTimeline && !baseChips.some((c) => /timeline/i.test(c))) {
    chips.push("Project Timeline");
  }

  chips.push(...baseChips);

  // Alternate match intents as chips
  for (const alt of alternates.slice(0, 2)) {
    if (alt.entry.id === entry.id) continue;
    const chip = alt.entry.intent
      ? capitalizeIntent(alt.entry.intent)
      : alt.entry.followUps?.[0];
    if (chip && !chips.includes(chip)) chips.push(chip);
  }

  // Rotate order slightly for variation
  if (!chips.length) {
    return [
      "Book a Consultation",
      "How Our Process Works",
      "Pricing Approach",
      "What Services Do You Offer?",
    ];
  }

  const offset = pickVariant(
    Array.from({ length: Math.min(chips.length, 5) }, (_, i) => i),
    seed,
    turn,
  );

  const rotated = [...chips.slice(offset), ...chips.slice(0, offset)];

  return [...new Set(rotated)].slice(0, 5);
}

function capitalizeIntent(intent: string): string {
  return intent
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

/** Consultative fallback when no knowledge match is found. */
export function composeFallbackResponse(session: SessionContext): ComposedResponse {
  const turn = session.userMessageCount;

  const intros = [
    "I want to make sure you get a useful answer — I may not have matched your question precisely.",
    "That's a bit outside what I can pinpoint automatically, but I'm happy to help you find the right path.",
    "Let me try a different angle — I didn't find an exact match, but we can still move the conversation forward.",
  ];

  const bodies = [
    "AB Consul advises growth-stage businesses on custom software, MVPs, ERP systems, cloud infrastructure, and strategic consulting. If you share a bit about your business and what you're trying to achieve, I can give much more targeted guidance.",
    "Our team works as senior consultants — not a generic FAQ. Tell me about your project, timeline, or biggest operational challenge and I'll connect the dots to how we typically help.",
  ];

  const followUps = [
    "What are you building or trying to improve in your business?",
    "Are you at the idea stage, building an MVP, or scaling an existing platform?",
    "Would you like to explore pricing, our process, or book a consultation?",
  ];

  const seed = `fallback:${turn}`;
  const content = [
    pickVariant(intros, seed, turn),
    pickVariant(bodies, `${seed}:body`, turn),
    pickVariant(followUps, `${seed}:fu`, turn),
  ].join("\n\n");

  const suggestions = [
    "What Services Do You Offer?",
    "Estimate an MVP",
    "Pricing Approach",
    "Book a Consultation",
    "How Our Process Works",
  ];

  return { content, suggestions };
}

/** Welcome message with initial suggestion chips. */
export function composeWelcomeResponse(): ComposedResponse {
  return {
    content:
      "Hello — I'm the AB Consul Advisor. Think of this as an initial conversation with our consulting team: I can help you explore services, timelines, pricing philosophy, and how we work with growth-stage businesses.\n\nWhat brings you here today — a new product idea, scaling an existing platform, or solving an operational challenge?",
    suggestions: [
      "What Services Do You Offer?",
      "Estimate an MVP",
      "ERP Capabilities",
      "Pricing Approach",
      "Book a Consultation",
    ],
  };
}
