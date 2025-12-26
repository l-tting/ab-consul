"use client";

const steps = [
  {
    step: "01",
    title: "Discovery",
    description: "We understand your goals, constraints,  and real-world context."
  },
  {
    step: "02",
    title: "Strategy",
    description: "We define the right approach — aligned with business impact."
  },
  {
    step: "03",
    title: "Execution",
    description: "We build, integrate, and ship with full visibility."
  },
  {
    step: "04",
    title: "Iteration",
    description: "We refine, scale, and optimize based on real outcomes."
  }
];

export default function Process() {
  return (
    <section className="w-full py-10">
      <div className=" mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-sm uppercase font-bold tracking-widest text-muted-foreground mb-2">
            Our approach
          </p>
          <h2 className="text-2xl  font-thin">
            How we deliver results
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {steps.map((item) => (
            <div key={item.step} className="relative">
              
              {/* Step number */}
              <div className="text-sm font-semibold text-muted-foreground mb-2">
                {item.step}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>

              {/* Connector line */}
              <div className="hidden md:block absolute top-4 right-[-1.25rem] w-5 h-px bg-border last:hidden" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
