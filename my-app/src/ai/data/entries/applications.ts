import type { KnowledgeEntry } from "../../types/knowledge";

export const mvpEntries: KnowledgeEntry[] = [
  {
    id: "mvp-001",
    category: "mvp-development",
    keywords: ["mvp", "minimum viable product", "build mvp", "mvp development", "startup mvp", "launch mvp"],
    answer: "We help startups design and build MVPs that validate market fit fast — focused on core user journeys, scalable architecture, and metrics that matter. MVPs are built to evolve into production systems, not throwaway prototypes.",
    followUps: ["How long does an MVP take?", "What is your development process?", "What does an MVP cost?"],
    priority: 2,
  },
  {
    id: "mvp-002",
    category: "mvp-development",
    keywords: ["mvp timeline", "how long mvp", "mvp duration", "weeks to build mvp", "mvp time frame"],
    answer: "MVP timelines depend on scope and complexity. A focused single-platform MVP typically ranges from 6–12 weeks; more complex multi-service MVPs may take 3–4 months. We define a clear scope during Discovery before committing to timelines.",
    followUps: ["What is the discovery phase?", "How do I get started?"],
  },
  {
    id: "mvp-003",
    category: "mvp-development",
    keywords: ["mvp cost", "mvp price", "how much mvp", "mvp budget", "affordable mvp"],
    answer: "MVP investments vary by scope. Our service tiers start at $2k for focused engagements; fuller MVP builds are scoped during consultation. We bill for value created, not hours — use our pricing calculator at ab-consul.com/pricing for estimates.",
    followUps: ["What is your pricing philosophy?", "Can I book a consultation?"],
  },
  {
    id: "mvp-004",
    category: "mvp-development",
    keywords: ["prototype", "proof of concept", "poc", "validate idea", "idea stage"],
    answer: "For idea-stage founders, we offer select engagements when the technical challenge is unique. We focus on rapid validation — proving core assumptions before scaling investment into full product development.",
    followUps: ["Do you work with pre-seed startups?", "What is the consultation process?"],
  },
  {
    id: "mvp-005",
    category: "mvp-development",
    keywords: ["mvp features", "what to include mvp", "mvp scope", "core features", "feature prioritization"],
    answer: "We help prioritize MVP features around the smallest set that delivers measurable user value and testable business hypotheses. Scope is defined collaboratively during Strategy — avoiding feature bloat that delays launch.",
    followUps: ["What is your development process?", "Do you offer UI/UX design?"],
  },
  {
    id: "mvp-006",
    category: "mvp-development",
    keywords: ["mvp tech stack", "technology for mvp", "best stack startup", "modern mvp stack"],
    answer: "We typically recommend modern, proven stacks — React/Next.js for web, React Native or native for mobile, and cloud-native backends on AWS. The exact stack depends on your scalability requirements, team, and time-to-market goals.",
    followUps: ["What technologies do you use?", "Do you offer cloud solutions?"],
  },
];

export const erpEntries: KnowledgeEntry[] = [
  {
    id: "erp-001",
    category: "erp-systems",
    keywords: ["erp", "enterprise resource planning", "erp system", "erp development", "custom erp"],
    answer: "We design and build custom ERP systems and extend existing platforms to unify finance, operations, inventory, HR, and reporting. Our ERP work emphasizes modular architecture, role-based access, and integrations with your existing tools.",
    followUps: ["Do you offer business process automation?", "What is your development process?"],
    priority: 2,
  },
  {
    id: "erp-002",
    category: "erp-systems",
    keywords: ["erp integration", "connect erp", "erp api", "sap integration", "odoo", "dynamics"],
    answer: "We integrate ERP systems with CRMs, payment gateways, warehouses, and custom applications via robust APIs and event-driven architectures — ensuring data consistency and real-time operational visibility.",
    followUps: ["Do you offer API integrations?", "What industries do you serve?"],
  },
  {
    id: "erp-003",
    category: "erp-systems",
    keywords: ["erp migration", "legacy erp", "modernize erp", "erp upgrade", "replace erp"],
    answer: "We modernize legacy ERP environments with zero-downtime migration strategies, data integrity validation, and phased rollouts — minimizing disruption to daily operations while improving performance and maintainability.",
    followUps: ["What is data and engineering?", "How long do migrations take?"],
  },
  {
    id: "erp-004",
    category: "erp-systems",
    keywords: ["inventory management", "supply chain system", "warehouse management", "procurement system"],
    answer: "Our ERP capabilities include inventory, supply chain, and procurement modules tailored to your workflows — with automation, reporting dashboards, and multi-location support built in from the start.",
    followUps: ["What is business process automation?", "What cloud platforms do you use?"],
  },
  {
    id: "erp-005",
    category: "erp-systems",
    keywords: ["erp cost", "erp pricing", "how much erp", "erp budget"],
    answer: "ERP projects are scoped based on modules, integrations, and user complexity. Engagements typically start at $2k for focused modules; enterprise-wide systems are quoted after Discovery. Contact us for a tailored estimate.",
    followUps: ["What is your pricing philosophy?", "How do I schedule a consultation?"],
  },
];

