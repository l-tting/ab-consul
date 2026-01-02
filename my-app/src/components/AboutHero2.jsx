"use client";
import React from "react";
import { XCircle, CheckCircle2 } from "lucide-react";

export default function AboutContrast() {
  return (
    <section className="w-full py-24 flex justify-center ">
      <div className="w-[92%] max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* The Status Quo */}
          <div className="p-10 rounded-[2.5rem] bg-white border border-slate-200 shadow-sm">
            <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-slate-400 mb-8 flex items-center gap-2">
              <XCircle className="w-4 h-4 text-red-400" />
              The Industry Standard
            </h3>
            <ul className="space-y-8">
              <li className="group">
                <p className="font-bold text-slate-900 text-lg mb-2">Build-to-Spec</p>
                <p className="text-slate-500 text-sm">Agencies build exactly what you ask for, even if it’s the wrong move for your revenue.</p>
              </li>
              <li className="group">
                <p className="font-bold text-slate-900 text-lg mb-2">Technical Isolation</p>
                <p className="text-slate-500 text-sm">Developers focus on code quality but have no idea how that code affects your CAC or LTV.</p>
              </li>
            </ul>
          </div>

          {/* The Acme Model */}
          <div className="p-10 rounded-[2.5rem] bg-slate-900 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px]" />
            <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-blue-400 mb-8 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              The Acme Model
            </h3>
            <ul className="space-y-8 relative z-10">
              <li className="group">
                <p className="font-bold text-white text-lg mb-2">Outcome-Architected</p>
                <p className="text-slate-400 text-sm">We don't build features; we build "revenue levers." Every line of code is measured against growth.</p>
              </li>
              <li className="group">
                <p className="font-bold text-white text-lg mb-2">Full-Stack Context</p>
                <p className="text-slate-400 text-sm">We integrate with your P&L. We understand your marketing spend. We ship for the bottom line.</p>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}