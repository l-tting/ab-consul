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
      textareaRef.current.style.height = "auto";
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
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 120)}px`;
  };

  return (
    <div className="border-t border-stone-200 bg-white p-3 sm:p-4">
      <div className="flex items-end gap-2">
        <label htmlFor="ab-consul-chat-input" className="sr-only">
          Type your message
        </label>
        <textarea
          ref={textareaRef}
          id="ab-consul-chat-input"
          rows={1}
          disabled={disabled}
          maxLength={AI_CONFIG.maxMessageLength}
          placeholder="Ask about our services, process, or pricing…"
          onKeyDown={handleKeyDown}
          onInput={handleInput}
          className="max-h-[120px] min-h-[44px] flex-1 resize-none rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-600 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20 disabled:opacity-60"
        />
        <button
          type="button"
          onClick={handleSend}
          disabled={disabled}
          aria-label="Send message"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-950 text-white transition-colors hover:bg-blue-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Send className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
      <p className="mt-2 text-[10px] text-slate-500">
        Enter to send · Shift + Enter for new line
      </p>
    </div>
  );
}
