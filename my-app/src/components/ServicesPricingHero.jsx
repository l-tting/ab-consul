"use client";

import React from "react";
import { Zap, Scale, ShieldCheck } from "lucide-react";

export default function ServicesPricingHero() {
  const pillars = [
    {
      title: "Impact, Not Hours",
      desc: "Our engagements are structured around measurable business outcomes, not time spent.",
      icon: <Zap className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "Scale-Adjusted",
      desc: "Pricing adapts to system complexity—from early infrastructure to enterprise-scale platforms.",
      icon: <Scale className="w-5 h-5 text-emerald-600" />,
    },
    {
      title: "Aligned Incentives",
      desc: "We operate as fractional partners. Our success is tied directly to your growth.",
      icon: <ShieldCheck className="w-5 h-5 text-purple-600" />,
    },
  ];

  return (
    <section className="relative w-full py-0 flex justify-center overflow-hidden bg-stone-100">
      {/* Background Grid */}
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
          Engagement Framework
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-5xl font-black tracking-tighter text-slate-900 leading-[0.95] mb-8">
          Strategic <br className="md:hidden" />
          <span className="text-blue-600">Capabilities</span>
        </h1>

        {/* Subtext */}
        <p className="text-xl md:text-2xl text-slate-500 max-w-3xl leading-relaxed font-medium mb-12 tracking-tight">
          We eliminate the technical and operational friction that slows high-growth companies,
          transforming bottlenecks into scalable, measurable systems of value creation.
        </p>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-6">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="group p-8 rounded-[2rem] bg-white border border-stone-200 shadow-sm hover:shadow-lg transition-all duration-300 text-left"
            >
              <div className="mb-5 p-4 bg-slate-50 rounded-xl w-fit group-hover:bg-blue-50 transition">
                {pillar.icon}
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-3">
                {pillar.title}
              </h3>

              <p className="text-slate-500 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}