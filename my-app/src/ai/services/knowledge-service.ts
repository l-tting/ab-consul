import type { ChatApiRequest } from "../types/chat";
import type { GeneratedResponse } from "../types/knowledge";
import { buildSessionContext } from "./session-context";
import { generateKnowledgeResponse } from "./response-generator";

/**
 * Knowledge assistant service — the response generation layer.
 * Replace the body of this service with an LLM/RAG call in the future;
 * the API route and frontend remain unchanged.
 */
export function generateAssistantResponse(
  messages: ChatApiRequest["messages"],
): GeneratedResponse {
  const session = buildSessionContext(messages);

  const lastUserMessage = [...messages]
    .reverse()
    .find((message) => message.role === "user");

  const query = lastUserMessage?.content ?? "";
  return generateKnowledgeResponse(query, session);
}
