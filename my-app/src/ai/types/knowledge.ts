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

/** A single knowledge entry in the assistant repository. */
export interface KnowledgeEntry {
  id: string;
  category: KnowledgeCategory;
  /** Keywords and phrases that may trigger this answer (include synonyms). */
  keywords: string[];
  /** Professional, concise answer text. */
  answer: string;
  /** Optional related questions suggested after the answer. */
  followUps?: string[];
  /** Optional score boost for tie-breaking toward comprehensive entries. */
  priority?: number;
}

/** Result of matching user input against the knowledge base. */
export interface MatchResult {
  entry: KnowledgeEntry;
  score: number;
  matchedKeywords: string[];
}

/** Output from the response generator. */
export interface GeneratedResponse {
  content: string;
  matched: boolean;
  entryId?: string;
  category?: KnowledgeCategory;
  confidence: number;
}
