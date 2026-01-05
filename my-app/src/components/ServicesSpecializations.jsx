"use client";

import React from "react";

const specializations = [
  {
    id: "01",
    industry: "FinTech & Payments",
    focus: "Transaction Integrity & Compliance",
    desc: "We engineer secure revenue bridges with high-availability ledger systems. Our focus is on atomicity, PCI-DSS standards, and sub-second settlement pipelines.",
    tags: ["Stripe Connect", "Ledger Auth", "Encryption-at-rest"]
  },
  {
    id: "02",
    industry: "SaaS & Enterprise",
    focus: "Multi-tenant Scale & RBAC",
    desc: "Architecting the core of modern platforms. We specialize in complex role-based access control, automated billing lifecycles, and global data residency.",
    tags: ["Next.js", "Redis Caching", "PostgreSQL Sharding"]
  },
  {
    id: "03",
    industry: "HealthTech & Data",
    focus: "PII Security & Data Isolation",
    desc: "Handling sensitive data with technical rigor. We build encrypted pipelines and audit logs that meet the highest standards of data isolation and privacy.",
    tags: ["HIPAA Standards", "Data Masking", "Audit Logging"]
  }
];

export default function IndustrySpecializations() {
  return (
    <section className="py-32  border-t border-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header with Technical Subline */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-24">
          <div className="max-w-xl">
            <h2 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.4em] mb-4">
              Vertical Focus
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 leading-tight">
              Industry specific <span className="text-slate-400 italic font-medium">engineering.</span>
            </h3>
          </div>
          <p className="text-slate-500 text-sm max-w-[300px] leading-relaxed border-l-2 border-slate-100 pl-6">
            We don't just write code; we solve the unique structural problems of your specific market.
          </p>
        </div>

        {/* The Interactive Expertise Grid */}
        <div className="grid grid-cols-1 gap-px bg-slate-100 border-y border-slate-100">
          {specializations.map((spec) => (
            <div 
              key={spec.id} 
              className="group grid grid-cols-1 lg:grid-cols-12 bg-white hover:bg-slate-50 transition-all duration-500 py-12 lg:py-16 gap-8 lg:gap-0"
            >
              {/* ID & Industry Label */}
              <div className="lg:col-span-4 flex items-start gap-6 px-4">
                <span className="font-mono text-xs text-slate-300 group-hover:text-blue-600 transition-colors">
                  [{spec.id}]
                </span>
                <div>
                  <h4 className="text-2xl font-bold text-slate-900 tracking-tight">
                    {spec.industry}
                  </h4>
                  <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    Specialization active
                  </p>
                </div>
              </div>

              {/* Focus & Description */}
              <div className="lg:col-span-5 px-4">
                <p className="text-lg font-bold text-slate-800 mb-4 leading-tight">
                  {spec.focus}
                </p>
                <p className="text-slate-500 text-sm leading-relaxed max-w-md">
                  {spec.desc}
                </p>
              </div>

              {/* Tags/Tech stack */}
              <div className="lg:col-span-3 flex flex-wrap gap-2 items-start justify-start lg:justify-end px-4">
                {spec.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="text-[9px] font-bold text-slate-400 border border-slate-200 px-3 py-1 rounded-full uppercase tracking-tighter group-hover:border-blue-200 group-hover:text-blue-600 transition-all"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Metadata */}
        <div className="mt-16 flex justify-between items-center text-[10px] font-mono text-slate-400 uppercase tracking-[0.2em]">
          <span>Vertical Architecture v1.0</span>
          <span className="hidden sm:block">Proven Standards // Modern Infrastructure</span>
        </div>
      </div>
    </section>
  );
}