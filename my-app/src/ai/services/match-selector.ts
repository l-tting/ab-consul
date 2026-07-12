import type { EnrichedKnowledgeEntry, MatchResult, MatchSelection } from "../types/knowledge";
import type { SessionContext } from "../types/consultant";
import { MATCHING_CONFIG } from "../config/matching";
import { processQuery, buildVocabulary } from "./query-processor";
import { scoreAllEntries } from "./scoring";

/**
 * Selects the best match from scored results using confidence threshold
 * and tie-breaking rules.
 */
export class MatchSelector {
  private vocabulary: string[];

  constructor(private entries: EnrichedKnowledgeEntry[]) {
    this.vocabulary = buildVocabulary(entries);
  }

  select(query: string, session?: SessionContext): MatchSelection | null {
    const processed = processQuery(query, this.vocabulary);
    const ranked = scoreAllEntries(processed, this.entries, session);

    if (!ranked.length) return null;

    const primary = ranked[0]!;
    if (primary.confidence < MATCHING_CONFIG.minConfidence) return null;

    const alternates = ranked.slice(1).filter(
      (r) => r.confidence >= MATCHING_CONFIG.minConfidence &&
        r.confidence >= primary.confidence * MATCHING_CONFIG.tieRatio,
    );

    return { primary, alternates: alternates.slice(0, 2) };
  }
}

/** Factory — rebuild when knowledge base changes. */
let cachedSelector: MatchSelector | null = null;
let cachedEntryCount = 0;

export function getMatchSelector(
  entries: EnrichedKnowledgeEntry[],
): MatchSelector {
  if (!cachedSelector || cachedEntryCount !== entries.length) {
    cachedSelector = new MatchSelector(entries);
    cachedEntryCount = entries.length;
  }
  return cachedSelector;
}

/** Pick a related follow-up suggestion from alternate matches. */
export function pickAlternateSuggestion(
  primary: MatchResult,
  alternates: MatchResult[],
): string | undefined {
  if (!alternates.length) return undefined;

  const runnerUp = alternates[0]!;
  if (runnerUp.entry.id === primary.entry.id) return undefined;

  const followUp = runnerUp.entry.followUps?.[0];
  if (followUp && !primary.entry.followUps?.includes(followUp)) {
    return followUp;
  }

  if (runnerUp.entry.intent) {
    return `Tell me about ${runnerUp.entry.intent}`;
  }

  return undefined;
}
