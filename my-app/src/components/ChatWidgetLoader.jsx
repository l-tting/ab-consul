"use client";

import dynamic from "next/dynamic";

/** Lazy-loaded chat widget — keeps AI bundle off the critical path. */
const ChatWidget = dynamic(() => import("@/ai/components/ChatWidget"), {
  ssr: false,
  loading: () => null,
});

export default function ChatWidgetLoader() {
  return <ChatWidget />;
}
