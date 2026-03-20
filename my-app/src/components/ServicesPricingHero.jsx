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
    <section className="pt-16 pb-16 sm:pt-20 sm:pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Label */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <h2 className="text-[18px] sm:text-[20px] font-black uppercase tracking-[0.5em] text-blue-600 italic">
            Strategic Capabilities
          </h2>
          <div className="h-[1px] flex-grow bg-slate-100 mt-2 sm:mt-0" />
        </div>

   
       <p className="mt-6 text-lg text-slate-600 font-medium leading-relaxed max-w-3xl mx-auto text-center">
  We eliminate the technical and operational friction that devalues and slows down high-growth companies,<br />
  transforming bottlenecks into strategic pillars<br />
  with engagements structured around measurable impact.
</p>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="group p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300"
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

        {/* Divider */}
        <div className="w-full h-[1px] bg-slate-100 mt-16" />
      </div>
    </section>
  );
}