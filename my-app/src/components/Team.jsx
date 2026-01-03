"use client";
import React, { useState } from "react";
import { MoveRight, Linkedin, Plus } from "lucide-react";

export default function TeamSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const team = [
    {
      name: "Marcus Thorne",
      title: "Technical Architect",
      impact: "Infrastructure ROI",
      description: "Re-engineering legacy stacks into scalable assets that handle 10x traffic without linear cost increases. I bridge the gap between code and capital.",
      metrics: ["99.9% Uptime", "40% Ops Savings"]
    },
    {
      name: "Elena Rossi",
      title: "Strategic Operator",
      impact: "Revenue Optimization",
      description: "Mapping technical funnels to P&L growth. Specialized in data attribution and conversion engineering to ensure every feature drives profit.",
      metrics: ["15% LTV Lift", "Zero Waste Tracking"]
    }
  ];

  return (
    <section className="w-full py-10 flex justify-center ">
      <div className="w-[92%] max-w-6xl">
        
        {/* Header - Centered for the 2-card layout */}
        <div className="text-center mb-20">
          <h2 className="text-md font-black uppercase tracking-[0.3em] text-blue-600 mb-4">The Personnel</h2>
          <p className="text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 mb-6">
            Direct access to <span className="text-slate-400 italic font-medium">founders.</span>
          </p>
          <p className="text-slate-500 text-sm max-w-lg mx-auto leading-relaxed">
            We don't hide behind account managers. You work directly with the 
            architects building your scaling engine.
          </p>
        </div>

        {/* Dynamic Grid - Optimized for 2 Cards */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch ">
          {team.map((member, i) => (
            <div 
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative min-h-[550px] rounded-[3rem] overflow-hidden transition-all bg-white duration-700 cursor-pointer border border-slate-300 shadow-sm ${
                hoveredIndex === i ? 'md:flex-[1.4] shadow-2xl' : 'md:flex-1'
              }`}
            >
              {/* Background State */}
              <div className="absolute inset-0 bg-slate-900">
                <div className={`absolute inset-0 bg-slate-100 transition-opacity duration-700 ${hoveredIndex === i ? 'opacity-10' : 'opacity-100'}`}>
                   {/* <img src={member.image} className="w-full h-full object-cover grayscale" /> */}
                </div>
              </div>

              {/* Default View (Visible when not hovered) */}
              <div className={`absolute inset-0 p-12 flex flex-col justify-end transition-all duration-500 ${hoveredIndex === i ? 'opacity-0 translate-y-10' : 'opacity-100'}`}>
                <div className="space-y-1">
                   <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">{member.title}</p>
                   <h3 className="text-3xl font-bold text-slate-900">{member.name}</h3>
                </div>
                <div className="mt-8 w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors">
                  <Plus className="w-5 h-5 text-slate-400" />
                </div>
              </div>

              {/* Hover View (The "Blue Reveal") */}
              <div className={`absolute inset-0 p-12 flex flex-col justify-end bg-blue-600 transition-all duration-500 transform ${
                hoveredIndex === i ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
              }`}>
                <span className="text-xs font-bold text-blue-200 uppercase tracking-[0.2em] mb-4">{member.impact}</span>
                <h3 className="text-4xl font-bold text-white mb-6 tracking-tight">{member.name}</h3>
                <p className="text-blue-50 text-base leading-relaxed mb-10 max-w-sm">
                  {member.description}
                </p>
                
                {/* Metric Badges */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {member.metrics.map((m, idx) => (
                    <span key={idx} className="px-4 py-1.5 rounded-full bg-white/10 text-white text-[11px] font-bold border border-white/20 backdrop-blur-sm">
                      {m}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest group">
                    <span>Expertise Background</span>
                    <MoveRight className="w-4 h-4 animate-pulse" />
                  </div>
                  <a href="#" className="p-3 bg-white/10 rounded-2xl hover:bg-white/20 transition-colors text-white">
                    <Linkedin className="w-5 h-5" />
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