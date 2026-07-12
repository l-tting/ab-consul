"use client";

import { MessageCircle } from "lucide-react";

interface ChatFloatingButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

export function ChatFloatingButton({ onClick, isOpen }: ChatFloatingButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isOpen ? "Close AB Consul Advisor" : "Open AB Consul Advisor"}
      aria-expanded={isOpen}
      aria-controls="ab-consul-chat-panel"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-blue-950 text-white shadow-[0_8px_30px_rgba(15,23,42,0.35)] transition-all duration-300 hover:bg-blue-900 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-100 sm:bottom-6 sm:right-6"
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
    </button>
  );
}
