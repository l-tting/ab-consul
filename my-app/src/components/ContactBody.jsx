"use client"
import React, { useState } from "react";
import { CheckCircle2, Send, Loader2 } from "lucide-react";

export default function ContactBody() {
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsPending(true);
    setError(null);

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const details = formData.get("details");

    // Construct the Advisory-styled email body
    const emailHtml = `
      <div style="font-family: sans-serif; padding: 40px; background-color: #f5f5f4; color: #0f172a;">
        <h2 style="text-transform: uppercase; letter-spacing: 0.2em; font-size: 12px; color: #2563eb;">New Partnership Inquiry</h2>
        <h1 style="font-size: 24px; margin-bottom: 20px; border-bottom: 1px solid #e2e8f0; padding-bottom: 20px;">AB CONSUL // Intake Protocol</h1>
        <p><strong>Principal Name:</strong> ${name}</p>
        <p><strong>Corporate Email:</strong> ${email}</p>
        <div style="background-color: white; padding: 20px; border-radius: 12px; margin-top: 20px; border: 1px solid #e2e8f0;">
          <p style="font-size: 10px; text-transform: uppercase; color: #94a3b8; margin-bottom: 10px;">Scaling Bottlenecks Details:</p>
          <p style="line-height: 1.6;">${details}</p>
        </div>
        <p style="font-size: 10px; color: #94a3b8; margin-top: 40px;">Confidentiality Guaranteed // AB CONSUL LLC</p>
      </div>
    `;

    try {
      const response = await fetch("/api/send_mail", { // Adjust path to where your route is
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: "admin@ab-consul.com", // Your receiving email
          subject: `Partnership Brief: ${name}`,
          html: emailHtml,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
      } else {
        throw new Error(result.error || "Failed to initiate protocol.");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsPending(false);
    }
  }

  return (
    <section className="w-full py-20 flex justify-center bg-stone-100">
      <div className="w-[92%] max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left Side (Content from previous steps) */}
          <div className="space-y-6">
            <div>
              <h2 className="text-[20px] font-black uppercase tracking-[0.4em] text-blue-600 mb-6 italic">Our Protocol</h2>
              <h3 className="text-3xl font-black text-slate-900 mb-10 tracking-tighter leading-none">The Advisory <span className="text-stone-500 italic font-serif">Onboarding.</span></h3>
              <ul className="space-y-10">
                {[
                  { title: "Business Audit", desc: "We perform a deep-dive into your business to identify revenue bottlenecks." },
                  { title: "Strategic Alignment", desc: "A 1 hour consultation with the team to map agreed solutions to your P&L." },
                  { title: "Roadmap Planning & Execution", desc: "Receive a high-conviction execution plan designed for terminal scalability and execute with all the stakeholders" }
                ].map((item, i) => (
                  <li key={i} className="flex gap-6 items-start">
                    <div className="mt-1 bg-blue-50 p-1.5 rounded-full flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-blue-600" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-black text-slate-900 text-lg tracking-tight leading-none mb-2">{item.title}</p>
                      <p className="text-slate-600 leading-relaxed font-medium text-md">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Side: The Form */}
          <div className="bg-white p-8 md:p-12 rounded-[3.5rem] border border-stone-200 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.05)]">
            {isSuccess ? (
              <div className="py-20 flex flex-col items-center text-center space-y-6 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-3xl font-black tracking-tighter text-slate-900">Protocol Initiated.</h3>
                <p className="text-slate-500 font-medium max-w-xs">Our principals have been notified. Expect a strategic response within 24 hours.</p>
              </div>
            ) : (
              <>
                {/* Trust & Info Lines */}
                <div className="mb-6 space-y-2 bg-gradient-to-r from-blue-50/70 to-blue-100/70 p-5 rounded-2xl border border-blue-200 text-center shadow-sm">
                  <p className="text-sm font-extrabold text-blue-800 tracking-wide uppercase drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]">
                    We typically respond within 24 hours.
                  </p>
                  <p className="text-sm font-semibold text-slate-900 italic tracking-wide drop-shadow-[0_1px_1px_rgba(0,0,0,0.05)]">
                    All inquiries are handled under strict confidentiality.
                  </p>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit} id='contact-form'>
                  {error && <p role="alert" className="text-red-600 font-bold text-xs uppercase tracking-widest">{error}</p>}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label htmlFor="contact-name" className="text-[10px] font-black uppercase tracking-widest text-slate-600 ml-1">Full Name</label>
                      <input id="contact-name" name="name" required placeholder="E.g. Alexander Hamilton" className="w-full h-12 px-5 rounded-2xl border-2 border-black focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:border-blue-500 font-bold text-slate-900" />
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="contact-email" className="text-[10px] font-black uppercase tracking-widest text-slate-600 ml-1"> Email</label>
                      <input id="contact-email" name="email" type="email" required placeholder="ceo@company.com" className="w-full h-12 px-5 rounded-2xl border-2 border-black focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:border-blue-500 font-bold text-slate-900" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="contact-details" className="text-[10px] font-black uppercase tracking-widest text-slate-600 ml-1">Brief Description</label>
                    <textarea id="contact-details" name="details" required placeholder="Briefly describe the technical hurdles impacting your revenue velocity..." className="w-full min-h-[160px] p-5 rounded-2xl border-2 border-black focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:border-blue-500 font-bold text-slate-900 resize-none leading-relaxed" />
                  </div>

                  <button
                    disabled={isPending}
                    type="submit"
                    className="w-full h-14 bg-slate-900 hover:bg-slate-800 text-white text-lg font-bold rounded-[2rem] transition-all duration-500 flex items-center justify-center gap-4 group disabled:opacity-50"
                  >
                    {isPending ? <Loader2 className="w-6 h-4 animate-spin" /> : <span>Initiate Consultation</span>}
                  </button>
                </form>
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}