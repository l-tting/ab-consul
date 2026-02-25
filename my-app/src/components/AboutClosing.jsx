"use client";
import React from "react";
import { MoveRight, Target, BarChart4 } from "lucide-react";
import Link from "next/link";

export default function AboutClosing() {
  return (
    <section className="w-full py-18 flex justify-center border-t border-slate-100 ">
      <div className="w-[92%] max-w-6xl">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-32">
          
          {/* Left: The Requirements - Professional Qualification */}
          <div className="lg:w-1/2">
            <h2 className="text-[20px] font-black uppercase tracking-[0.5em] text-blue-600 mb-10 italic">
              The Ideal Partnership
            </h2>
            <div className="space-y-12">
              <div className="group border-b border-slate-100 pb-6 last:border-0">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-5 h-5 text-blue-600" />
                  <h3 className="text-xl font-black text-slate-900 tracking-tighter">Post-Revenue Complexity</h3>
                </div>
                <p className="text-slate-500 text-md font-medium leading-relaxed">
                  You have achieved product-market fit, but your current technical velocity is 
                  now the primary bottleneck. We excel when debt is actively throttling 
                  your ability to capture top-line revenue.
                </p>
              </div>

              <div className="group border-b border-slate-100 pb-10 last:border-0">
                <div className="flex items-center gap-3 mb-4">
                  <BarChart4 className="w-5 h-5 text-blue-600" />
                  <h3 className="text-xl font-black text-slate-900 tracking-tighter">Asset-First Mindset</h3>
                </div>
                <p className="text-slate-500 text-md font-medium leading-relaxed">
                  You view your infrastructure as a capital asset to be optimized for exit or 
                  institutional scale. You are looking for a partner to engineer 10x 
                  resilience, not just a vendor to clear a backlog.
                </p>
              </div>
            </div>
          </div>

          {/* Right: The Final Action - The "Boardroom" Card */}
          <div className="lg:w-[400px] bg-slate-900 rounded-[3rem] mt-16 p-12 text-white relative overflow-hidden shadow-[0_40px_80px_-15px_rgba(15,23,42,0.3)] border border-slate-800">
            {/* Soft Glow Effect */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/20 blur-[80px] pointer-events-none" />
            
            <p className="text-[10px] font-black text-blue-400 mb-8 uppercase tracking-[0.3em]">Institutional Verification</p>
            <h3 className="text-3xl font-bold mb-8 tracking-tighter leading-[0.9]">
              Verify 
              <span className="italic font-serif text-slate-400 font-medium text-3xl"> Strategic Results.</span>
            </h3>
            
            <p className="text-slate-400 text-sm mb-12 leading-relaxed font-medium">
              See the documented impact of the AB CONSUL methodology across portfolios 
              scaling from $5M to $50M ARR.
            </p>

            <Link 
              href="/case-studies"
              className="w-full py-4 bg-blue-600 hover:bg-white hover:text-blue-600 text-white rounded-full font-black text-sm uppercase tracking-widest transition-all duration-500 flex items-center justify-center gap-4 group shadow-xl shadow-blue-900/20"
            >
              Browse Case Studies
              <MoveRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}