import type { KnowledgeEntry } from "../../types/knowledge";

/** Expanded consulting topics — discovery, architecture, transformation, scalability, etc. */
export const consultingTopicEntries: KnowledgeEntry[] = [
  {
    id: "topic-001",
    category: "development-process",
    intent: "discovery workshop",
    keywords: [
      "discovery workshop",
      "workshop",
      "discovery session",
      "requirements workshop",
      "scoping workshop",
      "kickoff workshop",
    ],
    answer:
      "Our discovery workshops are structured sessions — typically 1–2 days — where we map business goals, user journeys, technical constraints, and success metrics before any build begins. You leave with validated scope, risk flags, and a recommended roadmap.",
    followUps: ["What happens in discovery?", "How long does a project take?"],
    priority: 2,
  },
  {
    id: "topic-002",
    category: "development-process",
    intent: "software architecture",
    keywords: [
      "software architecture",
      "system architecture",
      "architecture design",
      "technical architecture",
      "solution architecture",
      "architectural design",
    ],
    answer:
      "We design software architecture around your revenue model, team capabilities, and scale targets — choosing modular boundaries, integration patterns, and data flows that support growth without costly rewrites. Architecture decisions are documented and aligned with stakeholders before Execution.",
    followUps: ["What is the strategy phase?", "Do you offer technical audits?"],
    priority: 2,
  },
  {
    id: "topic-003",
    category: "services",
    intent: "digital transformation",
    keywords: [
      "digital transformation",
      "digitize business",
      "digital strategy",
      "modernize business",
      "digital modernization",
      "transform operations",
    ],
    answer:
      "Digital transformation at AB Consul means embedding data, automation, and modern software into core operations — reducing manual overhead, improving decision speed, and creating platforms that scale with revenue. We start with an operational audit to prioritize high-ROI initiatives.",
    followUps: ["Do you offer business process automation?", "What is digital enablement?"],
    priority: 2,
  },
  {
    id: "topic-004",
    category: "cloud-solutions",
    intent: "scalability planning",
    keywords: [
      "scalability",
      "scale application",
      "handle growth",
      "high traffic",
      "performance at scale",
      "scaling strategy",
    ],
    answer:
      "Scalability planning identifies bottlenecks before they become outages — database design, caching, async processing, and infrastructure elasticity. We architect for your 12–24 month growth targets, not just today's user count.",
    followUps: ["What cloud platforms do you use?", "Do you offer DevOps?"],
  },
  {
    id: "topic-005",
    category: "development-process",
    intent: "maintenance and support",
    keywords: [
      "maintenance",
      "ongoing support",
      "support after launch",
      "post launch support",
      "software maintenance",
      "bug fixes",
      "application support",
    ],
    answer:
      "Post-launch, we offer maintenance and iterative support — monitoring, bug fixes, security patches, and feature enhancements driven by user feedback. Many clients transition into fractional advisory for sustained technical leadership.",
    followUps: ["What is the iteration phase?", "Do you offer fractional advisory?"],
  },
  {
    id: "topic-006",
    category: "technologies",
    intent: "technology selection",
    keywords: [
      "technology selection",
      "choose technology",
      "pick tech stack",
      "stack selection",
      "which framework",
      "best technology",
      "tech stack advice",
    ],
    answer:
      "Technology selection follows business requirements: time-to-market, team skills, compliance, integration needs, and 2-year scale projections. We recommend proven stacks — React/Next.js, Node.js, TypeScript, AWS — and explain trade-offs in plain language.",
    followUps: ["What technologies do you use?", "Do you build mobile apps?"],
    priority: 2,
  },
  {
    id: "topic-007",
    category: "services",
    intent: "enterprise solutions",
    keywords: [
      "enterprise solutions",
      "enterprise software",
      "enterprise development",
      "large scale systems",
      "enterprise platform",
      "corporate software",
    ],
    answer:
      "Enterprise solutions require robust access control, audit trails, integration with legacy systems, and phased rollouts that minimize operational disruption. We bring experience in fintech, logistics, and multi-geography deployments across African and global markets.",
    followUps: ["Do you build ERP systems?", "What is data and engineering?"],
  },
  {
    id: "topic-008",
    category: "mvp-development",
    intent: "mvp strategy",
    keywords: [
      "mvp strategy",
      "mvp planning",
      "mvp approach",
      "go to market mvp",
      "mvp roadmap",
      "validate product",
    ],
    answer:
      "MVP strategy defines the smallest product that tests your core hypothesis — who the user is, what pain you solve, and what metric proves traction. We help founders avoid feature bloat and build architecture that survives post-PMF scaling.",
    followUps: ["How long does an MVP take?", "What features should an MVP include?"],
    priority: 2,
  },
  {
    id: "topic-009",
    category: "development-process",
    intent: "quality assurance approach",
    keywords: [
      "qa approach",
      "testing strategy",
      "test strategy",
      "quality strategy",
      "how do you test",
      "testing methodology",
    ],
    answer:
      "Quality assurance is embedded throughout Execution — unit and integration tests, automated CI pipelines, manual QA for critical flows, and user acceptance validation before release. We treat defects as business risk, not just technical bugs.",
    followUps: ["Do you offer DevOps?", "What is the execution phase?"],
  },
  {
    id: "topic-010",
    category: "devops",
    intent: "deployment strategy",
    keywords: [
      "deployment strategy",
      "release strategy",
      "go live",
      "production launch",
      "launch strategy",
      "rollout plan",
    ],
    answer:
      "Deployment strategy includes staging environments, gated releases, blue-green deployments, feature flags, and rollback plans — so updates reach users safely. We align release cadence with your team's capacity and business risk tolerance.",
    followUps: ["Do you offer CI/CD?", "What happens after launch?"],
  },
  {
    id: "topic-011",
    category: "pricing-philosophy",
    intent: "pricing philosophy overview",
    keywords: [
      "how do you price",
      "pricing model",
      "engagement model",
      "commercial model",
      "fee structure",
    ],
    answer:
      "We use value-based pricing tied to scope and outcomes — fixed-scope audits and builds, with optional advisory retainers for ongoing partnership. Every proposal defines deliverables, timeline, and investment before work begins.",
    followUps: ["What services start at $2k?", "How do I get a quote?"],
    priority: 2,
  },
  {
    id: "topic-012",
    category: "project-timelines",
    intent: "project timeline estimation",
    keywords: [
      "how long project",
      "project duration",
      "delivery time",
      "time to deliver",
      "how fast can you build",
      "project length",
    ],
    answer:
      "Project timelines range from 2-week audits to multi-month platform builds. MVPs typically run 6–12 weeks; ERP implementations 3–6 months depending on modules and integrations. We commit to dates only after Discovery defines scope.",
    followUps: ["MVP timeline?", "What is discovery?", "Book a consultation"],
    priority: 2,
  },
];
