/**
 * Ground-truth company knowledge for the AI advisor.
 * Future RAG/vector search can replace or augment this static context.
 */
export const AB_CONSUL_KNOWLEDGE = {
  company: {
    name: "AB Consul",
    tagline: "Strategic consulting and technology solutions for growth-stage businesses.",
    email: "contact@ab-consul.com",
    phone: "+254 717568861",
    website: "https://ab-consul.com",
    founded: "2025",
    contactUrl: "/contact",
    pricingUrl: "/pricing",
    servicesUrl: "/services",
  },
  services: [
    {
      name: "Monetization Architecture",
      focus: "Revenue growth — multi-tenant billing, RBAC, pricing logic, LTV optimization.",
      startingPrice: "Starting at $2k",
    },
    {
      name: "Digital Enablement",
      focus: "Margin lift — digitizing operations with data, AI, and automation; OpEx reduction and cloud optimization.",
      startingPrice: "Starting at $2k",
    },
    {
      name: "Fintech & Crypto Growth",
      focus: "Velocity — AI-powered personalization, mobile-first services, fintech and stablecoin solutions for underserved markets.",
      startingPrice: "Starting at $5k",
    },
    {
      name: "Data & Engineering",
      focus: "Asset stability — modular architecture, zero-downtime migrations, data integrity.",
      startingPrice: "Starting at $2k",
    },
    {
      name: "Startup Consulting & MVP Development",
      focus: "Helping startups turn strategy into revenue — from product-market fit to global scale.",
    },
    {
      name: "Custom Software Development",
      focus: "Web applications, mobile applications, ERP systems, and cloud solutions.",
    },
    {
      name: "UI/UX",
      focus: "User-centered design aligned with business outcomes.",
    },
  ],
  process: [
    "Discovery — identify problems and bottlenecks to validate market-fit solutions.",
    "Strategy — technical roadmap, system architecture, operational workflows, user journeys.",
    "Execution — agile delivery with continuous testing.",
    "Iteration — post-launch monitoring, maintenance, and updates as you scale.",
  ],
  pricingPhilosophy:
    "AB Consul bills for value created, not hours. Pricing is dynamic and scale-adjusted based on company complexity. Engagements typically start as fixed-scope audits or builds; long-term advisory is available on request. Use the pricing calculator on the website for estimates.",
  faqs: [
    {
      q: "How soon can we start?",
      a: "Typically a 2-week lead time; urgent technical audits can be fast-tracked within 48 hours.",
    },
    {
      q: "Do you work with pre-seed startups?",
      a: "We specialize in Series A+ companies but take select early-stage projects when the technical challenge is unique.",
    },
    {
      q: "Is this a recurring retainer?",
      a: "Most engagements start fixed-scope; long-term advisory is available upon request.",
    },
  ],
  differentiators: [
    "Direct access to founding partners — no account managers.",
    "NDA-protected, confidential engagements.",
    "Global coverage across GMT and EST time zones.",
    "Outcome-architected approach focused on EBITDA and unit economics.",
  ],
  techStack:
    "Industry-standard cloud and modern web technologies including AWS, Stripe, HubSpot, Snowflake, and modern JavaScript/React/Next.js stacks. Specific stack choices depend on client requirements.",
} as const;
