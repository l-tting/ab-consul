"use client";

export default function TrustedLogos() {
  return (
    <section className="w-full py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-center uppercase text-2xl sm:text-3xl font-semibold text-neutral-900 mb-14">
         Our Ecosystem
        </h2>

        {/* Logos */}
        <div className="space-y-10">

          {/* Row 1 */}
          <div className="relative overflow-hidden">
            <div className="flex gap-16 animate-marquee-left whitespace-nowrap justify-center">
              {rowOne.map((logo, i) => (
                <Logo key={i} {...logo} />
              ))}
              {rowOne.map((logo, i) => (
                <Logo key={`dup1-${i}`} {...logo} />
              ))}
            </div>
          </div>

          {/* Row 2 */}
          <div className="relative overflow-hidden">
            <div className="flex gap-16 animate-marquee-right whitespace-nowrap justify-center">
              {rowTwo.map((logo, i) => (
                <Logo key={i} {...logo} />
              ))}
              {rowTwo.map((logo, i) => (
                <Logo key={`dup2-${i}`} {...logo} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function Logo({ src, name }) {
  return (
    <img
      src={src}
      alt={name}
      className="h-8 sm:h-9 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition"
    />
  );
}

const rowOne = [
  { name: "AWS", src: "/logos/aws.svg" },
  { name: "Vercel", src: "/logos/vercel.svg" },
  { name: "Stripe", src: "/logos/stripe.svg" },
  { name: "Docker", src: "/logos/docker.svg" },
  { name: "PostgreSQL", src: "/logos/postgres.svg" },
];

const rowTwo = [
  { name: "GitHub", src: "/logos/github.svg" },
  { name: "Cloudflare", src: "/logos/cloudflare.svg" },
  { name: "Supabase", src: "/logos/supabase.svg" },
];
