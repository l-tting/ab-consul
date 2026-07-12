"use client";

interface ChatSuggestionChipsProps {
  suggestions: string[];
  onSelect: (suggestion: string) => void;
  disabled?: boolean;
}

/**
 * Context-aware suggestion chips shown below assistant messages.
 */
export function ChatSuggestionChips({
  suggestions,
  onSelect,
  disabled = false,
}: ChatSuggestionChipsProps) {
  if (!suggestions.length) return null;

  return (
    <div
      className="mt-2 flex flex-wrap gap-1.5"
      role="group"
      aria-label="Suggested follow-up questions"
    >
      {suggestions.map((suggestion) => (
        <button
          key={suggestion}
          type="button"
          disabled={disabled}
          onClick={() => onSelect(suggestion)}
          className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {suggestion}
        </button>
      ))}
    </div>
  );
}
