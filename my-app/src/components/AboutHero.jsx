"use client";

import React from "react";

export default function AboutHero() {
  return (
    <section className="w-full pt-32 pb-20 flex justify-center ">
      <div className="w-[92%] max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          
          {/* Main Title - Spans 8 columns */}
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[1px] bg-blue-600" />
              <span className="text-[14px] italic font-bold uppercase tracking-[0.3em] text-blue-600">
                EST. 2025
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 leading-[0.95] lg:pr-10">
              Transforming <br />
              <span className="text-slate-300 italic font-serif">infrastructure</span> <br />
              into <span className="text-blue-600">equity value.</span>
            </h1>
          </div>

          {/* Subtext - Spans 4 columns */}
          <div className="lg:col-span-4 pb-4">
            <div className="relative">
              {/* Vertical Accent Line */}
              <div className="absolute -left-6 top-0 bottom-0 w-[1px] bg-slate-400" />
              
              <p className="text-slate-600 text-[17px] font-bold leading-relaxed tracking-tight">
                AB CONSUL is a high-conviction partner for founders moving from <span className="text-slate-900">product-market fit to global scale.</span>
              </p>
              
              <p className="text-slate-400 text-md leading-relaxed mt-6 font-medium">
                We don't just solve tickets. We align your engineering velocity with your P&L, ensuring your tech stack behaves like a financial asset.
              </p>
            </div>
          </div>

        </div>
        
        {/* Bottom Metric Bar */}
        <div className="flex flex-wrap gap-x-16 gap-y-8 mt-24 pt-12 border-t border-slate-100">
            <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Portfolio Value Managed</p>
                <p className="text-2xl font-bold text-slate-900 tracking-tight">$250M+</p>
            </div>
            <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Efficiency Lift</p>
                <p className="text-2xl font-bold text-slate-900 tracking-tight">40% Avg.</p>
            </div>
            <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Primary Objective</p>
                <p className="text-2xl font-bold text-blue-600 tracking-tight">Revenue Velocity</p>
            </div>
        </div>
      </div>
    </section>
  );
}