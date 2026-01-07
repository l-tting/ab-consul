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
    theme.bg,      // Unique Background
    theme.border,  // Unique Border
    theme.shadow,  // Unique Hover Shadow
    className
  )}>
    {/* Background Pattern/Overlay */}
    <div className="absolute inset-0 z-0 opacity-30 mix-blend-overlay">{background}</div>
    
    <div className="z-10 flex flex-col gap-2 transition-all duration-500 group-hover:-translate-y-2">
      {Icon && (
        <div className={cn(
          "mb-6 flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-3",
          theme.iconBg
        )}>
          <Icon size={28} strokeWidth={1.5} />
        </div>
      )}
      <h3 className="text-3xl font-bold tracking-tighter text-white">{name}</h3>
      <p className="max-w-[280px] text-sm font-medium leading-relaxed text-white/70 group-hover:text-white transition-colors">
        {description}
      </p>
    </div>

    <div className="z-10 flex items-center pt-4">
      <a href={href} className="flex items-center text-xs font-black uppercase tracking-[0.2em] text-white/50 transition-colors hover:text-white">
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
    theme: {
      bg: "bg-[#0f172a]", // Deep Navy
      border: "border-blue-500/20",
      shadow: "hover:shadow-blue-500/20",
      iconBg: "bg-blue-600"
    },
    background: <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-400/20 via-transparent to-transparent" />
  },
  {
    Icon: Zap,
    name: "Infrastructure Liquidation",
    description: "Eliminating technical debt that acts as a tax on your scaling velocity.",
    href: "#",
    cta: "See Process",
    className: "md:col-span-3",
    theme: {
      bg: "bg-[#064e3b]", // Deep Forest
      border: "border-emerald-500/20",
      shadow: "hover:shadow-emerald-500/20",
      iconBg: "bg-emerald-600"
    },
    background: <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-400/20 via-transparent to-transparent" />
  },
  {
    Icon: ShieldCheck,
    name: "Risk Mitigation",
    description: "Audit-ready systems designed for the $50M+ ARR stage.",
    href: "#",
    cta: "Read Case Study",
    className: "md:col-span-2",
    theme: {
      bg: "bg-[#4c1d95]", // Deep Royal Purple
      border: "border-violet-500/20",
      shadow: "hover:shadow-violet-500/20",
      iconBg: "bg-violet-600"
    },
    background: <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-violet-400/20 via-transparent to-transparent" />
  },
  {
    Icon: Globe2,
    name: "Global Ops",
    description: "Multi-region deployment and data compliance for expansion.",
    href: "#",
    cta: "Scale Globally",
    className: "md:col-span-4",
    theme: {
      bg: "bg-[#7c2d12]", // Deep Terracotta/Rust
      border: "border-orange-500/20",
      shadow: "hover:shadow-orange-500/20",
      iconBg: "bg-orange-600"
    },
    background: <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-orange-400/20 via-transparent to-transparent" />
  }
];

export default function HeroHome() {
  return (
    <div className="w-full py-20 flex justify-center bg-slate-50"> 
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