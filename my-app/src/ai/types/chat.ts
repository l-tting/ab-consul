/** Core chat domain types — extend here for persistence, auth, and CRM integration. */

export type ChatMessageRole = "user" | "assistant";

export interface ChatMessage {
  id: string;
  role: ChatMessageRole;
  content: string;
  createdAt: number;
}

/** Payload sent from the client to the chat API. */
export interface ChatApiRequest {
  messages: Array<{
    role: ChatMessageRole;
    content: string;
  }>;
}

/** Successful response from the chat API. */
export interface ChatApiResponse {
  message: {
    role: "assistant";
    content: string;
  };
}

/** Standardized API error shape. */
export interface ChatApiError {
  error: string;
  code?: string;
}

/** OpenAI-compatible message for the completion service. */
export interface OpenAIMessage {
  role: "system" | "user" | "assistant";
  content: string;
}
