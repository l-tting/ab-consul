/** Configurable matching engine thresholds and weights. */
export const MATCHING_CONFIG = {
  /** Minimum normalized confidence (0–1) to return an answer. */
  minConfidence: 0.28,
  /** If runner-up is within this ratio of the winner, it may influence suggestions. */
  tieRatio: 0.88,
  /** Max Levenshtein distance by token length for fuzzy matching. */
  fuzzyDistance: {
    short: { maxLen: 4, distance: 1 },
    medium: { maxLen: 7, distance: 2 },
    long: { distance: 2 },
  },
  /** Score weights by match type. */
  weights: {
    exactPhrase: 12,
    phrase: 8,
    exactToken: 5,
    synonym: 4,
    fuzzy: 3,
    partial: 1.5,
    intent: 6,
  },
} as const;

export const NO_MATCH_FALLBACK = `To give you the most relevant guidance, tell me a bit more about your situation.

AB Consul partners with growth-stage companies on custom software, operational platforms, and strategic technology consulting — always anchored in business outcomes.

What business challenge or project are you exploring?`;
