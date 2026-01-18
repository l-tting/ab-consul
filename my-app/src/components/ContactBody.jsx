"use client"

import { CheckCircle2, Send } from "lucide-react";

export default function ContactBody() {
  return (
    <section className="w-full py-24 flex justify-center bg-stone-100">
      <div className="w-[92%] max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Context & Trust */}
          <div className="space-y-12">
            <div>
              <h2 className="text-[12px] font-black uppercase tracking-[0.4em] text-blue-600 mb-6 italic">Protocol</h2>
              <h3 className="text-4xl font-black text-slate-900 mb-10 tracking-tighter leading-none">The Advisory <br/><span className="text-stone-400 italic font-serif">Onboarding.</span></h3>
              <ul className="space-y-10">
                {[
                  { title: "Technical Audit", desc: "We perform a deep-dive into your architecture to identify revenue-throttling debt." },
                  { title: "Strategic Alignment", desc: "A 30-minute consultation with the founders to map engineering to your P&L." },
                  { title: "Equity Roadmap", desc: "Receive a high-conviction execution plan designed for terminal scalability." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-6 items-start">
                    {/* Reverted to initial Blue-50 background */}
                    <div className="mt-1 bg-blue-50 p-1.5 rounded-full flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-black text-slate-900 text-xl tracking-tight leading-none mb-2">{item.title}</p>
                      <p className="text-slate-500 leading-relaxed font-medium text-lg">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Availability Card */}
            <div className="p-10 bg-white rounded-[2.5rem] border border-stone-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Currently Accepting Clients</p>
              </div>
              <p className="text-slate-900 font-black text-2xl tracking-tighter italic font-serif">andrew@abconsul.com</p>
              <p className="text-slate-500 text-sm mt-3 font-medium">Direct line to engineering & growth partners.</p>
            </div>
          </div>

          {/* Right Side: The Raw Form (Structure & Black Borders Maintained) */}
          <div className="bg-white p-8 md:p-12 rounded-[3.5rem] border border-stone-200 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.05)]">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Principal Name</label>
                  <input 
                    type="text"
                    placeholder="E.g. Alexander Hamilton" 
                    className="w-full h-16 px-5 rounded-2xl border-2 border-black focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 transition-all placeholder:text-slate-300 font-bold text-slate-900" 
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Corporate Email</label>
                  <input 
                    type="email"
                    placeholder="ceo@company.com" 
                    className="w-full h-16 px-5 rounded-2xl border-2 border-black focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 transition-all placeholder:text-slate-300 font-bold text-slate-900" 
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Scaling Bottlenecks</label>
                <textarea 
                  placeholder="Briefly describe the technical hurdles impacting your revenue velocity..." 
                  className="w-full min-h-[160px] p-5 rounded-2xl border-2 border-black focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 transition-all placeholder:text-slate-300 font-bold text-slate-900 resize-none leading-relaxed" 
                />
              </div>

              {/* Reverted to initial Slate-900 color */}
              <button 
                type="submit"
                className="w-full h-20 bg-slate-900 hover:bg-slate-800 text-white text-lg font-bold rounded-[2rem] transition-all duration-500 flex items-center justify-center gap-4 group"
              >
                <span>Initiate Consultation</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              
              <p className="text-center text-[10px] font-black text-slate-300 uppercase tracking-widest">
                Confidentiality Guaranteed // AB CONSUL LLC
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}