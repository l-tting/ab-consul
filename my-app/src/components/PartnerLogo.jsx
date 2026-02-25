"use client";

import React from "react";

export default function TrustedLogos() {
  const stack = [
    { 
      name: "Stripe", 
      src: "/logos/stripe.svg", 
      role: "Revenue Systems", 
      description: "Enterprise billing logic and global payment flows to maximize P&L efficiency." 
    },
    { 
      name: "AWS", 
      src: "/logos/aws.svg", 
      role: "Global Infrastructure", 
      description: "Securing the high-availability foundation required for cross-border revenue growth." 
    },
    { 
      name: "HubSpot", 
      src: "/logos/hubspot.svg", 
      role: "Demand Generation", 
      description: "Optimized sales funnels and automated CRM workflows to accelerate lead velocity." 
    },
    { 
      name: "Snowflake", 
      src: "/logos/snowflake.svg", 
      role: "Growth Intelligence", 
      description: "Consolidating fragmented business data into actionable insights for strategic decision-making." 
    },
    { 
      name: "ProfitWell", 
      src: "/logos/profitwell.svg", 
      role: "Retention Strategy", 
      description: "Deep churn analytics and subscription auditing to protect long-term terminal value." 
    },
  ];

  return (
    <section className="w-full py-28 ">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-20">
          <div className="max-w-xl">
            <h2 className="text-[20px] font-black uppercase tracking-[0.4em] text-blue-600 mb-4 font-sans">
              The Growth Ecosystem
            </h2>
            <p className="text-4xl font-bold tracking-tighter text-slate-900 leading-tight">
              We leverage the <span className="text-slate-400 italic font-medium">standards</span> of market leaders.
            </p>
          </div>
          <p className="text-slate-400 text-md font-medium max-w-[260px] leading-relaxed border-l border-slate-600 pl-6">
            A proven, strategic stack designed for 10x revenue velocity.
          </p>
        </div>

        {/* THE SEAMLESS TRACK */}
        <div className="relative w-full overflow-hidden border-y border-slate-50 py-12">
          
          {/* Side Fades */}
          <div className="absolute left-0 top-0 z-30 h-full w-32 bg-gradient-to-r from-whe via-white/80 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 z-30 h-full w-32 bg-gradient-to-l from-we via-white/80 to-transparent pointer-events-none" />

          <div className="flex whitespace-nowrap items-start animate-scroll-seamless" 
               style={{ width: 'fit-content' }}>
            
            {[...stack, ...stack].map((item, i) => (
              <div 
                key={i} 
                className="group flex flex-col items-start px-12 sm:px-16 shrink-0"
                style={{ width: '400px' }} 
              >
                <div className="h-10 mb-8 flex items-center">
                  <img
                    src={item.src}
                    alt={item.name}
                    className="h-7 w-auto opacity-30 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                
                <div className="whitespace-normal w-full">
                  <p className="text-[13px] font-bold text-blue-600 uppercase tracking-[0.2em] mb-2">
                    {item.role}
                  </p>
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-3">
                    {item.name}
                  </h3>
                  <p className="text-slate-500 text-[16px] leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll-seamless {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }

        .animate-scroll-seamless {
          animation: scroll-seamless 35s linear infinite;
          will-change: transform;
          backface-visibility: hidden;
          perspective: 1000px;
        }

        .animate-scroll-seamless:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}