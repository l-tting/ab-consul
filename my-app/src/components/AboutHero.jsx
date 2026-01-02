"use client";
import React from "react";

export default function AboutHero() {
  return (
    <section className="w-full pt-24 pb-16 flex justify-center">
      <div className="w-[92%] max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          
          {/* Main Title - Spans 8 columns */}
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-blue-600" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-600">
                Established 2024
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              Bridging the gap between <br />
              <span className="text-slate-400 italic font-medium">technical debt</span> and <span className="text-blue-600">revenue growth.</span>
            </h1>
          </div>

          {/* Subtext - Spans 4 columns */}
          <div className="lg:col-span-4 pb-2">
            <p className="text-slate-500 text-sm leading-relaxed border-l border-slate-400 pl-6">
              Acme is a specialized consultancy built for founders who realize 
              that software engineering is a strategic lever, not a maintenance cost. 
              We engineer the outcomes, not just the code.
            </p>
          </div>

        </div>
        
        {/* Subtle Divider */}
        <div className="w-full h-[1px] bg-slate-100 mt-16" />
      </div>
    </section>
  );
}