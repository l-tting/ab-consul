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

/** Parsed session memory — scoped to the current conversation only. */
export interface SessionContext {
  turnCount: number;
  userMessageCount: number;
  projectFocus: ProjectFocus[];
  mentionedTimeline: boolean;
  mentionedBudget: boolean;
  mentionedTeam: boolean;
  mentionedScale: boolean;
  challenges: string[];
  /** Topics already surfaced so we avoid repeating the same follow-up. */
  discussedTopics: string[];
  /** Raw concatenation of user messages for phrase detection. */
  userText: string;
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
