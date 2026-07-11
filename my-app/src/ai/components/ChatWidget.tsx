"use client";

import { useCallback, useState } from "react";
import { ChatFloatingButton } from "./ChatFloatingButton";
import { ChatPanel } from "./ChatPanel";

/**
 * Root chat widget — compose button + panel here.
 * Loaded lazily from layout to preserve initial page performance.
 */
export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      <ChatPanel isOpen={isOpen} onClose={close} />
      <ChatFloatingButton onClick={toggle} isOpen={isOpen} />
    </>
  );
}
