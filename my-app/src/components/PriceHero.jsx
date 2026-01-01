"use client";

import { Check } from "lucide-react";

export default function PricingHero() {
  return (
    <section className="w-full py-0 md:py-8 flex justify-center ">
      <div className="w-[92%] max-w-7xl text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-bold uppercase tracking-widest mb-6">
          <span>Straightforward Pricing</span>
        </div>

        <h1 className="text-5xl md:text-5xl font-bold tracking-tighter text-slate-900 mb-6">
          Invest in your <span className="text-blue-600">unfair advantage.</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
          No hidden fees. No junior developers. Just expert Biz + Dev strategy 
          designed to scale your revenue and your stack.
        </p>
      </div>
    </section>
  );
}