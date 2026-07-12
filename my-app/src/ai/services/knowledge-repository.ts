import type { KnowledgeCategory, KnowledgeEntry, EnrichedKnowledgeEntry } from "../types/knowledge";
import { companyOverviewEntries } from "../data/entries/company-overview";
import { servicesEntries } from "../data/entries/services";
import {
  mvpEntries,
  erpEntries,
  webEntries,
  mobileEntries,
} from "../data/entries/applications";
import {
  cloudEntries,
  uiUxEntries,
  devopsEntries,
  automationEntries,
  apiEntries,
} from "../data/entries/product-engineering";
import {
  technologyEntries,
  industryEntries,
} from "../data/entries/technologies-industries";
import {
  processEntries,
  timelineEntries,
} from "../data/entries/process-timelines";
import { pricingEntries, faqEntries } from "../data/entries/pricing-faq";
import {
  contactEntries,
  consultationEntries,
  whyChooseEntries,
} from "../data/entries/contact-consultation";
import { consultingTopicEntries } from "../data/entries/consulting-topics";
import { enrichEntry } from "./entry-enrichment";

const RAW_ENTRIES: KnowledgeEntry[] = [
  ...companyOverviewEntries,
  ...servicesEntries,
  ...mvpEntries,
  ...erpEntries,
  ...webEntries,
  ...mobileEntries,
  ...cloudEntries,
  ...uiUxEntries,
  ...devopsEntries,
  ...automationEntries,
  ...apiEntries,
  ...technologyEntries,
  ...industryEntries,
  ...processEntries,
  ...timelineEntries,
  ...pricingEntries,
  ...faqEntries,
  ...contactEntries,
  ...consultationEntries,
  ...whyChooseEntries,
  ...consultingTopicEntries,
];

/** Cached enriched entries — built once at module load. */
const ENRICHED_ENTRIES: EnrichedKnowledgeEntry[] = RAW_ENTRIES.map(enrichEntry);

export function getEnrichedKnowledgeEntries(): EnrichedKnowledgeEntry[] {
  return ENRICHED_ENTRIES;
}

/** @deprecated Use getEnrichedKnowledgeEntries — kept for backward compatibility. */
export function getAllKnowledgeEntries(): KnowledgeEntry[] {
  return ENRICHED_ENTRIES;
}

export function getEntriesByCategory(
  category: KnowledgeCategory,
): EnrichedKnowledgeEntry[] {
  return ENRICHED_ENTRIES.filter((entry) => entry.category === category);
}

export function getKnowledgeEntryById(id: string): EnrichedKnowledgeEntry | undefined {
  return ENRICHED_ENTRIES.find((entry) => entry.id === id);
}

export function getKnowledgeStats(): {
  totalEntries: number;
  categories: Record<KnowledgeCategory, number>;
} {
  const categories = {} as Record<KnowledgeCategory, number>;
  for (const entry of ENRICHED_ENTRIES) {
    categories[entry.category] = (categories[entry.category] ?? 0) + 1;
  }
  return { totalEntries: ENRICHED_ENTRIES.length, categories };
}
