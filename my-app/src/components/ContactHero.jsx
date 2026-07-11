"use client";

import { Mail, Phone, Clock } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative w-full py-0 flex justify-center overflow-hidden bg-stone-100">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.05] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M60 60H0V0h60v60zM1 1v58h58V1H1z\' fill=\'%23000\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
          }}
        />
      </div>

      <div className="w-[92%] max-w-7xl relative z-10 flex flex-col items-center text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white border border-stone-200 text-slate-600 text-[10px] font-black uppercase tracking-[0.2em] mb-8 shadow-sm">
          <Clock className="w-3.5 h-3.5 text-blue-600" aria-hidden="true" />
          <span>Priority Response Protocol Enabled</span>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-5xl font-black tracking-tighter text-slate-900 leading-[0.9] mb-8">
          Initiate <br className="md:hidden" />
          <span className="text-blue-600">Partnership.</span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-600 max-w-3xl leading-relaxed font-medium mb-12 tracking-tight">
          Whether you require a <span className="text-slate-900">technical audit</span> or an{" "}
          <span className="text-slate-900">operational roadmap</span>, we provide the architectural rigor required to unblock global scale.
        </p>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center gap-10 text-[11px] font-black text-slate-600 uppercase tracking-[0.2em]">
          <a
            href="mailto:contact@ab-consul.com"
            className="flex items-center gap-3 group cursor-pointer hover:text-slate-900 transition-colors"
          >
            <Mail className="w-4 h-4 text-blue-600" aria-hidden="true" />
            <span>contact@ab-consul.com</span>
          </a>

          <a
            href="tel:+254717568861"
            className="flex items-center gap-3 group cursor-pointer hover:text-slate-900 transition-colors"
          >
            <Phone className="w-4 h-4 text-blue-600" aria-hidden="true" />
            <span>+254 717568861</span>
          </a>
        </div>
      </div>
    </section>
  );
}