"use client";
import React from "react";
import { ArrowRight } from "lucide-react";

export default function PricingCTA() {
  return (
    <section className="w-full py-32 flex justify-center bg-white border-t border-slate-100">
      <div className="w-[92%] max-w-7xl text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tighter mb-8">
          Ready to <span className="text-blue-600 italic">unlock</span> your next 10x?
        </h2>
        <p className="text-slate-500 text-lg mb-12 max-w-xl mx-auto">
          We only take on 2 new partners per quarter to ensure maximum impact. 
          Secure your audit before the next window closes.
        </p>
        <button 
          onClick={() => window.location.href = '/contact'}
          className="group flex items-center gap-3 bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-600 transition-all mx-auto shadow-2xl shadow-slate-200"
        >
          Book Your Strategy Call
          <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
        </button>
      </div>
    </section>
  );
}