import type { EnrichedKnowledgeEntry, MatchResult } from "../types/knowledge";
import { getMatchSelector } from "./match-selector";
import { getEnrichedKnowledgeEntries } from "./knowledge-repository";

/**
 * Intelligent keyword matching engine with fuzzy tolerance and synonym support.
 * Replace this class with a semantic/RAG implementation without changing the API.
 */
export class MatchingEngine {
  findBestMatch(query: string): MatchResult | null {
    const entries = getEnrichedKnowledgeEntries();
    const selector = getMatchSelector(entries);
    const selection = selector.select(query);
    return selection?.primary ?? null;
  }

  findBestMatchWithAlternates(query: string): {
    primary: MatchResult;
    alternates: MatchResult[];
  } | null {
    const entries = getEnrichedKnowledgeEntries();
    const selector = getMatchSelector(entries);
    const selection = selector.select(query);
    if (!selection) return null;
    return selection;
  }
}

export const matchingEngine = new MatchingEngine();
