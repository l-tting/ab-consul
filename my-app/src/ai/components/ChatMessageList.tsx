"use client";

import { useEffect, useRef } from "react";
import type { ChatMessage } from "../types/chat";
import { ChatMessageBubble, ChatTypingIndicator } from "./ChatMessageBubble";

interface ChatMessageListProps {
  messages: ChatMessage[];
  isLoading: boolean;
}

export function ChatMessageList({ messages, isLoading }: ChatMessageListProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  return (
    <div
      className="h-full min-h-0 overflow-y-auto px-4 py-4"
      role="log"
      aria-live="polite"
      aria-relevant="additions"
      aria-label="Chat messages"
    >
      <ul className="space-y-4 list-none m-0 p-0" role="list">
        {messages.map((message) => (
          <li key={message.id}>
            <ChatMessageBubble message={message} />
          </li>
        ))}
      </ul>
      <ChatTypingIndicator visible={isLoading} />
      <div ref={bottomRef} aria-hidden="true" />
    </div>
  );
}
