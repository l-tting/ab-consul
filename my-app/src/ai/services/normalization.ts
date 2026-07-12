/** English stop words removed during query processing (not from entry terms). */
const STOP_WORDS = new Set([
  "a", "an", "the", "is", "are", "was", "were", "be", "been", "being",
  "have", "has", "had", "do", "does", "did", "will", "would", "could",
  "should", "may", "might", "shall", "can", "to", "of", "in", "for",
  "on", "with", "at", "by", "from", "as", "into", "through", "about",
  "what", "which", "who", "whom", "whose", "when", "where", "why", "how",
  "i", "me", "my", "we", "our", "you", "your", "they", "them", "their",
  "it", "its", "this", "that", "these", "those", "am", "or", "and", "but",
  "if", "then", "so", "than", "too", "very", "just", "also", "only",
  "tell", "please", "want", "know", "need", "like", "get", "give",
]);

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

/** Remove common stop words from token list. */
export function removeStopWords(tokens: string[]): string[] {
  return tokens.filter((token) => !STOP_WORDS.has(token));
}

/** Normalize query string for matching. */
export function normalizeQuery(raw: string): string {
  return normalizeText(raw);
}