export const webEntries: KnowledgeEntry[] = [
  {
    id: "web-001",
    category: "web-applications",
    keywords: ["web application", "web app", "web development", "website development", "portal development"],
    answer: "We build performant, scalable web applications — customer portals, SaaS platforms, internal dashboards, and marketing sites — using modern frameworks like React and Next.js with a focus on speed, SEO, and maintainability.",
    followUps: ["What technologies do you use?", "Do you offer UI/UX design?"],
    priority: 2,
  },
  {
    id: "web-002",
    category: "web-applications",
    keywords: ["saas", "software as a service", "multi tenant", "subscription platform", "saas development"],
    answer: "We specialize in multi-tenant SaaS architecture — including billing, RBAC, usage metering, and tenant isolation. Our Monetization Architecture practice is built for SaaS revenue models.",
    followUps: ["Tell me about monetization architecture", "What is your pricing approach?"],
  },
  {
    id: "web-003",
    category: "web-applications",
    keywords: ["dashboard", "admin panel", "internal tool", "back office", "operations dashboard"],
    answer: "We build internal dashboards and admin tools that give teams real-time visibility into operations, revenue, and customer data — designed for the workflows your team actually uses.",
    followUps: ["Do you offer business process automation?", "What is digital enablement?"],
  },
  {
    id: "web-004",
    category: "web-applications",
    keywords: ["responsive web", "mobile friendly website", "progressive web app", "pwa"],
    answer: "All our web applications are built mobile-first and fully responsive. Where appropriate, we implement Progressive Web App capabilities for offline access and app-like experiences without app store distribution.",
    followUps: ["Do you build mobile applications?", "What is your UI/UX approach?"],
  },
  {
    id: "web-005",
    category: "web-applications",
    keywords: ["ecommerce", "e-commerce", "online store", "marketplace", "payment checkout"],
    answer: "We build e-commerce platforms and marketplaces with secure checkout, inventory management, and payment integrations (Stripe and regional gateways). Architecture supports high-volume transaction processing.",
    followUps: ["Do you offer API integrations?", "What is fintech growth?"],
  },
];

export const mobileEntries: KnowledgeEntry[] = [
  {
    id: "mob-001",
    category: "mobile-applications",
    keywords: ["mobile app", "mobile application", "mobile development", "ios android", "app development"],
    answer: "We develop native and cross-platform mobile applications for iOS and Android — customer-facing apps, field operations tools, and fintech wallets — with emphasis on performance, security, and offline capability.",
    followUps: ["What technologies do you use?", "Do you build fintech apps?"],
    priority: 2,
  },
  {
    id: "mob-002",
    category: "mobile-applications",
    keywords: ["react native", "cross platform app", "flutter", "hybrid app"],
    answer: "We use React Native and modern cross-platform approaches when speed-to-market and shared codebase are priorities. Native development is recommended when platform-specific performance or features are critical.",
    followUps: ["What is your development process?", "How long does a mobile app take?"],
  },
  {
    id: "mob-003",
    category: "mobile-applications",
    keywords: ["mobile wallet", "payment app", "fintech app", "crypto wallet app"],
    answer: "Our fintech mobile expertise includes digital wallets, payment apps, and crypto wallet interfaces — built with security-first architecture, KYC integration, and compliance considerations for target markets.",
    followUps: ["What is fintech and crypto growth?", "What industries do you serve?"],
  },
  {
    id: "mob-004",
    category: "mobile-applications",
    keywords: ["app store", "publish app", "app deployment", "ios release", "android release"],
    answer: "We handle app store submission, release management, and post-launch updates as part of our Iteration phase — including crash monitoring, analytics integration, and phased rollouts.",
    followUps: ["What is the iteration phase?", "Do you offer DevOps?"],
  },
  {
    id: "mob-005",
    category: "mobile-applications",
    keywords: ["mobile app cost", "app development price", "how much mobile app", "app budget"],
    answer: "Mobile app costs depend on platforms, features, and integrations. Focused apps start in our $2k+ tier; complex multi-platform products are scoped during consultation. We provide transparent estimates after Discovery.",
    followUps: ["What is your pricing philosophy?", "How do I get started?"],
  },
];
