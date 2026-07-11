"use client";

const LOGOS = [
  { name: "Stripe", src: "/logos/stripe.svg" },
  { name: "AWS", src: "/logos/aws.svg" },
  { name: "HubSpot", src: "/logos/hubspot.svg" },
  { name: "Snowflake", src: "/logos/snowflake.svg" },
];

function LogoItem({ name, src }) {
  return (
    <div className="logo-marquee-item flex h-16 w-52 shrink-0 items-center justify-center px-8">
      <img
        src={src}
        alt={name}
        width={160}
        height={40}
        className="max-h-10 w-auto max-w-full object-contain opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
        draggable={false}
      />
    </div>
  );
}

function LogoTrack({ ariaHidden = false }) {
  return (
    <div
      className="flex w-max shrink-0 items-center"
      aria-hidden={ariaHidden || undefined}
    >
      {LOGOS.map((logo) => (
        <LogoItem key={logo.name} {...logo} />
      ))}
    </div>
  );
}

export default function TrustedLogos() {
  return (
    <section className="w-full py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-slate-600">
            Trusted Stack
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Built on industry standards.
          </h2>
        </div>

        <div className="logo-marquee relative overflow-hidden" aria-label="Trusted technology partners">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-stone-100 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-stone-100 to-transparent" />

          <div className="flex w-max animate-marquee-left">
            <LogoTrack />
            <LogoTrack ariaHidden />
          </div>
        </div>
      </div>
    </section>
  );
}
