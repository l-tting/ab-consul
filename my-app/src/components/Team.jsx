"use client";
import React, { useState } from "react";
import { MoveRight, Linkedin, Plus } from "lucide-react";

export default function TeamSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const team = [
    {
      name: "Andrew Letting",
      title: "Strategy & Growth Architecture",
      impact: "Revenue Performance",
      description: "Specialized in mapping complex technical funnels to real-world P&L growth. I engineer the data attribution and conversion systems that ensure every roadmap item drives measurable profit.",
      metrics: ["15% LTV Expansion", "Attribution Engineering"]
    },
    {
      name: "Brian Letting",
      title: "Systems & Infrastructure Ops",
      impact: "Operational Efficiency",
      description: "I specialize in the architectural integrity and operational leverage of the stack. My mission is to eliminate 'technical drag'—transforming complex code into high-performance assets that scale without linear cost increases.",
      metrics: ["99.9% System Resilience", "40% OpEx Optimization"]
    }
  ];

  return (
    <section className="w-full py-8 md:py-16 flex justify-center">
      <div className="w-[92%] max-w-6xl">

        {/* Header - Boardroom Alignment */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-[16px] md:text-[20px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-blue-600 mb-4 italic">
            The Personnel
          </h2>
          <p className="text-xl md:text-4xl font-black tracking-tighter text-slate-900 mb-4 md:mb-6 leading-[1.1] md:leading-[0.9]">
            Direct access to 
            <span className="text-stone-400 italic font-serif font-black"> the founders.</span>
          </p>
          <p className="text-slate-500 text-xs md:text-sm max-w-xl mx-auto leading-relaxed font-bold px-4">
            We don't delegate to account managers. You partner directly with the 
            architects responsible for your scaling engine.
          </p>
        </div>

        {/* Dynamic Grid - Mobile Optimized */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-stretch">
          {team.map((member, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative rounded-2xl md:rounded-[3.5rem] overflow-hidden transition-all duration-700 bg-white border border-slate-200 md:cursor-pointer"
            >
              {/* Default View - Always visible on mobile */}
              <div className="p-8 md:p-14 flex flex-col bg-slate-50">
                <div className="space-y-2">
                  <p className="text-[10px] md:text-[11px] font-black text-blue-600 uppercase tracking-[0.2em] md:tracking-[0.3em]">
                    {member.title}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tighter leading-none">
                    {member.name}
                  </h3>
                </div>
                <div className="mt-8 md:mt-10 w-10 h-10 md:w-12 md:h-12 rounded-full border border-slate-300 flex items-center justify-center">
                  <Plus className="w-5 h-5 md:w-6 md:h-6 text-slate-400" />
                </div>
              </div>

              {/* Hover/Expand View - Conditional for desktop, always visible on mobile as expandable */}
              <div className={`
                md:absolute md:inset-0 md:p-14 md:flex md:flex-col md:justify-end
                bg-blue-600 transition-all duration-700
                ${hoveredIndex === i ? 'md:translate-y-0 md:opacity-100' : 'md:translate-y-full md:opacity-0'}
                md:pointer-events-none
                mt-4 md:mt-0
              `}>
                <div className="p-8 md:p-0 pt-0 md:pt-0">
                  <span className="text-[9px] md:text-[10px] font-black text-blue-200 uppercase tracking-[0.3em] md:tracking-[0.4em] mb-2 md:mb-4 block">
                    Focus: {member.impact}
                  </span>
                  <h3 className="text-3xl md:text-5xl font-black text-white mb-4 md:mb-8 tracking-tighter leading-none">
                    {member.name}
                  </h3>
                  <p className="text-blue-50 text-sm md:text-md leading-relaxed mb-6 md:mb-10 max-w-sm font-medium">
                    {member.description}
                  </p>

                  {/* Metric Badges */}
                  <div className="flex flex-wrap gap-2 md:gap-3 mb-8 md:mb-12">
                    {member.metrics.map((m, idx) => (
                      <span key={idx} className="px-3 md:px-5 py-1.5 md:py-2 rounded-full bg-white/10 text-white text-[9px] md:text-[11px] font-black border border-white/20 backdrop-blur-md tracking-wider md:tracking-widest uppercase">
                        {m}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between border-t border-white/20 pt-6 md:pt-8">
                    <div className="flex items-center gap-2 md:gap-3 text-white text-[10px] md:text-[11px] font-black uppercase tracking-[0.15em] md:tracking-[0.2em]">
                      <span>Case Studies</span>
                      <MoveRight className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                    <a href="#" className="p-2 md:p-4 bg-white text-blue-600 rounded-xl md:rounded-2xl hover:bg-blue-50 transition-colors shadow-xl">
                      <Linkedin className="w-4 h-4 md:w-5 md:h-5 fill-current" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}