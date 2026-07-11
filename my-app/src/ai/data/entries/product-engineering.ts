import type { KnowledgeEntry } from "../../types/knowledge";

export const cloudEntries: KnowledgeEntry[] = [
  {
    id: "cld-001",
    category: "cloud-solutions",
    keywords: ["cloud", "cloud solutions", "cloud infrastructure", "cloud migration", "move to cloud"],
    answer: "We design and implement cloud infrastructure on AWS and other leading platforms — including migration, auto-scaling, cost optimization, and security hardening. Cloud architecture is built for resilience and operational leverage.",
    followUps: ["Do you offer DevOps?", "What technologies do you use?"],
    priority: 2,
  },
  {
    id: "cld-002",
    category: "cloud-solutions",
    keywords: ["aws", "amazon web services", "aws architecture", "aws deployment"],
    answer: "AWS is a core part of our cloud practice — we design serverless and containerized architectures, manage IAM and networking, and optimize costs using industry-standard AWS services.",
    followUps: ["What is DevOps?", "Do you handle cloud security?"],
  },
  {
    id: "cld-003",
    category: "cloud-solutions",
    keywords: ["cloud security", "security compliance", "data residency", "encryption", "secure cloud"],
    answer: "Security is embedded in every cloud engagement — encryption at rest and in transit, IAM policies, audit logging, and compliance alignment (PCI-DSS, HIPAA considerations where applicable). All client data is handled under strict confidentiality.",
    followUps: ["Are engagements NDA protected?", "What industries do you serve?"],
  },
  {
    id: "cld-004",
    category: "cloud-solutions",
    keywords: ["serverless", "lambda", "cloud native", "microservices cloud", "kubernetes", "k8s"],
    answer: "We build cloud-native and serverless architectures using containers, Kubernetes, and managed services — enabling elastic scale without linear infrastructure cost increases.",
    followUps: ["What is data and engineering?", "What is DevOps?"],
  },
  {
    id: "cld-005",
    category: "cloud-solutions",
    keywords: ["cloud cost", "reduce cloud spend", "cloud optimization", "finops", "cloud billing"],
    answer: "Cloud cost optimization is part of our Digital Enablement practice. We audit usage, right-size resources, implement auto-scaling, and architect for efficiency — typically achieving significant OpEx reductions.",
    followUps: ["What is digital enablement?", "What is capital efficiency?"],
  },
];

export const uiUxEntries: KnowledgeEntry[] = [
  {
    id: "ux-001",
    category: "ui-ux-design",
    keywords: ["ui ux", "ui/ux", "user experience", "user interface", "ux design", "product design"],
    answer: "Our UI/UX practice delivers user-centered design aligned with business outcomes — user research, wireframes, high-fidelity prototypes, and design systems that accelerate development and ensure consistency.",
    followUps: ["What is your development process?", "Do you build web applications?"],
    priority: 2,
  },
  {
    id: "ux-002",
    category: "ui-ux-design",
    keywords: ["wireframe", "prototype", "figma", "design system", "mockup"],
    answer: "We produce wireframes, interactive prototypes, and scalable design systems before development begins — reducing rework and ensuring stakeholders align on user journeys early in the Strategy phase.",
    followUps: ["What happens in the strategy phase?", "How long does design take?"],
  },
  {
    id: "ux-003",
    category: "ui-ux-design",
    keywords: ["user research", "usability testing", "user testing", "customer journey", "user journey"],
    answer: "User research and journey mapping are integral to our Discovery and Strategy phases. We validate assumptions with real user flows before committing engineering resources to build.",
    followUps: ["What is the discovery phase?", "Do you build MVPs?"],
  },
  {
    id: "ux-004",
    category: "ui-ux-design",
    keywords: ["accessibility", "wcag", "inclusive design", "a11y", "accessible design"],
    answer: "We design and build with accessibility in mind — WCAG-aligned interfaces, semantic structure, keyboard navigation, and inclusive patterns that improve usability for all users.",
    followUps: ["Do you build web applications?", "What technologies do you use?"],
  },
];

