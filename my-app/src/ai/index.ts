/**
 * Public exports for the AB Consul AI module.
 * Import from here in future features (admin, analytics, SDK).
 */
export type { ChatMessage, ChatApiRequest, ChatApiResponse } from "./types/chat";
export type {
  KnowledgeEntry,
  KnowledgeCategory,
  MatchResult,
  GeneratedResponse,
} from "./types/knowledge";
export { WELCOME_MESSAGE, AI_CONFIG } from "./config/constants";
export { getAllKnowledgeEntries, getKnowledgeStats } from "./services/knowledge-repository";
export { matchingEngine } from "./services/matching-engine";
export { generateKnowledgeResponse } from "./services/response-generator";
