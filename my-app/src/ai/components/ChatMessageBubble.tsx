"use client";

import type { ChatMessage } from "../types/chat";
import { ChatSuggestionChips } from "./ChatSuggestionChips";

interface ChatMessageBubbleProps {
  message: ChatMessage;
  onSuggestionSelect?: (suggestion: string) => void;
  suggestionsDisabled?: boolean;
  animate?: boolean;
}

export function ChatMessageBubble({
  message,
  onSuggestionSelect,
  suggestionsDisabled = false,
  animate = false,
}: ChatMessageBubbleProps) {
  const isUser = message.role === "user";

  return (
    <div
      className={`flex ${isUser ? "justify-end" : "justify-start"} ${animate ? "chat-message-enter" : ""}`}
    >
      <div
        className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
          isUser
            ? "rounded-br-md bg-blue-950 text-white"
            : "rounded-bl-md border border-stone-200 bg-white text-slate-800"
        }`}
      >
        {!isUser && (
          <p className="mb-1 text-[10px] font-black uppercase tracking-[0.2em] text-blue-600">
            AB Consul
          </p>
        )}
        <p className="whitespace-pre-wrap break-words">{message.content}</p>
        {!isUser && message.suggestions?.length && onSuggestionSelect && (
          <ChatSuggestionChips
            suggestions={message.suggestions}
            primarySuggestion={message.primarySuggestion}
            onSelect={onSuggestionSelect}
            disabled={suggestionsDisabled}
          />
        )}
      </div>
    </div>
  );
}

interface ChatTypingIndicatorProps {
  visible: boolean;
}

export function ChatTypingIndicator({ visible }: ChatTypingIndicatorProps) {
  if (!visible) return null;

  return (
    <div
      className="chat-message-enter flex justify-start"
      role="status"
      aria-live="polite"
      aria-label="Advisor is responding"
    >
      <div className="rounded-2xl rounded-bl-md border border-stone-200 bg-white px-4 py-3 shadow-sm">
        <p className="mb-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-blue-600">
          AB Consul
        </p>
        <div className="flex items-center gap-1.5">
          <span className="chat-typing-dot h-2 w-2 rounded-full bg-slate-400" />
          <span className="chat-typing-dot animation-delay-200 h-2 w-2 rounded-full bg-slate-400" />
          <span className="chat-typing-dot animation-delay-400 h-2 w-2 rounded-full bg-slate-400" />
        </div>
      </div>
    </div>
  );
}
