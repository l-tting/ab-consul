"use client";

import React from "react";
import { TrendingUp, ShieldCheck, Zap, BarChart3 } from "lucide-react";

const services = [
  {
    title: "Monetization Architecture",
    tag: "Revenue Growth",
    desc: "Redesigning multi-tenant billing logic and RBAC to unlock enterprise-grade revenue tiers and complex monetization models.",
    features: ["LTV Optimization", "Pricing Logic", "Usage Attribution"],
    metric: "EBIDTA FOCUS",
    accent: "from-blue-600 to-cyan-500",
    icon: <TrendingUp className="w-6 h-6" />
  },
  {
    title: "Infrastructure Liquidation",
    tag: "Margin Lift",
    desc: "De-risking legacy systems and liquidating technical debt that acts as a silent tax on your operational velocity.",
    features: ["OpEx Reduction", "Scale Resilience", "Cloud Optimization"],
    metric: "40% AVG SAVINGS",
    accent: "from-indigo-600 to-purple-500",
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    title: "Precision Engineering",
    tag: "Velocity",
    desc: "Rapid deployment of high-conviction features that move the needle on terminal value without introducing technical drag.",
    features: ["Zero-Debt Shipping", "Strategic GTM", "Core IP Build"],
    metric: "ACCELERATED ROI",
    accent: "from-emerald-600 to-teal-500",
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: "Economic System Migration",
    tag: "Asset Stability",
    desc: "Converting monolithic liabilities into modular assets. We ensure zero-downtime migrations that preserve data integrity and capital.",
    features: ["Data Integrity", "Micro-Asset Pivot", "Risk Mitigation"],
    metric: "ZERO-TAX SCALE",
    accent: "from-blue-700 to-blue-900",
    icon: <BarChart3 className="w-6 h-6" />
  }
];

export default function ServiceGrid() {
  return (
    <section className="py-32 ">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((s, i) => (
            <div 
              key={i} 
              className="group relative rounded-[3rem] transition-all duration-700 hover:-translate-y-2"
            >
              {/* Main Card Body */}
              <div className="relative h-full bg-slate-900 rounded-[3rem] p-12 lg:p-14 overflow-hidden shadow-2xl">
                
                {/* Boardroom Subtle Glow */}
                <div className={`absolute -top-24 -right-24 w-80 h-80 bg-gradient-to-br ${s.accent} opacity-10 blur-[100px] group-hover:opacity-30 transition-opacity duration-700`} />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Top Bar */}
                  <div className="flex justify-between items-start mb-16">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-xl">
                      {s.icon}
                    </div>
                    <div className="text-right">
                      <span className="block text-[10px] font-black text-blue-400 uppercase tracking-[0.3em] mb-2">
                        {s.tag}
                      </span>
                      <span className="text-[11px] font-black text-slate-500 tracking-[0.2em] uppercase">
                        {s.metric}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl lg:text-5xl font-black mb-8 tracking-tighter text-white leading-[0.9]">
                    {s.title}
                  </h3>
                  
                  <p className="text-slate-400 mb-12 leading-relaxed text-md max-w-sm font-medium">
                    {s.desc}
                  </p>

                  {/* Strategic Outcomes (Formerly Features) */}
                  <div className="mt-auto pt-10 border-t border-white/10 flex flex-wrap gap-x-8 gap-y-4">
                    {s.features.map(f => (
                      <div key={f} className="flex items-center gap-3">
                        <div className="h-[1px] w-4 bg-blue-600" />
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover:text-white transition-colors">
                          {f}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}