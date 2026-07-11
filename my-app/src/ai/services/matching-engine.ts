import type { KnowledgeEntry, MatchResult } from "../types/knowledge";
import { normalizeText, tokenize } from "./normalization";

/** Minimum score required to return a match (tuned for keyword engine). */
const MIN_CONFIDENCE_SCORE = 5;

/**
 * Keyword-based matching engine.
 * Replace this module with semantic/RAG search without changing the UI or API route.
 */
export class MatchingEngine {
  scoreEntry(query: string, entry: KnowledgeEntry): MatchResult {
    const normalizedQuery = normalizeText(query);
    const queryTokens = new Set(tokenize(query));
    let score = 0;
    const matchedKeywords: string[] = [];

    for (const keyword of entry.keywords) {
      const normalizedKeyword = normalizeText(keyword);
      if (!normalizedKeyword) continue;

      // Full phrase contained in query — highest signal
      if (normalizedQuery.includes(normalizedKeyword)) {
        score += normalizedKeyword.length * 2.5;
        matchedKeywords.push(keyword);
        continue;
      }

      const keywordTokens = tokenize(keyword);
      if (keywordTokens.length === 0) continue;

      const matchedTokenCount = keywordTokens.filter((t) =>
        queryTokens.has(t),
      ).length;

      if (matchedTokenCount === keywordTokens.length) {
        score += keywordTokens.reduce((sum, t) => sum + t.length, 0) * 1.5;
        matchedKeywords.push(keyword);
      } else if (matchedTokenCount > 0) {
        score +=
          matchedTokenCount *
          (keywordTokens.reduce((sum, t) => sum + t.length, 0) /
            keywordTokens.length) *
          0.6;
      }
    }

    if (entry.priority) {
      score += entry.priority;
    }

    return { entry, score, matchedKeywords };
  }

  findBestMatch(
    query: string,
    entries: KnowledgeEntry[],
  ): MatchResult | null {
    const ranked = entries
      .map((entry) => this.scoreEntry(query, entry))
      .filter((result) => result.score >= MIN_CONFIDENCE_SCORE)
      .sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        // Prefer more comprehensive answers on ties
        return b.entry.answer.length - a.entry.answer.length;
      });

    return ranked[0] ?? null;
  }
}

/** Singleton engine instance — swap implementation via dependency injection later. */
export const matchingEngine = new MatchingEngine();
