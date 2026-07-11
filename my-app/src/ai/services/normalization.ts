/**
 * Text normalization utilities for the matching engine.
 * Shared by keyword scoring and future semantic-search adapters.
 */

/** Lowercase, trim, strip punctuation, collapse whitespace. */
export function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Tokenize normalized text into words (min length 2). */
export function tokenize(text: string): string[] {
  return normalizeText(text)
    .split(" ")
    .filter((word) => word.length >= 2);
}
