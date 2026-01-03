import { Mail, MessageSquare, Clock } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative w-full py-2 md:py-2 flex justify-center overflow-hidden ">
      {/* Background Decorative Grid - Standard Sera UI/Shadcn pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
        <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M60 60H0V0h60v60zM1 1v58h58V1H1z\' fill=\'%23000\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")' }} />
      </div>

      <div className="w-[92%] max-w-7xl relative z-10 flex flex-col items-center text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-widest mb-6">
          <Clock className="w-3 h-3" />
          <span>Response time: &lt; 24 Hours</span>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-slate-900 mb-6">
          Let’s talk <span className="text-blue-600">Scale.</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed mb-10">
          Whether you need a technical audit, a growth roadmap, or a full-stack partner, we're here to bridge the gap.
        </p>

        {/* Quick Contact Info */}
        <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-slate-400">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-blue-500" />
            <span>hello@acme.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-emerald-500" />
            <span>LinkedIn DM</span>
          </div>
        </div>
      </div>
    </section>
  );
}