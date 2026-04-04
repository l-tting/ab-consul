"use client";

import React from "react";
import Link from "next/link";

const HeroHome1 = () => {
  return (
    <section className="w-full flex justify-center bg-stone-100 pt-16 pb-24 px-6">
      <div className="w-[92%] max-w-6xl text-center">

        {/* Badge / Protocol Line */}
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 mb-6 italic">
          Strategic Advisory Group
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 leading-[0.9] max-w-5xl mx-auto">
          We help startups
          <span className="text-stone-400 italic font-serif">
            {" "}turn strategy{" "}
          </span>
          into revenue.
        </h1>

        {/* Subtext */}
        <p className="mt-8 text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
          AB Consul partners with growth-stage businesses to optimize revenue systems,
          streamline operations, and execute scalable expansion frameworks.
        </p>

        {/* CTA Block */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-5">
          <Link
            href="/contact"
            className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-bold transition-all duration-300"
          >
            Book a Strategy Call
          </Link>

          <Link
            href="/services"
            className="w-full sm:w-auto border-2 border-slate-900 text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-slate-900 hover:text-white transition-all duration-300"
          >
            View Services
          </Link>
        </div>

      </div>
    </section>
  );
};

export default HeroHome1;