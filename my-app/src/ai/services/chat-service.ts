import { FALLBACK_MESSAGES } from "../config/constants";
import type { ChatApiRequest, ChatApiResponse } from "../types/chat";
import { generateChatCompletion, OpenAIServiceError } from "./openai-service";
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
 * Orchestrates chat request handling — validation, AI call, response shaping.
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
    const assistantContent = await generateChatCompletion(messages);

    return {
      ok: true,
      data: {
        message: {
          role: "assistant",
          content: assistantContent,
        },
      },
    };
  } catch (error) {
    if (error instanceof OpenAIServiceError) {
      return {
        ok: false,
        error: error.message || FALLBACK_MESSAGES.unavailable,
        status: error.statusCode,
        code: "AI_SERVICE_ERROR",
      };
    }

    return {
      ok: false,
      error: FALLBACK_MESSAGES.generic,
      status: 500,
      code: "INTERNAL_ERROR",
    };
  }
}
