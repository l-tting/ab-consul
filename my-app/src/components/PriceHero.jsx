import { Zap, Scale, ShieldCheck, ArrowDown } from "lucide-react";

export default function PricingHero() {
  const pillars = [
    {
      title: "Impact, Not Hours",
      desc: "We don't bill for time. We bill for value created. This aligns our goals: shipping code that actually moves your metrics.",
      icon: <Zap className="w-5 h-5 text-blue-600" />
    },
    {
      title: "Scale-Adjusted",
      desc: "Our model ensures you pay a fair rate based on your complexity—from early-stage builds to enterprise infrastructure.",
      icon: <Scale className="w-5 h-5 text-emerald-600" />
    },
    {
      title: "Skin in the Game",
      desc: "As fractional partners, our success is tied to your growth. We provide a level of commitment freelancers can't match.",
      icon: <ShieldCheck className="w-5 h-5 text-purple-600" />
    }
  ];

  return (
    <section className="w-full pt-2 pb- flex justify-center ">
      <div className="w-[92%] max-w-7xl inset-0">
        
        {/* Main Hero Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
            <span>Investment Structure</span>
          </div>

          <h1 className="text-2xl md:text-6xl font-bold tracking-tighter text-slate-900 mb-8 leading-[0.9]">
            Built for <span className="text-blue-600">ROI</span><br /> 
            {/* not just <span className="text-slate-400">billable hours.</span> */}
          </h1>

          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Standard agencies thrive on inefficiency. We thrive on your growth. 
            Below is the philosophy behind our dynamic pricing model.
          </p>
        </div>

        {/* Philosophy Cards - Integrated into Hero */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {pillars.map((pillar, i) => (
            <div key={i} className="group p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-500">
              <div className="mb-6 p-4 bg-slate-50 rounded-2xl w-fit group-hover:bg-blue-50 group-hover:scale-110 transition-all duration-500">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{pillar.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Transition to Calculator */}
        <div className="flex flex-col items-center gap-4 animate-bounce text-slate-500 pt-8 ">
          <p className="text-[14px] font-bold uppercase tracking-[0.3em]">Calculate your rate</p>
          <ArrowDown className="w-5 h-5" />
        </div>

      </div>
    </section>
  );
}