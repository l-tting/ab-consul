import type { KnowledgeCategory } from "../types/knowledge";

/** Partial enrichment fields merged into knowledge entries at load time. */
export interface EntryEnrichment {
  intent?: string;
  phrasings?: string[];
  synonyms?: string[];
  relatedTerms?: string[];
  typos?: string[];
  abbreviations?: string[];
  weight?: number;
  priority?: number;
}

/** Category-wide synonym, typo, and phrasing defaults. */
export const CATEGORY_ENRICHMENTS: Partial<
  Record<KnowledgeCategory, EntryEnrichment>
> = {
  "company-overview": {
    synonyms: ["about us", "your company", "the firm", "ab consul"],
    typos: ["abconsul", "ab consul", "abconsl"],
    abbreviations: ["ab"],
  },
  services: {
    synonyms: ["what you do", "help with", "offer", "provide", "expertise"],
    typos: ["servces", "servics", "servic", "offering"],
    relatedTerms: ["consulting", "development", "engineering"],
  },
  "mvp-development": {
    intent: "mvp development",
    synonyms: ["minimum viable product", "startup product", "launch product"],
    abbreviations: ["mvp"],
    typos: ["mvps", "minimun viable product"],
  },
  "erp-systems": {
    intent: "erp systems",
    synonyms: [
      "enterprise resource planning",
      "business software",
      "inventory management system",
      "inventory management",
      "enterprise software",
      "operations software",
    ],
    abbreviations: ["erp"],
    typos: ["erp sytem", "erp systm", "enterprize resource planning"],
    relatedTerms: ["supply chain", "procurement", "warehouse"],
  },
  "web-applications": {
    intent: "web applications",
    synonyms: ["web app", "web development", "online platform", "portal"],
    typos: ["websit", "webste", "web aplication", "web applicaton"],
    relatedTerms: ["saas", "dashboard", "website"],
  },
  "mobile-applications": {
    intent: "mobile applications",
    synonyms: ["mobile app", "ios app", "android app", "smartphone app"],
    typos: ["moblie app", "moble app", "mobil app", "mobile aplication"],
    abbreviations: ["app"],
  },
  "cloud-solutions": {
    intent: "cloud solutions",
    synonyms: ["cloud computing", "cloud hosting", "cloud infrastructure"],
    typos: ["clod", "cloude", "infrastucture", "infrastrucure"],
    abbreviations: ["aws"],
  },
  "ui-ux-design": {
    intent: "ui ux design",
    synonyms: ["user experience", "user interface", "product design", "ux design"],
    abbreviations: ["ui", "ux", "ui ux"],
    typos: ["uiux", "uix", "user experiance"],
  },
  devops: {
    intent: "devops",
    synonyms: ["ci cd", "deployment pipeline", "infrastructure automation"],
    abbreviations: ["devops", "cicd"],
    typos: ["devop", "dev ops", "deploment"],
  },
  "business-automation": {
    intent: "business process automation",
    synonyms: ["workflow automation", "process automation", "rpa"],
    abbreviations: ["bpa"],
    typos: ["automatoin", "automtion", "bussiness automation"],
  },
  "api-integrations": {
    intent: "api integrations",
    synonyms: ["system integration", "third party integration", "connect systems"],
    abbreviations: ["api"],
    typos: ["intergration", "integraton", "api intergration"],
  },
  technologies: {
    synonyms: ["tech stack", "tools", "frameworks", "platforms"],
    typos: ["tecnology", "techology", "technolgy", "tech stack"],
  },
  industries: {
    synonyms: ["sectors", "verticals", "markets", "domains"],
    typos: ["industy", "indutries"],
  },
  "development-process": {
    intent: "development process",
    synonyms: ["methodology", "how you work", "project approach", "lifecycle"],
    typos: ["devlopment process", "develpment process"],
  },
  "project-timelines": {
    intent: "project timelines",
    synonyms: ["how long", "duration", "delivery time", "schedule"],
    typos: ["timeine", "timelne", "timline"],
  },
  "pricing-philosophy": {
    intent: "pricing",
    synonyms: ["cost", "price", "fees", "investment", "budget", "quote"],
    typos: ["prcie", "priice", "pricng"],
    relatedTerms: ["retainer", "estimate", "calculator"],
  },
  faq: {
    synonyms: ["question", "questions", "common questions", "frequently asked"],
  },
  "contact-information": {
    intent: "contact",
    synonyms: ["reach you", "get in touch", "email", "phone", "call"],
    typos: ["contcat", "contac", "conact", "contat"],
  },
  "consultation-process": {
    intent: "consultation process",
    synonyms: ["getting started", "onboarding", "first steps", "how to start"],
    typos: ["consultaton", "consultaion", "onbording"],
  },
  "why-choose-ab-consul": {
    intent: "why choose ab consul",
    synonyms: ["different", "better", "advantage", "vs agency", "why you"],
    typos: ["why chooose", "why chose"],
  },
};

