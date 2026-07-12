import type {
  EnrichedKnowledgeEntry,
  MatchResult,
  MatchType,
  ProcessedQuery,
} from "../types/knowledge";
import { MATCHING_CONFIG } from "../config/matching";
import { normalizeText, tokenize } from "./normalization";
import { queryContainsPhrase, tokenOverlap } from "./query-processor";
import { fuzzySimilarity } from "./fuzzy-matching";

const { weights } = MATCHING_CONFIG;

/** Score a single entry against a processed query. */
export function scoreEntry(
  query: ProcessedQuery,
  entry: EnrichedKnowledgeEntry,
): MatchResult {
  const expandedSet = new Set(query.expandedTokens);
  const queryTokenSet = new Set([...query.tokens, ...query.expandedTokens]);

  let rawScore = 0;
  let maxPossible = 0;
  const matchedTerms: string[] = [];
  const matchTypes = new Set<MatchType>();

  // Intent matching
  if (entry.intent) {
    const intentNorm = normalizeText(entry.intent);
    maxPossible += weights.intent * 2;
    if (queryContainsPhrase(query, intentNorm)) {
      rawScore += weights.intent * 2;
      matchedTerms.push(entry.intent);
      matchTypes.add("phrase");
    } else {
      const overlap = tokenOverlap(queryTokenSet, intentNorm);
      if (overlap.ratio >= 0.5) {
        rawScore += weights.intent * overlap.ratio;
        matchedTerms.push(...overlap.matched);
        matchTypes.add("partial");
      }
    }
  }

  for (const term of entry.searchTerms) {
    const termNorm = normalizeText(term.text);
    const termWeight = term.weight;
    const phraseWeight = weights.phrase * termWeight;
    const tokenWeight = weights.exactToken * termWeight;

    maxPossible += phraseWeight * 1.5;

    // Exact phrase match (highest confidence)
    if (queryContainsPhrase(query, termNorm)) {
      const isExact = query.variants.some((v) => v === termNorm);
      const points = (isExact ? weights.exactPhrase : phraseWeight) * termWeight;
      rawScore += points;
      matchedTerms.push(term.text);
      matchTypes.add(isExact ? "exact" : "phrase");
      continue;
    }

    const termTokens = tokenize(termNorm);
    if (!termTokens.length) continue;

    // Full token overlap
    const overlap = tokenOverlap(queryTokenSet, termNorm);
    if (overlap.ratio === 1) {
      rawScore += tokenWeight * termWeight;
      matchedTerms.push(term.text);
      matchTypes.add(term.source === "synonym" ? "synonym" : "token");
      continue;
    }

    if (overlap.ratio >= 0.5) {
      rawScore += weights.partial * overlap.ratio * termWeight;
      matchedTerms.push(...overlap.matched);
      matchTypes.add("partial");
    }

    // Fuzzy token matching for remaining term tokens
    for (const termToken of termTokens) {
      if (queryTokenSet.has(termToken)) continue;

      let bestFuzzy = 0;
      for (const queryToken of query.expandedTokens) {
        const sim = fuzzySimilarity(queryToken, termToken);
        if (sim > bestFuzzy) bestFuzzy = sim;
      }

      if (bestFuzzy >= 0.75) {
        rawScore += weights.fuzzy * bestFuzzy * termWeight;
        matchedTerms.push(term.text);
        matchTypes.add("fuzzy");
      }
    }
  }

  if (entry.priority) {
    rawScore += entry.priority * 0.5;
    maxPossible += entry.priority * 0.5;
  }

  const confidence =
    maxPossible > 0
      ? Math.min(1, rawScore / Math.max(maxPossible * 0.35, 8))
      : 0;

  return {
    entry,
    score: rawScore,
    confidence,
    matchedTerms: [...new Set(matchedTerms)],
    matchTypes: [...matchTypes],
  };
}

/** Score all entries and return sorted results. */
export function scoreAllEntries(
  query: ProcessedQuery,
  entries: EnrichedKnowledgeEntry[],
): MatchResult[] {
  return entries
    .map((entry) => scoreEntry(query, entry))
    .filter((r) => r.score > 0)
    .sort((a, b) => {
      if (Math.abs(b.confidence - a.confidence) > 0.001) {
        return b.confidence - a.confidence;
      }
      if (b.score !== a.score) return b.score - a.score;
      return b.entry.answer.length - a.entry.answer.length;
    });
}
