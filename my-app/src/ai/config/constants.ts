/** Shared configuration for the AB Consul AI assistant. */

export const AI_CONFIG = {
  /** Client-side limits */
  maxMessageLength: 2000,
  maxConversationMessages: 30,
  /** Server-side rate limit (per IP, rolling window) */
  rateLimit: {
    maxRequests: 20,
    windowMs: 60 * 60 * 1000, // 1 hour
  },
} as const;

export const WELCOME_MESSAGE =
  "Hello! I'm the AB Consul AI Advisor. I can answer questions about our consulting services, technologies, project process, pricing, and how we can help your business. How can I assist you today?";

export const FALLBACK_MESSAGES = {
  rateLimited:
    "You've reached the message limit for now. Please try again later or contact us at contact@ab-consul.com.",
  generic:
    "Something went wrong. Please try again or contact us at contact@ab-consul.com.",
} as const;