/** Entry-specific enrichments that override or extend category defaults. */
export const SEARCH_ENRICHMENTS: Record<string, EntryEnrichment> = {
  "co-001": {
    intent: "about ab consul",
    phrasings: ["tell me about ab consul", "what is ab consul", "who are you"],
    weight: 1.2,
  },
  "co-006": {
    intent: "greeting",
    phrasings: ["good morning", "good afternoon", "good evening"],
    weight: 0.8,
  },
  "svc-001": {
    intent: "services overview",
    phrasings: ["what services do you offer", "list your services"],
    weight: 1.3,
  },
  "svc-002": {
    intent: "monetization architecture",
    synonyms: ["billing architecture", "subscription billing", "saas billing"],
  },
  "svc-004": {
    intent: "fintech crypto growth",
    synonyms: ["cryptocurrency", "digital payments", "payment platform"],
  },
  "erp-001": {
    intent: "erp systems",
    phrasings: ["do you build erp", "custom erp", "erp development"],
    synonyms: ["enterprise resource planning", "business management software"],
    typos: ["erp sytem", "erp systm"],
    weight: 1.3,
  },
  "erp-004": {
    synonyms: ["warehouse management", "inventory system", "stock management"],
  },
  "mvp-001": {
    intent: "mvp development",
    phrasings: ["build an mvp", "create mvp", "mvp for startup"],
    weight: 1.2,
  },
  "web-001": {
    intent: "web applications",
    phrasings: ["build a website", "build web app", "web platform"],
  },
  "web-002": {
    intent: "saas development",
    synonyms: ["multi tenant saas", "subscription platform"],
  },
  "mob-001": {
    intent: "mobile applications",
    phrasings: ["build mobile app", "create an app", "app development"],
  },
  "mob-003": {
    synonyms: ["crypto wallet", "payment app", "digital wallet"],
  },
  "cld-001": {
    intent: "cloud solutions",
    phrasings: ["cloud migration", "move to cloud", "cloud setup"],
  },
  "cld-002": {
    intent: "aws",
    synonyms: ["amazon web services", "aws cloud"],
  },
  "ux-001": {
    intent: "ui ux design",
    phrasings: ["design services", "ux services", "product design"],
  },
  "dev-001": {
    intent: "devops",
    phrasings: ["setup ci cd", "deployment pipeline"],
  },
  "auto-001": {
    intent: "business automation",
    phrasings: ["automate my business", "workflow automation"],
  },
  "api-001": {
    intent: "api integrations",
    phrasings: ["integrate systems", "connect my tools", "third party api"],
  },
  "tech-001": {
    intent: "technology stack",
    phrasings: ["what technologies", "what stack do you use"],
    weight: 1.2,
  },
  "tech-002": {
    synonyms: ["react nextjs", "next js", "react js"],
    abbreviations: ["react", "nextjs"],
  },
  "ind-002": {
    intent: "fintech industry",
    synonyms: ["financial services", "payments industry", "banking technology"],
  },
  "proc-001": {
    intent: "development process",
    phrasings: ["how do projects work", "your process", "methodology"],
    weight: 1.2,
  },
  "proc-002": { intent: "discovery phase", synonyms: ["initial audit", "assessment"] },
  "proc-003": { intent: "strategy phase", synonyms: ["planning phase", "roadmap"] },
  "proc-004": { intent: "execution phase", synonyms: ["build phase", "development"] },
  "proc-005": { intent: "iteration phase", synonyms: ["maintenance", "post launch"] },
  "time-001": {
    intent: "project timeline",
    phrasings: ["how long does it take", "project duration"],
    weight: 1.1,
  },
  "time-002": {
    intent: "start date",
    phrasings: ["when can we begin", "availability"],
  },
  "price-001": {
    intent: "pricing",
    phrasings: ["how much does it cost", "what are your rates"],
    typos: ["prcie", "how much", "costs"],
    weight: 1.3,
  },
  "price-002": {
    intent: "pricing philosophy",
    synonyms: ["value based pricing", "not hourly", "roi pricing"],
  },
  "price-004": {
    intent: "pricing calculator",
    phrasings: ["estimate cost", "calculate price", "get estimate"],
  },
  "con-001": {
    intent: "contact",
    phrasings: ["how to contact", "reach ab consul", "talk to someone"],
    typos: ["contcat", "contac"],
    weight: 1.3,
  },
  "con-004": {
    intent: "book a call",
    phrasings: ["schedule meeting", "book consultation", "strategy call"],
    weight: 1.2,
  },
  "consult-001": {
    intent: "consultation process",
    phrasings: ["how to get started", "onboarding process"],
    weight: 1.2,
  },
  "why-001": {
    intent: "why choose ab consul",
    phrasings: ["why should i choose you", "what makes you different"],
    weight: 1.2,
  },
  "faq-003": {
    intent: "confidentiality nda",
    synonyms: ["privacy", "data protection", "secure engagement"],
  },
};
