"use client";

import React from "react";
import Link from "next/link";

const HeroHome1 = () => {
  return (
    <div>
      <section className="text-center pt-8 pb-16 sm:pt-12 md:pt-16 px-6">
        <h1 className="text-3xl md:text-5xl font-black tracking-tighter text-slate-900 leading-[0.9] max-w-5xl mx-auto">
          We help startups
          <span className="text-slate-300 italic font-serif"> turn strategy </span> 
          into revenue.
        </h1>

        <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
          AB Consul partners with growth-stage businesses to optimize revenue,
          streamline operations, and scale sustainably.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link href="/contact" className="w-full sm:w-auto bg-blue-950 text-white px-6 py-3 rounded-full font-semibold text-center">
            Book a Strategy Call
          </Link>

          <Link href="/services" className="w-full sm:w-auto border border-black px-6 py-3 rounded-full text-center">
            View Services
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HeroHome1;