"use client";

import React from "react";
import { TrendingUp, ShieldCheck, Zap, BarChart3 } from "lucide-react";

const services = [
  {
    title: "Monetization Architecture",
    tag: "Revenue Growth",
    desc: "Redesigning multi-tenant billing logic and RBAC to unlock enterprise-grade revenue tiers and complex monetization models.",
    features: ["LTV Optimization", "Pricing Logic", "Usage Attribution"],
    metric: "EBITDA FOCUS",
    price: "Starting at $2k",
    accent: "from-blue-600 to-cyan-500",
    icon: <TrendingUp className="w-6 h-6" />
  },
  {
    title: "Digital Enablement",
    tag: "Margin Lift",
    desc: "Leverage our expertise to digitize your operations by embedding new data, AI, automation tools to improve decision making",
    features: ["OpEx Reduction", "Scale Resilience", "Cloud Optimization"],
    metric: "100% AUTOMATION",
    price: "Starting at $2k",
    accent: "from-indigo-600 to-purple-500",
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    title: "Fintech & Crypto Growth",
    tag: "Velocity",
    desc: `Use our proven growth methodologies to scale your business using AI-powered personalization, and mobile-first, customer-centric services to expand access, 
    particularly in underserved markets through fintech and stablecoin solutions`,
    features: ["Zero-Debt Shipping", "Strategic GTM", "Core IP Build"],
    metric: "NEW CHANNELS",
    price: "Starting at $5k",
    accent: "from-emerald-600 to-teal-500",
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: "Data & Engineering",
    tag: "Asset Stability",
    desc: "Converting monolithic liabilities into modular assets. We ensure zero-downtime migrations that preserve data integrity and capital.",
    features: ["Data Integrity", "Micro-Asset Pivot", "Risk Mitigation"],
    metric: "ZERO-TAX SCALE",
    price: "Starting at $2k",
    accent: "from-blue-700 to-blue-900",
    icon: <BarChart3 className="w-6 h-6" />
  }
];

export default function ServicesGrid() {
  return (
    <section className="py-20 ">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-black uppercase tracking-[0.5em] text-sm sm:text-base mb-2">
            Capabilities
          </h2>
          {/* <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 max-w-3xl mx-auto leading-snug">
            Transforming Engineering Spend into Strategic Value
          </h1> */}
          <p className="mt-4 text-slate-600 text-lg max-w-2xl mx-auto font-medium">
            We deliver measurable impact across revenue, margin, velocity, and stability. Explore our core service offerings and investments.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((s, i) => (
            <div 
              key={i} 
              className="group relative rounded-[3rem] transition-all duration-700 hover:-translate-y-2"
            >
              <div className="relative h-full bg-slate-900 rounded-[3rem] p-12 lg:p-14 overflow-hidden shadow-2xl">
                {/* Gradient Glow */}
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
                  <h3 className="text-xl lg:text-4xl font-black mb-6 tracking-tighter text-white leading-[1.1]">
                    {s.title}
                  </h3>
                  
                  <p className="text-slate-400 mb-8 leading-relaxed text-md font-medium max-w-sm">
                    {s.desc}
                  </p>

                  {/* Features */}
                  <div className="mt-auto pt-8 border-t border-white/10 flex flex-wrap gap-x-8 gap-y-4">
                    {s.features.map(f => (
                      <div key={f} className="flex items-center gap-3">
                        <div className="h-[1px] w-4 bg-blue-600" />
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover:text-white transition-colors">
                          {f}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Investment / Price */}
                  <p className="mt-6 text-lg font-bold text-slate-200">{s.price}</p>

                  {/* CTA Button */}
                  <button className="mt-4 px-6 py-2 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 transition">
                    Request Proposal
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}