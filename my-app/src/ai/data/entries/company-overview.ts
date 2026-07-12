import type { KnowledgeEntry } from "../../types/knowledge";

export const companyOverviewEntries: KnowledgeEntry[] = [
  {
    id: "co-001",
    category: "company-overview",
    keywords: ["what is ab consul", "who is ab consul", "about ab consul", "tell me about ab consul", "what does ab consul do", "company overview"],
    answer: "AB Consul is a strategic consulting and technology firm that helps growth-stage businesses turn strategy into revenue. We partner with startups and scale-ups on custom software, MVP development, ERP systems, cloud solutions, and operational consulting — with a focus on measurable business outcomes.",
    followUps: ["What services do you offer?", "Who do you typically work with?", "How is AB Consul different from agencies?"],
    priority: 2,
  },
  {
    id: "co-002",
    category: "company-overview",
    keywords: ["when founded", "established", "est 2025", "how long in business", "company history", "founded"],
    answer: "AB Consul was established in 2025. Our founding partners bring deep experience in fintech growth, enterprise systems, and revenue architecture across Africa and global markets.",
    followUps: ["Who are the founders?", "What industries do you serve?"],
  },
  {
    id: "co-003",
    category: "company-overview",
    keywords: ["mission", "vision", "purpose", "what do you stand for", "company values"],
    answer: "Our mission is to transform engineering and operational spend into strategic value. We align architecture with the P&L — every technical decision is filtered through revenue impact, capital efficiency, and long-term scalability.",
    followUps: ["What is your development process?", "Why choose AB Consul?"],
  },
  {
    id: "co-004",
    category: "company-overview",
    keywords: ["who do you work with", "target clients", "ideal client", "ideal partnership", "who is your customer", "growth stage"],
    answer: "We work best with post-revenue companies facing scaling complexity — typically Series A and beyond, though we take select early-stage projects when the technical challenge is unique. Ideal partners view infrastructure as a capital asset and want direct access to senior architects, not account managers.",
    followUps: ["Do you work with pre-seed startups?", "What is the consultation process?"],
  },
  {
    id: "co-005",
    category: "company-overview",
    keywords: ["founders", "who runs ab consul", "leadership team", "andrew letting", "brian letting", "partners"],
    answer: "AB Consul is led by founding partners Andrew Letting (Strategy & Growth Architecture) and Brian Letting (Systems & Infrastructure Operations). Clients work directly with the partners responsible for their engagement — no layered account management.",
    followUps: ["What is your consulting methodology?", "How do I get started?"],
  },
  {
    id: "co-006",
    category: "company-overview",
    keywords: ["hello", "hi", "hey", "good morning", "good afternoon", "greetings", "howdy"],
    answer: "Welcome to AB Consul. Tell me about the business challenge or project you're exploring — I'll help you think through the right approach.",
    priority: 1,
  },
];
