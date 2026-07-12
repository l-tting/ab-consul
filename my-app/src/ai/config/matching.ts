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

export const NO_MATCH_FALLBACK = `I want to make sure you get a useful answer — I may not have matched your question precisely, but I'm happy to help you find the right path.

AB Consul advises growth-stage businesses on custom software, MVPs, ERP systems, cloud infrastructure, and strategic consulting. Share a bit about your business and what you're trying to achieve, and I can give much more targeted guidance.

You can also reach us directly at contact@ab-consul.com, call +254 717568861, or visit ab-consul.com/contact to book a consultation.`;
