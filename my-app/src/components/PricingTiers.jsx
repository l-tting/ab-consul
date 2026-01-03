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
    <section className="w-full py-20 flex justify-center">
      {/* Increased max-w to 7xl for a wider, more cinematic card */}
      <div className="w-[92%] max-w-7xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 bg-white rounded-[3rem] border border-slate-200 shadow-2xl overflow-hidden">
          
          {/* LEFT SIDE: Inputs (Spans 7 columns) */}
          <div className="lg:col-span-7 p-8 md:p-16 space-y-12">
            <div>
              <div className="flex items-center gap-2 text-blue-600 mb-4">
                <Zap className="w-5 h-5 fill-current" />
                <span className="text-xs font-bold uppercase tracking-[0.2em]">Dynamic Valuation</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Tailor your partnership.</h3>
              <p className="text-slate-500 mt-4 leading-relaxed">
                Our pricing scales with your complexity. Input your current metrics to generate a real-time investment estimate.
              </p>
            </div>

            <div className="space-y-10">
              {/* Revenue Slider */}
              <div className="space-y-5">
                <div className="flex justify-between items-end">
                  <label className="text-sm font-bold uppercase tracking-widest text-slate-400 font-mono">Annual Revenue</label>
                  <span className="text-2xl font-bold text-slate-900">
                    ${(revenue / 1000).toLocaleString()}k
                  </span>
                </div>
                <input 
                  type="range" min="50000" max="5000000" step="50000"
                  value={revenue}
                  onChange={(e) => setRevenue(Number(e.target.value))}
                  className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-bold uppercase">
                  <span>$50k</span>
                  <span>$5M+</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Team Size */}
                <div className="space-y-3">
                  <label className="text-sm font-bold uppercase tracking-widest text-slate-400 font-mono">Team Size</label>
                  <select 
                    onChange={(e) => setCompanySize(e.target.value)}
                    className="w-full h-14 px-4 rounded-2xl border border-slate-200 bg-slate-50/50 focus:ring-2 focus:ring-blue-500/20 outline-none font-medium transition-all"
                  >
                    <option value="1-10">1-10 Employees</option>
                    <option value="11-50">11-50 Employees</option>
                    <option value="50+">50+ Employees</option>
                  </select>
                </div>

                {/* Funding Status */}
                <div className="space-y-3">
                  <label className="text-sm font-bold uppercase tracking-widest text-slate-400 font-mono">Funding Stage</label>
                  <button 
                    onClick={() => setIsSeeded(!isSeeded)}
                    className={`w-full h-14 px-6 rounded-2xl border transition-all flex items-center justify-between ${
                      isSeeded ? "border-blue-600 bg-blue-50/50 text-blue-700" : "border-slate-200 bg-slate-50/50 text-slate-600"
                    }`}
                  >
                    <span className="font-medium">{isSeeded ? "Venture Backed" : "Bootstrapped"}</span>
                    <div className={`w-10 h-5 rounded-full relative transition-colors ${isSeeded ? 'bg-blue-600' : 'bg-slate-300'}`}>
                      <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-transform ${isSeeded ? 'left-6' : 'left-1'}`} />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Output (Spans 5 columns) */}
          <div className="lg:col-span-5 bg-slate-900 p-8 md:p-16 flex flex-col justify-center relative">
            {/* Subtle Gradient Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full" />

            <div className="relative z-10 text-center lg:text-left">
              <Calculator className="w-12 h-12 text-blue-500 mb-8 mx-auto lg:mx-0" />
              <p className="text-blue-400 text-xs font-bold uppercase tracking-[0.3em] mb-4">Estimated Monthly Investment</p>
              
              <div className="flex items-baseline justify-center lg:justify-start gap-2 mb-8">
                <span className="text-6xl md:text-7xl font-bold text-white tracking-tighter">
                  ${Math.floor(estimate / 100) * 100}
                </span>
                <span className="text-slate-500 text-xl font-medium">/mo</span>
              </div>
              
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-3 text-slate-300 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Custom roadmap & technical audit</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Priority sprint cycle access</span>
                </div>
              </div>

              <button className="w-full py-6 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-3 group transition-all shadow-xl shadow-blue-900/20">
                Confirm Engagement
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
              
              <p className="mt-8 text-center text-[10px] text-slate-500 uppercase tracking-widest font-bold flex items-center justify-center gap-2">
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
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
  )
}