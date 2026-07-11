import { AI_CONFIG } from "../config/constants";

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

/** In-memory rate limiter — replace with Redis/KV for multi-instance production. */
const store = new Map<string, RateLimitEntry>();

export interface RateLimitResult {
  success: boolean;
  remaining: number;
  resetAt: number;
}

export function checkRateLimit(identifier: string): RateLimitResult {
  const now = Date.now();
  const { maxRequests, windowMs } = AI_CONFIG.rateLimit;

  const entry = store.get(identifier);

  if (!entry || now >= entry.resetAt) {
    const resetAt = now + windowMs;
    store.set(identifier, { count: 1, resetAt });
    return { success: true, remaining: maxRequests - 1, resetAt };
  }

  if (entry.count >= maxRequests) {
    return { success: false, remaining: 0, resetAt: entry.resetAt };
  }

  entry.count += 1;
  store.set(identifier, entry);
  return {
    success: true,
    remaining: maxRequests - entry.count,
    resetAt: entry.resetAt,
  };
}

/** Resolve client IP from common proxy headers. */
export function getClientIdentifier(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() ?? "unknown";
  }
  return request.headers.get("x-real-ip") ?? "unknown";
}
