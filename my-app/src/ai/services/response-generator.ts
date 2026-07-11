import type { GeneratedResponse } from "../types/knowledge";
import { matchingEngine } from "./matching-engine";
import { getAllKnowledgeEntries } from "./knowledge-repository";

const NO_MATCH_FALLBACK = `Thank you for your question. I specialize in AB Consul's consulting services, technology capabilities, and engagement process.

For questions outside this scope, or for tailored advice on your specific situation, our team would be happy to help directly.

Contact us at contact@ab-consul.com, call +254 717568861, or visit ab-consul.com/contact to schedule a strategy consultation.`;

/**
 * Formats a knowledge entry into a chat response with optional follow-ups.
 */
export function formatAnswer(
  answer: string,
  followUps?: string[],
): string {
  if (!followUps?.length) return answer;

  const suggestions = followUps.map((q) => `• ${q}`).join("\n");
  return `${answer}\n\nYou might also ask:\n${suggestions}`;
}

/**
 * Generates an assistant response from the user's latest message.
 * This is the single swap point for a future LLM or RAG pipeline.
 */
export function generateKnowledgeResponse(query: string): GeneratedResponse {
  const trimmed = query.trim();
  if (!trimmed) {
    return {
      content: NO_MATCH_FALLBACK,
      matched: false,
      confidence: 0,
    };
  }

  const entries = getAllKnowledgeEntries();
  const match = matchingEngine.findBestMatch(trimmed, entries);

  if (!match) {
    return {
      content: NO_MATCH_FALLBACK,
      matched: false,
      confidence: 0,
    };
  }

  return {
    content: formatAnswer(match.entry.answer, match.entry.followUps),
    matched: true,
    entryId: match.entry.id,
    category: match.entry.category,
    confidence: match.score,
  };
}
