"use client";

import React from "react";

export default function AboutHero() {
  return (
    <section className="relative w-full py-18 md:py-12 flex justify-center overflow-hidden bg-stone-100">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.05] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M60 60H0V0h60v60zM1 1v58h58V1H1z\' fill=\'%23000\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
          }}
        />
      </div>

      <div className="w-[92%] max-w-7xl relative z-10 flex flex-col items-center text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white border border-stone-200 text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-8 shadow-sm">
          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
          <span>EST. 2025</span>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-5xl sm:text-md font-black tracking-tighter text-slate-900 leading-[0.9] mb-8">
          Transforming <br className="md:hidden" />
          <span className="text-stone-400 italic font-serif">growth ideas</span>{" "}
          into <span className="text-blue-600">revenue engines</span>
        </h1>

        {/* Subtext */}
        <p className="text-xl md:text-2xl text-slate-500 max-w-3xl leading-relaxed font-medium mb-12 tracking-tight">
          AB Consul partners with startups,{" "}
          <span className="text-slate-900">growth stage entities and sole proprietors</span> to{" "}
          <span className="text-slate-900">move from product-market fit to global scale</span>
        </p>

        {/* Secondary description (like supporting contact info block style) */}
        {/* <div className="flex flex-wrap justify-center gap-10 text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">
          <div className="flex items-center gap-3 hover:text-slate-900 transition-colors">
            <span className="w-2 h-2 bg-blue-600 rounded-full" />
            <span>Engineering → Capital Alignment</span>
          </div>

          <div className="flex items-center gap-3 hover:text-slate-900 transition-colors">
            <span className="w-2 h-2 bg-blue-600 rounded-full" />
            <span>Infrastructure Value Creation</span>
          </div>
        </div> */}
      </div>
    </section>
  );
} 
