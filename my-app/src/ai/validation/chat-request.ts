import { AI_CONFIG } from "../config/constants";
import type { ChatApiRequest, ChatMessageRole } from "../types/chat";

export interface ValidationResult {
  success: true;
  data: ChatApiRequest;
}

export interface ValidationError {
  success: false;
  error: string;
}

export type ValidationResponse = ValidationResult | ValidationError;

const VALID_ROLES: ChatMessageRole[] = ["user", "assistant"];

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

/**
 * Validates incoming chat API payloads.
 * Centralized so client and future SDKs share the same rules.
 */
export function validateChatRequest(body: unknown): ValidationResponse {
  if (!body || typeof body !== "object") {
    return { success: false, error: "Invalid request body." };
  }

  const { messages } = body as { messages?: unknown };

  if (!Array.isArray(messages) || messages.length === 0) {
    return { success: false, error: "Messages array is required." };
  }

  if (messages.length > AI_CONFIG.maxConversationMessages) {
    return {
      success: false,
      error: `Conversation exceeds ${AI_CONFIG.maxConversationMessages} messages.`,
    };
  }

  const sanitized: ChatApiRequest["messages"] = [];

  for (const msg of messages) {
    if (!msg || typeof msg !== "object") {
      return { success: false, error: "Each message must be an object." };
    }

    const { role, content } = msg as { role?: unknown; content?: unknown };

    if (!VALID_ROLES.includes(role as ChatMessageRole)) {
      return { success: false, error: "Invalid message role." };
    }

    if (!isNonEmptyString(content)) {
      return { success: false, error: "Message content cannot be empty." };
    }

    if (content.length > AI_CONFIG.maxMessageLength) {
      return {
        success: false,
        error: `Messages must be under ${AI_CONFIG.maxMessageLength} characters.`,
      };
    }

    sanitized.push({
      role: role as ChatMessageRole,
      content: content.trim(),
    });
  }

  const lastMessage = sanitized[sanitized.length - 1];
  if (lastMessage?.role !== "user") {
    return { success: false, error: "The last message must be from the user." };
  }

  return { success: true, data: { messages: sanitized } };
}
