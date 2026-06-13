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
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const team = [
    {
      name: "Andrew Letting",
      title: "Strategy & Growth Architecture",
      impact: "Revenue Performance",
      description:
        "Andrew Letting is a fintech growth and revenue specialist with deep expertise in scaling digital financial services across Sub-Saharan Africa. He served as Regional Manager for Africa at Bitget Wallet and growth lead at Bitget exchange, one of the top 3 global crypto exchanges globally, and previously led fintech partnerships for East Africa and the Indian Ocean Islands at Mastercard. Earlier in his career he advised FloatPays on regulatory strategy across Africa as well as leading banking and digital marketing teams at Cellulant",
      metrics: ["15% LTV Expansion", "Attribution Engineering"],
    },
    {
      name: "Brian Letting",
      title: "Systems & Infrastructure Ops",
      impact: "Operational Efficiency",
      description:
        "I specialize in the architectural integrity and operational leverage of the stack. My mission is to eliminate 'technical drag'—transforming complex code into high-performance assets that scale without linear cost increases.",
      metrics: ["99.9% System Resilience", "40% OpEx Optimization"],
    },
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
        <div className="text-center mb-16">
          <h2 className="text-[20px] font-black uppercase tracking-[0.4em] text-blue-600 mb-3 italic">
            The Personnel
          </h2>
          <p className="text-2xl md:text-4xl font-black tracking-tighter text-slate-900 mb-4 leading-[0.9]">
            Direct access to{" "}
            <span className="text-stone-400 italic font-serif font-black">
              the founders.
            </span>
          </p>
          <p className="text-slate-600 text-lg max-w-xl mx-auto leading-relaxed font-medium">
            We don't delegate to account managers. You partner directly with the
            architects responsible for your growth and scaling engine.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          {team.map((member, i) => {
            const isExpanded = expandedIndex === i;
            const isHovered = hoveredIndex === i;

            return (
              <div
                key={i}
                onMouseEnter={() => !isMobile && setHoveredIndex(i)}
                onMouseLeave={() => !isMobile && setHoveredIndex(null)}
                onClick={() => handleCardClick(i)}
                className={`relative rounded-[3.5rem] overflow-hidden transition-all duration-700 bg-white cursor-pointer border border-slate-200 ${
                  isHovered && !isExpanded && !isMobile
                    ? "md:flex-[1.4] shadow-2xl border-blue-600"
                    : "md:flex-1 shadow-sm"
                }`}
              >
                {/* Background */}
                <div className="absolute inset-0 bg-slate-50" />

                {/* DESKTOP */}
                <div className="hidden md:block relative h-full">
                  {/* Default */}
                  <div
                    className={`absolute inset-0 p-12 flex flex-col justify-between transition-all duration-500 ${
                      isHovered ? "opacity-0 translate-y-6" : "opacity-100"
                    }`}
                  >
                    <div>
                      <p className="text-[11px] font-black text-blue-600 uppercase tracking-[0.3em] mb-2">
                        {member.title}
                      </p>
                      <h3 className="text-3xl font-black text-slate-900 tracking-tighter leading-none">
                        {member.name}
                      </h3>
                    </div>

                    <div className="w-12 h-12 rounded-full border border-slate-300 flex items-center justify-center">
                      <Plus className="w-6 h-6 text-slate-400" />
                    </div>
                  </div>

                  {/* Hover */}
                  <div
                    className={`absolute inset-0 p-12 flex flex-col bg-blue-600 transition-all duration-700 ${
                      isHovered
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }`}
                  >
                    <span className="text-[10px] font-black text-blue-200 uppercase tracking-[0.4em] mb-3">
                      Focus: {member.impact}
                    </span>

                    <h3 className="text-4xl font-black text-white mb-4 tracking-tighter">
                      {member.name}
                    </h3>

                    {/* DESCRIPTION (now gets more space) */}
                    <div className="text-blue-50 text-sm leading-relaxed mb-5 font-medium">
                      {member.description}
                    </div>

                    {/* Metrics */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {member.metrics.map((m, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-1.5 rounded-full bg-white/10 text-white text-[10px] font-black border border-white/20 tracking-widest uppercase"
                        >
                          {m}
                        </span>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between border-t border-white/20 pt-5 mt-auto">
                      <div className="flex items-center gap-2 text-white text-[11px] font-black uppercase tracking-[0.2em]">
                        <span>Case Studies</span>
                        <MoveRight className="w-4 h-4" />
                      </div>

                      <a
                        href="#"
                        className="p-3 bg-white text-blue-600 rounded-xl"
                      >
                        <Linkedin className="w-5 h-5 fill-current" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* MOBILE */}
                <div className="md:hidden relative">
                  {!isExpanded ? (
                    <div className="p-12 flex flex-col justify-between min-h-[500px]">
                      <div>
                        <p className="text-[11px] font-black text-blue-600 uppercase tracking-[0.3em] mb-2">
                          {member.title}
                        </p>
                        <h3 className="text-3xl font-black text-slate-900">
                          {member.name}
                        </h3>
                      </div>

                      <div className="w-12 h-12 rounded-full border border-slate-300 flex items-center justify-center">
                        <Plus className="w-6 h-6 text-slate-400" />
                      </div>
                    </div>
                  ) : (
                    <div className="p-12 flex flex-col bg-blue-600 min-h-[600px] relative">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setExpandedIndex(null);
                        }}
                        className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white"
                      >
                        <X className="w-5 h-5" />
                      </button>

                      <span className="text-[10px] font-black text-blue-200 uppercase tracking-[0.4em] mb-3">
                        Focus: {member.impact}
                      </span>

                      <h3 className="text-4xl font-black text-white mb-4">
                        {member.name}
                      </h3>

                      <div className="text-blue-50 text-sm leading-relaxed mb-5 font-medium">
                        {member.description}
                      </div>

                      <div className="flex flex-wrap gap-2 mb-5">
                        {member.metrics.map((m, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-1.5 rounded-full bg-white/10 text-white text-[10px] font-black border border-white/20 uppercase tracking-widest"
                          >
                            {m}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between border-t border-white/20 pt-5 mt-auto">
                        <div className="flex items-center gap-2 text-white text-[11px] font-black uppercase tracking-[0.2em]">
                          <span>Case Studies</span>
                          <MoveRight className="w-4 h-4" />
                        </div>

                        <a
                          href="#"
                          className="p-3 bg-white text-blue-600 rounded-xl"
                        >
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