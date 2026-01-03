"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { ArrowRight, BarChart3, Zap, ShieldCheck, Globe2 } from "lucide-react";

// Simplified Arrow
const ArrowRightIcon = (props) => (
  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" {...props} />
);

export const BentoGrid = ({ children, className }) => {
  return (
    <div className={cn("grid w-full auto-rows-[25rem] grid-cols-1 md:grid-cols-6 gap-3", className)}>
      {children}
    </div>
  );
};

export const BentoCard = ({ name, className, background, Icon, description, href, cta }) => (
  <div className={cn(
    "group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border bg-slate-700 border-slate-100 p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/50",
    className
  )}>
    <div className="absolute inset-0 z-0">{background}</div>
    
    <div className="z-10 flex flex-col gap-2 transition-all duration-500 group-hover:-translate-y-2">
      {Icon && (
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-500 text-slate-900 shadow-sm transition-all duration-500 group-hover:bg-blue-600 group-hover:text-white">
          <Icon size={24} strokeWidth={1.5} />
        </div>
      )}
      <h3 className="text-2xl font-bold tracking-tight text-slate-900">{name}</h3>
      <p className="max-w-[280px] text-sm font-medium leading-relaxed text-slate-500">{description}</p>
    </div>

    <div className="z-10 flex items-center pt-4">
      <a href={href} className="flex items-center text-xs font-black uppercase tracking-[0.2em] text-slate-400 transition-colors hover:text-blue-600">
        {cta} <ArrowRightIcon />
      </a>
    </div>
  </div>
);

const features = [
  {
    Icon: BarChart3,
    name: "Revenue Architecture",
    description: "We align your technical roadmap with your P&L, ensuring every feature is a revenue lever.",
    href: "#",
    cta: "View Framework",
    className: "md:col-span-3",
    background: <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-transparent" />
  },
  {
    Icon: Zap,
    name: "Infrastructure Liquidation",
    description: "Eliminating technical debt that acts as a tax on your scaling velocity.",
    href: "#",
    cta: "See Process",
    className: "md:col-span-3",
    background: <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/50 to-transparent" />
  },
  {
    Icon: ShieldCheck,
    name: "Risk Mitigation",
    description: "Audit-ready systems designed for the $50M+ ARR stage. Security as a growth enabler.",
    href: "#",
    cta: "Read Case Study",
    className: "md:col-span-2",
    background: <div className="absolute inset-0 bg-slate-50/50" />
  },
  {
    Icon: Globe2,
    name: "Global Ops",
    description: "Multi-region deployment and data compliance for international expansion.",
    href: "#",
    cta: "Scale Globally",
    className: "md:col-span-4",
    background: <div className="absolute inset-0 bg-gradient-to-r from-slate-50 to-white" />
  }
];

export default function HeroHome() {
  return (
    <div className="w-full py-12 flex justify-center"> 
      <div className="w-[95%] lg:w-[92%]"> 
        <BentoGrid>
          {features.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}