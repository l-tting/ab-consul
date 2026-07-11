import type { KnowledgeEntry } from "../../types/knowledge";

export const contactEntries: KnowledgeEntry[] = [
  {
    id: "con-001",
    category: "contact-information",
    keywords: ["contact", "reach you", "get in touch", "email", "phone", "how to contact"],
    answer: "Reach AB Consul at contact@ab-consul.com or +254 717568861. Visit ab-consul.com/contact to initiate a partnership inquiry or book a strategy call. We typically respond within 24 hours.",
    followUps: ["How do I book a consultation?", "What is the consultation process?"],
    priority: 3,
  },
  {
    id: "con-002",
    category: "contact-information",
    keywords: ["email address", "contact email", "send email", "mail you"],
    answer: "Our email is contact@ab-consul.com. Send us a brief description of your project or challenge and we'll respond within 24 hours under strict confidentiality.",
    followUps: ["What happens after I contact you?", "How soon can we start?"],
  },
  {
    id: "con-003",
    category: "contact-information",
    keywords: ["phone number", "call you", "telephone", "phone contact", "call ab consul"],
    answer: "You can call us at +254 717568861. For detailed project discussions, we recommend booking a strategy call via ab-consul.com/contact so our partners can prepare for your specific needs.",
    followUps: ["How do I book a call?", "What is the consultation process?"],
  },
  {
    id: "con-004",
    category: "contact-information",
    keywords: ["book a call", "schedule call", "strategy call", "book meeting", "schedule consultation", "book consultation"],
    answer: "Book a strategy call through ab-consul.com/contact or via the 'Book Call' button on our website. Share a brief overview of your challenge and we'll schedule a 1-hour consultation with our partners.",
    followUps: ["What is the consultation process?", "How soon can we start?"],
    priority: 2,
  },
  {
    id: "con-005",
    category: "contact-information",
    keywords: ["website", "url", "ab-consul.com", "visit site", "online"],
    answer: "Our website is ab-consul.com — explore services at /services, pricing at /pricing, and contact us at /contact. All pages include details on our capabilities and engagement process.",
    followUps: ["What services do you offer?", "What is your pricing approach?"],
  },
];

export const consultationEntries: KnowledgeEntry[] = [
  {
    id: "consult-001",
    category: "consultation-process",
    keywords: ["consultation process", "onboarding", "getting started", "how to start", "first steps", "intake process"],
    answer: "Our consultation process: (1) Submit an inquiry at ab-consul.com/contact, (2) Business audit to identify bottlenecks, (3) 1-hour strategic alignment call with our partners, (4) Roadmap and execution plan for terminal scalability.",
    followUps: ["What is discovery?", "How soon can we start?"],
    priority: 3,
  },
  {
    id: "consult-002",
    category: "consultation-process",
    keywords: ["what happens after contact", "after i submit", "next steps", "after inquiry", "after form"],
    answer: "After you submit an inquiry, our principals are notified and respond within 24 hours. We'll schedule a discovery conversation, perform an initial assessment, and outline recommended next steps — all under confidentiality.",
    followUps: ["What is discovery?", "How long until we can start?"],
  },
  {
    id: "consult-003",
    category: "consultation-process",
    keywords: ["business audit", "initial audit", "partnership brief", "intake protocol"],
    answer: "The Business Audit is our first deep-dive — identifying revenue bottlenecks, technical debt, and operational friction. Findings inform the strategic roadmap and scoped proposal for your engagement.",
    followUps: ["What is the strategy phase?", "How much does an audit cost?"],
  },
  {
    id: "consult-004",
    category: "consultation-process",
    keywords: ["strategy call", "consultation call", "first meeting", "intro call", "discovery call"],
    answer: "The strategy call is a focused 1-hour session with AB Consul's partners to map solutions to your P&L, clarify scope, and determine fit. It's the gateway to a formal engagement proposal.",
    followUps: ["How do I book a call?", "What is your pricing philosophy?"],
  },
  {
    id: "consult-005",
    category: "consultation-process",
    keywords: ["proposal", "engagement proposal", "statement of work", "sow", "project proposal"],
    answer: "After Discovery and the strategy call, we deliver a scoped engagement proposal with clear deliverables, timeline, and investment. No work begins until scope and terms are mutually agreed.",
    followUps: ["What is your pricing approach?", "What is the execution phase?"],
  },
];

export const whyChooseEntries: KnowledgeEntry[] = [
  {
    id: "why-001",
    category: "why-choose-ab-consul",
    keywords: ["why choose", "why ab consul", "different from", "vs agency", "vs freelancer", "competitive advantage"],
    answer: "AB Consul differs from typical agencies: outcome-architected delivery (not feature tickets), direct partner access (no account managers), NDA-protected engagements, value-based pricing (not hourly billing), and deep fintech/growth expertise across 20+ markets.",
    followUps: ["What is your pricing philosophy?", "Who are the founders?"],
    priority: 3,
  },
  {
    id: "why-002",
    category: "why-choose-ab-consul",
    keywords: ["proven results", "track record", "case studies", "success stories", "results"],
    answer: "Our track record includes $65M+ in deals closed, 500k+ users onboarded, and $100M+ in new product volume — across fintech, crypto, and digital payment platforms with partners like Mastercard, Bitget, and Cellulant.",
    followUps: ["What industries do you serve?", "What services do you offer?"],
  },
  {
    id: "why-003",
    category: "why-choose-ab-consul",
    keywords: ["outcome architected", "revenue engine", "ebitda", "unit economics", "business focused"],
    answer: "We build Revenue Engines, not feature lists. Every architectural and growth decision is filtered through EBITDA, unit economics, and capital efficiency — ensuring technology serves the business, not the other way around.",
    followUps: ["What is monetization architecture?", "What is capital efficiency?"],
  },
  {
    id: "why-004",
    category: "why-choose-ab-consul",
    keywords: ["vs big consulting", "mckinsey", "deloitte", "big four", "traditional consulting"],
    answer: "Unlike traditional consulting firms that deliver slide decks, AB Consul partners embed with your team to architect and build — combining strategic advisory with hands-on engineering and measurable delivery.",
    followUps: ["What is your development process?", "What services do you offer?"],
  },
  {
    id: "why-005",
    category: "why-choose-ab-consul",
    keywords: ["trust", "reliable", "professional", "credible", "experienced team"],
    answer: "AB Consul combines institutional-grade rigor with startup velocity. Founding partners bring experience from global crypto exchanges, Mastercard, and fintech scale-ups — applied with the agility of a focused boutique firm.",
    followUps: ["Who are the founders?", "What industries do you serve?"],
  },
  {
    id: "why-006",
    category: "why-choose-ab-consul",
    keywords: ["technical drag", "technical debt", "reduce debt", "legacy problems", "bottleneck"],
    answer: "We specialize in eliminating 'technical drag' — the silent tax on growth caused by fragile systems, legacy debt, and misaligned architecture. We transform complex stacks into high-performance assets that scale without linear cost increases.",
    followUps: ["What is data and engineering?", "What is the discovery phase?"],
  },
];
