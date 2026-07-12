import type { EnrichedKnowledgeEntry, MatchResult } from "../types/knowledge";
import type { SessionContext } from "../types/consultant";
import {
  composeConsultationNudge,
  composeDiscoveryProbe,
  filterFollowUpQuestions,
  isTopicAlreadyDiscussed,
  shouldProbeFirst,
} from "./discovery-engine";
import { buildTopicChips } from "./suggestion-chips";
import {
  buildContextReference,
  prefersDirectAnswer,
} from "./session-context";
import {
  pickFollowUpQuestion,
  pickVariant,
} from "./response-variation";

export interface ComposedResponse {
  content: string;
  suggestions: string[];
  primarySuggestion?: string;
}

/**
 * Assembles a premium consultative reply:
 * acknowledge → explain (concise) → optional reason → one follow-up.
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

  // Discovery-first for vague questions lacking context
  if (shouldProbeFirst(entry.category, query, session)) {
    const probe = composeDiscoveryProbe(entry.category, session, seed);
    const chipSet = buildTopicChips(entry, session, alternates, seed, turn);
    return {
      content: probe,
      suggestions: chipSet.chips,
      primarySuggestion: chipSet.primary,
    };
  }

  const contextRef = buildContextReference(session);
  const acknowledgment = pickVariant(content.acknowledgments, seed, turn);
  const explanation = pickVariant(content.explanations, `${seed}:exp`, turn);

  const parts: string[] = [];

  if (contextRef) {
    parts.push(`${contextRef}${explanation.charAt(0).toLowerCase()}${explanation.slice(1)}`);
  } else {
    parts.push(acknowledgment, explanation);
  }

  // One concise reasoning line — not every turn
  if (content.reasoning.length && turn % 2 !== 0) {
    parts.push(pickVariant(content.reasoning, `${seed}:reason`, turn));
  }

  // Single follow-up — never repeat known info
  const direct = prefersDirectAnswer(query, entry.category);
  if (!direct) {
    const eligible = filterFollowUpQuestions(
      content.followUpQuestions,
      session,
    ).filter((q) => !isTopicAlreadyDiscussed(q, session.discussedTopics));

    const followUp = pickFollowUpQuestion(
      eligible,
      session.discussedTopics,
      `${seed}:fu`,
      turn,
    );
    if (followUp) parts.push(followUp);
  }

  // Consultation nudge when enough context gathered
  const nudge = composeConsultationNudge(session, seed);
  if (nudge) parts.push(nudge);

  const chipSet = buildTopicChips(entry, session, alternates, seed, turn);

  return {
    content: parts.join("\n\n"),
    suggestions: chipSet.chips,
    primarySuggestion: chipSet.primary,
  };
}

/** Confident redirect when more context is needed — never apologetic. */
export function composeFallbackResponse(session: SessionContext): ComposedResponse {
  const turn = session.userMessageCount;
  const seed = `fallback:${turn}`;

  const intros = [
    "To give you the most relevant guidance, tell me a bit more about your situation.",
    "Let me understand your context better so I can point you in the right direction.",
    "A few details about your business will help me tailor this properly.",
  ];

  const bodies = [
    "AB Consul partners with growth-stage companies on custom software, operational platforms, and strategic technology consulting — always anchored in business outcomes.",
    "We help businesses solve problems through software: MVPs, ERP systems, platform modernization, and integrations that reduce operational friction.",
  ];

  const followUps = session.projectFocus.length
    ? [
        "What's the timeline you're working toward?",
        "Are there specific constraints — budget, team size, or existing systems — I should factor in?",
      ]
    : [
        "What business challenge or project are you exploring?",
        "Are you building something new, or improving systems you already have?",
      ];

  const content = [
    pickVariant(intros, seed, turn),
    pickVariant(bodies, `${seed}:body`, turn),
    pickVariant(followUps, `${seed}:fu`, turn),
  ].join("\n\n");

  const chipSet = buildTopicChips(null, { ...session, activeTopic: "general" }, [], seed, turn);

  return {
    content,
    suggestions: chipSet.chips.length
      ? chipSet.chips
      : ["Building a New Product", "How We Work", "Book a Discovery Call"],
    primarySuggestion: chipSet.primary,
  };
}

/** Concise welcome — consultant tone, no AI self-introduction. */
export function composeWelcomeResponse(): ComposedResponse {
  return {
    content:
      "Welcome to AB Consul. Tell me about the business challenge or project you're exploring — I'll help you think through the right approach.",
    suggestions: [
      "Building a New Product",
      "Scaling Operations",
      "Modernizing Systems",
      "Book a Discovery Call",
    ],
    primarySuggestion: "Book a Discovery Call",
  };
}
