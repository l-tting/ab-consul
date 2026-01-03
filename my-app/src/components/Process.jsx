"use client";

import React from "react";

const steps = [
  {
    step: "01",
    title: "Discovery",
    description: "We audit your technical debt and business bottlenecks to find the highest-leverage entry point."
  },
  {
    step: "02",
    title: "Strategy",
    description: "We architect a roadmap where every engineering decision is a calculated move toward revenue."
  },
  {
    step: "03",
    title: "Execution",
    description: "High-velocity implementation with transparent PRs and real-time infrastructure visibility."
  },
  {
    step: "04",
    title: "Iteration",
    description: "Post-launch optimization focusing on unit economics and system hardening for 10x scale."
  }
];

export default function Process() {
  return (
    <section className="w-full py-12 ">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading - Aligned with your "Quiet" brand */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-6">
          <div className="max-w-xl">
            <h2 className="text-[14px] font-black uppercase tracking-[0.4em] text-blue-600 mb-4">
              Our Methodology
            </h2>
            <p className="text-4xl font-bold tracking-tighter text-slate-900 leading-tight">
              A repeatable engine for <br />
              <span className="text-slate-400 italic font-medium">uncommon</span> results.
            </p>
          </div>
          <p className="text-slate-400 text-xs font-medium max-w-[240px] leading-relaxed border-l border-slate-100 pl-6">
            We don't believe in "phases." We believe in a continuous cycle of value extraction.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 cursor-pointer">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className="group relative flex flex-col items-start"
            >
              {/* The Step Header: Number and SVG Line */}
              <div className="w-full flex items-center gap-4 mb-8">
                <span className="text-sm font-black font-mono text-slate-700 group-hover:text-blue-600 transition-colors duration-500">
                  {item.step}
                </span>
                <div className="relative h-px flex-grow bg-slate-200 overflow-hidden">
                  <div className="absolute inset-0 bg-blue-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out" />
                </div>
              </div>

              {/* The Circle/Node */}
              <div className="relative mb-8">
                <div className="w-20 h-20 rounded-full border border-slate-500 flex items-center justify-center bg-white group-hover:border-blue-600 group-hover:shadow-xl group-hover:shadow-blue-500/10 transition-all duration-500">
                   <div className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-blue-600 transition-colors" />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500 max-w-[240px]">
                  {item.description}
                </p>
              </div>
              
              {/* Optional Decoration: Vertical line for mobile flow */}
              {index !== steps.length - 1 && (
                <div className="md:hidden w-px h-12 bg-slate-100 ml-10 my-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}