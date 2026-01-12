"use client";

import { ArrowUpRight, TrendingUp } from "lucide-react";

const results = [
  {
    metric: "+142%",
    label: "Net Revenue Retention",
    client: "Nexus Fintech",
    description: "Architected a multi-tier monetization engine and automated churn mitigation workflows.",
    outcomes: ["Pricing Logic", "LTV Expansion", "Churn Reduction"],
    theme: "from-blue-600 to-cyan-500"
  },
  {
    metric: "18.5%",
    label: "EBITDA Margin Lift",
    client: "EcomFlow",
    description: "Eliminated technical debt taxing operational velocity and optimized unit economics.",
    outcomes: ["OpEx Optimization", "Scale Readiness", "Infra Liquidation"],
    theme: "from-emerald-600 to-teal-500"
  },
  {
    metric: "$2.4M",
    label: "ARR Pipeline Found",
    client: "ScaleAI",
    description: "Identified untapped market segments through deep data intelligence and GTM automation.",
    outcomes: ["Market Expansion", "Pipeline Velocity", "GTM Strategy"],
    theme: "from-purple-600 to-fuchsia-500"
  }
];

export default function ResultsSection() {
  return (
    <section className="w-full py-32 flex justify-center bg-white">
      <div className="w-[92%] max-w-7xl">
        {/* Advisory Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-[14px] font-black uppercase tracking-[0.4em] text-blue-600 mb-4">
              Proven Impact
            </h2>
            <p className="text-5xl font-bold tracking-tighter text-slate-900 leading-[0.95]">
              Hard metrics. <br/>
              <span className="text-slate-400 italic font-medium">Strategic outcomes.</span>
            </p>
          </div>
          <div className="flex items-center gap-2 px-6 py-3 bg-slate-50 rounded-full border border-slate-100">
            <TrendingUp className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-bold text-slate-600 tracking-tight">Avg. 3.4x ROI across portfolio</span>
          </div>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {results.map((item, idx) => (
            <div key={idx} className="group relative bg-white p-10 rounded-[3rem] border border-slate-200 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2">
              
              {/* Subtle Internal Glow */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.theme} opacity-0 group-hover:opacity-[0.03] blur-3xl transition-opacity duration-700`} />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-10">
                  <div>
                    <span className="text-5xl font-black text-slate-900 tracking-tighter leading-none">{item.metric}</span>
                    <p className="text-[11px] font-black text-blue-600 uppercase tracking-[0.2em] mt-3">{item.label}</p>
                  </div>
                  <div className="p-2 rounded-full bg-slate-50 text-slate-300 group-hover:text-blue-600 group-hover:bg-blue-50 transition-all">
                    <ArrowUpRight size={24} />
                  </div>
                </div>
                
                <h3 className="text-xl font-extrabold text-slate-900 mb-3 tracking-tight">{item.client}</h3>
                <p className="text-slate-500 text-[15px] font-medium leading-relaxed mb-8">
                  {item.description}
                </p>
              </div>

              {/* Strategic Outcomes Footnote */}
              <div className="relative z-10 flex flex-wrap gap-2 pt-8 border-t border-slate-100">
                {item.outcomes.map(outcome => (
                  <span key={outcome} className="text-[10px] font-black bg-blue-50/50 text-blue-700/70 px-3 py-1.5 rounded-full uppercase tracking-wider border border-blue-100/50">
                    {outcome}
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