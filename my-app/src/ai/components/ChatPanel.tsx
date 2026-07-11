"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { useChat } from "../hooks/useChat";
import { ChatMessageList } from "./ChatMessageList";
import { ChatInput } from "./ChatInput";

interface ChatPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ChatPanel({ isOpen, onClose }: ChatPanelProps) {
  const { messages, isLoading, error, sendMessage, clearError } = useChat();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Focus management: move focus into panel when opened
  useEffect(() => {
    if (isOpen) {
      closeButtonRef.current?.focus();
    }
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Mobile backdrop */}
      <div
        className="fixed inset-0 z-40 bg-slate-900/20 backdrop-blur-[1px] sm:hidden"
        aria-hidden="true"
        onClick={onClose}
      />

      <div
        ref={panelRef}
        id="ab-consul-chat-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="ab-consul-chat-title"
        className="chat-panel-enter fixed z-50 grid grid-rows-[auto_1fr_auto] overflow-hidden border border-stone-200 bg-stone-50 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.25)] inset-x-3 bottom-20 top-auto h-[min(520px,calc(100dvh-6rem))] rounded-3xl sm:inset-x-auto sm:bottom-24 sm:right-6 sm:h-[min(560px,calc(100dvh-8rem))] sm:w-[400px]"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-stone-200 bg-white px-4 py-3 sm:px-5">
          <div>
            <h2
              id="ab-consul-chat-title"
              className="text-sm font-bold tracking-tight text-slate-900"
            >
              AB Consul AI Advisor
            </h2>
            <p className="text-[11px] text-slate-600">
              Consulting · Services · Process
            </p>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close chat"
            className="flex h-9 w-9 items-center justify-center rounded-xl text-slate-600 transition-colors hover:bg-stone-100 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="min-h-0 overflow-hidden">
          <ChatMessageList messages={messages} isLoading={isLoading} />
        </div>

        {error && (
          <div
            role="alert"
            className="shrink-0 mx-4 mb-2 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700"
          >
            <div className="flex items-start justify-between gap-2">
              <span>{error}</span>
              <button
                type="button"
                onClick={clearError}
                className="shrink-0 font-semibold underline"
                aria-label="Dismiss error"
              >
                Dismiss
              </button>
            </div>
          </div>
        )}

        <ChatInput onSend={sendMessage} disabled={isLoading} />
      </div>
    </>
  );
}
