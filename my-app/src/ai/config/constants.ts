/** Shared configuration for the AB Consul Advisor. */

export const AI_CONFIG = {
  /** Client-side limits */
  maxMessageLength: 2000,
  maxConversationMessages: 30,
  /** Natural response delay after server reply (ms) */
  thinkingDelay: { min: 500, max: 800 },
  /** Server-side rate limit (per IP, rolling window) */
  rateLimit: {
    maxRequests: 20,
    windowMs: 60 * 60 * 1000, // 1 hour
  },
} as const;

export const WELCOME_MESSAGE =
  "Welcome to AB Consul. Tell me about the business challenge or project you're exploring — I'll help you think through the right approach.";

export const WELCOME_SUGGESTIONS = [
  "Building a New Product",
  "Scaling Operations",
  "Modernizing Systems",
  "Book a Discovery Call",
] as const;

export const WELCOME_PRIMARY_SUGGESTION = "Book a Discovery Call";

export const INPUT_PLACEHOLDER =
  "Describe what you're trying to build or solve…";

export const CTA_SUGGESTIONS = [
  "Book a Discovery Call",
  "Request a Proposal",
  "Talk to Our Team",
] as const;

export function isCtaSuggestion(label: string): boolean {
  return (CTA_SUGGESTIONS as readonly string[]).includes(label);
}

export const FALLBACK_MESSAGES = {
  rateLimited:
    "You've reached the message limit for now. Please try again later or contact us at contact@ab-consul.com.",
  generic:
    "Something went wrong. Please try again or contact us at contact@ab-consul.com.",
} as const;

/** Returns a natural thinking delay within configured bounds. */
export function getThinkingDelayMs(): number {
  const { min, max } = AI_CONFIG.thinkingDelay;
  return min + Math.floor(Math.random() * (max - min + 1));
}
