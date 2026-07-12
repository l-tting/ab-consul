import type { GeneratedResponse } from "../types/knowledge";
import type { SessionContext } from "../types/consultant";
import { matchingEngine } from "./matching-engine";
import {
  composeConsultantResponse,
  composeFallbackResponse,
} from "./response-composer";

/**
 * Generates a consultative assistant response from conversation history.
 * Swap point for a future LLM or RAG pipeline.
 */
export function generateKnowledgeResponse(
  query: string,
  session: SessionContext,
): GeneratedResponse {
  const trimmed = query.trim();
  if (!trimmed) {
    const fallback = composeFallbackResponse(session);
    return {
      content: fallback.content,
      matched: false,
      confidence: 0,
      suggestions: fallback.suggestions,
      primarySuggestion: fallback.primarySuggestion,
    };
  }

  const result = matchingEngine.findBestMatchWithAlternates(trimmed, session);

  if (!result) {
    const fallback = composeFallbackResponse(session);
    return {
      content: fallback.content,
      matched: false,
      confidence: 0,
      suggestions: fallback.suggestions,
      primarySuggestion: fallback.primarySuggestion,
    };
  }

  const { primary, alternates } = result;
  const composed = composeConsultantResponse(
    primary.entry,
    trimmed,
    session,
    alternates,
  );

  return {
    content: composed.content,
    matched: true,
    entryId: primary.entry.id,
    category: primary.entry.category,
    confidence: primary.confidence,
    suggestions: composed.suggestions,
    primarySuggestion: composed.primarySuggestion,
  };
}
