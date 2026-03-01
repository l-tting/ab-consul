"use client";

import { ArrowUpRight, TrendingUp } from "lucide-react";

const results = [
  {
    metric: "+142%",
    label: "Net Revenue Retention",
    client: "Nexus Fintech",
    description:
      "Architected a multi-tier monetization engine and automated churn mitigation workflows.",
    outcomes: ["Pricing Logic", "LTV Expansion", "Churn Reduction"],
    theme: "from-blue-600 to-cyan-500",
  },
  {
    metric: "18.5%",
    label: "EBITDA Margin Lift",
    client: "EcomFlow",
    description:
      "Eliminated technical debt taxing operational velocity and optimized unit economics.",
    outcomes: ["OpEx Optimization", "Scale Readiness", "Infra Liquidation"],
    theme: "from-emerald-600 to-teal-500",
  },
  {
    metric: "$2.4M",
    label: "ARR Pipeline Found",
    client: "ScaleAI",
    description:
      "Identified untapped market segments through deep data intelligence and GTM automation.",
    outcomes: ["Market Expansion", "Pipeline Velocity", "GTM Strategy"],
    theme: "from-purple-600 to-fuchsia-500",
  },
];

export default function ResultsSection() {
  return (
    <section className="w-full py-16 md:py-14 flex justify-center">
      <div className="w-[94%] md:w-[92%] max-w-6xl">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 md:gap-8 mb-14 md:mb-20">
          
          <div className="max-w-2xl">
            <h2 className="text-[18px] md:text-[20px] font-black uppercase tracking-[0.35em] text-blue-600 mb-3 md:mb-4">
              Proven Impact
            </h2>
            <p className="text-2xl md:text-3xl font-bold tracking-tighter text-slate-900 leading-tight">
              Hard metrics.
              <span className="text-slate-400 italic font-medium">
                {" "}Strategic outcomes.
              </span>
            </p>
          </div>

          {/* ROI Badge */}
          <div className="self-start md:self-auto flex items-center gap-2 px-4 md:px-6 py-2.5 md:py-3 bg-slate-50 rounded-full border border-slate-100">
            <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
            <span className="text-xs md:text-sm font-bold text-slate-600 tracking-tight">
              Avg. 3.4x ROI
            </span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {results.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-white p-6 md:p-10 rounded-3xl md:rounded-[3rem] border border-slate-200 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] md:hover:-translate-y-2"
            >
              {/* Subtle Internal Glow */}
              <div
                className={`absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-gradient-to-br ${item.theme} opacity-0 group-hover:opacity-[0.03] blur-3xl transition-opacity duration-700`}
              />

              <div className="relative z-10">
                {/* Metric + Icon */}
                <div className="flex justify-between items-start mb-6 md:mb-10">
                  <div>
                    <span className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter leading-none">
                      {item.metric}
                    </span>
                    <p className="text-[10px] md:text-[11px] font-black text-blue-600 uppercase tracking-[0.2em] mt-2 md:mt-3">
                      {item.label}
                    </p>
                  </div>

                  <div className="p-2 rounded-full bg-slate-50 text-slate-300 group-hover:text-blue-600 group-hover:bg-blue-50 transition-all">
                    <ArrowUpRight size={20} />
                  </div>
                </div>

                <h3 className="text-lg md:text-xl font-extrabold text-slate-900 mb-2 md:mb-3 tracking-tight">
                  {item.client}
                </h3>

                <p className="text-slate-500 text-sm md:text-[15px] font-medium leading-relaxed mb-6 md:mb-8">
                  {item.description}
                </p>
              </div>

              {/* Outcomes */}
              <div className="relative z-10 grid grid-cols-2 gap-2 pt-6 md:pt-8 border-t border-slate-100">
                {item.outcomes.map((outcome, i) => (
                  <span
                    key={outcome}
                    className={`text-[9px] md:text-[10px] font-black bg-blue-50/50 text-blue-700/70 px-3 py-1.5 rounded-full uppercase tracking-wider border border-blue-100/50 ${
                      i === 2 ? "col-span-2" : ""
                    }`}
                  >
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