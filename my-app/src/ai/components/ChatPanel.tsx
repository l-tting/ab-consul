"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Maximize2, Minimize2, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useChat } from "../hooks/useChat";
import { ChatMessageList } from "./ChatMessageList";
import { ChatInput } from "./ChatInput";

interface ChatPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ChatPanel({ isOpen, onClose }: ChatPanelProps) {
  const { messages, isLoading, error, sendMessage, clearError } = useChat();
  const [isExpanded, setIsExpanded] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const handleClose = useCallback(() => {
    setIsExpanded(false);
    onClose();
  }, [onClose]);

  const toggleExpanded = useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, []);

  // Focus management: move focus into panel when opened
  useEffect(() => {
    if (isOpen) {
      closeButtonRef.current?.focus();
    }
  }, [isOpen]);

  // Reset expanded state when panel closes
  useEffect(() => {
    if (!isOpen) setIsExpanded(false);
  }, [isOpen]);

  // Close on Escape (restore size first if expanded)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (isExpanded) {
          setIsExpanded(false);
        } else {
          handleClose();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, isExpanded, handleClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop — mobile always; desktop when expanded */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-slate-900/20 backdrop-blur-[1px]",
          isExpanded ? "block" : "sm:hidden",
        )}
        aria-hidden="true"
        onClick={handleClose}
      />

      <div
        ref={panelRef}
        id="ab-consul-chat-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="ab-consul-chat-title"
        className={cn(
          "chat-panel-enter fixed z-[60] grid grid-rows-[auto_1fr_auto] overflow-hidden border border-stone-200 bg-stone-50 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.25)] transition-all duration-300 ease-out rounded-3xl",
          isExpanded
            ? "inset-3 bottom-20 sm:inset-4 sm:bottom-6 sm:right-6 sm:left-auto sm:top-6 sm:w-[min(680px,calc(100vw-2rem))] sm:max-w-3xl h-[calc(100dvh-5.5rem)] sm:h-[calc(100dvh-3rem)]"
            : "inset-x-3 bottom-20 top-auto h-[min(520px,calc(100dvh-10.5rem))] sm:inset-x-auto sm:bottom-24 sm:right-6 sm:h-[min(560px,calc(100dvh-12rem))] sm:w-[400px]",
        )}
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
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={toggleExpanded}
              aria-label={isExpanded ? "Restore chat window" : "Expand chat window"}
              aria-pressed={isExpanded}
              className="flex h-9 w-9 items-center justify-center rounded-xl text-slate-600 transition-colors hover:bg-stone-100 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              {isExpanded ? (
                <Minimize2 className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Maximize2 className="h-4 w-4" aria-hidden="true" />
              )}
            </button>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={handleClose}
              aria-label="Close chat"
              className="flex h-9 w-9 items-center justify-center rounded-xl text-slate-600 transition-colors hover:bg-stone-100 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="min-h-0 overflow-hidden">
          <ChatMessageList
            messages={messages}
            isLoading={isLoading}
            onSuggestionSelect={sendMessage}
          />
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
