import type { EnrichedKnowledgeEntry, MatchResult } from "../types/knowledge";
import type { ConversationTopic, SessionContext } from "../types/consultant";
import { CTA_SUGGESTIONS } from "../config/constants";
import { shouldOfferConsultation } from "./discovery-engine";
import { pickVariant } from "./response-variation";

export interface ChipSet {
  chips: string[];
  primary?: string;
}

const TOPIC_CHIPS: Record<ConversationTopic, string[]> = {
  pricing: [
    "Estimate an MVP",
    "Discuss ERP Pricing",
    "Project Timeline",
    "How We Price",
    "Book a Discovery Call",
  ],
  services: [
    "How We Work",
    "Technology Stack",
    "Our Process",
    "Industries We Serve",
    "Book a Discovery Call",
  ],
  technical: [
    "Software Architecture",
    "API Integrations",
    "Scalability Planning",
    "Cloud Infrastructure",
    "Maintenance & Support",
  ],
  process: [
    "Discovery Workshop",
    "Project Timeline",
    "Quality Assurance",
    "How We Work",
    "Book a Discovery Call",
  ],
  contact: [
    "Book a Discovery Call",
    "Request a Proposal",
    "Talk to Our Team",
    "Consultation Process",
  ],
  erp: [
    "Discuss ERP Pricing",
    "ERP Integration",
    "Legacy Migration",
    "Business Automation",
    "Book a Discovery Call",
  ],
  mvp: [
    "Estimate an MVP",
    "MVP Timeline",
    "Feature Prioritization",
    "MVP Strategy",
    "Book a Discovery Call",
  ],
  general: [
    "Building a New Product",
    "Scaling Operations",
    "Modernizing Systems",
    "How We Work",
    "Book a Discovery Call",
  ],
};

export function isCtaChip(label: string): boolean {
  return (CTA_SUGGESTIONS as readonly string[]).includes(label);
}

/** Build topic-aware, deduplicated suggestion chips. */
export function buildTopicChips(
  entry: EnrichedKnowledgeEntry | null,
  session: SessionContext,
  alternates: MatchResult[],
  seed: string,
  turn: number,
): ChipSet {
  const topic = session.activeTopic;
  const base = [...(TOPIC_CHIPS[topic] ?? TOPIC_CHIPS.general)];

  for (const chip of entry?.consultant?.suggestionChips ?? []) {
    if (!base.includes(chip)) base.push(chip);
  }

  const filtered = filterIrrelevantChips(base, topic, session);

  for (const alt of alternates.slice(0, 1)) {
    const chip = alt.entry.followUps?.[0];
    if (chip && !filtered.includes(chip)) filtered.push(chip);
  }

  const offset = pickVariant(
    Array.from({ length: Math.max(1, Math.min(filtered.length, 5)) }, (_, i) => i),
    seed,
    turn,
  );
  const rotated = [...filtered.slice(offset), ...filtered.slice(0, offset)];
  const chips = [...new Set(rotated)].slice(0, 4);

  let primary: string | undefined;
  if (shouldOfferConsultation(session)) {
    primary = pickVariant([...CTA_SUGGESTIONS], `${seed}:cta`, turn);
    if (!chips.includes(primary)) chips.unshift(primary);
    return { chips: chips.slice(0, 5), primary };
  }

  if (topic === "contact" || session.userMessageCount >= 4) {
    primary = "Book a Discovery Call";
    if (!chips.includes(primary)) chips.push(primary);
  }

  return { chips: chips.slice(0, 5), primary };
}

function filterIrrelevantChips(
  chips: string[],
  topic: ConversationTopic,
  session: SessionContext,
): string[] {
  return chips.filter((chip) => {
    const lower = chip.toLowerCase();
    if (topic !== "pricing" && topic !== "mvp" && /pricing|estimate an mvp/i.test(lower)) {
      return session.activeTopic === "pricing" || session.projectFocus.includes("mvp");
    }
    if (topic !== "erp" && /erp/i.test(lower)) {
      return session.projectFocus.includes("erp");
    }
    if (topic !== "technical" && /architecture|scalability|devops/i.test(lower)) {
      return session.activeTopic === "technical";
    }
    return true;
  });
}

export const WELCOME_CHIP_SET: ChipSet = {
  chips: [
    "Building a New Product",
    "Scaling Operations",
    "Modernizing Systems",
    "Book a Discovery Call",
  ],
  primary: "Book a Discovery Call",
};
