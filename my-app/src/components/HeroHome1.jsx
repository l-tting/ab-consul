"use client";

import React from "react";
import Link from "next/link";
import { TrendingUp } from "lucide-react";

const HeroHome1 = () => {
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
          <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
          <span>Revenue Growth System Active</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-wider text-slate-900 leading-[1.2] sm:leading-[1.15] md:leading-[1.1] mb-8">
          We help startups <br className="md:hidden" />
          <span className="text-slate-400 italic font-serif">
            turn strategy
          </span>{" "}
          into revenue.
        </h1>

        {/* Subtext */}
        <p className="text-xl md:text-2xl text-slate-500 max-w-3xl leading-relaxed font-medium mb-12 tracking-tight">
          AB Consul partners with{" "}
          <span className="text-slate-900">growth-stage businesses</span> to
          optimize revenue, streamline operations, and scale sustainably.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/contact"
            className="w-full sm:w-auto bg-blue-950 text-white px-6 py-3 rounded-full font-semibold text-center hover:bg-blue-900 transition-colors"
          >
            Book a Strategy Call
          </Link>

          <Link
            href="/services"
            className="w-full sm:w-auto border border-stone-300 text-slate-900 px-6 py-3 rounded-full font-semibold text-center hover:border-slate-900 transition-colors"
          >
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroHome1;