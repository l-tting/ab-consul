import type { KnowledgeEntry } from "../../types/knowledge";

export const processEntries: KnowledgeEntry[] = [
  {
    id: "proc-001",
    category: "development-process",
    keywords: ["development process", "how do you work", "methodology", "project process", "lifecycle", "how projects work"],
    answer: "Our process follows four continuous phases: Discovery (validate problems and market fit), Strategy (roadmap, architecture, workflows), Execution (agile build with continuous testing), and Iteration (monitoring, maintenance, and scaling updates).",
    followUps: ["What happens in discovery?", "How long does a project take?"],
    priority: 3,
  },
  {
    id: "proc-002",
    category: "development-process",
    keywords: ["discovery", "discovery phase", "first phase", "initial assessment", "business audit"],
    answer: "Discovery identifies the problems and bottlenecks you face and validates that proposed solutions will work in your market. We perform a deep-dive business and technical audit before recommending any build.",
    followUps: ["What is the strategy phase?", "How soon can we start?"],
    priority: 2,
  },
  {
    id: "proc-003",
    category: "development-process",
    keywords: ["strategy phase", "roadmap", "architecture planning", "technical roadmap", "system architecture"],
    answer: "Strategy produces a revised technical roadmap, system architecture, operational workflows, and detailed user journeys — aligned with your P&L goals and growth targets before development begins.",
    followUps: ["What is the execution phase?", "Do you offer UI/UX design?"],
  },
  {
    id: "proc-004",
    category: "development-process",
    keywords: ["execution", "execution phase", "development phase", "build phase", "agile development"],
    answer: "Execution uses agile methodologies to deliver working software in iterative sprints — with continuous testing to identify and fix technical and user gaps before they reach production.",
    followUps: ["What is the iteration phase?", "Do you offer DevOps?"],
  },
  {
    id: "proc-005",
    category: "development-process",
    keywords: ["iteration", "iteration phase", "post launch", "maintenance", "support after launch"],
    answer: "Iteration covers post-launch monitoring, maintenance, and updates based on user feedback as you scale. We treat launch as the beginning of optimization, not the end of engagement.",
    followUps: ["Do you offer ongoing advisory?", "How do I get started?"],
  },
  {
    id: "proc-006",
    category: "development-process",
    keywords: ["agile", "scrum", "sprints", "iterative delivery", "incremental delivery"],
    answer: "We practice agile delivery with short sprints, regular demos, and continuous stakeholder feedback — ensuring alignment and reducing the risk of building the wrong product.",
    followUps: ["What is your development process?", "How long are sprints?"],
  },
  {
    id: "proc-007",
    category: "development-process",
    keywords: ["testing", "qa", "quality assurance", "test driven", "continuous testing"],
    answer: "Quality is built in throughout Execution — automated tests, manual QA, and user acceptance validation ensure components work correctly before release. We don't treat testing as an afterthought.",
    followUps: ["Do you offer DevOps?", "What happens after launch?"],
  },
  {
    id: "proc-008",
    category: "development-process",
    keywords: ["project management", "communication", "updates", "reporting progress", "transparency"],
    answer: "You receive direct partner access with regular progress updates, demo sessions, and transparent reporting. We don't hide behind account managers — you work with the architects doing the work.",
    followUps: ["Why choose AB Consul?", "How do I book a call?"],
  },
];

export const timelineEntries: KnowledgeEntry[] = [
  {
    id: "time-001",
    category: "project-timelines",
    keywords: ["timeline", "how long", "project duration", "delivery time", "time frame", "schedule"],
    answer: "Project timelines vary by scope. Focused audits or modules may take 2–6 weeks; MVPs typically 6–12 weeks; enterprise systems 3–6+ months. We provide a clear timeline after Discovery and never commit to dates before scope is defined.",
    followUps: ["How long does an MVP take?", "How soon can we start?"],
    priority: 2,
  },
  {
    id: "time-002",
    category: "project-timelines",
    keywords: ["how soon start", "when can we start", "lead time", "availability", "start date"],
    answer: "We typically have a 2-week lead time for new engagements. Urgent technical audits can be fast-tracked within 48 hours. Contact us to confirm current availability for your timeline.",
    followUps: ["What is the consultation process?", "How do I contact you?"],
    priority: 2,
  },
  {
    id: "time-003",
    category: "project-timelines",
    keywords: ["audit timeline", "how long audit", "technical audit duration", "assessment time"],
    answer: "A focused technical audit typically takes 1–2 weeks. Comprehensive business and architecture audits may take 2–4 weeks depending on system complexity and stakeholder availability.",
    followUps: ["What happens after an audit?", "What is discovery?"],
  },
  {
    id: "time-004",
    category: "project-timelines",
    keywords: ["web app timeline", "how long web app", "website project duration"],
    answer: "A standard web application typically takes 8–16 weeks from Strategy through launch. Complex SaaS platforms with billing and multi-tenancy may require 4–6 months. Scope is confirmed during Discovery.",
    followUps: ["Do you build SaaS platforms?", "What is your development process?"],
  },
  {
    id: "time-005",
    category: "project-timelines",
    keywords: ["erp timeline", "erp implementation time", "how long erp project"],
    answer: "ERP implementations range from 2–3 months for focused modules to 6–12 months for enterprise-wide rollouts. Phased delivery allows you to realize value before the full system is complete.",
    followUps: ["What ERP services do you offer?", "What is the execution phase?"],
  },
  {
    id: "time-006",
    category: "project-timelines",
    keywords: ["rush project", "urgent project", "fast delivery", "accelerated timeline", "deadline"],
    answer: "We can discuss accelerated timelines for urgent engagements — particularly technical audits (48-hour fast-track available). Rush delivery may affect scope prioritization; we'll be transparent about trade-offs during consultation.",
    followUps: ["How soon can we start?", "How do I book a consultation?"],
  },
];
