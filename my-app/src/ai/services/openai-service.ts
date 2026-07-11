import { AI_CONFIG, FALLBACK_MESSAGES } from "../config/constants";
import { buildSystemPrompt } from "../config/system-prompt";
import type { OpenAIMessage } from "../types/chat";

interface OpenAICompletionResponse {
  choices?: Array<{
    message?: { content?: string | null };
  }>;
  error?: { message?: string };
}

export class OpenAIServiceError extends Error {
  constructor(
    message: string,
    public readonly statusCode: number = 502,
  ) {
    super(message);
    this.name = "OpenAIServiceError";
  }
}

/**
 * Thin OpenAI chat completions client.
 * Isolated here so the provider can be swapped (Anthropic, Azure, etc.).
 */
export async function generateChatCompletion(
  messages: OpenAIMessage[],
): Promise<string> {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    throw new OpenAIServiceError("OpenAI API key is not configured.", 503);
  }

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: AI_CONFIG.model,
      messages: [{ role: "system", content: buildSystemPrompt() }, ...messages],
      max_tokens: AI_CONFIG.maxTokens,
      temperature: AI_CONFIG.temperature,
    }),
    signal: AbortSignal.timeout(30_000),
  });

  if (!response.ok) {
    const body = (await response.json().catch(() => ({}))) as OpenAICompletionResponse;
    const detail = body.error?.message ?? response.statusText;
    throw new OpenAIServiceError(
      detail || FALLBACK_MESSAGES.unavailable,
      response.status >= 500 ? 502 : 502,
    );
  }

  const data = (await response.json()) as OpenAICompletionResponse;
  const content = data.choices?.[0]?.message?.content?.trim();

  if (!content) {
    throw new OpenAIServiceError(FALLBACK_MESSAGES.unavailable);
  }

  return content;
}
