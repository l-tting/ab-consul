import type { ConsultantContent, ProjectFocus } from "../types/consultant";
import type { KnowledgeCategory, KnowledgeEntry } from "../types/knowledge";

type PartialConsultant = Partial<ConsultantContent>;

/** Category-level consultant voice — applied to every entry in that category. */
export const CATEGORY_CONSULTANT: Partial<
  Record<KnowledgeCategory, PartialConsultant>
> = {
  "company-overview": {
    acknowledgments: [
      "Good question — let me give you the straight picture on who we are.",
      "Happy to walk you through how AB Consul works and who we partner with.",
      "That's a fair place to start — here's how we think about our role with clients.",
    ],
    reasoning: [
      "We find the best partnerships happen when expectations are clear upfront — that's why we're direct about fit and approach.",
      "Our work sits at the intersection of business strategy and engineering execution, so context matters more than a generic pitch.",
    ],
    suggestionChips: [
      "What Services Do You Offer?",
      "Who Do You Work With?",
      "How Our Process Works",
      "Book a Consultation",
    ],
  },
  services: {
    acknowledgments: [
      "Let me break down what we actually deliver — and where it creates business value.",
      "Services can sound similar on paper; here's how we think about each capability in practice.",
      "Happy to clarify our offerings in terms of outcomes, not just deliverables.",
    ],
    reasoning: [
      "We scope engagements around measurable business impact — revenue, efficiency, or risk reduction — rather than feature lists alone.",
      "The right service depends on where you are in your growth curve and what's currently limiting scale.",
    ],
    suggestionChips: [
      "Estimate an MVP",
      "ERP Capabilities",
      "Pricing Approach",
      "Book a Consultation",
    ],
  },
  "pricing-philosophy": {
    acknowledgments: [
      "Pricing is one of the first things smart founders ask — and it deserves a clear answer.",
      "Great question on investment — let me explain how we think about pricing rather than giving you a number out of context.",
      "I appreciate you asking about cost upfront. Here's how we approach it as consultants.",
    ],
    reasoning: [
      "We price for outcomes because it aligns our incentives with yours — we're motivated to solve the problem efficiently, not bill more hours.",
      "Scope, complexity, integrations, timeline, and business goals all shift the investment — which is why a brief conversation usually saves time later.",
    ],
    businessContext: [
      "Most clients come to us when the cost of inaction — lost revenue, manual overhead, or technical debt — exceeds the cost of building properly.",
    ],
    suggestionChips: [
      "Estimate an MVP",
      "ERP Pricing",
      "Project Timeline",
      "Book a Consultation",
      "How Our Process Works",
    ],
  },
  "mvp-development": {
    acknowledgments: [
      "MVPs are where a lot of our startup conversations start — happy to share how we think about them.",
      "Building an MVP is as much a business decision as a technical one. Here's our perspective.",
      "Good timing to ask about MVPs — getting the scope right early saves months later.",
    ],
    reasoning: [
      "The goal isn't just to ship fast — it's to learn what matters to users and investors without building throwaway code.",
      "We design MVPs to evolve into production systems, so architecture choices at this stage still matter.",
    ],
    suggestionChips: [
      "MVP Timeline",
      "MVP Pricing",
      "Feature Prioritization",
      "Book a Consultation",
    ],
    contextualHooks: {
      mvp: "Since you're exploring an MVP, ",
      startup: "For an early-stage build like yours, ",
    },
  },
  "erp-systems": {
    acknowledgments: [
      "ERP questions usually come from real operational pain — scattered data, manual workflows, or systems that don't talk to each other.",
      "Before diving into features, it's worth understanding what an ERP actually solves for a business like yours.",
      "ERP decisions are high-stakes — let me explain the business case first.",
    ],
    reasoning: [
      "A well-designed ERP gives leadership a single source of truth across finance, inventory, and operations — which is where most scaling companies start to struggle.",
      "Custom vs. off-the-shelf depends on how unique your workflows are and whether you're optimizing for speed or long-term fit.",
    ],
    suggestionChips: [
      "ERP Pricing",
      "ERP Integration",
      "Legacy Migration",
      "Book a Consultation",
    ],
    contextualHooks: {
      erp: "Given your interest in ERP, ",
      enterprise: "At enterprise scale, ",
    },
  },
  "web-applications": {
    acknowledgments: [
      "Web platforms are often the core revenue engine — so the build strategy matters.",
      "Happy to talk through how we approach web application development from a business lens.",
    ],
    reasoning: [
      "The right web architecture balances time-to-market with the ability to scale users, features, and integrations without rewrites.",
    ],
    suggestionChips: ["MVP Strategy", "UI/UX Design", "Cloud Infrastructure", "Project Timeline"],
    contextualHooks: { web: "For your web platform, ", saas: "For a SaaS product, " },
  },
  "mobile-applications": {
    acknowledgments: [
      "Mobile apps introduce unique considerations around user experience, app store release, and ongoing maintenance.",
      "Let me share how we think about mobile builds in terms of business outcomes.",
    ],
    reasoning: [
      "Native vs. cross-platform is a business trade-off — speed and budget vs. performance and platform-specific features.",
    ],
    suggestionChips: ["App Store Launch", "MVP Timeline", "UI/UX Design", "Book a Consultation"],
    contextualHooks: { mobile: "For your mobile app, ", fintech: "In fintech, mobile UX and compliance both matter — " },
  },
  "cloud-solutions": {
    acknowledgments: [
      "Cloud decisions affect both your operating costs and your ability to scale — worth getting right early.",
      "Infrastructure isn't just an IT topic; it's a capital efficiency decision.",
    ],
    reasoning: [
      "We design cloud architecture around reliability, cost predictability, and the ability to grow without emergency re-architecture.",
    ],
    suggestionChips: ["DevOps & Deployment", "AWS Architecture", "Scalability Planning", "Book a Consultation"],
    contextualHooks: { cloud: "For your cloud setup, " },
  },
  "development-process": {
    acknowledgments: [
      "Process is where a lot of consulting relationships succeed or fail — here's how we work.",
      "Understanding our methodology helps set expectations for timelines, communication, and deliverables.",
    ],
    reasoning: [
      "We front-load discovery and strategy because fixing the wrong problem is the most expensive mistake in software projects.",
    ],
    suggestionChips: [
      "Discovery Workshop",
      "Project Timeline",
      "Quality Assurance",
      "Book a Consultation",
    ],
  },
  "project-timelines": {
    acknowledgments: [
      "Timelines are always tied to scope — let me give you realistic ranges rather than a generic answer.",
      "Duration depends heavily on what you're building and how much is already defined.",
    ],
    reasoning: [
      "We define scope in Discovery before committing to dates — that protects both sides from scope creep and missed deadlines.",
    ],
    suggestionChips: ["MVP Timeline", "ERP Timeline", "How Our Process Works", "Book a Consultation"],
  },
  "consultation-process": {
    acknowledgments: [
      "Getting started should feel straightforward — here's exactly what happens when you reach out.",
      "Happy to walk you through our intake process step by step.",
    ],
    reasoning: [
      "The consultation is designed to diagnose fit and outline a path forward — not to hard-sell a build you may not need yet.",
    ],
    suggestionChips: ["Book a Consultation", "What Happens in Discovery?", "Pricing Approach", "Contact Details"],
  },
  "contact-information": {
    acknowledgments: [
      "Absolutely — here's the best way to reach us.",
      "Happy to connect you with our team directly.",
    ],
    reasoning: [
      "A brief description of your challenge helps our partners prepare for a productive first conversation.",
    ],
    suggestionChips: ["Book a Consultation", "Consultation Process", "What Services Do You Offer?", "Pricing Approach"],
  },
  "why-choose-ab-consul": {
    acknowledgments: [
      "Fair question — here's what sets our approach apart from typical agencies.",
      "Choosing a partner is a business decision; let me explain our differentiation clearly.",
    ],
    reasoning: [
      "We work as fractional partners with skin in the game — senior architects on your account, not layered account management.",
    ],
    suggestionChips: ["Our Process", "Pricing Philosophy", "Book a Consultation", "Case Studies & Industries"],
  },
  faq: {
    acknowledgments: [
      "That's a common question — let me address it directly.",
      "Good to clarify this upfront.",
    ],
    reasoning: [
      "Fit matters on both sides — we'd rather be honest about whether we're the right partner than oversell.",
    ],
    suggestionChips: ["Who Do You Work With?", "MVP Development", "Book a Consultation", "Pricing Approach"],
  },
  technologies: {
    acknowledgments: [
      "Technology choices should follow business requirements — here's how we think about stack selection.",
    ],
    reasoning: [
      "We favor proven, maintainable technologies that your team can support long after launch.",
    ],
    suggestionChips: ["Technology Selection", "Cloud Infrastructure", "DevOps", "Book a Consultation"],
  },
  industries: {
    acknowledgments: [
      "Industry context shapes how we approach architecture, compliance, and go-to-market.",
    ],
    reasoning: [
      "Domain experience helps us anticipate regulatory, operational, and user-experience constraints early.",
    ],
    suggestionChips: ["Fintech Expertise", "Services Overview", "Book a Consultation", "Our Process"],
  },
  "ui-ux-design": {
    acknowledgments: [
      "Design is how users experience your business — it directly affects conversion and retention.",
    ],
    reasoning: [
      "We tie UX decisions to measurable outcomes: activation, completion rates, and support ticket volume.",
    ],
    suggestionChips: ["MVP Design", "Web Applications", "Book a Consultation", "Our Process"],
    contextualHooks: { uiux: "For your design needs, " },
  },
  devops: {
    acknowledgments: [
      "DevOps and deployment practices determine how safely and frequently you can ship improvements.",
    ],
    reasoning: [
      "Reliable pipelines reduce release risk and let your team focus on product instead of firefighting infrastructure.",
    ],
    suggestionChips: ["Cloud Infrastructure", "Deployment Strategy", "Maintenance & Support", "Book a Consultation"],
    contextualHooks: { devops: "For your deployment setup, " },
  },
  "business-automation": {
    acknowledgments: [
      "Automation is usually about reclaiming time and reducing errors in repetitive operational work.",
    ],
    reasoning: [
      "We prioritize automations with clear ROI — hours saved, error reduction, or faster decision cycles.",
    ],
    suggestionChips: ["ERP Systems", "Digital Transformation", "Pricing Approach", "Book a Consultation"],
    contextualHooks: { automation: "For your automation goals, " },
  },
  "api-integrations": {
    acknowledgments: [
      "Integrations are often the hidden complexity in modern software — getting them right keeps data trustworthy.",
    ],
    reasoning: [
      "Well-designed APIs and event flows prevent the sync issues and manual workarounds that slow teams down.",
    ],
    suggestionChips: ["ERP Integration", "Cloud Architecture", "Book a Consultation", "Project Timeline"],
    contextualHooks: { api: "For your integration needs, " },
  },
};

