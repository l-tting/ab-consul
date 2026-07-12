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

export const NO_MATCH_FALLBACK = `Thank you for your question. I specialize in AB Consul's consulting services, technology capabilities, pricing, and engagement process.

I wasn't quite able to match your question — could you try rephrasing it? For example, ask about our services, MVP development, pricing, process, or how to get started.

For tailored advice, contact us at contact@ab-consul.com, call +254 717568861, or visit ab-consul.com/contact to schedule a consultation.`;
