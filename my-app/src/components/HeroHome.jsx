"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { ArrowRight, BarChart3, Zap, ShieldCheck, Globe2 } from "lucide-react";

const ArrowRightIcon = (props) => (
  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" {...props} />
);

export const BentoGrid = ({ children, className }) => {
  return (
    <div className={cn("grid w-full auto-rows-[25rem] grid-cols-1 md:grid-cols-6 gap-6", className)}>
      {children}
    </div>
  );
};

export const BentoCard = ({ name, className, Icon, description, href, cta, theme }) => (
  <div className={cn(
    "group relative flex flex-col justify-between overflow-hidden rounded-[3rem] border-2 p-10 transition-all duration-500 hover:-translate-y-2",
    "bg-white",
    theme.border,      // Bright colored border
    theme.shadow,      // Matching neon shadow
    className
  )}>
    
    {/* Inner Electric Glow */}
    <div className={cn(
        "absolute -bottom-24 -left-24 w-80 h-80 rounded-full blur-[100px] opacity-10 transition-opacity duration-500 group-hover:opacity-30",
        theme.glow
    )} />

    <div className="z-10 flex flex-col gap-2">
      {Icon && (
        <div className={cn(
          "mb-6 flex h-14 w-14 items-center justify-center rounded-2xl shadow-md transition-all duration-500 group-hover:scale-110",
          theme.iconBg,
          "text-white" // Keep icons white for punchiness
        )}>
          <Icon size={26} strokeWidth={2.5} />
        </div>
      )}
      <h3 className="text-3xl font-black tracking-tighter text-slate-900 leading-none">
        {name}
      </h3>
      <p className="max-w-[280px] text-[15px] font-bold leading-relaxed text-slate-500 mt-2">
        {description}
      </p>
    </div>

    <div className="z-10 flex items-center pt-4">
      <a href={href} className={cn(
        "flex items-center text-xs font-black uppercase tracking-[0.25em] transition-all",
        theme.textLink
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
    description: "Aligning technical roadmap with P&L to turn features into revenue levers.",
    href: "#",
    cta: "View Framework",
    className: "md:col-span-3",
    theme: {
      border: "border-blue-500 hover:border-blue-600",
      shadow: "hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.5)]",
      iconBg: "bg-blue-500",
      textLink: "text-blue-500 hover:text-blue-700",
      glow: "bg-blue-500"
    }
  },
  {
    Icon: Zap,
    name: "Infra Liquidation",
    description: "Eliminating technical debt that acts as a tax on your scaling velocity.",
    href: "#",
    cta: "See Process",
    className: "md:col-span-3",
    theme: {
      border: "border-emerald-500 hover:border-emerald-600",
      shadow: "hover:shadow-[0_20px_60px_-15px_rgba(16,185,129,0.5)]",
      iconBg: "bg-emerald-500",
      textLink: "text-emerald-500 hover:text-emerald-700",
      glow: "bg-emerald-500"
    }
  },
  {
    Icon: ShieldCheck,
    name: "Risk Mitigation",
    description: "Audit-ready systems designed for the $50M+ ARR stage.",
    href: "#",
    cta: "The Standards",
    className: "md:col-span-2",
    theme: {
      border: "border-purple-500 hover:border-purple-600",
      shadow: "hover:shadow-[0_20px_60px_-15px_rgba(139,92,246,0.5)]",
      iconBg: "bg-purple-500",
      textLink: "text-purple-500 hover:text-purple-700",
      glow: "bg-purple-500"
    }
  },
  {
    Icon: Globe2,
    name: "Global Ops",
    description: "Multi-region deployment and data compliance for expansion.",
    href: "#",
    cta: "Scale Globally",
    className: "md:col-span-4",
    theme: {
      border: "border-orange-500 hover:border-orange-600",
      shadow: "hover:shadow-[0_20px_60px_-15px_rgba(249,115,22,0.5)]",
      iconBg: "bg-orange-500",
      textLink: "text-orange-500 hover:text-orange-700",
      glow: "bg-orange-500"
    }
  }
];

export default function HeroHome() {
  return (
    <div className="w-full py-24 flex justify-center "> 
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