/** Entry-specific rich consultant content — overrides category defaults. */
export const ENTRY_CONSULTANT: Record<string, PartialConsultant> = {
  "co-006": {
    acknowledgments: [
      "Hello — great to meet you. I'm here to help you explore how AB Consul might fit your goals.",
      "Hi there! Think of me as a first conversation with our consulting team — ask me anything about services, process, or pricing.",
    ],
    explanations: [
      "AB Consul partners with growth-stage businesses on custom software, MVPs, ERP systems, and strategic consulting — always with an eye on measurable business outcomes rather than just shipping code.",
    ],
    followUpQuestions: [
      "What are you looking to build or improve in your business right now?",
      "Are you exploring a new product, scaling an existing platform, or solving an operational challenge?",
    ],
    suggestionChips: [
      "What Services Do You Offer?",
      "Estimate an MVP",
      "Pricing Approach",
      "Book a Consultation",
    ],
  },
  "price-001": {
    explanations: [
      "Our pricing reflects the value we create — not hours logged. Investment depends on project scope, complexity, integrations, timeline, and your business goals. A focused audit might start around $2k; a full ERP or multi-platform build is scoped individually.",
      "Rather than a flat rate card, we align fees to outcomes. Scope drives cost: number of user roles, integrations, compliance requirements, and how much discovery is still needed all factor in.",
    ],
    examples: [
      "For example, a lean MVP with one core workflow differs significantly from a multi-tenant SaaS platform with billing, admin dashboards, and third-party integrations.",
    ],
    considerations: [
      "We share transparent estimates after Discovery — no hidden fees, and you approve scope before Execution begins.",
    ],
    followUpQuestions: [
      "What are you planning to build? That helps me point you toward a realistic investment range.",
      "Do you have a rough timeline or budget range in mind?",
      "Is this a new product, an upgrade to existing systems, or an operational automation project?",
    ],
  },
  "erp-001": {
    explanations: [
      "Most businesses hit a point where spreadsheets and disconnected tools can't keep up — orders fall through cracks, inventory counts drift, and leadership lacks real-time visibility. An ERP unifies finance, operations, inventory, HR, and reporting into one system.",
      "We build custom ERP modules and extend platforms like Odoo or Dynamics when off-the-shelf fits most of your needs but not all. The focus is modular architecture, role-based access, and clean integrations with tools you already use.",
    ],
    examples: [
      "Common modules include inventory and procurement, multi-location warehouse management, financial reporting dashboards, and approval workflows tailored to how your team actually operates.",
    ],
    followUpQuestions: [
      "What type of business are you running, and how many locations or teams need access?",
      "Are you replacing a legacy system or building operations software from scratch?",
      "Which processes cause the most pain today — inventory, finance, procurement, or something else?",
    ],
  },
  "mvp-001": {
    explanations: [
      "An MVP should prove your core hypothesis with the smallest build that delivers real user value — not a stripped-down version of every feature you can imagine.",
      "We help founders prioritize ruthlessly: one or two critical user journeys, metrics that validate demand, and architecture that can grow into a production platform when traction hits.",
    ],
    followUpQuestions: [
      "What problem are you solving, and who is the first user you need to win over?",
      "Do you have a target launch window or fundraising milestone driving timing?",
    ],
  },
  "proc-001": {
    explanations: [
      "Our engagements move through four phases: Discovery (validate the problem and market fit), Strategy (roadmap, architecture, workflows), Execution (agile build with continuous testing), and Iteration (post-launch optimization and scaling).",
      "Discovery and Strategy are where we save clients the most money — by ensuring we build the right thing before writing production code.",
    ],
    followUpQuestions: [
      "Where are you in that journey — still validating the idea, ready to build, or scaling something already live?",
      "Would a discovery workshop be helpful to map scope before committing to a full build?",
    ],
  },
  "proc-002": {
    acknowledgments: [
      "Discovery is the phase most clients underestimate — and the one that pays off most.",
    ],
    explanations: [
      "In Discovery we run a structured business and technical audit: mapping bottlenecks, validating assumptions, and confirming that the proposed solution will work in your market before we recommend a build.",
    ],
    followUpQuestions: [
      "What's the main challenge you're trying to solve — revenue, operations, or product velocity?",
    ],
    suggestionChips: ["Discovery Workshop", "Project Timeline", "Book a Consultation", "Pricing Approach"],
  },
  "con-004": {
    explanations: [
      "Book a strategy call at ab-consul.com/contact — share a brief overview of your challenge and we'll schedule a focused session with our partners. Most calls run about an hour and end with clear next steps.",
    ],
    followUpQuestions: [
      "Would it help if I outlined what to prepare before the call?",
    ],
  },
  "consult-001": {
    explanations: [
      "Getting started is simple: submit an inquiry, we run an initial business audit, schedule a strategic alignment call with our partners, and deliver a roadmap with recommended next steps — all under confidentiality.",
    ],
    followUpQuestions: [
      "What stage is your project at today — idea, early build, or scaling an existing product?",
    ],
  },
};

