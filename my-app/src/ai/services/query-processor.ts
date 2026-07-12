import type { EnrichedKnowledgeEntry, ProcessedQuery } from "../types/knowledge";
import {
  normalizeQuery,
  normalizeText,
  removeStopWords,
  tokenize,
} from "./normalization";
import { stemTokens } from "./stemming";
import {
  correctQueryTypos,
  correctTypos,
  expandPhraseSynonyms,
  expandTokenSynonyms,
} from "./synonym-expansion";
import { findFuzzyMatch } from "./fuzzy-matching";

/** Build vocabulary from all entry search terms for fuzzy correction. */
export function buildVocabulary(entries: EnrichedKnowledgeEntry[]): string[] {
  const vocab = new Set<string>();
  for (const entry of entries) {
    for (const term of entry.searchTerms) {
      tokenize(term.text).forEach((t) => vocab.add(t));
      vocab.add(term.text);
    }
  }
  return [...vocab];
}

/**
 * Process a raw user query into normalized, stemmed, and expanded forms.
 */
export function processQuery(
  raw: string,
  vocabulary: string[],
): ProcessedQuery {
  const normalized = normalizeQuery(raw);
  const typoCorrected = correctQueryTypos(normalized);
  const phraseVariants = expandPhraseSynonyms(typoCorrected);

  const baseTokens = removeStopWords(tokenize(typoCorrected));
  const stemmed = stemTokens(baseTokens);
  const typoFixed = correctTypos(stemmed);

  const expanded = new Set<string>();
  for (const token of typoFixed) {
    expanded.add(token);
    expandTokenSynonyms(token).forEach((s) => expanded.add(s));

    const fuzzy = findFuzzyMatch(token, vocabulary);
    if (fuzzy && fuzzy.similarity >= 0.75) {
      expanded.add(fuzzy.match);
      expandTokenSynonyms(fuzzy.match).forEach((s) => expanded.add(s));
    }
  }

  return {
    raw,
    normalized: typoCorrected,
    tokens: stemmed,
    expandedTokens: [...expanded],
    variants: [...new Set([normalized, typoCorrected, ...phraseVariants])],
  };
}

/** Check if any query variant contains a phrase. */
export function queryContainsPhrase(
  query: ProcessedQuery,
  phrase: string,
): boolean {
  const normalizedPhrase = normalizeText(phrase);
  return query.variants.some((v) => v.includes(normalizedPhrase));
}

/** Token overlap between query and term. */
export function tokenOverlap(
  queryTokens: Set<string>,
  termText: string,
): { matched: string[]; ratio: number } {
  const termTokens = tokenize(termText);
  if (!termTokens.length) return { matched: [], ratio: 0 };
  const matched = termTokens.filter((t) => queryTokens.has(t));
  return { matched, ratio: matched.length / termTokens.length };
}
