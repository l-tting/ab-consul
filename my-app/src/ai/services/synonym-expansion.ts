/**
 * Domain vocabulary — maps canonical terms to synonyms, abbreviations,
 * and related phrases used during query expansion.
 */
export const DOMAIN_VOCABULARY: Record<string, string[]> = {
  erp: [
    "enterprise resource planning",
    "business software",
    "inventory management system",
    "inventory management",
    "supply chain software",
    "procurement system",
    "erp system",
  ],
  mvp: [
    "minimum viable product",
    "startup product",
    "product launch",
    "proof of concept",
    "poc",
  ],
  ui: ["user interface", "ui ux", "ui/ux", "ux", "user experience", "design"],
  ux: ["user experience", "ui ux", "ui/ux", "product design"],
  devops: ["ci cd", "cicd", "continuous integration", "continuous deployment", "dev ops"],
  api: ["application programming interface", "integration", "webhook", "rest api"],
  aws: ["amazon web services", "cloud", "amazon cloud"],
  saas: ["software as a service", "subscription software", "multi tenant", "multitenant"],
  bpa: ["business process automation", "workflow automation", "process automation"],
  gtm: ["go to market", "market entry", "market penetration", "launch strategy"],
  roi: ["return on investment", "value", "impact", "results"],
  nda: ["confidentiality", "non disclosure", "confidential", "privacy"],
  poc: ["proof of concept", "prototype", "prototype build"],
  rbac: ["role based access", "access control", "permissions"],
  ltv: ["lifetime value", "customer lifetime value"],
  cac: ["customer acquisition cost", "acquisition cost"],
  ebitda: ["profitability", "unit economics", "margin"],
  fintech: ["financial technology", "digital finance", "payments", "crypto"],
  crypto: ["cryptocurrency", "digital assets", "blockchain", "web3"],
  mobile: ["mobile app", "mobile application", "ios android", "smartphone app"],
  web: ["web app", "web application", "website", "web development"],
  cloud: ["cloud computing", "cloud infrastructure", "cloud hosting", "aws"],
  consulting: ["advisory", "consultation", "strategy", "consultant"],
  pricing: ["cost", "price", "fees", "investment", "quote", "budget"],
  contact: ["email", "phone", "reach", "get in touch", "call", "message"],
  timeline: ["how long", "duration", "schedule", "time frame", "deadline"],
  startup: ["start up", "early stage", "scale up", "growth stage"],
  software: ["custom software", "application", "platform", "system"],
  engineering: ["development", "technical", "architecture", "build"],
  automation: ["automate", "automated", "workflow", "efficiency"],
  security: ["secure", "encryption", "compliance", "hipaa", "pci"],
  migration: ["modernize", "legacy", "upgrade", "transition"],
  retainer: ["ongoing", "monthly", "recurring", "advisory"],
  audit: ["assessment", "review", "analysis", "evaluation"],
  discovery: ["discovery phase", "initial assessment", "business audit"],
  strategy: ["strategic", "roadmap", "planning", "architecture planning"],
  execution: ["build", "development", "delivery", "implement"],
  iteration: ["maintenance", "support", "post launch", "updates"],
};

/**
 * Common misspellings → canonical correction used during query normalization.
 */
export const TYPO_CORRECTIONS: Record<string, string> = {
  prcie: "price",
  priice: "price",
  pricng: "pricing",
  servces: "services",
  servics: "services",
  servic: "service",
  contcat: "contact",
  contac: "contact",
  conact: "contact",
  cosulting: "consulting",
  consultng: "consulting",
  consuling: "consulting",
  consutling: "consulting",
  moblie: "mobile",
  moble: "mobile",
  mobil: "mobile",
  tecnology: "technology",
  techology: "technology",
  technolgy: "technology",
  technologie: "technology",
  websit: "website",
  webste: "website",
  websitte: "website",
  webiste: "website",
  sytem: "system",
  systm: "system",
  systme: "system",
  devlopment: "development",
  developement: "development",
  developmnt: "development",
  architecure: "architecture",
  archtecture: "architecture",
  monitization: "monetization",
  monetizaton: "monetization",
  automatoin: "automation",
  automtion: "automation",
  intergration: "integration",
  integraton: "integration",
  infrastucture: "infrastructure",
  infrastrucure: "infrastructure",
  aplication: "application",
  applicaton: "application",
  buisness: "business",
  busines: "business",
  stratagy: "strategy",
  stratgey: "strategy",
  timeine: "timeline",
  timelne: "timeline",
  consultaton: "consultation",
  consultaion: "consultation",
  propossal: "proposal",
  proposl: "proposal",
  engagment: "engagement",
  engagemnt: "engagement",
  fintec: "fintech",
  blockchan: "blockchain",
  blokchain: "blockchain",
  databse: "database",
  datbase: "database",
  postgress: "postgres",
  postresql: "postgresql",
  reactjs: "react",
  nextjs: "next",
  nodejs: "node",
  typerscript: "typescript",
  abconsul: "ab consul",
  abconsl: "ab consul",
  "erp sytem": "erp system",
  "erp systm": "erp system",
  "moblie app": "mobile app",
  "moble app": "mobile app",
};

/** Expand a token with domain synonyms (bidirectional lookup). */
export function expandTokenSynonyms(token: string): string[] {
  const results = new Set<string>([token]);
  const direct = DOMAIN_VOCABULARY[token];
  if (direct) direct.forEach((s) => results.add(normalizeSynonym(s)));

  for (const [canonical, synonyms] of Object.entries(DOMAIN_VOCABULARY)) {
    if (canonical === token) continue;
    const normalizedSynonyms = synonyms.map(normalizeSynonym);
    if (normalizedSynonyms.includes(token)) {
      results.add(canonical);
      normalizedSynonyms.forEach((s) => results.add(s));
    }
  }

  return [...results];
}

/** Expand multi-word phrase synonyms if query contains known phrases. */
export function expandPhraseSynonyms(normalizedQuery: string): string[] {
  const variants = new Set<string>([normalizedQuery]);

  for (const [canonical, synonyms] of Object.entries(DOMAIN_VOCABULARY)) {
    const phrases = [canonical, ...synonyms.map(normalizeSynonym)];
    for (const phrase of phrases) {
      if (normalizedQuery.includes(phrase)) {
        phrases.forEach((p) => variants.add(normalizedQuery.replace(phrase, canonical)));
        variants.add(canonical);
      }
    }
  }

  return [...variants];
}

function normalizeSynonym(text: string): string {
  return text.toLowerCase().replace(/[^\w\s]/g, " ").replace(/\s+/g, " ").trim();
}

/** Apply typo dictionary corrections to tokens. */
export function correctTypos(tokens: string[]): string[] {
  const corrected = new Set<string>();
  for (const token of tokens) {
    corrected.add(TYPO_CORRECTIONS[token] ?? token);
    corrected.add(token);
  }
  return [...corrected];
}

/** Apply typo corrections to full normalized query string. */
export function correctQueryTypos(normalized: string): string {
  let result = normalized;
  for (const [typo, fix] of Object.entries(TYPO_CORRECTIONS)) {
    if (typo.includes(" ")) {
      if (result.includes(typo)) result = result.replaceAll(typo, fix);
    }
  }
  const tokens = result.split(" ").map((t) => TYPO_CORRECTIONS[t] ?? t);
  return tokens.join(" ");
}
