/**
 * Public exports for the AB Consul AI module.
 */
export type {
  ChatMessage,
  ChatApiRequest,
  ChatApiResponse,
} from "./types/chat";
export type {
  KnowledgeEntry,
  KnowledgeCategory,
  EnrichedKnowledgeEntry,
  MatchResult,
  MatchSelection,
  GeneratedResponse,
  ProcessedQuery,
} from "./types/knowledge";
export { WELCOME_MESSAGE, AI_CONFIG } from "./config/constants";
export { MATCHING_CONFIG } from "./config/matching";
export {
  getEnrichedKnowledgeEntries,
  getAllKnowledgeEntries,
  getKnowledgeStats,
} from "./services/knowledge-repository";
export { matchingEngine } from "./services/matching-engine";
export { generateKnowledgeResponse } from "./services/response-generator";
export { processQuery } from "./services/query-processor";
