"use client";

import type { ChatMessage } from "../types/chat";

interface ChatMessageBubbleProps {
  message: ChatMessage;
}

export function ChatMessageBubble({ message }: ChatMessageBubbleProps) {
  const isUser = message.role === "user";

  return (
    <div
      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
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
            AB Consul AI
          </p>
        )}
        <p className="whitespace-pre-wrap break-words">{message.content}</p>
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
    <div className="flex justify-start" role="status" aria-live="polite" aria-label="AI is typing">
      <div className="rounded-2xl rounded-bl-md border border-stone-200 bg-white px-4 py-3 shadow-sm">
        <div className="flex items-center gap-1.5">
          <span className="chat-typing-dot h-2 w-2 rounded-full bg-slate-400" />
          <span className="chat-typing-dot animation-delay-200 h-2 w-2 rounded-full bg-slate-400" />
          <span className="chat-typing-dot animation-delay-400 h-2 w-2 rounded-full bg-slate-400" />
        </div>
      </div>
    </div>
  );
}
