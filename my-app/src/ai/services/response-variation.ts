/**
 * Deterministic variation index — rotates templates without repeating
 * the same wording on consecutive similar questions.
 */
export function pickVariationIndex(
  seed: string,
  count: number,
  sessionTurn: number,
): number {
  if (count <= 1) return 0;
  let hash = sessionTurn * 31;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash + seed.charCodeAt(i) * (i + 1)) % 9973;
  }
  return Math.abs(hash) % count;
}

export function pickVariant<T>(variants: T[], seed: string, sessionTurn: number): T {
  const index = pickVariationIndex(seed, variants.length, sessionTurn);
  return variants[index]!;
}

/** Pick a follow-up question not recently used in the session. */
export function pickFollowUpQuestion(
  questions: string[],
  discussedTopics: string[],
  seed: string,
  sessionTurn: number,
): string | undefined {
  if (!questions.length) return undefined;

  const filtered = questions.filter((q) => {
    const lower = q.toLowerCase();
    return !discussedTopics.some((t) => lower.includes(t));
  });

  const pool = filtered.length ? filtered : questions;
  return pickVariant(pool, seed, sessionTurn);
}
