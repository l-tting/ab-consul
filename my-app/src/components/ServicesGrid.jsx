"use client";

import React from "react";

const services = [
  {
    title: "SaaS Architecture",
    tag: "Scale",
    desc: "End-to-end development of multi-tenant platforms with complex RBAC and automated billing systems.",
    features: ["Next.js/React", "Stripe Integration", "Multi-tenant DB"],
    metric: "99.9% UPTIME",
    accent: "from-blue-500 to-cyan-400"
  },
  {
    title: "Cloud Infrastructure",
    tag: "Stability",
    desc: "Migrating legacy systems to serverless or containerized environments on AWS and Vercel.",
    features: ["Terraform (IaC)", "CI/CD Pipelines", "Edge Computing"],
    metric: "<200MS LATENCY",
    accent: "from-purple-500 to-indigo-400"
  },
  {
    title: "Product Engineering",
    tag: "Velocity",
    desc: "Rapid development of mission-critical features without compromising on technical debt or code quality.",
    features: ["TypeScript / Node", "GraphQL APIs", "WebSockets"],
    metric: "FAST-TRACK",
    accent: "from-emerald-500 to-teal-400"
  },
  {
    title: "System Migration",
    tag: "Modernize",
    desc: "Phased replacement of monolithic architectures with modular, maintainable microservices.",
    features: ["DB Migration", "Legacy Refactoring", "Bridge Design"],
    metric: "ZERO DOWNTIME",
    accent: "from-orange-500 to-red-400"
  }
];

export default function ServiceGrid() {
  return (
    <section className="py-32 ">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <div 
              key={i} 
              className="group relative p-[1px] rounded-3xl transition-all duration-500 hover:scale-[1.01]"
            >
              {/* Animated Gradient Border (Visible on Hover) */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${s.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[2px]`} />
              
              {/* Main Card Body */}
              <div className="relative h-full bg-slate-950 rounded-[23px] p-10 lg:p-12 overflow-hidden">
                
                {/* Background Glow */}
                <div className={`absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br ${s.accent} opacity-10 blur-[80px] group-hover:opacity-20 transition-opacity duration-500`} />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Top Bar */}
                  <div className="flex justify-between items-center mb-12">
                    <span className="text-[10px] font-black text-white/90 uppercase tracking-[0.3em] bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/10">
                      {s.tag}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500 tracking-widest">
                      {s.metric}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-3xl lg:text-4xl font-bold mb-6 tracking-tighter text-white">
                    {s.title}
                  </h3>
                  
                  <p className="text-slate-400 mb-10 leading-relaxed text-lg max-w-sm">
                    {s.desc}
                  </p>

                  {/* Features / Tech Stack */}
                  <div className="mt-auto pt-8 border-t border-white/5 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {s.features.map(f => (
                      <div key={f} className="flex flex-col gap-1">
                        <div className="h-[2px] w-4 bg-slate-700 group-hover:w-8 group-hover:bg-blue-500 transition-all duration-500" />
                        <span className="text-[9px] font-bold text-slate-500 uppercase tracking-tighter group-hover:text-slate-300">
                          {f}
                        </span>
                      </div>
                    ))}
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