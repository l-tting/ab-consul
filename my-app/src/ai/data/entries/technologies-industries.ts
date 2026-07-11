import type { KnowledgeEntry } from "../../types/knowledge";

export const technologyEntries: KnowledgeEntry[] = [
  {
    id: "tech-001",
    category: "technologies",
    keywords: ["technology stack", "tech stack", "technologies", "what tech", "programming languages", "frameworks"],
    answer: "We use modern, industry-standard technologies: React, Next.js, Node.js, TypeScript, React Native, AWS, Stripe, HubSpot, and Snowflake — among others. Stack selection is always driven by your scalability, team, and business requirements.",
    followUps: ["Do you use AWS?", "What is your development process?"],
    priority: 3,
  },
  {
    id: "tech-002",
    category: "technologies",
    keywords: ["react", "next.js", "nextjs", "javascript", "typescript", "frontend"],
    answer: "Our frontend practice centers on React and Next.js with TypeScript — delivering fast, SEO-friendly, maintainable web applications with excellent developer experience and production performance.",
    followUps: ["Do you build web applications?", "Do you offer UI/UX design?"],
  },
  {
    id: "tech-003",
    category: "technologies",
    keywords: ["node.js", "nodejs", "backend", "server side", "api backend"],
    answer: "We build scalable backends with Node.js and modern runtime patterns — RESTful and event-driven APIs, background workers, and database layers designed for growth.",
    followUps: ["Do you offer API integrations?", "What cloud platforms do you use?"],
  },
  {
    id: "tech-004",
    category: "technologies",
    keywords: ["database", "postgres", "postgresql", "mongodb", "sql", "data storage"],
    answer: "We work with PostgreSQL, MongoDB, and cloud-native data stores depending on workload — prioritizing data integrity, query performance, and migration paths as your data grows.",
    followUps: ["What is data and engineering?", "Do you offer cloud solutions?"],
  },
  {
    id: "tech-005",
    category: "technologies",
    keywords: ["snowflake", "data warehouse", "analytics platform", "bi tools"],
    answer: "We implement analytics and data warehouse solutions using platforms like Snowflake — enabling leadership teams to query business data reliably and build data-driven decision workflows.",
    followUps: ["What is digital enablement?", "Do you automate reporting?"],
  },
  {
    id: "tech-006",
    category: "technologies",
    keywords: ["stripe", "payments technology", "payment processing tech"],
    answer: "Stripe is a trusted partner in our payment integrations — we implement checkout, subscriptions, usage-based billing, and webhook-driven reconciliation for SaaS and e-commerce clients.",
    followUps: ["What is monetization architecture?", "Do you build fintech apps?"],
  },
  {
    id: "tech-007",
    category: "technologies",
    keywords: ["hubspot", "crm technology", "marketing automation tech"],
    answer: "We integrate HubSpot and similar CRM platforms into your sales and marketing workflows — connecting lead capture, pipeline management, and customer data with your product and operations stack.",
    followUps: ["Do you offer API integrations?", "What is digital enablement?"],
  },
  {
    id: "tech-008",
    category: "technologies",
    keywords: ["ai tools", "machine learning", "artificial intelligence", "ai integration", "automation ai"],
    answer: "We embed practical AI and automation into products and operations — personalization engines, decision support, and workflow intelligence — always tied to measurable business outcomes, not hype.",
    followUps: ["What is digital enablement?", "What is fintech growth?"],
  },
];

export const industryEntries: KnowledgeEntry[] = [
  {
    id: "ind-001",
    category: "industries",
    keywords: ["industries", "sectors", "verticals", "what industries", "who do you serve"],
    answer: "We serve FinTech & Payments, Enterprise SaaS, HealthTech, crypto and digital finance, and growth-stage startups across Africa and global markets. Domain expertise informs every architectural decision.",
    followUps: ["Tell me about fintech expertise", "Do you work in healthcare?"],
    priority: 2,
  },
  {
    id: "ind-002",
    category: "industries",
    keywords: ["fintech industry", "payments industry", "banking", "digital finance", "financial services"],
    answer: "FinTech is a core vertical — our partners have closed $65M+ in deals and onboarded 500k+ users across digital payment platforms. We understand compliance, transaction integrity, and capital pipeline architecture.",
    followUps: ["What is fintech and crypto growth?", "What is monetization architecture?"],
  },
  {
    id: "ind-003",
    category: "industries",
    keywords: ["saas industry", "enterprise software", "b2b saas", "software companies"],
    answer: "Enterprise SaaS is a key focus — multi-tenant architecture, monetization engines, RBAC, global data residency, and automated billing lifecycles for tier-one enterprise contracts.",
    followUps: ["Tell me about monetization architecture", "Do you build SaaS platforms?"],
  },
  {
    id: "ind-004",
    category: "industries",
    keywords: ["healthtech", "healthcare", "hipaa", "medical software", "health data"],
    answer: "In HealthTech, we build encrypted architectures with immutable audit logs and strict PII handling — designed to satisfy institutional security reviews and HIPAA-aligned governance where required.",
    followUps: ["How do you handle security?", "What is your development process?"],
  },
  {
    id: "ind-005",
    category: "industries",
    keywords: ["africa", "african markets", "sub-saharan", "emerging markets", "kenya"],
    answer: "We have deep experience across Sub-Saharan Africa and 20+ countries — navigating regulatory environments, payment infrastructure, and localized GTM for fintech and digital services expansion.",
    followUps: ["What is market penetration?", "What is fintech growth?"],
  },
  {
    id: "ind-006",
    category: "industries",
    keywords: ["crypto", "blockchain", "exchange", "web3", "digital assets"],
    answer: "Our crypto and digital asset experience spans exchange growth, wallet products, derivatives, and tokenization — with partners including global exchanges and payment networks.",
    followUps: ["What is fintech and crypto growth?", "What technologies do you use?"],
  },
];
