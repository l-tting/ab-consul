"use client";
import React from "react";
import { MoveRight } from "lucide-react";

export default function AboutClosing() {
  return (
    <section className="w-full py-20 flex justify-center  border-t border-slate-100">
      <div className="w-[92%] max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start gap-20">
          
          {/* Left: The Requirements */}
          <div className="md:w-1/2">
            <h2 className="text-[30px] font-black uppercase tracking-[0.4em] text-blue-600 mb-8">
              The Ideal Fit
            </h2>
            <div className="space-y-12">
              <div className="group border-b border-slate-100 pb-8 last:border-0">
                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">Post-Revenue Complexity</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  You’ve moved past the MVP stage and your technical debt is now actively 
                  throttling your ability to capture new revenue.
                </p>
              </div>
              <div className="group border-b border-slate-100 pb-8 last:border-0">
                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">Scale-Ready Mindset</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  You view software as a capital asset, not an expense. You want 
                  infrastructure that handles 10x growth, not just "bug fixes."
                </p>
              </div>
            </div>
          </div>

          {/* Right: The Final Action */}
          <div className="md:w-1/3 bg-slate-900 rounded-[2.5rem] mt-8 p-12 text-white relative overflow-hidden">
            <div className="absolute top-10 right-0 w-32 h-32 bg-blue-500/20 blur-[60px]" />
            
            <p className="text-sm font-bold text-blue-400 mb-6 uppercase tracking-widest">Next Step</p>
            <h3 className="text-3xl font-bold mb-8 tracking-tighter">
              Verify the <span className="italic text-slate-400">results.</span>
            </h3>
            
            <p className="text-slate-400 text-sm mb-12 leading-relaxed">
              Before we talk, see how we’ve applied this methodology to companies 
              doing $5M—$50M ARR.
            </p>

            <button 
              onClick={() => window.location.href = '/case-studies'}
              className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition-all flex items-center justify-center gap-3 group"
            >
              Browse Case Studies
              <MoveRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}