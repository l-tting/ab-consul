"use client";

interface ChatSuggestionChipsProps {
  suggestions: string[];
  primarySuggestion?: string;
  onSelect: (suggestion: string) => void;
  disabled?: boolean;
}

/**
 * Context-aware suggestion chips shown below assistant messages.
 */
export function ChatSuggestionChips({
  suggestions,
  primarySuggestion,
  onSelect,
  disabled = false,
}: ChatSuggestionChipsProps) {
  if (!suggestions.length) return null;

  return (
    <div
      className="mt-3 flex flex-wrap gap-1.5"
      role="group"
      aria-label="Suggested next steps"
    >
      {suggestions.map((suggestion) => {
        const isPrimary = suggestion === primarySuggestion;

        return (
          <button
            key={suggestion}
            type="button"
            disabled={disabled}
            onClick={() => onSelect(suggestion)}
            className={
              isPrimary
                ? "rounded-full bg-[#172554] px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-blue-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                : "rounded-full border border-stone-200 bg-stone-50 px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 disabled:cursor-not-allowed disabled:opacity-50"
            }
          >
            {suggestion}
          </button>
        );
      })}
    </div>
  );
}
