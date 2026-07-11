"use client";

import { useCallback, useRef, type KeyboardEvent } from "react";
import { Send } from "lucide-react";
import { AI_CONFIG } from "../config/constants";

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled: boolean;
}

export function ChatInput({ onSend, disabled }: ChatInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = useCallback(() => {
    const value = textareaRef.current?.value ?? "";
    if (!value.trim() || disabled) return;

    onSend(value);
    if (textareaRef.current) {
      textareaRef.current.value = "";
      textareaRef.current.style.height = "40px";
    }
  }, [disabled, onSend]);

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };

  const handleInput = () => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "40px";
    el.style.height = `${Math.min(el.scrollHeight, 120)}px`;
  };

  return (
    <div className="shrink-0 border-t border-stone-200 bg-white px-3 py-2.5 sm:px-4 sm:py-3">
      <div className="flex items-center gap-2">
        <label htmlFor="ab-consul-chat-input" className="sr-only">
          Type your message
        </label>
        <textarea
          ref={textareaRef}
          id="ab-consul-chat-input"
          rows={1}
          disabled={disabled}
          maxLength={AI_CONFIG.maxMessageLength}
          placeholder="Ask about services, process, or pricing…"
          onKeyDown={handleKeyDown}
          onInput={handleInput}
          style={{ height: "40px" }}
          className="min-h-[40px] max-h-[120px] flex-1 resize-none overflow-hidden rounded-2xl border border-stone-200 bg-stone-50 px-3 py-2 text-sm leading-5 text-slate-900 placeholder:text-slate-600 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20 disabled:opacity-60"
        />
        <button
          type="button"
          onClick={handleSend}
          disabled={disabled}
          aria-label="Send message"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-blue-950 text-white transition-colors hover:bg-blue-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Send className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
      <p className="sr-only">Enter to send. Shift plus Enter for a new line.</p>
    </div>
  );
}
