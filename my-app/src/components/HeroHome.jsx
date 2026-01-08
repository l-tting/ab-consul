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

export const BentoCard = ({ name, className, background, Icon, description, href, cta, theme }) => (
  <div className={cn(
    "group relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] border p-10 transition-all duration-500 hover:-translate-y-1",
    "bg-slate-50/50 border-slate-200 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50",
    theme.borderHover, // Dynamic border color on hover
    className
  )}>
    {/* Subtle Color Wash background */}
    <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
      {background}
    </div>
    
    <div className="z-10 flex flex-col gap-2">
      {Icon && (
        <div className={cn(
          "mb-6 flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-500 shadow-sm",
          "bg-white text-slate-400 group-hover:text-white",
          theme.iconHover
        )}>
          <Icon size={24} strokeWidth={1.5} />
        </div>
      )}
      <h3 className="text-2xl font-bold tracking-tight text-slate-900">{name}</h3>
      <p className="max-w-[280px] text-sm font-medium leading-relaxed text-slate-500 group-hover:text-slate-600 transition-colors">
        {description}
      </p>
    </div>

    <div className="z-10 flex items-center pt-4 border-t border-slate-100">
      <a href={href} className={cn(
        "flex items-center text-xs font-black uppercase tracking-[0.2em] transition-colors",
        "text-slate-400",
        theme.textHover
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
      borderHover: "hover:border-blue-400/50",
      iconHover: "group-hover:bg-blue-500 group-hover:shadow-blue-200",
      textHover: "hover:text-blue-600"
    },
    background: <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent" />
  },
  {
    Icon: Zap,
    name: "Infrastructure Liquidation",
    description: "Eliminating technical debt that acts as a tax on your scaling velocity.",
    href: "#",
    cta: "See Process",
    className: "md:col-span-3",
    theme: {
      borderHover: "hover:border-emerald-400/50",
      iconHover: "group-hover:bg-emerald-500 group-hover:shadow-emerald-200",
      textHover: "hover:text-emerald-600"
    },
    background: <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent" />
  },
  {
    Icon: ShieldCheck,
    name: "Risk Mitigation",
    description: "Audit-ready systems designed for the $50M+ ARR stage.",
    href: "#",
    cta: "Read Case Study",
    className: "md:col-span-2",
    theme: {
      borderHover: "hover:border-purple-400/50",
      iconHover: "group-hover:bg-purple-500 group-hover:shadow-purple-200",
      textHover: "hover:text-purple-600"
    },
    background: <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent" />
  },
  {
    Icon: Globe2,
    name: "Global Ops",
    description: "Multi-region deployment and data compliance for expansion.",
    href: "#",
    cta: "Scale Globally",
    className: "md:col-span-4",
    theme: {
      borderHover: "hover:border-orange-400/50",
      iconHover: "group-hover:bg-orange-500 group-hover:shadow-orange-200",
      textHover: "hover:text-orange-600"
    },
    background: <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent" />
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