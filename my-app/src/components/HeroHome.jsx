"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { ArrowRight, BarChart3, Zap, ShieldCheck, Globe2 } from "lucide-react";

const ArrowRightIcon = (props) => (
  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" {...props} />
);

export const BentoGrid = ({ children, className }) => {
  return (
    <div className={cn("grid w-full auto-rows-[25rem] grid-cols-1 md:grid-cols-6 gap-4", className)}>
      {children}
    </div>
  );
};

export const BentoCard = ({ name, className, background, Icon, description, href, cta, theme }) => (
  <div className={cn(
    "group relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] border p-10 transition-all duration-700 hover:scale-[1.01]",
    theme.bg,      // Muted background
    theme.border,  // Low-opacity border
    theme.shadow,  // Subtle glow
    className
  )}>
    {/* Subtle Glow Overlay */}
    <div className="absolute inset-0 z-0 opacity-20 transition-opacity duration-500 group-hover:opacity-40">{background}</div>
    
    <div className="z-10 flex flex-col gap-2 transition-all duration-500 group-hover:-translate-y-2">
      {Icon && (
        <div className={cn(
          "mb-6 flex h-14 w-14 items-center justify-center rounded-2xl text-white/90 shadow-sm transition-all duration-500 group-hover:scale-110",
          theme.iconBg
        )}>
          <Icon size={24} strokeWidth={1.5} />
        </div>
      )}
      <h3 className="text-2xl font-bold tracking-tight text-slate-100">{name}</h3>
      <p className="max-w-[280px] text-sm font-medium leading-relaxed text-slate-400 group-hover:text-slate-200 transition-colors">
        {description}
      </p>
    </div>

    <div className="z-10 flex items-center pt-4">
      <a href={href} className="flex items-center text-xs font-black uppercase tracking-[0.2em] text-slate-600 transition-colors hover:text-slate-300">
        {cta} <ArrowRightIcon />
      </a>
    </div>
  </div>
);

const features = [
  {
    Icon: BarChart3,
    name: "Revenue Architecture",
    description: "Aligning technical roadmap with P&L to turn features into revenue levers.",
    href: "#",
    cta: "View Framework",
    className: "md:col-span-3",
    theme: {
      bg: "bg-[#0a0f1a]", // Muted Midnight Blue
      border: "border-blue-900/30",
      shadow: "hover:shadow-blue-900/20",
      iconBg: "bg-blue-950/50 border border-blue-800/30"
    },
    background: <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent" />
  },
  {
    Icon: Zap,
    name: "Infrastructure Liquidation",
    description: "Eliminating technical debt that acts as a tax on your scaling velocity.",
    href: "#",
    cta: "See Process",
    className: "md:col-span-3",
    theme: {
      bg: "bg-[#0a1a15]", // Muted Deep Moss
      border: "border-emerald-900/30",
      shadow: "hover:shadow-emerald-900/20",
      iconBg: "bg-emerald-950/50 border border-emerald-800/30"
    },
    background: <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent" />
  },
  {
    Icon: ShieldCheck,
    name: "Risk Mitigation",
    description: "Audit-ready systems designed for the $50M+ ARR stage.",
    href: "#",
    cta: "Read Case Study",
    className: "md:col-span-2",
    color: "purple",
    theme: {
      bg: "bg-[#130d1f]", // Muted Deep Plum
      border: "border-purple-900/30",
      shadow: "hover:shadow-purple-900/20",
      iconBg: "bg-purple-950/50 border border-purple-800/30"
    },
    background: <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent" />
  },
  {
    Icon: Globe2,
    name: "Global Ops",
    description: "Multi-region deployment and data compliance for expansion.",
    href: "#",
    cta: "Scale Globally",
    className: "md:col-span-4",
    theme: {
      bg: "bg-[#1a120a]", // Muted Dark Bronze
      border: "border-orange-900/30",
      shadow: "hover:shadow-orange-900/20",
      iconBg: "bg-orange-950/50 border border-orange-800/30"
    },
    background: <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent" />
  }
];

export default function HeroHome() {
  return (
    <div className="w-full py-20 flex justify-center bg-white"> 
      <div className="w-[95%] lg:w-[90%]"> 
        <BentoGrid>
          {features.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}