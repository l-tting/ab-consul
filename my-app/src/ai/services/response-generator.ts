import type { GeneratedResponse } from "../types/knowledge";
import type { SessionContext } from "../types/consultant";
import { buildSessionContext } from "./session-context";
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
  };
}

/** @deprecated Legacy formatter — kept for reference; chips replace bullet follow-ups. */
export function formatAnswer(answer: string): string {
  return answer;
}
