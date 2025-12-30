"use client";

const steps = [
  {
    step: "1",
    title: "Discovery",
    description: "Understand your goals, constraints and real context."
  },
  {
    step: "2",
    title: "Strategy",
    description: "Define the right approach aligned with business impact."
  },
  {
    step: "3",
    title: "Execution",
    description: "Build, Integrate and Ship with full visibility."
  },
  {
    step: "4",
    title: "Iteration",
    description: "Refine, Scale, and Optimize based on outcomes."
  }
];

export default function Process() {
  return (
    <section className="w-full py-16 ">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-sm uppercase font-semibold tracking-widest text-muted-foreground mb-3">
            Our approach
          </p>
          <h2 className="text-3xl font-light">
            How we deliver results
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-20">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className="flex flex-col items-center text-center"
            >
              {/* Circle Wrapper - Centering the Connector relative to the Circle only */}
              <div className="relative flex items-center justify-center">
                
                {/* The Circle */}
                <div className="relative z-10 w-40 h-40 rounded-full border border-border  border-black
                  flex items-center justify-center text-lg font-medium bg-background shadow-sm">
                  {item.title}
                </div>

                {/* The SVG Connector */}
                {index !== steps.length - 1 && (
                  <div className="hidden md:block absolute left-full w-full z-0">
                    <svg
                      className="w-full h-20 overflow-visible"
                      viewBox="0 0 100 60"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0 30 C 25 0, 75 60, 100 30"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeDasharray="6 8"
                        className="text-muted-foreground/40"
                      />
                    </svg>
                  </div>
                )}
              </div>

              {/* Description - Positioned below the Circle Wrapper */}
              <div className="mt-8">
                <span className="text-sm font-mono text-muted-foreground/60 block mb-2">
                  # {item.step}
                </span>
                <p className="text-md text-muted-foreground leading-relaxed ">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}