const DEFAULT_ACKNOWLEDGMENTS = [
  "That's a thoughtful question — let me share how we typically advise clients on this.",
  "Happy to help with that — here's the consulting perspective.",
  "Good question. Let me explain this in practical business terms.",
  "I can walk you through this — we discuss it often with prospective clients.",
];

const DEFAULT_REASONING = [
  "We focus on business outcomes first — revenue impact, operational efficiency, and long-term scalability — and let technical choices follow from that.",
  "Every recommendation we make is filtered through what moves the needle for your P&L, not just what's technically interesting.",
  "The right answer usually depends on your stage, team, and constraints — which is why we dig into context before prescribing a solution.",
];

const DEFAULT_FOLLOW_UPS = [
  "What's the main business challenge you're trying to solve right now?",
  "Can you tell me a bit about your company and what you're building?",
  "Would it help to walk through how our process would apply to your situation?",
  "Are you working toward a specific timeline or milestone?",
];

const DEFAULT_CHIPS = [
  "Book a Consultation",
  "How Our Process Works",
  "Pricing Approach",
  "What Services Do You Offer?",
];

/** Derive alternate explanation phrasing from the static answer. */
function deriveExplanationVariants(answer: string): string[] {
  const trimmed = answer.trim();
  if (!trimmed) return [];

  const sentences = trimmed
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter(Boolean);

  if (sentences.length <= 1) {
    return [
      trimmed,
      `In practice, ${trimmed.charAt(0).toLowerCase()}${trimmed.slice(1)}`,
      `From a consulting standpoint: ${trimmed}`,
    ];
  }

  const reordered = [...sentences.slice(1), sentences[0]!].join(" ");
  const condensed = sentences.slice(0, 2).join(" ");

  return [trimmed, reordered, condensed].filter(
    (v, i, arr) => arr.indexOf(v) === i,
  );
}

