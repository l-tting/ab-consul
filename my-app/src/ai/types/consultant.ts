/** Detected project / topic focus from the current chat session. */
export type ProjectFocus =
  | "erp"
  | "mvp"
  | "saas"
  | "mobile"
  | "web"
  | "cloud"
  | "fintech"
  | "automation"
  | "devops"
  | "uiux"
  | "api"
  | "startup"
  | "enterprise"
  | "consulting";

/** Stage of the client's initiative. */
export type ProjectStage = "new" | "improve" | "scale" | "unknown";

/** Active conversation topic for chip routing. */
export type ConversationTopic =
  | "pricing"
  | "services"
  | "technical"
  | "process"
  | "contact"
  | "erp"
  | "mvp"
  | "general";

/** Parsed session memory — scoped to the current conversation only. */
export interface SessionContext {
  turnCount: number;
  userMessageCount: number;
  projectFocus: ProjectFocus[];
  projectStage: ProjectStage;
  mentionedTimeline: boolean;
  mentionedBudget: boolean;
  mentionedTeam: boolean;
  mentionedScale: boolean;
  challenges: string[];
  /** Topics already surfaced so we avoid repeating the same follow-up. */
  discussedTopics: string[];
  /** Inferred business type or industry phrase. */
  businessHint?: string;
  /** Raw concatenation of user messages for phrase detection. */
  userText: string;
  /** Richness score for lead-generation timing (0–6). */
  contextRichness: number;
  /** Primary topic of the latest user message. */
  activeTopic: ConversationTopic;
}

/** Rich consultant-style content attached to a knowledge entry. */
export interface ConsultantContent {
  acknowledgments: string[];
  explanations: string[];
  reasoning: string[];
  businessContext?: string[];
  examples?: string[];
  considerations?: string[];
  followUpQuestions: string[];
  suggestionChips: string[];
  /** Optional hook when session already mentions a project type. */
  contextualHooks?: Partial<Record<ProjectFocus, string>>;
}
