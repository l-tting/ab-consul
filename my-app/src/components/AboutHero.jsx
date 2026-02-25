"use client";

import React from "react";

export default function AboutHero() {
  return (
    <section className="w-full pt-12 pb-14 flex justify-center ">
      <div className="w-[70%] max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">

          {/* Main Title - Spans 8 columns */}
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[1px] bg-blue-600" />
              <span className="text-[22px] italic font-black uppercase tracking-[0.3em] text-blue-600">
                EST. 2025
              </span>
            </div>

            <h1 className="text-xl md:text-3xl font-black tracking-tighter text-slate-900 leading-[0.95] lg:pr-10">
              Transforming
              <span className="text-stone-400 italic font-serif"> infrastructure </span>
              into <span className="text-blue-600"> equity value.</span>
            </h1>
          </div>

          {/* Subtext - Spans 4 columns */}
          <div className="lg:col-span-4 pb-4">
            <div className="relative">
              {/* Vertical Accent Line */}
              <div className="absolute -left-6 top-0 bottom-0 w-[1px] bg-slate-400" />

              <p className="text-slate-600 text-sm font-medium leading-relaxed tracking-tight">
                AB CONSUL partners with founders to move from <span className="text-slate-900 font-medium">product-market fit to global scale.</span>
              </p>

              <p className="text-slate-600 text-sm font-medium leading-relaxed mt-4">
                We align engineering velocity with your P&L, turning your tech stack into a financial asset.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Metric Bar */}
        <div className="flex flex-wrap justify-center gap-x-16 gap-y-8 mt-8 pt-4 border-t border-slate-100">
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Portfolio Value Managed</p>
            <p className="text-xl text-center font-bold text-slate-900 tracking-tight">$250M+</p>
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Efficiency Lift</p>
            <p className="text-xl text-center font-bold text-slate-900 tracking-tight">40% Avg.</p>
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Primary Objective</p>
            <p className="text-xl text-center font-bold text-blue-600 tracking-tight">Revenue Velocity</p>
          </div>
        </div>
      </div>
    </section>
  );
}