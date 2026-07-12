/**
 * Lightweight English stemming — singular/plural and common suffixes.
 * Deterministic; no external NLP libraries.
 */

const IRREGULAR: Record<string, string> = {
  services: "service",
  technologies: "technology",
  companies: "company",
  industries: "industry",
  applications: "application",
  systems: "system",
  processes: "process",
  timelines: "timeline",
  prices: "price",
  fees: "fee",
  queries: "query",
  studies: "study",
  activities: "activity",
  entries: "entry",
  parties: "party",
  countries: "country",
  currencies: "currency",
  agencies: "agency",
  strategies: "strategy",
  methodologies: "methodology",
  capabilities: "capability",
  integrations: "integration",
  solutions: "solution",
  consultations: "consultation",
  proposals: "proposal",
  websites: "website",
  businesses: "business",
  startups: "startup",
  clients: "client",
  partners: "partner",
  founders: "founder",
  engineers: "engineer",
  developers: "developer",
  consultants: "consultant",
  offerings: "offering",
  features: "feature",
  modules: "module",
  platforms: "platform",
  frameworks: "framework",
  databases: "database",
  migrations: "migration",
  audits: "audit",
  retainers: "retainer",
  estimates: "estimate",
};

/** Return a normalized stem for a single token. */
export function stemToken(token: string): string {
  if (IRREGULAR[token]) return IRREGULAR[token];

  if (token.endsWith("ies") && token.length > 4) {
    return token.slice(0, -3) + "y";
  }
  if (token.endsWith("es") && token.length > 4) {
    const base = token.slice(0, -2);
    if (base.endsWith("ch") || base.endsWith("sh") || base.endsWith("ss") || base.endsWith("x")) {
      return base;
    }
  }
  if (token.endsWith("s") && !token.endsWith("ss") && token.length > 3) {
    return token.slice(0, -1);
  }
  if (token.endsWith("ing") && token.length > 5) {
    return token.slice(0, -3);
  }
  if (token.endsWith("ed") && token.length > 4) {
    return token.slice(0, -2);
  }
  if (token.endsWith("ly") && token.length > 4) {
    return token.slice(0, -2);
  }

  return token;
}

/** Stem all tokens and return unique set including originals. */
export function stemTokens(tokens: string[]): string[] {
  const result = new Set<string>();
  for (const token of tokens) {
    result.add(token);
    result.add(stemToken(token));
  }
  return [...result];
}
