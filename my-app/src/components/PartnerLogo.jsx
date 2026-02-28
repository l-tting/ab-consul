"use client";

import React from "react";

export default function TrustedLogos() {
  const stack = [
    { name: "Stripe", src: "/logos/stripe.svg" },
    { name: "AWS", src: "/logos/aws.svg" },
    { name: "HubSpot", src: "/logos/hubspot.svg" },
    { name: "Snowflake", src: "/logos/snowflake.svg" },
    { name: "ProfitWell", src: "/logos/profitwell.svg" },
  ];

  return (
    <section className="w-full py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Minimal Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400 mb-4">
            Trusted Stack
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
            Built on industry standards.
          </h2>
        </div>

        {/* Clean Infinite Logo Track */}
        <div className="relative overflow-hidden">
          <div className="flex items-center gap-20 animate-scroll-minimal whitespace-nowrap">
            {[...stack, ...stack].map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-center shrink-0"
              >
                <img
                  src={item.src}
                  alt={item.name}
                  className="h-8 w-auto opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll-minimal {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-scroll-minimal {
          animation: scroll-minimal 40s linear infinite;
        }

        .animate-scroll-minimal:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}