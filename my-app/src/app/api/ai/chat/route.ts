import { handleChatRequest } from "@/ai/services/chat-service";
import {
  checkRateLimit,
  getClientIdentifier,
} from "@/ai/services/rate-limiter";
import { FALLBACK_MESSAGES } from "@/ai/config/constants";

export const runtime = "nodejs";

/**
 * POST /api/ai/chat
 * Dedicated AI endpoint — routes to the local knowledge assistant (no external LLM).
 */
export async function POST(request: Request) {
  const clientId = getClientIdentifier(request);
  const rateLimit = checkRateLimit(clientId);

  if (!rateLimit.success) {
    return Response.json(
      { error: FALLBACK_MESSAGES.rateLimited, code: "RATE_LIMITED" },
      {
        status: 429,
        headers: {
          "Retry-After": String(
            Math.ceil((rateLimit.resetAt - Date.now()) / 1000),
          ),
        },
      },
    );
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return Response.json(
      { error: "Invalid JSON body.", code: "INVALID_JSON" },
      { status: 400 },
    );
  }

  const result = await handleChatRequest(body);

  if (!result.ok) {
    return Response.json(
      { error: result.error, code: result.code },
      { status: result.status },
    );
  }

  return Response.json(result.data, { status: 200 });
}
