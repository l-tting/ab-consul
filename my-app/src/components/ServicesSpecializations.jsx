"use client";

import React from "react";

const specializations = [
  {
    id: "01",
    industry: "FinTech & Payments",
    focus: "Transaction Integrity & Capital Flow",
    desc: "Engineering high-availability ledger systems where atomicity is non-negotiable. We optimize settlement pipelines and PCI-compliant architectures to protect transaction volume.",
    tags: ["Capital Pipelines", "Ledger Integrity", "PCI-DSS Standards"]
  },
  {
    id: "02",
    industry: "Enterprise SaaS",
    focus: "Multi-tenant Scale & Revenue Logic",
    desc: "Architecting complex monetization engines. We specialize in sophisticated RBAC, automated billing lifecycles, and global data residency for tier-one enterprise contracts.",
    tags: ["Monetization Logic", "Global Residency", "Enterprise RBAC"]
  },
  {
    id: "03",
    industry: "HealthTech & Bio",
    focus: "Data Isolation & Institutional Trust",
    desc: "Handling sensitive PII with technical rigor. We build encrypted architectures and immutable audit logs that satisfy the most stringent institutional security reviews.",
    tags: ["PII Encryption", "Immutable Audits", "HIPAA Governance"]
  }
];

export default function IndustrySpecializations() {
  return (
    <section className="py-32  border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header - Boardroom Alignment */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-24">
          <div className="max-w-2xl">
            <h2 className="text-[12px] font-black text-blue-600 uppercase tracking-[0.5em] mb-6 italic">
              Vertical Expertise
            </h2>
            <h3 className="text-5xl md:text-6xl font-black tracking-tighter text-slate-900 leading-[0.95]">
              Market specific <br />
              <span className="text-slate-300 italic font-serif">capital engineering.</span>
            </h3>
          </div>
          <p className="text-slate-500 text-lg font-medium max-w-[340px] leading-relaxed border-l-2 border-blue-600 pl-8 pb-1">
            We solve the structural economic problems unique to your specific market segment.
          </p>
        </div>

        {/* The Vertical Expertise List */}
        <div className="flex flex-col border-t border-slate-200">
          {specializations.map((spec) => (
            <div 
              key={spec.id} 
              className="group grid grid-cols-1 lg:grid-cols-12  hover:bg-slate-50/50 transition-all duration-700 py-16 border-b border-slate-100 px-4"
            >
              {/* ID & Industry Label */}
              <div className="lg:col-span-4 flex items-start gap-10">
                <span className="font-mono text-xs font-black text-slate-300 group-hover:text-blue-600 transition-colors pt-2">
                  {spec.id}
                </span>
                <div>
                  <h4 className="text-3xl font-black text-slate-900 tracking-tighter group-hover:translate-x-2 transition-transform duration-500">
                    {spec.industry}
                  </h4>
                  <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                    <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest">
                      Domain Authority Established
                    </p>
                  </div>
                </div>
              </div>

              {/* Focus & Description */}
              <div className="lg:col-span-5">
                <p className="text-xl font-black text-slate-900 mb-4 tracking-tight">
                  {spec.focus}
                </p>
                <p className="text-slate-500 text-[16px] font-medium leading-relaxed max-w-md">
                  {spec.desc}
                </p>
              </div>

              {/* Strategic Tags */}
              <div className="lg:col-span-3 flex flex-wrap gap-2 items-start justify-start lg:justify-end mt-6 lg:mt-0">
                {spec.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="text-[10px] font-black text-slate-400 border border-slate-200 px-4 py-2 rounded-xl uppercase tracking-widest group-hover:border-blue-600 group-hover:text-blue-600 transition-all duration-500 bg-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Metadata */}
        <div className="mt-16 flex justify-between items-center text-[10px] font-black text-slate-300 uppercase tracking-[0.3em]">
          <div className="flex items-center gap-4">
            <span>AB CONSUL // VERTICAL V1.0</span>
            <div className="w-8 h-px bg-slate-200" />
            <span className="text-slate-400">Institutional Governance</span>
          </div>
          <span className="hidden sm:block">Standardized Operations // High-Yield Infrastructure</span>
        </div>
      </div>
    </section>
  );
}