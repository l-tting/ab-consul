"use client";
import React from "react";

const assets = [
  { 
    label: "Core IP & Logic", 
    value: "High-Margin Architecture", 
    detail: "Standardized TypeScript/Next.js layers engineered for terminal scalability and internal team portability." 
  },
  { 
    label: "Operational Infrastructure", 
    value: "IaC Asset Management", 
    detail: "Full Terraform/AWS blueprints. Infrastructure treated as a liquid asset—version-controlled and fully automated." 
  },
  { 
    label: "Knowledge Capital", 
    value: "Strategic Technical Wiki", 
    detail: "Comprehensive API specs and internal architectural documentation to eliminate key-person dependency." 
  },
  { 
    label: "Compliance & Security", 
    value: "Institutional Governance", 
    detail: "Continuous vulnerability mapping and SOC2-ready protocols to protect your valuation during due diligence." 
  }
];

export function TechnicalHandover() {
  return (
    <section className="py-32 bg-stone-100 overflow-hidden relative border-t border-stone-200">
      {/* Subtle "Engineering" Grid Pattern for Light Mode */}
      <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-24 max-w-3xl">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-blue-600 font-black text-[12px] tracking-[0.4em] uppercase italic">
              Asset Handover
            </h2>
            <div className="h-px w-12 bg-blue-600/30" />
          </div>
          <h3 className="text-5xl md:text-6xl font-black tracking-tighter leading-[0.95] text-slate-900 mb-8">
            Securing your <br />
            <span className="text-stone-400 italic font-serif">technical equity.</span>
          </h3>
          <p className="text-slate-600 text-lg font-medium max-w-xl leading-relaxed">
            We deliver a mature technical ecosystem designed for institutional-grade 
            due diligence and long-term capital preservation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-16">
          {assets.map((asset, i) => (
            <div key={i} className="group border-l-2 border-stone-300 pl-10 py-4 hover:border-blue-600 transition-all duration-700">
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-black text-blue-600/60 uppercase tracking-[0.3em]">
                  Phase {i+1} // {asset.label}
                </span>
                <p className="text-2xl font-black text-slate-900 tracking-tighter group-hover:text-blue-600 transition-colors duration-500">
                  {asset.value}
                </p>
                <p className="text-slate-500 text-base font-medium leading-relaxed max-w-md">
                  {asset.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Legal/Compliance Footer */}
        <div className="mt-24 pt-12 border-t border-stone-200 flex flex-col sm:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
             <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest">
                Full Intellectual Property Transfer Guaranteed
             </p>
          </div>
          <div className="h-px flex-grow mx-8 bg-stone-200 hidden lg:block" />
          <div className="px-6 py-2 rounded-full border border-stone-300 bg-stone-50 shadow-sm">
            <span className="text-slate-900 font-black text-[10px] uppercase tracking-[0.2em]">
              Institutional Standards
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}