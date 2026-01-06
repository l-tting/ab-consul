const services = [
  {
    title: "SaaS Architecture",
    tag: "Scale",
    desc: "End-to-end development of multi-tenant platforms with complex RBAC and automated billing systems.",
    features: ["Next.js/React", "Stripe Integration", "Multi-tenant DB Architecture"],
    metric: "99.9% Uptime Goal"
  },
  {
    title: "Cloud Infrastructure",
    tag: "Stability",
    desc: "Migrating legacy systems to serverless or containerized environments on AWS and Vercel.",
    features: ["Terraform (IaC)", "CI/CD Pipelines", "Edge Computing"],
    metric: "<200ms Latency"
  },
  {
    title: "Product Engineering",
    tag: "Velocity",
    desc: "Rapid development of mission-critical features without compromising on technical debt or code quality.",
    features: ["TypeScript / Node.js", "GraphQL & REST APIs", "Real-time WebSockets"],
    metric: "Fast-Track Delivery"
  },
  {
    title: "System Migration",
    tag: "Modernize",
    desc: "Phased replacement of monolithic architectures with modular, maintainable microservices.",
    features: ["Database Migration", "Legacy Code Refactoring", "API Bridge Design"],
    metric: "Zero Downtime"
  }
];

export default function ServiceGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Changed to 2 columns on medium screens and up */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-200 border border-slate-200 overflow-hidden rounded-xl">
          {services.map((s, i) => (
            <div 
              key={i} 
              className="bg-white p-12 lg:p-16 group relative overflow-hidden transition-all duration-500 hover:bg-slate-50"
            >
              {/* Subtle background accent on hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -mr-16 -mt-16" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] bg-blue-50 px-3 py-1 rounded-full">
                    {s.tag}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                    {s.metric}
                  </span>
                </div>

                <h3 className="text-3xl lg:text-4xl font-bold mb-6 tracking-tighter text-slate-900 group-hover:translate-x-2 transition-transform duration-500">
                  {s.title}
                </h3>
                
                <p className="text-slate-500 mb-10 leading-relaxed max-w-sm text-base lg:text-lg">
                  {s.desc}
                </p>

                <div className="grid grid-cols-1 gap-4">
                  {s.features.map(f => (
                    <div key={f} className="flex items-center group/item">
                      <div className="w-6 h-[1px] bg-blue-600 mr-4 group-hover/item:w-10 transition-all duration-300" />
                      <span className="text-xs font-bold text-slate-900 uppercase tracking-widest opacity-60 group-hover/item:opacity-100 transition-opacity">
                        {f}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}