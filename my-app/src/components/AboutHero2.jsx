"use client";
import React from "react";
import { XCircle, CheckCircle2, TrendingUp, Cpu } from "lucide-react";

export default function AboutContrast() {
  return (
    <section className="w-full py-18 flex justify-center ">
      <div className="w-[92%] max-w-6xl">
        {/* Section Label */}
        <div className="mb-12 flex flex-col items-center text-center">
            <h2 className="text-[20px] font-black uppercase tracking-[0.5em] text-blue-600 mb-4 italic">
                Strategic Dissonance
            </h2>
            <p className="text-3xl font-black tracking-tighter text-slate-900 max-w-xl">
                The difference between <span className="text-slate-400">writing code</span> and <span className="italic font-serif">engineering equity.</span>
            </p>
        </div>

        <div className="grid grid-cols-4 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* The Status Quo */}
          <div className="p-12 rounded-[3.5rem] bg-white border border-slate-200 shadow-sm relative group hover:border-slate-300 transition-colors">
            <h3 className="text-[13px] font-black uppercase tracking-[0.3em] text-slate-400 mb-10 flex items-center gap-3">
              <XCircle className="w-5 h-5 text-red-500/50" />
              The Industry Standard
            </h3>
            <ul className="space-y-12">
              <li className="relative">
                <p className="font-black text-slate-900 text-xl tracking-tighter mb-3">Feature-First Delivery</p>
                <p className="text-slate-500 text-md font-medium leading-relaxed">
                  Typical agencies build exactly what is in the ticket—even if those features create technical debt that kills your long-term valuation.
                </p>
              </li>
              <li className="relative">
                <p className="font-black text-slate-900 text-xl tracking-tighter mb-3">Siloed Engineering</p>
                <p className="text-slate-500 text-md font-medium leading-relaxed">
                  Developers who focus on "clean code" in a vacuum, with zero visibility into how performance latency affects your customer acquisition cost (CAC).
                </p>
              </li>
            </ul>
          </div>

          {/* The AB CONSUL Model */}
          <div className="p-12 rounded-[3.5rem] bg-slate-900 text-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] relative overflow-hidden border border-slate-800">
            {/* Visual Flare */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/20 blur-[120px] pointer-events-none" />
            
            <h3 className="text-[13px] font-black uppercase tracking-[0.3em] text-blue-400 mb-10 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5" />
              The AB CONSUL MODEL
            </h3>

            <ul className="space-y-12 relative z-10">
              <li className="group">
                <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="w-4 h-4 text-blue-500" />
                    <p className="font-black text-white text-md tracking-tighter">Outcome-Architected</p>
                </div>
                <p className="text-slate-400 text-md font-medium leading-relaxed">
                  We don't build software; we build <span className="text-white italic font-serif">Revenue Engines</span>. Every architectural decision is filtered through the lens of EBITDA and unit economics.
                </p>
              </li>
              <li className="group">
                <div className="flex items-center gap-2 mb-3">
                    <Cpu className="w-4 h-4 text-blue-500" />
                    <p className="font-black text-white text-md tracking-tighter">Unified Operations</p>
                </div>
                <p className="text-slate-400 text-md font-medium leading-relaxed">
                  We bridge the gap between your P&L and your stack. By integrating with marketing and finance data, we eliminate infra-waste while  optimizing  growth funnels.
                </p>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}