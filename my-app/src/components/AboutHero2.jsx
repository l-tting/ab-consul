"use client";
import React from "react";
import { XCircle, CheckCircle2, TrendingUp, Cpu } from "lucide-react";

export default function AboutContrast() {
  return (
    <section className="w-full py-24 flex justify-center">
      <div className="w-[92%] max-w-6xl">

        {/* Section Label */}
        <div className="mb-12 flex flex-col items-center text-center">
          <h2 className="text-[20px] font-black uppercase tracking-[0.5em] text-blue-600 mb-4 italic">
            Strategic Dissonance
          </h2>
          <p className="text-2xl md:text-3xl font-black tracking-tighter text-slate-900 max-w-xl leading-snug">
            The difference between <span className="text-stone-500 italic">writing code</span> and <span className="italic font-serif">engineering equity.</span>
          </p>
        </div>

        {/* Grid: Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

          {/* The Status Quo */}
          <div className="p-8 md:p-12 rounded-[3.5rem] bg-white border border-slate-200 shadow-sm relative group hover:border-slate-300 transition-colors">
            <h3 className="text-[13px] md:text-[14px] font-black uppercase tracking-[0.3em] text-slate-500 mb-10 flex items-center gap-3">
              <XCircle className="w-5 h-5 text-red-500/50" aria-hidden="true" />
              The Industry Standard
            </h3>
            <ul className="space-y-8 md:space-y-12">
              <li className="relative">
                <p className="font-black text-slate-900 text-lg md:text-xl tracking-tighter mb-2 md:mb-3">Feature-First Delivery</p>
                <p className="text-slate-500 text-sm md:text-md font-medium leading-relaxed">
                  Typical agencies build exactly what is in the ticket—even if those features create bottlenecks that kill your long-term vision and scale.

                </p>
              </li>
              <li className="relative">
                <p className="font-black text-slate-900 text-lg md:text-xl tracking-tighter mb-2 md:mb-3">Siloed Engineering</p>
                <p className="text-slate-500 text-sm md:text-md font-medium leading-relaxed">
                  Consultants who focus on their internal fragmented views with zero visibility into how performance latency affects your customer acquisition cost (CAC) and bottom line.

                </p>
              </li>
            </ul>
          </div>

          {/* The AB CONSUL Model */}
          <div className="p-8 md:p-12 rounded-[3.5rem] bg-slate-900 text-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] relative overflow-hidden border border-slate-800">
            {/* Visual Flare */}
            <div className="absolute top-0 right-0 w-72 md:w-80 h-72 md:h-80 bg-blue-600/20 blur-[120px] pointer-events-none" />

            <h3 className="text-[13px] md:text-[14px] font-black uppercase tracking-[0.3em] text-blue-300 mb-10 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
              The AB CONSUL MODEL
            </h3>

            <ul className="space-y-8 md:space-y-12 relative z-10">
              <li className="group">
                <div className="flex items-center gap-2 mb-2 md:mb-3">
                  <TrendingUp className="w-4 h-4 text-blue-500" aria-hidden="true" />
                  <p className="font-black text-white text-md md:text-lg tracking-tighter">Outcome-Architected</p>
                </div>
                <p className="text-slate-300 text-sm md:text-md font-medium leading-relaxed">
                 We don't propose mundane solutions; we build <span className="text-white italic font-serif">Revenue Engines</span>. Every growth and technical decision is filtered through the lens of EBITDA and unit economics.

                </p>
              </li>
              <li className="group">
                <div className="flex items-center gap-2 mb-2 md:mb-3">
                  <Cpu className="w-4 h-4 text-blue-500" aria-hidden="true" />
                  <p className="font-black text-white text-md md:text-lg tracking-tighter">Unified Operations</p>
                </div>
                <p className="text-slate-300 text-sm md:text-md font-medium leading-relaxed">
                    We bridge the gap between your P&L and your operations tech stack. By integrating with your historical data, we eliminate day to day waste while optimizing growth funnels.
                </p>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}