"use client";
import React from "react";
import { Zap, ShieldAlert, BarChart } from "lucide-react";

export default function StrategicVelocity() {
  const shifts = [
    {
      title: "Inventory & Audit",
      state: "From: Fragile Systems",
      impact: "We identify the technical debt currently acting as a tax on your growth. No more guessing why the stack breaks at peak load.",
      icon: <ShieldAlert className="w-5 h-5 text-red-500" />
    },
    {
      title: "Infrastructure Liquidation",
      state: "Transition: Modular Assets",
      impact: "We strip away the bloat and re-architect for velocity. Code is treated as an asset that must yield a measurable return.",
      icon: <Zap className="w-5 h-5 text-blue-500" />
    },
    {
      title: "Revenue Attribution",
      state: "To: Scalable Engine",
      impact: "Every system event is mapped to a financial outcome. You gain total clarity on CAC, LTV, and the cost of every new user.",
      icon: <BarChart className="w-5 h-5 text-emerald-500" />
    }
  ];

  return (
    <section className="w-full py-32 flex justify-center  border-t border-slate-100">
      <div className="w-[92%] max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          
          {/* Left: Sticky Context */}
          <div className="lg:sticky lg:top-32">
            <h2 className="text-[30px] font-black uppercase tracking-[0.4em] text-blue-600 mb-6">
              Our Methodology
            </h2>
            <p className="text-4xl font-bold tracking-tighter text-slate-900 leading-tight mb-8">
              We don't just "build" things.<br />
              We <span className="italic text-slate-400 font-medium">unblock</span> growth.
            </p>
            <p className="text-slate-500 max-w-md leading-relaxed">
              Our framework is designed to remove the technical friction that 
              prevents business founders from scaling. We align the codebase 
              with the balance sheet.
            </p>
          </div>

          {/* Right: The Shift Path */}
          <div className="space-y-12 ">
            {shifts.map((shift, i) => (
              <div key={i} className="group relative pl-12">
                {/* Visual Connector */}
                {i !== shifts.length - 1 && (
                  <div className="absolute left-[21px] top-10 w-[2px] h-full bg-slate-100" />
                )}
                
                {/* Node */}
                <div className="absolute left-0 top-0 w-11 h-11 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center transition-colors group-hover:bg-white group-hover:shadow-lg group-hover:shadow-blue-500/10">
                  {shift.icon}
                </div>

                <div className="pt-1">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">
                    {shift.state}
                  </p>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                    {shift.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-lg">
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