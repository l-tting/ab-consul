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
  "Hello — I'm the AB Consul AI Advisor. Think of this as an initial conversation with our consulting team: I can help you explore services, timelines, pricing philosophy, and how we work with growth-stage businesses.\n\nWhat brings you here today — a new product idea, scaling an existing platform, or solving an operational challenge?";

export const WELCOME_SUGGESTIONS = [
  "What Services Do You Offer?",
  "Estimate an MVP",
  "ERP Capabilities",
  "Pricing Approach",
  "Book a Consultation",
] as const;

export const FALLBACK_MESSAGES = {
  rateLimited:
    "You've reached the message limit for now. Please try again later or contact us at contact@ab-consul.com.",
  generic:
    "Something went wrong. Please try again or contact us at contact@ab-consul.com.",
} as const;
