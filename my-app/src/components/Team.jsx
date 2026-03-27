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
    <section className="w-full py-16 flex justify-center">
      <div className="w-[92%] max-w-6xl">

        {/* Header - Boardroom Alignment */}
        <div className="text-center mb-20">
          <h2 className="text-[20px] font-black uppercase tracking-[0.4em] text-blue-600 mb-4 italic">
            The Personnel
          </h2>
          <p className="text-2xl md:text-4xl font-black tracking-tighter text-slate-900 mb-6 leading-[0.9]">
            Direct access to 
            <span className="text-stone-400 italic font-serif font-black"> the founders.</span>
          </p>
          <p className="text-slate-500 text-sm max-w-xl mx-auto leading-relaxed font-bold">
            We don't delegate to account managers. You partner directly with the 
            architects responsible for your scaling engine.
          </p>
        </div>

        {/* Dynamic Grid */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch min-h-[600px]">
          {team.map((member, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`
                relative rounded-[3.5rem] overflow-hidden transition-all duration-700 
                bg-white border border-slate-200
                ${hoveredIndex === i && typeof window !== 'undefined' && window.innerWidth >= 768 
                  ? 'md:flex-[1.4] shadow-2xl border-blue-600' 
                  : 'md:flex-1 shadow-sm'
                }
              `}
            >
              {/* Background State */}
              <div className="absolute inset-0 bg-slate-900">
                <div className={`absolute inset-0 bg-slate-50 transition-opacity duration-700 ${hoveredIndex === i ? 'opacity-10' : 'opacity-100'}`}>
                </div>
              </div>

              {/* Default View - Always visible on mobile, conditionally visible on desktop based on hover */}
              <div className={`
                relative p-14 flex flex-col justify-end min-h-[600px]
                transition-all duration-500
                md:absolute md:inset-0
                ${hoveredIndex === i ? 'md:opacity-0 md:translate-y-10' : 'md:opacity-100'}
              `}>
                <div className="space-y-2">
                  <p className="text-[11px] font-black text-blue-600 uppercase tracking-[0.3em]">{member.title}</p>
                  <h3 className="text-3xl font-black text-slate-900 tracking-tighter leading-none">{member.name}</h3>
                </div>
                <div className="mt-10 w-12 h-12 rounded-full border border-slate-300 flex items-center justify-center transition-all">
                  <Plus className="w-6 h-6 text-slate-400" />
                </div>
              </div>

              {/* Hover View - Hidden on mobile, shows on desktop hover */}
              <div className={`
                relative p-14 flex flex-col justify-end bg-blue-600 min-h-[600px]
                transition-all duration-700
                md:absolute md:inset-0
                ${hoveredIndex === i ? 'md:translate-y-0 md:opacity-100' : 'md:translate-y-full md:opacity-0'}
                ${hoveredIndex === i ? 'block' : 'hidden md:block'}
              `}>
                <span className="text-[10px] font-black text-blue-200 uppercase tracking-[0.4em] mb-4">
                  Focus: {member.impact}
                </span>
                <h3 className="text-5xl font-black text-white mb-8 tracking-tighter leading-none">{member.name}</h3>
                <p className="text-blue-50 text-md leading-relaxed mb-10 max-w-sm font-medium">
                  {member.description}
                </p>

                {/* Metric Badges */}
                <div className="flex flex-wrap gap-3 mb-12">
                  {member.metrics.map((m, idx) => (
                    <span key={idx} className="px-5 py-2 rounded-full bg-white/10 text-white text-[11px] font-black border border-white/20 backdrop-blur-md tracking-widest uppercase">
                      {m}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between border-t border-white/20 pt-8">
                  <div className="flex items-center gap-3 text-white text-[11px] font-black uppercase tracking-[0.2em]">
                    <span>Case Studies</span>
                    <MoveRight className="w-5 h-5" />
                  </div>
                  <a href="#" className="p-4 bg-white text-blue-600 rounded-2xl hover:bg-blue-50 transition-colors shadow-xl">
                    <Linkedin className="w-5 h-5 fill-current" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}