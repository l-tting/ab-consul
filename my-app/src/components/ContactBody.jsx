"use client"


import { CheckCircle2, Send } from "lucide-react";

export default function ContactBody() {
  return (
    <section className="w-full py-24 flex justify-center ">
      <div className="w-[92%] max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Context & Trust */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">What happens next?</h2>
              <ul className="space-y-8">
                {[
                  { title: "Review", desc: "We analyze your tech stack and revenue leaks." },
                  { title: "Discovery", desc: "A 30-minute call to align on your growth goals." },
                  { title: "Roadmap", desc: "You get a custom execution plan in 48 hours." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-5 items-start">
                    <div className="mt-1 bg-blue-50 p-1.5 rounded-full flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-lg">{item.title}</p>
                      <p className="text-slate-500 leading-relaxed text-lg">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Availability Card */}
            <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Currently Accepting Clients</p>
              </div>
              <p className="text-slate-900 font-semibold text-lg">abconsul@mail.com</p>
              <p className="text-slate-500 text-md mt-1">Typical response time: 4-6 hours</p>
            </div>
          </div>

          {/* Right Side: The Raw Form (No Imports) */}
          <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-200 shadow-2xl shadow-slate-200/40">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase text-slate-400 ml-1">Full Name</label>
                  <input 
                    type="text"
                    placeholder="Steve Jobs" 
                    className="w-full h-14 px-4 rounded-xl border border-black focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-300" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase text-slate-400 ml-1">Work Email</label>
                  <input 
                    type="email"
                    placeholder="abconsul@mail.com" 
                    className="w-full h-14 px-4 rounded-xl border border-black focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-300" 
                  />
                </div>
              </div>

              {/* <div className="space-y-2">
                <label className="text-sm font-bold uppercase text-slate-400 ml-1">Company Website</label>
                <input 
                  type="url"
                  placeholder="https://acme.com" 
                  className="w-full h-14 px-4 rounded-xl border border-black focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-300" 
                />
              </div> */}

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase text-slate-400 ml-1">Project Details</label>
                <textarea 
                  placeholder="Tell us about your technical hurdles..." 
                  className="w-full min-h-[140px] p-4 rounded-xl border border-black focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-300 resize-none" 
                />
              </div>

              <button 
                type="submit"
                className="w-full h-16 bg-slate-900 hover:bg-slate-800 text-white text-lg font-bold rounded-2xl transition-all flex items-center justify-center gap-2 group"
              >
                <span>Request Your Audit</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}