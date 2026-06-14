"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { ArrowUpRight, BarChart3, Target, ShieldCheck, Globe2 } from "lucide-react";

const GrowthArrow = () => (
  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
);

export const BentoGrid = ({ children, className }) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[minmax(22rem,auto)] sm:auto-rows-[minmax(26rem,auto)] md:auto-rows-[minmax(28rem,auto)] grid-cols-1 md:grid-cols-6 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({
  name,
  className,
  Icon,
  description,
  href,
  cta,
  theme,
}) => (
  <div
    className={cn(
      "group relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] border p-6 sm:p-8 md:p-10 transition-all duration-700 hover:shadow-2xl",
      theme.bg,
      theme.border,
      className
    )}
  >
    {/* Glow */}
    <div
      className={cn(
        "absolute -right-10 -top-10 h-40 w-40 sm:h-52 sm:w-52 md:h-64 md:w-64 rounded-full blur-[60px] sm:blur-[70px] md:blur-[80px] opacity-20 transition-all duration-700 group-hover:opacity-40 group-hover:scale-125",
        theme.glow
      )}
    />

    {/* Content */}
    <div className="z-10 flex flex-col gap-2">
      {Icon && (
        <div
          className={cn(
            "mb-4 flex h-10 w-10 sm:h-12 sm:w-12 md:h-12 md:w-12 items-center justify-center rounded-xl shadow-lg transition-all duration-500 group-hover:scale-110",
            theme.iconBg,
            theme.iconColor
          )}
        >
          <Icon
            className="h-4 w-4 sm:h-6 sm:w-6 md:h-5 md:w-5"
            strokeWidth={2}
          />
        </div>
      )}

      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white leading-tight">
        {name}
      </h3>

      <p className="max-w-full text-sm sm:text-[15px] font-medium leading-relaxed text-white/60 group-hover:text-white/90 transition-colors">
        {description}
      </p>
    </div>

    {/* CTA - Reduced spacing on md */}
    <div className="z-10 flex items-center pt-6 sm:pt-8 md:pt-6 border-t border-white/10 mt-auto">
      <a
        href={href}
        className={cn(
          "flex items-center text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] transition-all",
          theme.textLink
        )}
      >
        {cta} <GrowthArrow />
      </a>
    </div>
  </div>
);

const features = [
  {
    Icon: BarChart3,
    name: "Revenue Optimization",
    description:
      `We help analyzing data from Awareness, Acquisition, Activation, Retention and Revenue by identifying
       bottlenecks and running targeted experiments `,
    href: "#",
    cta: "Strategic Audit",
    className: "md:col-span-3",
    theme: {
      bg: "bg-[#06162e]",
      border: "border-blue-500/30 hover:border-blue-400",
      iconBg: "bg-blue-500",
      iconColor: "text-white",
      textLink: "text-blue-400 hover:text-white",
      glow: "bg-blue-400",
    },
  },
  {
    Icon: Target,
    name: "Market Penetration",
    description:
      `We have experience across Africa with our team having worked across 20 countries in the continent. We bring the expertise you need in market research, navigating new market entry, compliance
       and launch as you scale across multiple geographies.`,
    href: "#",
    cta: "GTM Framework",
    className: "md:col-span-3",
    theme: {
      bg: "bg-[#062e1f]",
      border: "border-emerald-500/30 hover:border-emerald-400",
      iconBg: "bg-emerald-500",
      iconColor: "text-white",
      textLink: "text-emerald-400 hover:text-white",
      glow: "bg-emerald-400",
    },
  },
  {
    Icon: ShieldCheck,
    name: "Capital Efficiency",
    description:
      `Optimize your capital by deploying resources to revenue generating activities with measurable ROI while 
      reducing costs to ensure you achieve a desired run rate`,
    href: "#",
    cta: "Efficiency Specs",
    className: "md:col-span-2",
    theme: {
      bg: "bg-[#2e0616]",
      border: "border-rose-500/30 hover:border-rose-400",
      iconBg: "bg-rose-500",
      iconColor: "text-white",
      textLink: "text-rose-400 hover:text-white",
      glow: "bg-rose-400",
    },
  },
  {
    Icon: Globe2,
    name: "Growth Ops",
    description:
    `Lean into our proven growth models modelled according to your company growth stage. Our tailored solutions have worked
       for startups in the idea stage to scale-ups that have raised Series C rounds and beyond`,
    href: "#",
    cta: "Scale Manual",
    className: "md:col-span-4",
    theme: {
      bg: "bg-[#2e1f06]",
      border: "border-amber-500/30 hover:border-amber-400",
      iconBg: "bg-amber-500",
      iconColor: "text-white",
      textLink: "text-amber-400 hover:text-white",
      glow: "bg-amber-400",
    },
  },
];

export default function HeroHome() {
  return (
    <div className="w-full py-4 sm:py-10 md:py-12 flex justify-center">
      <div className="w-[95%] lg:w-[90%]">
        <div className="text-center py-6">
          <p className="text-md sm:text-md font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Our Capabilities
          </p>
        </div>

        <BentoGrid>
          {features.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}