export const devopsEntries: KnowledgeEntry[] = [
  {
    id: "dev-001",
    category: "devops",
    keywords: ["devops", "ci cd", "cicd", "continuous integration", "continuous deployment", "pipeline"],
    answer: "Our DevOps practice implements CI/CD pipelines, infrastructure as code, automated testing, and monitoring — enabling reliable, frequent releases with minimal manual intervention.",
    followUps: ["What cloud platforms do you use?", "What is your development process?"],
    priority: 2,
  },
  {
    id: "dev-002",
    category: "devops",
    keywords: ["monitoring", "observability", "logging", "alerting", "uptime", "site reliability"],
    answer: "We set up monitoring, logging, and alerting stacks for production systems — targeting high availability (99.9%+ resilience) with proactive incident detection and runbook documentation.",
    followUps: ["What happens in the iteration phase?", "Do you offer ongoing support?"],
  },
  {
    id: "dev-003",
    category: "devops",
    keywords: ["docker", "containerization", "terraform", "infrastructure as code", "iac"],
    answer: "We use Docker, Terraform, and infrastructure-as-code practices to make environments reproducible, auditable, and easy to scale — reducing configuration drift and deployment risk.",
    followUps: ["What is cloud solutions?", "What is data and engineering?"],
  },
  {
    id: "dev-004",
    category: "devops",
    keywords: ["deployment", "release management", "staging production", "environment setup"],
    answer: "We establish staging and production environments with gated release processes — blue-green deployments, feature flags, and rollback strategies to protect live users during updates.",
    followUps: ["What is the execution phase?", "How do you handle post-launch support?"],
  },
];

export const automationEntries: KnowledgeEntry[] = [
  {
    id: "auto-001",
    category: "business-automation",
    keywords: ["business process automation", "bpa", "workflow automation", "automate processes", "operational automation"],
    answer: "We automate repetitive business processes — approvals, data entry, reporting, notifications, and cross-system workflows — reducing manual effort and error rates while improving operational visibility.",
    followUps: ["What is digital enablement?", "Do you integrate with existing tools?"],
    priority: 2,
  },
  {
    id: "auto-002",
    category: "business-automation",
    keywords: ["rpa", "robotic process automation", "task automation", "manual work automation"],
    answer: "Where appropriate, we implement workflow and task automation connecting your CRM, ERP, spreadsheets, and communication tools — eliminating bottlenecks that slow revenue and operations teams.",
    followUps: ["Do you offer ERP systems?", "What is your consulting methodology?"],
  },
  {
    id: "auto-003",
    category: "business-automation",
    keywords: ["reporting automation", "dashboard automation", "data pipeline", "etl", "data sync"],
    answer: "We build automated data pipelines and reporting systems that sync information across platforms in real time — giving leadership accurate, timely metrics without manual consolidation.",
    followUps: ["What is data and engineering?", "What technologies do you use?"],
  },
];

export const apiEntries: KnowledgeEntry[] = [
  {
    id: "api-001",
    category: "api-integrations",
    keywords: ["api integration", "api development", "third party integration", "connect systems", "system integration"],
    answer: "We design and build RESTful and event-driven APIs, and integrate third-party services — payment gateways, CRMs, ERPs, analytics, and communication platforms — with robust error handling and documentation.",
    followUps: ["Do you work with Stripe?", "What is your development process?"],
    priority: 2,
  },
  {
    id: "api-002",
    category: "api-integrations",
    keywords: ["stripe", "payment integration", "payment gateway", "hubspot integration", "crm integration"],
    answer: "We integrate industry-standard platforms including Stripe, HubSpot, Snowflake, and AWS services — ensuring secure authentication, webhook handling, and data consistency across systems.",
    followUps: ["What technologies do you use?", "Do you build fintech solutions?"],
  },
  {
    id: "api-003",
    category: "api-integrations",
    keywords: ["webhook", "rest api", "graphql", "api design", "microservices api"],
    answer: "Our API design follows best practices — versioning, authentication, rate limiting, and clear documentation. We support REST, GraphQL, and webhook patterns depending on integration requirements.",
    followUps: ["What is data and engineering?", "Do you offer DevOps?"],
  },
];
