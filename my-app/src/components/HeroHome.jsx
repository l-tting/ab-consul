"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { ArrowRight, BarChart3, Zap, ShieldCheck, Globe2 } from "lucide-react";

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

export const BentoCard = ({ name, className, background, Icon, description, href, cta, color }) => (
  <div className={cn(
    "group relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] border p-8 transition-all duration-500",
    "bg-slate-950 border-slate-800 hover:shadow-2xl",
    // Dynamic shadow color based on the card theme
    color === "blue" && "hover:shadow-blue-500/10",
    color === "emerald" && "hover:shadow-emerald-500/10",
    color === "purple" && "hover:shadow-purple-500/10",
    color === "amber" && "hover:shadow-amber-500/10",
    className
  )}>
    <div className="absolute inset-0 z-0 opacity-40">{background}</div>
    
    <div className="z-10 flex flex-col gap-2 transition-all duration-500 group-hover:-translate-y-2">
      {Icon && (
        <div className={cn(
          "mb-4 flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-inner transition-all duration-500 group-hover:scale-110",
          "bg-slate-900", // Default bg
          color === "blue" && "group-hover:bg-blue-600",
          color === "emerald" && "group-hover:bg-emerald-600",
          color === "purple" && "group-hover:bg-purple-600",
          color === "amber" && "group-hover:bg-amber-600",
        )}>
          <Icon size={26} strokeWidth={1.5} />
        </div>
      )}
      <h3 className="text-2xl font-bold tracking-tight text-white">{name}</h3>
      <p className="max-w-[280px] text-sm font-medium leading-relaxed text-slate-400 group-hover:text-slate-200 transition-colors">
        {description}
      </p>
    </div>

    <div className="z-10 flex items-center pt-4">
      <a href={href} className={cn(
        "flex items-center text-xs font-black uppercase tracking-[0.2em] transition-colors",
        "text-slate-500",
        color === "blue" && "hover:text-blue-400",
        color === "emerald" && "hover:text-emerald-400",
        color === "purple" && "hover:text-purple-400",
        color === "amber" && "hover:text-amber-400",
      )}>
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
    color: "blue",
    background: <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-transparent" />
  },
  {
    Icon: Zap,
    name: "Infrastructure Liquidation",
    description: "Eliminating technical debt that acts as a tax on your scaling velocity.",
    href: "#",
    cta: "See Process",
    className: "md:col-span-3",
    color: "emerald",
    background: <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 via-transparent to-transparent" />
  },
  {
    Icon: ShieldCheck,
    name: "Risk Mitigation",
    description: "Audit-ready systems designed for the $50M+ ARR stage. Security as a growth enabler.",
    href: "#",
    cta: "Read Case Study",
    className: "md:col-span-2",
    color: "purple",
    background: <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-transparent" />
  },
  {
    Icon: Globe2,
    name: "Global Ops",
    description: "Multi-region deployment and data compliance for international expansion.",
    href: "#",
    cta: "Scale Globally",
    className: "md:col-span-4",
    color: "amber",
    background: <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 via-transparent to-transparent" />
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
}home 