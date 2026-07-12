import type { KnowledgeEntry, SearchTerm } from "../types/knowledge";
import { buildConsultantContent } from "../data/consultant-content";
import {
  CATEGORY_ENRICHMENTS,
  SEARCH_ENRICHMENTS,
  type EntryEnrichment,
} from "../data/search-enrichments";

const SOURCE_WEIGHTS: Record<SearchTerm["source"], number> = {
  intent: 1.4,
  keyword: 1.2,
  phrasing: 1.15,
  synonym: 1.1,
  abbreviation: 1.05,
  typo: 0.95,
  related: 0.85,
};

/** Build flattened searchable terms for an entry. */
export function buildSearchTerms(entry: KnowledgeEntry): SearchTerm[] {
  const terms: SearchTerm[] = [];
  const seen = new Set<string>();

  const add = (text: string, source: SearchTerm["source"], baseWeight = 1) => {
    const normalized = text.toLowerCase().trim();
    if (!normalized || seen.has(normalized)) return;
    seen.add(normalized);
    terms.push({
      text: normalized,
      weight: baseWeight * (SOURCE_WEIGHTS[source] ?? 1) * (entry.weight ?? 1),
      source,
    });
  };

  if (entry.intent) add(entry.intent, "intent", 1.3);
  entry.keywords.forEach((k) => add(k, "keyword", 1.2));
  entry.phrasings?.forEach((p) => add(p, "phrasing", 1.1));
  entry.synonyms?.forEach((s) => add(s, "synonym", 1.0));
  entry.abbreviations?.forEach((a) => add(a, "abbreviation", 1.0));
  entry.typos?.forEach((t) => add(t, "typo", 0.9));
  entry.relatedTerms?.forEach((r) => add(r, "related", 0.8));

  return terms;
}

/** Merge category defaults and entry-specific enrichments. */
export function applySearchEnrichments(entry: KnowledgeEntry): KnowledgeEntry {
  const categoryDefaults = CATEGORY_ENRICHMENTS[entry.category] ?? {};
  const idEnrichment = SEARCH_ENRICHMENTS[entry.id] ?? {};
  const merged = mergeEnrichments(categoryDefaults, idEnrichment);

  return {
    ...entry,
    intent: merged.intent ?? entry.intent,
    phrasings: mergeArrays(entry.phrasings, merged.phrasings),
    synonyms: mergeArrays(entry.synonyms, merged.synonyms),
    relatedTerms: mergeArrays(entry.relatedTerms, merged.relatedTerms),
    typos: mergeArrays(entry.typos, merged.typos),
    abbreviations: mergeArrays(entry.abbreviations, merged.abbreviations),
    weight: merged.weight ?? entry.weight,
    priority: merged.priority ?? entry.priority,
  };
}

function mergeEnrichments(
  a: EntryEnrichment,
  b: EntryEnrichment,
): EntryEnrichment {
  return {
    intent: b.intent ?? a.intent,
    phrasings: mergeArrays(a.phrasings, b.phrasings),
    synonyms: mergeArrays(a.synonyms, b.synonyms),
    relatedTerms: mergeArrays(a.relatedTerms, b.relatedTerms),
    typos: mergeArrays(a.typos, b.typos),
    abbreviations: mergeArrays(a.abbreviations, b.abbreviations),
    weight: b.weight ?? a.weight,
    priority: b.priority ?? a.priority,
  };
}

function mergeArrays(
  a?: string[],
  b?: string[],
): string[] | undefined {
  const merged = [...(a ?? []), ...(b ?? [])];
  return merged.length ? [...new Set(merged)] : undefined;
}

export function enrichEntry(entry: KnowledgeEntry) {
  const enriched = applySearchEnrichments(entry);
  return {
    ...enriched,
    searchTerms: buildSearchTerms(enriched),
    consultant: buildConsultantContent(enriched),
  };
}
