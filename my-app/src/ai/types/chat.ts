/** Core chat domain types — extend here for persistence, auth, and CRM integration. */

export type ChatMessageRole = "user" | "assistant";

export interface ChatMessage {
  id: string;
  role: ChatMessageRole;
  content: string;
  createdAt: number;
  /** Context-aware suggestion chips for the latest assistant turn. */
  suggestions?: string[];
  /** Primary CTA chip label for prominent styling. */
  primarySuggestion?: string;
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
  /** Interactive suggestion chips shown below the assistant message. */
  suggestions?: string[];
  /** Highlighted primary CTA chip (e.g. Book a Discovery Call). */
  primarySuggestion?: string;
}

/** Standardized API error shape. */
export interface ChatApiError {
  error: string;
  code?: string;
}
