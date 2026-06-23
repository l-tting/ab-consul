"use client";

import React from "react";

const steps = [
  {
    step: "01",
    title: "Discovery",
    description:
      `We identify the problems and bottlenecks you are facing 
      to validate that our proposed solutions will work in the market`,
  },
  {
    step: "02",
    title: "Strategy",
    description:
      `We develop the revised technical roadmap, system architecture,
       operational workflows and detailed user journeys`,
  },
  {
    step: "03",
    title: "Execution",
    description:
      `We use agile methodologies to build a working product while continuously testing all components to 
      ensure we identify and fixing all technical and user gaps`,
  },
  {
    step: "04",
    title: "Iteration",
    description:
      `We provide post-launch monitoring, maintenance 
      and updates based on user feedback as you scale`,
  },
];

export default function Process() {
  return (
    <section className="w-full py-14 md:py-12 mb-8">
      <div className="max-w-6xl mx-auto px-5 md:px-6">

        {/* Heading */}
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 md:mb-24 gap-6">
          <div className="max-w-xl">
            <h2 className="text-[18px] md:text-[20px] font-black uppercase tracking-[0.35em] text-blue-600 mb-3 md:mb-4">
              Our Methodology
            </h2>
            <p className="text-2xl md:text-3xl font-bold tracking-tighter text-slate-900 leading-tight">
              A repeatable engine for
              <span className="text-slate-400 italic font-medium"> uncommon</span> results.
            </p>
          </div>

          <p className="text-slate-400 text-sm font-medium max-w-full md:max-w-[290px] leading-relaxed md:border-l md:border-slate-500 md:pl-6">
            We don't believe in "phases." We believe in a continuous cycle of value extraction.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className="group relative flex flex-col items-start"
            >
              {/* Step Number + Line */}
              <div className="w-full flex items-center gap-4 mb-6">
                <span className="text-sm font-black font-mono text-slate-700 group-hover:text-blue-600 transition-colors duration-500">
                  {item.step}
                </span>

                <div className="relative h-px flex-grow bg-slate-200 overflow-hidden">
                  <div className="absolute inset-0 bg-blue-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out" />
                </div>
              </div>

              {/* Circle */}
              <div className="relative mb-6">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-slate-400 flex items-center justify-center bg-white group-hover:border-blue-600 group-hover:shadow-xl group-hover:shadow-blue-500/10 transition-all duration-500">
                  <div className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-blue-600 transition-colors" />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3 flex-1">
                <h3 className="text-lg md:text-xl font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm font-medium leading-relaxed text-slate-500 max-w-full md:max-w-[240px]">
                  {item.description}
                </p>
              </div>

              {/* Vertical connector for mobile */}
              {index !== steps.length - 1 && (
                <div className="md:hidden w-px h-10 bg-slate-200 ml-8 mt-6" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}