"use client";

import { ArrowUpRight, TrendingUp } from "lucide-react";

const results = [
  {
    metric: "$65M+ TLV",
    label: "Deals closed",
    client: "Fintech",
    description:
      "Our team has successfully signed deals of over $65M with partners such as Wowzi, Cellulant, Eaglelion Ethiopia, Gapstack, Craft Silicon, CPF Financial Services",
    outcomes: ["Deal Development", "Commercial Strategy", "Sales Pipeline Management"],
    theme: "from-blue-600 to-cyan-500",
    cardBg: "bg-gradient-to-br from-blue-50/30 to-white",
    borderHover: "hover:border-blue-200",
  },
  {
    metric: "500k+ Users",
    label: "Customers Onboarded",
    client: "Growth",
    description:
      "Our user acquisition, growth and retention strategy has delivered over 500k users across different digital payment platforms such as Tingg Cellulant, Bitget and Bitget Wallet",
    outcomes: ["Digital Marketing", "Growth Strategy", "ARPU","CAC management"],
    theme: "from-emerald-600 to-teal-500",
    cardBg: "bg-gradient-to-br from-emerald-50/30 to-white",
    borderHover: "hover:border-emerald-200",
  },
  {
    metric: "+150% Volume Growth",
    label: "New Product Volumes",
    client: "Product Development",
    description:
      "We have delivered over $100M in new volume from new products such as derivatives, futures, stocks, virtual cards with partners such as Mastercard and Bitget",
    outcomes: ["Virtual Cards", "Crypto Payments", "Tokenization"],
    theme: "from-purple-600 to-fuchsia-500",
    cardBg: "bg-gradient-to-br from-purple-50/30 to-white",
    borderHover: "hover:border-purple-200",
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

          <div className="self-start md:self-auto flex items-center gap-2 px-4 md:px-6 py-2.5 md:py-3 bg-slate-50 rounded-full border border-slate-100">
            <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
            <span className="text-xs md:text-sm font-bold text-slate-600 tracking-tight">
              Avg. 3.4x ROI
            </span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {results.map((item, idx) => (
            <div
              key={idx}
              className={`group relative ${item.cardBg} p-6 md:p-10 rounded-3xl md:rounded-[3rem] border border-slate-200 ${item.borderHover} transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] md:hover:-translate-y-2`}
            >
              {/* Subtle background pattern */}
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-current to-transparent rounded-full blur-2xl"></div>
              </div>

              {/* Glow */}
              <div
                className={`absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-gradient-to-br ${item.theme} opacity-0 group-hover:opacity-[0.08] blur-3xl transition-opacity duration-700`}
              />

              <div className="relative z-10">
                {/* Metric */}
                <div className="flex justify-between items-start mb-6 md:mb-10">
                  <div>
                    <span className="text-xl md:text-3xl font-black text-slate-900 tracking-tighter leading-none">
                      {item.metric}
                    </span>
                    <p className="text-[10px] md:text-[11px] font-black text-blue-600 uppercase tracking-[0.2em] mt-2 md:mt-3">
                      {item.label}
                    </p>
                  </div>

                  <div className="p-2 rounded-full bg-white/50 backdrop-blur-sm text-slate-400 group-hover:text-blue-600 group-hover:bg-blue-50 transition-all">
                    <ArrowUpRight size={20} />
                  </div>
                </div>

                <h3 className="text-lg md:text-xl font-extrabold text-slate-900 mb-2 md:mb-3 tracking-tight">
                  {item.client}
                </h3>

                {/* Description with softer styling */}
                <p className="text-slate-500 text-sm md:text-[15px] font-normal leading-relaxed mb-6 md:mb-8">
                  {item.description}
                </p>
              </div>

              {/* Outcomes - grid layout with 2 columns */}
              <div className="relative z-10 grid grid-cols-2 gap-2 pt-6 md:pt-8 border-t border-slate-100">
                {item.outcomes.map((outcome) => (
                  <span
                    key={outcome}
                    className={`text-[9px] md:text-[10px] font-black 
                      bg-white/80 backdrop-blur-sm
                      px-3 md:px-4 py-1.5 md:py-2 
                      rounded-full uppercase tracking-wider 
                      border border-slate-200
                      text-center
                      whitespace-normal
                      break-words
                      transition-all duration-300
                      group-hover:border-opacity-50`}
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