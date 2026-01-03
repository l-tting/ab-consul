"use client";

import React from "react";

export default function TrustedLogos() {
  const stack = [
    { 
      name: "AWS", 
      src: "/logos/aws.svg", 
      role: "Cloud Architecture",
      description: "Enterprise-grade reliability for globally distributed systems and automated scaling." 
    },
    { 
      name: "Stripe", 
      src: "/logos/stripe.svg", 
      role: "Revenue Infrastructure",
      description: "Complex billing logic and global payment processing integrated directly into your P&L." 
    },
    { 
      name: "Vercel", 
      src: "/logos/vercel.svg", 
      role: "Frontend Velocity",
      description: "Optimized delivery pipelines that ensure zero-downtime deployments and sub-second load times." 
    },
    { 
      name: "PostgreSQL", 
      src: "/logos/postgres.svg", 
      role: "Data Integrity",
      description: "The gold standard for relational data, ensuring your business intelligence is built on a solid foundation." 
    },
    { 
      name: "Cloudflare", 
      src: "/logos/cloudflare.svg", 
      role: "Edge Security",
      description: "Advanced protection and caching at the edge to secure your scale against external threats." 
    },
  ];

  return (
    <section className="w-full py-32  overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-20">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="max-w-xl">
            <h2 className="text-[14px] font-black uppercase tracking-[0.4em] text-blue-600 mb-4">
              The Scaling Stack
            </h2>
            <p className="text-4xl font-bold tracking-tighter text-slate-900 leading-tight">
              We build on the <span className="text-slate-400 italic font-medium">standards</span> of modern enterprise.
            </p>
          </div>
          <p className="text-slate-400 text-md font-medium max-w-[260px] leading-relaxed border-l border-slate-600 pl-6">
            We use a proven, five-pillar ecosystem designed for 100x traffic.
          </p>
        </div>
      </div>

      {/* Infinite Scrolling Pillars */}
      <div className="relative flex w-full">
        {/* Side Fades to mask the entry/exit */}
        <div className="absolute left-0 top-0 z-10 h-full w-40 bg-gradient-to-r from-white to-transparent" />
        <div className="absolute right-0 top-0 z-10 h-full w-40 bg-gradient-to-l from-white to-transparent" />

        <div className="flex animate-marquee-slow whitespace-nowrap items-start">
          {/* We repeat the array 3 times to ensure no gaps at slow speeds */}
          {[...stack, ...stack, ...stack].map((item, i) => (
            <div 
              key={i} 
              className="group flex flex-col items-start px-12 sm:px-20 transition-all duration-500"
              style={{ minWidth: '350px' }}
            >
              <div className="h-12 mb-8 flex items-center">
                <img
                  src={item.src}
                  alt={item.name}
                  className="h-7 w-auto opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              
              <div className="whitespace-normal max-w-[280px]">
                <p className="text-[9px] font-bold text-blue-600 uppercase tracking-[0.2em] mb-2">
                  {item.role}
                </p>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-3">
                  {item.name}
                </h3>
                <p className="text-slate-500 text-[13px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee-slow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee-slow {
          animation: marquee-slow 60s linear infinite;
        }
        /* Pause on hover to allow reading */
        .animate-marquee-slow:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}