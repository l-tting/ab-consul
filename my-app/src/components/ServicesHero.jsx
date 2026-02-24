"use client";
import React from "react";

export default function ServicesHero() {
  return (
    <section className="pt-24 pb-10 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Label with established style */}
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-[15px] font-black uppercase tracking-[0.5em] text-blue-600 italic">
            Strategic Capabilities
          </h2>
          <div className="h-[1px] flex-grow bg-slate-100" />
        </div>

        {/* Hero Headline */}
        <h1 className="text-3xl md:text-5xl font-black tracking-tighter text-slate-900 leading-[0.9] max-w-5xl">
          Engineering 
          <span className="text-slate-300 italic font-serif">operational leverage</span> <br />
          at scale.
        </h1>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Description */}
          <div className="lg:col-span-7">
            <p className="text-xl md:text-lg text-slate-600 font-medium leading-relaxed tracking-tight">
              We eliminate the technical friction that devalues high-growth companies. 
              Our services are designed to transform your engineering spend from a 
              burn-rate line item into a <span className="text-slate-900 underline decoration-blue-600 underline-offset-4">strategic equity driver.</span>
            </p>
          </div>

          {/* Sub-Context / Stats */}
          <div className="lg:col-span-5 lg:pl-12 border-l border-slate-100">
            <p className="text-md text-slate-400 leading-relaxed font-medium italic">
              Specialized in high-load architecture and revenue-linked infrastructure for 
              Series B+ organizations and private equity portfolios.
            </p>
            <div className="mt-6 flex gap-8">
                <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-blue-600 mb-1">Focus A</p>
                    <p className="text-md font-bold text-slate-900">Capital Efficiency</p>
                </div>
                <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-blue-600 mb-1">Focus B</p>
                    <p className="text-md font-bold text-slate-900">Terminal Scalability</p>
                </div>
            </div>
          </div>
        </div>

        {/* Subtle separator for the sections below */}
        <div className="w-full h-[1px] bg-slate-100 mt-20" />
      </div>
    </section>
  );
}