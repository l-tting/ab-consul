/** Knowledge categories — extend as the company offering grows. */
export type KnowledgeCategory =
  | "company-overview"
  | "services"
  | "technologies"
  | "industries"
  | "development-process"
  | "project-timelines"
  | "pricing-philosophy"
  | "mvp-development"
  | "erp-systems"
  | "web-applications"
  | "mobile-applications"
  | "cloud-solutions"
  | "ui-ux-design"
  | "devops"
  | "business-automation"
  | "api-integrations"
  | "faq"
  | "contact-information"
  | "consultation-process"
  | "why-choose-ab-consul";

/** How a query term matched an entry term. */
export type MatchType =
  | "exact"
  | "phrase"
  | "token"
  | "fuzzy"
  | "synonym"
  | "partial";

/** A single knowledge entry in the assistant repository. */
export interface KnowledgeEntry {
  id: string;
  category: KnowledgeCategory;
  /** Primary intent label used for weighted intent matching. */
  intent?: string;
  /** Keywords and phrases that may trigger this answer. */
  keywords: string[];
  /** Alternative full phrasings users might type. */
  phrasings?: string[];
  /** Synonyms and equivalent terms. */
  synonyms?: string[];
  /** Related terms that should contribute partial score. */
  relatedTerms?: string[];
  /** Common misspellings mapped to this entry. */
  typos?: string[];
  /** Abbreviations (e.g. "erp", "mvp", "ui ux"). */
  abbreviations?: string[];
  /** Importance multiplier for scoring (default 1). */
  weight?: number;
  answer: string;
  followUps?: string[];
  priority?: number;
}

/** Entry after enrichment — includes flattened searchable terms. */
export interface EnrichedKnowledgeEntry extends KnowledgeEntry {
  searchTerms: SearchTerm[];
}

/** A weighted searchable term derived from an entry. */
export interface SearchTerm {
  text: string;
  weight: number;
  source:
    | "intent"
    | "keyword"
    | "phrasing"
    | "synonym"
    | "related"
    | "typo"
    | "abbreviation";
}

/** Normalized and expanded query ready for matching. */
export interface ProcessedQuery {
  raw: string;
  normalized: string;
  /** Tokens after stop-word removal and stemming. */
  tokens: string[];
  /** Tokens plus synonym/typo expansions. */
  expandedTokens: string[];
  /** Normalized full query variants (original + corrected). */
  variants: string[];
}

/** Result of matching user input against the knowledge base. */
export interface MatchResult {
  entry: EnrichedKnowledgeEntry;
  score: number;
  /** Normalized confidence between 0 and 1. */
  confidence: number;
  matchedTerms: string[];
  matchTypes: MatchType[];
}

/** Final selection from the match selector. */
export interface MatchSelection {
  primary: MatchResult;
  /** Close alternate matches for tie-breaking / suggestions. */
  alternates: MatchResult[];
}

/** Output from the response generator. */
export interface GeneratedResponse {
  content: string;
  matched: boolean;
  entryId?: string;
  category?: KnowledgeCategory;
  confidence: number;
}
