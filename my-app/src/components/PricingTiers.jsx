"use client";

import { useState, useEffect } from "react";
import { Calculator, ArrowRight, ShieldCheck, Zap } from "lucide-react";

export default function PricingCalculator() {
  const BASE_PRICE = 1000;
  const MIN_REVENUE = 50000;

  const [revenue, setRevenue] = useState(MIN_REVENUE);
  const [isSeeded, setIsSeeded] = useState(false);
  const [companySize, setCompanySize] = useState("1-10");
  const [estimate, setEstimate] = useState(BASE_PRICE);

  useEffect(() => {
    const revenueFactor = (revenue - MIN_REVENUE) * 0.004;
    const seedPremium = isSeeded ? 2000 : 0;
    const sizePremium =
      companySize === "50+" ? 2500 :
      companySize === "11-50" ? 1200 : 0;

    const total = BASE_PRICE + revenueFactor + seedPremium + sizePremium;

    setEstimate(total);
  }, [revenue, isSeeded, companySize]);

  return (
    <section className="w-full py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-20 flex justify-center">
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 bg-white rounded-3xl lg:rounded-[3rem] border border-slate-200 shadow-2xl overflow-hidden">

          {/* LEFT SIDE */}
          <div className="lg:col-span-7 p-6 sm:p-8 md:p-12 lg:p-16 space-y-10 md:space-y-12">
            <div>
              <div className="flex items-center gap-2 text-blue-600 mb-4">
                <Zap className="w-5 h-5" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-[0.2em]">
                  Dynamic Valuation
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                Tailor your partnership
              </h2>

              <p className="text-slate-600 mt-4 leading-relaxed text-sm sm:text-base">
                Adjust your company metrics below to generate a real-time investment estimate.
              </p>
            </div>

            {/* Revenue Slider */}
            <div className="space-y-4 md:space-y-5">
              <div className="flex justify-between items-end">
                <label htmlFor="revenue-slider" className="text-[10px] font-bold uppercase tracking-widest text-slate-600 font-mono">
                  Annual Revenue
                </label>
                <span className="text-lg sm:text-xl font-bold text-slate-900">
                  ${(revenue / 1000).toLocaleString()}k
                </span>
              </div>

              <input 
                id="revenue-slider"
                type="range" 
                min="50000" 
                max="1000000" 
                step="50000"
                value={revenue}
                onChange={(e) => setRevenue(Number(e.target.value))}
                aria-valuetext={`$${(revenue / 1000).toLocaleString()}k annual revenue`}
                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />

              <div className="flex justify-between text-[11px] text-slate-600 font-bold uppercase">
                <span>$50k</span>
                <span>$1M+</span>
              </div>
            </div>

            {/* Team Size & Funding Stage */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mt-6">
              <div className="space-y-3">
                <label htmlFor="team-size" className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-600 font-mono">
                  Team Size
                </label>
                <select 
                  id="team-size"
                  onChange={(e) => setCompanySize(e.target.value)}
                  className="w-full h-10 px-4 rounded-2xl border border-slate-200 bg-slate-50/50 focus:ring-2 focus:ring-blue-500/20 outline-none font-medium transition-all text-sm"
                >
                  <option value="1-10">1-10 Employees</option>
                  <option value="11-50">11-50 Employees</option>
                  <option value="50+">50+ Employees</option>
                </select>
              </div>

              <div className="space-y-3">
                <span id="funding-stage-label" className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-600 font-mono">
                  Funding Stage
                </span>

                <button 
                  type="button"
                  aria-labelledby="funding-stage-label"
                  aria-pressed={isSeeded}
                  onClick={() => setIsSeeded(!isSeeded)}
                  className={`w-full h-10 px-4 rounded-2xl border transition-all flex items-center justify-between text-sm ${
                    isSeeded 
                      ? "border-blue-600 bg-blue-50/50 text-blue-700" 
                      : "border-slate-200 bg-slate-50/50 text-slate-600"
                  }`}
                >
                  <span className="font-medium">
                    {isSeeded ? "Venture Backed" : "Bootstrapped"}
                  </span>

                  <div className={`w-10 h-5 rounded-full relative transition-colors ${
                    isSeeded ? 'bg-blue-600' : 'bg-slate-300'
                  }`}>
                    <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-transform ${
                      isSeeded ? 'left-6' : 'left-1'
                    }`} />
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-5 bg-slate-900 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
            <div className="relative z-10 text-center lg:text-left">
              <Calculator className="w-10 h-10 text-blue-500 mb-6 mx-auto lg:mx-0" aria-hidden="true" />

              <p className="text-blue-300 text-xs font-bold uppercase tracking-[0.3em] mb-8">
                Estimated Investment
              </p>
              
              <div className="flex items-baseline justify-center lg:justify-start gap-2 mb-8">
                <span className="text-4xl font-bold text-white tracking-tighter">
                  ${Math.floor(estimate / 100) * 100}
                </span>
              </div>

              <button type="button" className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold flex items-center justify-center gap-2">
                Confirm Engagement
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </button>
              
              <p className="mt-6 text-[10px] text-slate-400 uppercase tracking-widest font-bold flex items-center justify-center lg:justify-start gap-2">
                <ShieldCheck className="w-3 h-3" aria-hidden="true" />
                No hidden costs. 
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}