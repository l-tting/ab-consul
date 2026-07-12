import { MATCHING_CONFIG } from "../config/matching";

/**
 * Damerau-Levenshtein distance — handles insertions, deletions,
 * substitutions, and adjacent transpositions (common typos).
 */
export function damerauLevenshtein(a: string, b: string): number {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;

  const lenA = a.length;
  const lenB = b.length;
  const maxDist = lenA + lenB;
  const da: Record<string, number> = {};

  const d: number[][] = Array.from({ length: lenA + 2 }, () =>
    Array(lenB + 2).fill(0),
  );

  d[0][0] = maxDist;
  for (let i = 0; i <= lenA; i++) {
    d[i + 1][0] = maxDist;
    d[i + 1][1] = i;
  }
  for (let j = 0; j <= lenB; j++) {
    d[0][j + 1] = maxDist;
    d[1][j + 1] = j;
  }

  for (let i = 1; i <= lenA; i++) {
    let db = 0;
    for (let j = 1; j <= lenB; j++) {
      const i1 = da[b[j - 1]!] ?? 0;
      const j1 = db;
      let cost = 1;
      if (a[i - 1] === b[j - 1]) {
        cost = 0;
        db = j;
      }
      d[i + 1]![j + 1]! = Math.min(
        d[i]![j + 1]! + 1,
        d[i + 1]![j]! + 1,
        d[i]![j]! + cost,
        d[i1]![j1]! + (i - i1 - 1) + 1 + (j - j1 - 1),
      );
    }
    da[a[i - 1]!] = i;
  }

  return d[lenA + 1]![lenB + 1]!;
}

/** Max allowed edit distance based on token length. */
export function maxFuzzyDistance(tokenLength: number): number {
  const { fuzzyDistance } = MATCHING_CONFIG;
  if (tokenLength <= fuzzyDistance.short.maxLen) return fuzzyDistance.short.distance;
  if (tokenLength <= fuzzyDistance.medium.maxLen) return fuzzyDistance.medium.distance;
  return fuzzyDistance.long.distance;
}

/** Similarity ratio 0–1 (1 = identical). */
export function fuzzySimilarity(a: string, b: string): number {
  if (a === b) return 1;
  const distance = damerauLevenshtein(a, b);
  const maxAllowed = maxFuzzyDistance(Math.max(a.length, b.length));
  if (distance > maxAllowed) return 0;
  return 1 - distance / Math.max(a.length, b.length, 1);
}

/** Find best fuzzy match for a token in a vocabulary list. */
export function findFuzzyMatch(
  token: string,
  vocabulary: string[],
): { match: string; similarity: number } | null {
  if (token.length < 2) return null;

  let best: { match: string; similarity: number } | null = null;

  for (const candidate of vocabulary) {
    if (candidate === token) return { match: candidate, similarity: 1 };
    const similarity = fuzzySimilarity(token, candidate);
    if (similarity > 0 && (!best || similarity > best.similarity)) {
      best = { match: candidate, similarity };
    }
  }

  return best;
}
