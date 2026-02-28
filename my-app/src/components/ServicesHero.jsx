"use client";
import React from "react";

export default function ServicesHero() {
  return (
    <section className="pt-16 pb-10 sm:pt-20 sm:pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Label with established style */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <h2 className="text-[18px] sm:text-[20px] font-black uppercase tracking-[0.5em] text-blue-600 italic">
            Strategic Capabilities
          </h2>
          <div className="h-[1px] flex-grow bg-slate-100 mt-2 sm:mt-0" />
        </div>

        {/* Hero Headline */}
        <h1 className="text-2xl sm:text-3xl md:text-3xl font-black tracking-tight sm:tracking-tighter text-slate-900 leading-snug sm:leading-[0.95] max-w-full sm:max-w-5xl">
          Engineering{" "}
          <span className="text-slate-300 italic font-serif">operational leverage</span>{" "}
          at scale.
        </h1>

        <div className="mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start">
          {/* Main Description */}
          <div className="lg:col-span-7">
            <p className="text-md sm:text-lg text-slate-600 font-medium leading-relaxed tracking-tight">
              We eliminate the technical friction that devalues high-growth companies. 
              Our services are designed to transform your engineering spend from a 
              burn-rate line item into a{" "}
              <span className="text-slate-900 underline decoration-blue-600 underline-offset-2 sm:underline-offset-4">
                strategic equity driver.
              </span>
            </p>
          </div>

          {/* Sub-Context / Stats */}
          <div className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-slate-100 mt-6 lg:mt-0">
            <p className="text-sm sm:text-md text-slate-400 leading-relaxed font-medium italic">
              Specialized in high-load architecture and revenue-linked infrastructure for 
              Series B+ organizations and private equity portfolios.
            </p>
            <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-4 sm:gap-8">
              <div>
                <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-blue-600 mb-1">
                  Focus A
                </p>
                <p className="text-md sm:text-md font-bold text-slate-900">
                  Capital Efficiency
                </p>
              </div>
              <div>
                <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-blue-600 mb-1">
                  Focus B
                </p>
                <p className="text-md sm:text-md font-bold text-slate-900">
                  Terminal Scalability
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle separator for the sections below */}
        <div className="w-full h-[1px] bg-slate-100 mt-12 sm:mt-20" />
      </div>
    </section>
  );
}