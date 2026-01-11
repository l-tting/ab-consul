"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { ArrowUpRight, BarChart3, Target, ShieldCheck, Globe2 } from "lucide-react";

// Use an "Upward Growth" icon for the CTA
const GrowthArrow = () => (
  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
);

export const BentoGrid = ({ children, className }) => {
  return (
    <div className={cn("grid w-full auto-rows-[25rem] grid-cols-1 md:grid-cols-6 gap-4", className)}>
      {children}
    </div>
  );
};

export const BentoCard = ({ name, className, Icon, description, href, cta, theme }) => (
  <div className={cn(
    "group relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] border p-10 transition-all duration-700 hover:shadow-2xl",
    theme.bg,      // The "Base" rich color
    theme.border,  // Sophisticated border
    className
  )}>
    
    {/* VIBRANT ACCENT GLOW (The "Energy" of Growth) */}
    <div className={cn(
        "absolute -right-10 -top-10 h-64 w-64 rounded-full blur-[80px] opacity-20 transition-all duration-700 group-hover:opacity-40 group-hover:scale-125",
        theme.glow
    )} />

    <div className="z-10 flex flex-col gap-2">
      {Icon && (
        <div className={cn(
          "mb-6 flex h-14 w-14 items-center justify-center rounded-xl shadow-lg transition-all duration-500 group-hover:scale-110",
          theme.iconBg,
          theme.iconColor
        )}>
          <Icon size={28} strokeWidth={2} />
        </div>
      )}
      <h3 className="text-3xl font-bold tracking-tight text-white leading-tight">
        {name}
      </h3>
      <p className="max-w-[280px] text-[15px] font-medium leading-relaxed text-white/60 group-hover:text-white/90 transition-colors">
        {description}
      </p>
    </div>

    <div className="z-10 flex items-center pt-6 border-t border-white/10">
      <a href={href} className={cn(
        "flex items-center text-xs font-bold uppercase tracking-[0.2em] transition-all",
        theme.textLink
      )}>
        {cta} <GrowthArrow />
      </a>
    </div>
  </div>
);

const features = [
  {
    Icon: BarChart3,
    name: "Revenue Optimization",
    description: "Systemic audit of your pricing, churn, and LTV to unlock immediate cash flow.",
    href: "#",
    cta: "Strategic Audit",
    className: "md:col-span-3",
    theme: {
      bg: "bg-[#06162e]", // Midnight Navy
      border: "border-blue-500/30 hover:border-blue-400",
      iconBg: "bg-blue-500",
      iconColor: "text-white",
      textLink: "text-blue-400 hover:text-white",
      glow: "bg-blue-400"
    }
  },
  {
    Icon: Target,
    name: "Market Penetration",
    description: "High-velocity GTM strategies for new verticals and international territories.",
    href: "#",
    cta: "GTM Framework",
    className: "md:col-span-3",
    theme: {
      bg: "bg-[#062e1f]", // Deep British Racing Green
      border: "border-emerald-500/30 hover:border-emerald-400",
      iconBg: "bg-emerald-500",
      iconColor: "text-white",
      textLink: "text-emerald-400 hover:text-white",
      glow: "bg-emerald-400"
    }
  },
  {
    Icon: ShieldCheck,
    name: "Capital Efficiency",
    description: "Ensuring growth is sustainable by optimizing OpEx and infrastructure burn.",
    href: "#",
    cta: "Efficiency Specs",
    className: "md:col-span-2",
    theme: {
      bg: "bg-[#2e0616]", // Deep Wine / Burgundy
      border: "border-rose-500/30 hover:border-rose-400",
      iconBg: "bg-rose-500",
      iconColor: "text-white",
      textLink: "text-rose-400 hover:text-white",
      glow: "bg-rose-400"
    }
  },
  {
    Icon: Globe2,
    name: "Growth Ops",
    description: "Aligning people, processes, and tools to maintain $100M+ scale.",
    href: "#",
    cta: "Scale Manual",
    className: "md:col-span-4",
    theme: {
      bg: "bg-[#2e1f06]", // Deep Amber / Tobacco
      border: "border-amber-500/30 hover:border-amber-400",
      iconBg: "bg-amber-500",
      iconColor: "text-white",
      textLink: "text-amber-400 hover:text-white",
      glow: "bg-amber-400"
    }
  }
];

export default function HeroHome() {
  return (
    <div className="w-full py-2 flex justify-center "> 
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