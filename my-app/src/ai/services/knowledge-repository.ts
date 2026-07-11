import type { KnowledgeCategory, KnowledgeEntry } from "../types/knowledge";
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

/**
 * Central knowledge repository.
 * Future: load from CMS, database, or vector store — keep this interface stable.
 */
const ALL_ENTRIES: KnowledgeEntry[] = [
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
];

export function getAllKnowledgeEntries(): KnowledgeEntry[] {
  return ALL_ENTRIES;
}

export function getEntriesByCategory(
  category: KnowledgeCategory,
): KnowledgeEntry[] {
  return ALL_ENTRIES.filter((entry) => entry.category === category);
}

export function getKnowledgeEntryById(id: string): KnowledgeEntry | undefined {
  return ALL_ENTRIES.find((entry) => entry.id === id);
}

export function getKnowledgeStats(): {
  totalEntries: number;
  categories: Record<KnowledgeCategory, number>;
} {
  const categories = {} as Record<KnowledgeCategory, number>;
  for (const entry of ALL_ENTRIES) {
    categories[entry.category] = (categories[entry.category] ?? 0) + 1;
  }
  return { totalEntries: ALL_ENTRIES.length, categories };
}
