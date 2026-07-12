"use client";

import { useCallback, useState } from "react";
import {
  AI_CONFIG,
  FALLBACK_MESSAGES,
  getThinkingDelayMs,
  INPUT_PLACEHOLDER,
  WELCOME_MESSAGE,
  WELCOME_PRIMARY_SUGGESTION,
  WELCOME_SUGGESTIONS,
} from "../config/constants";
import type { ChatApiResponse, ChatMessage, ChatMessageRole } from "../types/chat";

function createMessage(
  role: ChatMessageRole,
  content: string,
  suggestions?: string[],
  primarySuggestion?: string,
): ChatMessage {
  return {
    id: `${role}-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
    role,
    content,
    createdAt: Date.now(),
    suggestions,
    primarySuggestion,
  };
}

export interface UseChatReturn {
  messages: ChatMessage[];
  isLoading: boolean;
  error: string | null;
  sendMessage: (content: string) => Promise<void>;
  clearError: () => void;
}

/**
 * Client-side chat state hook.
 * Future: plug in persistence, session IDs, and streaming here.
 */
export function useChat(): UseChatReturn {
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    createMessage(
      "assistant",
      WELCOME_MESSAGE,
      [...WELCOME_SUGGESTIONS],
      WELCOME_PRIMARY_SUGGESTION,
    ),
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = useCallback(async (rawContent: string) => {
    const content = rawContent.trim();

    if (!content || isLoading) return;

    if (content.length > AI_CONFIG.maxMessageLength) {
      setError(
        `Message is too long. Please keep it under ${AI_CONFIG.maxMessageLength} characters.`,
      );
      return;
    }

    const userMessage = createMessage("user", content);
    const nextMessages = [...messages, userMessage];

    setMessages(nextMessages);
    setIsLoading(true);
    setError(null);

    try {
      const payload = nextMessages
        .filter((m) => m.role === "user" || m.role === "assistant")
        .map(({ role, content: text }) => ({ role, content: text }));

      const [response] = await Promise.all([
        fetch("/api/ai/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: payload }),
        }),
        new Promise((resolve) => setTimeout(resolve, getThinkingDelayMs())),
      ]);

      const data = (await response.json()) as ChatApiResponse & {
        error?: string;
      };

      if (!response.ok) {
        throw new Error(data.error ?? FALLBACK_MESSAGES.generic);
      }

      if (!data.message?.content) {
        throw new Error(FALLBACK_MESSAGES.generic);
      }

      setMessages((prev) => [
        ...prev,
        createMessage(
          "assistant",
          data.message.content,
          data.suggestions,
          data.primarySuggestion,
        ),
      ]);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : FALLBACK_MESSAGES.generic;
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, messages]);

  const clearError = useCallback(() => setError(null), []);

  return { messages, isLoading, error, sendMessage, clearError };
}
