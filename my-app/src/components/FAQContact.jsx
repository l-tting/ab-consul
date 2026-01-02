import { HelpCircle, ShieldCheck, Zap, Globe } from "lucide-react";

export default function ContactTrust() {
  const faqs = [
    {
      q: "How soon can we start?",
      a: "We typically have a 2-week lead time, but we can fast-track urgent technical audits within 48 hours."
    },
    {
      q: "Do you work with pre-seed startups?",
      a: "We specialize in Series A+ companies, but we take on select early-stage projects if the technical challenge is unique."
    },
    {
      q: "Is this a recurring retainer?",
      a: "Most engagements start as a fixed-scope audit or build. Long-term advisory is available upon request."
    }
  ];

  return (
    <section className="w-full py-8 pb-24 flex justify-center bg-slate-50/50 border-t border-slate-100">
      <div className="w-[92%] max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* FAQ Column */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center gap-3 mb-8">
              <HelpCircle className="w-6 h-6 text-blue-600" />
              <h3 className="text-2xl font-bold text-slate-900">FAQ</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              {faqs.map((faq, i) => (
                <div key={i} className="space-y-3">
                  <p className="font-bold text-slate-900 text-lg leading-tight">{faq.q}</p>
                  <p className="text-slate-500 text-lg leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Trust Signals Column */}
          <div className="space-y-6 pt-10">
            <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-6 uppercase text-sm tracking-widest">Our Promise</h4>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
                  <p className="text-md text-slate-500"><span className="font-bold text-slate-700">NDA Protected.</span> All technical and business data is kept strictly confidential.</p>
                </div>
                <div className="flex gap-4">
                  <Zap className="w-5 h-5 text-amber-500 shrink-0" />
                  <p className="text-md text-slate-500"><span className="font-bold text-slate-700">Direct Access.</span> You talk directly to the partners, not an account manager.</p>
                </div>
                <div className="flex gap-4">
                  <Globe className="w-5 h-5 text-blue-500 shrink-0" />
                  <p className="text-md text-slate-500"><span className="font-bold text-slate-700">Global Coverage.</span> We operate across GMT and EST time zones.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}