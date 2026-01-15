"use client";
import React from "react";
import { Zap, ShieldAlert, BarChart3, ArrowDown } from "lucide-react";

export default function StrategicVelocity() {
  const shifts = [
    {
      title: "Risk Mitigation & Audit",
      state: "Phase 01: Fragile Systems",
      impact: "We audit the technical debt acting as a silent tax on your growth. We identify systemic bottlenecks that threaten terminal value during peak market cycles.",
      icon: <ShieldAlert className="w-5 h-5 text-red-500" />
    },
    {
      title: "Architecture Liquidation",
      state: "Phase 02: Modular Asset Migration",
      impact: "Engineering for leverage. We strip legacy bloat and re-architect the stack for velocity, ensuring your infrastructure is an asset that yields a measurable ROI.",
      icon: <Zap className="w-5 h-5 text-blue-500" />
    },
    {
      title: "Economic Attribution",
      state: "Phase 03: Scalable Revenue Engine",
      impact: "Total synchronization. Every architectural event is mapped to a P&L outcome, providing total clarity on CAC, LTV, and the marginal cost of growth.",
      icon: <BarChart3 className="w-5 h-5 text-emerald-500" />
    }
  ];

  return (
    <section className="w-full py-24 flex justify-center">
      <div className="w-[92%] max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          
          {/* Left: Advisory Context */}
          <div className="lg:sticky lg:top-40">
            <h2 className="text-[16px] font-black uppercase tracking-[0.4em] text-blue-600 mb-6 italic">
              Our Methodology
            </h2>
            <p className="text-5xl md:text-6xl font-black tracking-tighter text-slate-900 leading-[0.9] mb-8">
              We align <br />
              <span className="text-slate-300 italic font-serif">architecture</span> <br />
              with the <span className="text-blue-600">P&L.</span>
            </p>
            <p className="text-slate-500 text-lg max-w-md leading-relaxed font-medium">
              We remove the technical friction that prevents institutional scaling. 
              Our framework treats your codebase as a high-yield financial instrument.
            </p>
            
            <div className="mt-12 flex items-center gap-4 text-slate-300">
                <div className="w-12 h-[1px] bg-slate-400" />
                <span className="text-[12px] font-black uppercase tracking-[0.2em]">The Three-Stage Pivot</span>
            </div>
          </div>

          {/* Right: The Shift Path */}
          <div className="space-y-16 relative cursor-pointer ">
            {shifts.map((shift, i) => (
              <div key={i} className="group relative pl-20">
                
                {/* Refined Connector Line */}
                {i !== shifts.length - 1 && (
                  <div className="absolute left-[27px] top-14 w-[1px] h-24 bg-gradient-to-b from-blue-600/50 to-transparent" />
                )}
                
                {/* Executive Node Style */}
                <div className="absolute left-0 top-0 w-14 h-14 cursor-pointer rounded-3xl bg-white border border-slate-200 flex items-center justify-center transition-all duration-500 group-hover:border-blue-600 group-hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.15)] group-hover:-translate-y-1">
                  {shift.icon}
                </div>

                <div className="pt-2">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600/60 mb-3">
                    {shift.state}
                  </p>
                  <h3 className="text-3xl font-black text-slate-900 mb-5 tracking-tighter">
                    {shift.title}
                  </h3>
                  <p className="text-slate-500 text-[16px] leading-relaxed max-w-lg font-medium">
                    {shift.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}