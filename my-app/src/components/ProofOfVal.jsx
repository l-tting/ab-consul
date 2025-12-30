import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const results = [
  {
    metric: "+145%",
    label: "Conversion Lift",
    client: "Nexus Fintech",
    description: "Re-engineered the onboarding flow and migrated to Next.js, reducing drop-off by 60%.",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
  },
  {
    metric: "0.4s",
    label: "Page Load Time",
    client: "EcomFlow",
    description: "Optimized Core Web Vitals and headless architecture to handle 50k+ daily visitors.",
    tags: ["Vercel", "Tailwind", "Redis"],
  },
  {
    metric: "$2.4M",
    label: "New Revenue Pipeline",
    client: "ScaleAI",
    description: "Built a custom lead-scoring engine and automated GTM strategy integration.",
    tags: ["AI/LLM", "Node.js", "HubSpot"],
  }
];

export default function ResultsSection() {
  return (
    <section className="w-full py-24 flex justify-center bg-slate-50/50">
      <div className="w-[92%] max-w-7xl">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900">Selected Impact</h2>
          <p className="text-slate-500 mt-4 text-lg">Measurable outcomes from our recent partnerships.</p>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {results.map((item, idx) => (
            <div key={idx} className="group bg-white p-8 rounded-3xl border border-slate-200 hover:border-blue-500 transition-all flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-4xl font-bold text-slate-900">{item.metric}</span>
                    <p className="text-sm font-medium text-blue-600 uppercase tracking-wider mt-1">{item.label}</p>
                  </div>
                  <ArrowUpRight className="text-slate-300 group-hover:text-blue-500 transition-colors" />
                </div>
                
                <h3 className="text-lg font-bold text-slate-800 mb-2">{item.client}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Technical Footnote */}
              <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-100">
                {item.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold bg-slate-100 text-slate-500 px-2 py-1 rounded-md uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}