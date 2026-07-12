import { FALLBACK_MESSAGES } from "../config/constants";
import type { ChatApiRequest, ChatApiResponse } from "../types/chat";
import { generateAssistantResponse } from "./knowledge-service";
import { validateChatRequest } from "../validation/chat-request";

export interface ChatServiceResult {
  ok: true;
  data: ChatApiResponse;
}

export interface ChatServiceError {
  ok: false;
  error: string;
  status: number;
  code?: string;
}

export type ChatServiceResponse = ChatServiceResult | ChatServiceError;

/**
 * Orchestrates chat request handling — validation, knowledge matching, response shaping.
 * Extend here for logging, analytics, CRM hooks, and conversation persistence.
 */
export async function handleChatRequest(
  body: unknown,
): Promise<ChatServiceResponse> {
  const validation = validateChatRequest(body);

  if (!validation.success) {
    return {
      ok: false,
      error: validation.error,
      status: 400,
      code: "VALIDATION_ERROR",
    };
  }

  const { messages } = validation.data as ChatApiRequest;

  try {
    const result = generateAssistantResponse(messages);

    return {
      ok: true,
      data: {
        message: {
          role: "assistant",
          content: result.content,
        },
        suggestions: result.suggestions,
      },
    };
  } catch {
    return {
      ok: false,
      error: FALLBACK_MESSAGES.generic,
      status: 500,
      code: "INTERNAL_ERROR",
    };
  }
}