function mergeArrays<T>(...sources: (T[] | undefined)[]): T[] {
  const seen = new Set<string>();
  const result: T[] = [];
  for (const source of sources) {
    for (const item of source ?? []) {
      const key = typeof item === "string" ? item : JSON.stringify(item);
      if (seen.has(key)) continue;
      seen.add(key);
      result.push(item);
    }
  }
  return result;
}

function pickContextualHook(
  hooks: Partial<Record<ProjectFocus, string>> | undefined,
  focus: ProjectFocus[],
): string {
  if (!hooks || !focus.length) return "";
  for (const f of focus) {
    const hook = hooks[f];
    if (hook) return hook;
  }
  return "";
}

/**
 * Builds full consultant content for an entry by merging
 * entry-specific, category, and derived defaults.
 */
export function buildConsultantContent(entry: KnowledgeEntry): ConsultantContent {
  const category = CATEGORY_CONSULTANT[entry.category] ?? {};
  const entryOverride = ENTRY_CONSULTANT[entry.id] ?? {};
  const inline: PartialConsultant = entry.consultant ?? {};

  const derivedExplanations = deriveExplanationVariants(entry.answer);
  const followUpsFromEntry = (entry.followUps ?? []).map((f) =>
    f.endsWith("?") ? f : `${f}?`,
  );

  return {
    acknowledgments: mergeArrays(
      inline.acknowledgments,
      entryOverride.acknowledgments,
      category.acknowledgments,
      DEFAULT_ACKNOWLEDGMENTS,
    ),
    explanations: mergeArrays(
      inline.explanations,
      entryOverride.explanations,
      category.explanations as string[] | undefined,
      derivedExplanations,
    ),
    reasoning: mergeArrays(
      inline.reasoning,
      entryOverride.reasoning,
      category.reasoning,
      DEFAULT_REASONING,
    ),
    businessContext: mergeArrays(
      inline.businessContext,
      entryOverride.businessContext,
      category.businessContext,
    ),
    examples: mergeArrays(inline.examples, entryOverride.examples),
    considerations: mergeArrays(
      inline.considerations,
      entryOverride.considerations,
    ),
    followUpQuestions: mergeArrays(
      inline.followUpQuestions,
      entryOverride.followUpQuestions,
      followUpsFromEntry,
      category.followUpQuestions as string[] | undefined,
      DEFAULT_FOLLOW_UPS,
    ),
    suggestionChips: mergeArrays(
      inline.suggestionChips,
      entryOverride.suggestionChips,
      category.suggestionChips,
      DEFAULT_CHIPS,
    ),
    contextualHooks: {
      ...(category.contextualHooks ?? {}),
      ...(entryOverride.contextualHooks ?? {}),
      ...(inline.contextualHooks ?? {}),
    },
  };
}

export { pickContextualHook };
