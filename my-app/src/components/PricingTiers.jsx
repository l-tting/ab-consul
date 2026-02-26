"use client";
import { useState, useEffect } from "react";
import { Calculator, ArrowRight, ShieldCheck, Zap } from "lucide-react";

export default function PricingCalculator() {
  const [revenue, setRevenue] = useState(500000);
  const [isSeeded, setIsSeeded] = useState(false);
  const [companySize, setCompanySize] = useState("1-10");
  const [estimate, setEstimate] = useState(0);

  useEffect(() => {
    let base = 2500; 
    let revenueFactor = revenue * 0.004; 
    let seedPremium = isSeeded ? 2000 : 0;
    let sizePremium = companySize === "50+" ? 2500 : companySize === "11-50" ? 1200 : 0;
    setEstimate(base + revenueFactor + seedPremium + sizePremium);
  }, [revenue, isSeeded, companySize]);

  return (
    <section className="w-full py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-20 flex justify-center">
      <div className="w-full max-w-7xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 bg-white rounded-3xl lg:rounded-[3rem] border border-slate-200 shadow-2xl overflow-hidden">
          
          {/* LEFT SIDE */}
          <div className="lg:col-span-7 p-6 sm:p-8 md:p-12 lg:p-16 space-y-10 md:space-y-12">
            <div>
              <div className="flex items-center gap-2 text-blue-600 mb-4">
                <Zap className="w-5 h-5 fill-current" />
                <span className="text-xs font-bold uppercase tracking-[0.2em]">
                  Dynamic Valuation
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                Tailor your partnership.
              </h3>

              <p className="text-slate-500 mt-4 leading-relaxed text-sm sm:text-base">
                Our pricing scales with your complexity. Input your current metrics to generate a real-time investment estimate.
              </p>
            </div>

            <div className="space-y-8 md:space-y-10">
              {/* Revenue Slider */}
              <div className="space-y-4 md:space-y-5">
                <div className="flex justify-between items-end">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 font-mono">
                    Annual Revenue
                  </label>
                  <span className="text-lg sm:text-xl font-bold text-slate-900">
                    ${(revenue / 1000).toLocaleString()}k
                  </span>
                </div>

                <input 
                  type="range" 
                  min="50000" 
                  max="5000000" 
                  step="50000"
                  value={revenue}
                  onChange={(e) => setRevenue(Number(e.target.value))}
                  className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />

                <div className="flex justify-between text-[11px] text-slate-400 font-bold uppercase">
                  <span>$50k</span>
                  <span>$5M+</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                {/* Team Size */}
                <div className="space-y-3">
                  <label className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-400 font-mono">
                    Team Size
                  </label>
                  <select 
                    onChange={(e) => setCompanySize(e.target.value)}
                    className="w-full h-10 px-4 rounded-2xl border border-slate-200 bg-slate-50/50 focus:ring-2 focus:ring-blue-500/20 outline-none font-medium transition-all text-sm"
                  >
                    <option value="1-10">1-10 Employees</option>
                    <option value="11-50">11-50 Employees</option>
                    <option value="50+">50+ Employees</option>
                  </select>
                </div>

                {/* Funding Status */}
                <div className="space-y-3">
                  <label className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-400 font-mono">
                    Funding Stage
                  </label>

                  <button 
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
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-5 bg-slate-900 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
            <div className="absolute top-0 right-0 w-40 md:w-64 h-40 md:h-64 bg-blue-600/10 blur-[80px] md:blur-[100px] rounded-full" />

            <div className="relative z-10 text-center lg:text-left">
              <Calculator className="w-10 h-10 md:w-12 md:h-12 text-blue-500 mb-6 md:mb-8 mx-auto lg:mx-0" />

              <p className="text-blue-400 text-xs sm:text-sm font-bold uppercase tracking-[0.3em] mb-4">
                Estimated Monthly Investment
              </p>
              
              <div className="flex items-baseline justify-center lg:justify-start gap-2 mb-8">
                <span className="text-4xl sm:text-5xl font-bold text-white tracking-tighter">
                  ${Math.floor(estimate / 100) * 100}
                </span>
                <span className="text-slate-500 text-lg sm:text-xl font-medium">
                  /mo
                </span>
              </div>

              <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-sm sm:text-md flex items-center justify-center gap-2 group transition-all shadow-xl shadow-blue-900/20">
                Confirm Engagement
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
              
              <p className="mt-6 text-[10px] text-slate-500 uppercase tracking-widest font-bold flex items-center justify-center lg:justify-start gap-2">
                <ShieldCheck className="w-3 h-3" />
                No hidden costs. Billed monthly.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function CheckCircle2({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10"/>
      <path d="m9 12 2 2 4-4"/>
    </svg>
  )
}