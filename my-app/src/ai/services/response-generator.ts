import type { GeneratedResponse } from "../types/knowledge";
import { NO_MATCH_FALLBACK } from "../config/matching";
import { matchingEngine } from "./matching-engine";
import { pickAlternateSuggestion } from "./match-selector";

/**
 * Formats a knowledge entry into a chat response with optional follow-ups.
 */
export function formatAnswer(
  answer: string,
  followUps?: string[],
  extraSuggestion?: string,
): string {
  const suggestions = [...(followUps ?? [])];
  if (extraSuggestion && !suggestions.includes(extraSuggestion)) {
    suggestions.push(extraSuggestion);
  }

  if (!suggestions.length) return answer;

  const limited = suggestions.slice(0, 3);
  const list = limited.map((q) => `• ${q}`).join("\n");
  return `${answer}\n\nYou might also ask:\n${list}`;
}

/**
 * Generates an assistant response from the user's latest message.
 * Swap point for a future LLM or RAG pipeline.
 */
export function generateKnowledgeResponse(query: string): GeneratedResponse {
  const trimmed = query.trim();
  if (!trimmed) {
    return { content: NO_MATCH_FALLBACK, matched: false, confidence: 0 };
  }

  const result = matchingEngine.findBestMatchWithAlternates(trimmed);

  if (!result) {
    return { content: NO_MATCH_FALLBACK, matched: false, confidence: 0 };
  }

  const { primary, alternates } = result;
  const extraSuggestion = pickAlternateSuggestion(primary, alternates);

  return {
    content: formatAnswer(
      primary.entry.answer,
      primary.entry.followUps,
      extraSuggestion,
    ),
    matched: true,
    entryId: primary.entry.id,
    category: primary.entry.category,
    confidence: primary.confidence,
  };
}
