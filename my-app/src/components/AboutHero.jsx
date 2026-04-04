"use client";

import React from "react";

export default function AboutHero() {
  return (
    <section className="w-full pt-12 pb-14 flex justify-center">
      <div className="w-[70%] max-w-6xl">

        {/* Title */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-blue-600" />
            <span className="text-[22px] italic font-black uppercase tracking-[0.3em] text-blue-600">
              EST. 2025
            </span>
          </div>

          <h1 className="text-xl md:text-3xl font-black tracking-tighter text-slate-900 leading-[1.2]">
            Transforming{" "}
            <span className="text-stone-400 italic font-serif mx-1">
              infrastructure
            </span>{" "}
            into{" "}
            <span className="text-blue-600 mx-1">equity value.</span>
          </h1>
        </div>

        {/* Subtext */}
        <div className="relative pl-6 border-l border-slate-400">
          <p className="text-slate-600 text-sm font-bold leading-relaxed tracking-tight">
            AB CONSUL partners with founders to move from{" "}
            <span className="text-slate-900 font-medium">
              product-market fit to global scale.
            </span>
          </p>

          <p className="text-slate-600 text-sm font-bold leading-relaxed mt-4">
            We align engineering velocity with your P&L, turning your tech stack
            into a financial asset.
          </p>
        </div>

      </div>
    </section>
  );
}