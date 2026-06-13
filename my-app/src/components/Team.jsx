"use client";
import React, { useState, useEffect } from "react";
import { MoveRight, Linkedin, Plus, X } from "lucide-react";

export default function TeamSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const team = [
    {
      name: "Andrew Letting",
      title: "Strategy & Growth Architecture",
      impact: "Revenue Performance",
      description: "Andrew Letting is a fintech growth and revenue specialist with deep expertise in scaling digital financial services across Sub-Saharan Africa. He served as Regional Manager for Africa at Bitget Wallet and growth lead at Bitget exchange, one of the top 3 global crypto exchanges globally, and previously led fintech partnerships for East Africa and the Indian Ocean Islands at Mastercard. Earlier in his career he advised FloatPays on regulatory strategy across Africa as well as leading banking and digital marketing teams at Cellulant",
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

  const handleCardClick = (index) => {
    if (isMobile) {
      setExpandedIndex(expandedIndex === index ? null : index);
    }
  };

  return (
    <section className="w-full py-16 flex justify-center">
      <div className="w-[92%] max-w-6xl">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-[20px] font-black uppercase tracking-[0.4em] text-blue-600 mb-4 italic">
            The Personnel
          </h2>
          <p className="text-2xl md:text-4xl font-black tracking-tighter text-slate-900 mb-6 leading-[0.9]">
            Direct access to
            <span className="text-stone-400 italic font-serif font-black"> the founders.</span>
          </p>
          <p className="text-slate-600 text-lg max-w-xl mx-auto leading-relaxed font-medium">
            We don't delegate to account managers. You partner directly with the
            architects responsible for your growth and scaling engine.
          </p>
        </div>

        {/* Dynamic Grid */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch min-h-[600px]">
          {team.map((member, i) => {
            const isExpanded = expandedIndex === i;
            const isHovered = hoveredIndex === i;

            return (
              <div
                key={i}
                onMouseEnter={() => !isMobile && setHoveredIndex(i)}
                onMouseLeave={() => !isMobile && setHoveredIndex(null)}
                onClick={() => handleCardClick(i)}
                className={`relative rounded-[3.5rem] overflow-hidden transition-all duration-700 bg-white cursor-pointer border border-slate-200 ${isHovered && !isExpanded && !isMobile ? 'md:flex-[1.4] shadow-2xl border-blue-600' : 'md:flex-1 shadow-sm'
                  }`}
              >
                {/* Background State */}
                <div className="absolute inset-0 bg-slate-900">
                  <div className={`absolute inset-0 bg-slate-50 transition-opacity duration-700 ${isHovered && !isExpanded && !isMobile ? 'opacity-10' : 'opacity-100'}`}>
                  </div>
                </div>

                {/* Desktop Hover Structure - only visible on desktop */}
                <div className="hidden md:block relative h-full">
                  {/* Default View (desktop) */}
                  <div className={`absolute inset-0 p-14 flex flex-col justify-end transition-all duration-500 ${isHovered ? 'opacity-0 translate-y-10' : 'opacity-100'
                    }`}>
                    <div className="space-y-2">
                      <p className="text-[11px] font-black text-blue-600 uppercase tracking-[0.3em]">{member.title}</p>
                      <h3 className="text-3xl font-black text-slate-900 tracking-tighter leading-none">{member.name}</h3>
                    </div>
                    <div className="mt-10 w-12 h-12 rounded-full border border-slate-300 flex items-center justify-center">
                      <Plus className="w-6 h-6 text-slate-400" />
                    </div>
                  </div>

                  {/* Hover View (desktop) */}
                  <div className={`absolute inset-0 p-14 flex flex-col justify-end bg-blue-600 transition-all duration-700 transform ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                    }`}>
                    <span className="text-[10px] font-black text-blue-200 uppercase tracking-[0.4em] mb-4">
                      Focus: {member.impact}
                    </span>
                    <h3 className="text-5xl font-black text-white mb-8 tracking-tighter leading-none">{member.name}</h3>
                    <div className="text-blue-50 text-md leading-relaxed mb-10 max-w-lg font-medium max-h-52 overflow-y-auto pr-2">
                      {member.description}
                    </div>
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

                {/* Mobile Structure - conditionally render based on expanded state */}
                <div className="md:hidden relative">
                  {!isExpanded ? (
                    // Default mobile view
                    <div className="p-14 flex flex-col justify-end min-h-[600px]">
                      <div className="space-y-2">
                        <p className="text-[11px] font-black text-blue-600 uppercase tracking-[0.3em]">{member.title}</p>
                        <h3 className="text-3xl font-black text-slate-900 tracking-tighter leading-none">{member.name}</h3>
                      </div>
                      <div className="mt-10 w-12 h-12 rounded-full border border-slate-300 flex items-center justify-center">
                        <Plus className="w-6 h-6 text-slate-400" />
                      </div>
                    </div>
                  ) : (
                    // Expanded mobile view
                    <div className="p-14 flex flex-col justify-end bg-blue-600 min-h-[600px] relative">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setExpandedIndex(null);
                        }}
                        className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white"
                      >
                        <X className="w-5 h-5" />
                      </button>
                      <span className="text-[10px] font-black text-blue-200 uppercase tracking-[0.4em] mb-4">
                        Focus: {member.impact}
                      </span>
                      <h3 className="text-5xl font-black text-white mb-8 tracking-tighter leading-none">{member.name}</h3>
                      <p className="text-blue-50 text-md leading-relaxed mb-10 max-w-sm font-medium">
                        {member.description}
                      </p>
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
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}