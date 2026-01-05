const assets = [
  { label: "Codebase", value: "Production-ready TypeScript / Next.js", detail: "Clean architecture, 90%+ test coverage" },
  { label: "Infrastructure", value: "Terraform / AWS CloudFormation", detail: "Fully automated environment provisioning" },
  { label: "Documentation", value: "Technical Wiki & API Spec", detail: "Internal docs for your future engineering team" },
  { label: "Compliance", value: "Security & Performance Audits", detail: "Vulnerability scans and Lighthouse optimizations" }
];

export function TechnicalHandover() {
  return (
    <section className="py-24  text-white overflow-hidden relative">
      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20 max-w-2xl">
          <h2 className="text-blue-500 font-mono text-sm mb-4 tracking-[0.3em] uppercase">The Delivery</h2>
          <h3 className="text-4xl font-bold tracking-tighter">Your technical foundation, <span className="text-slate-500 italic font-medium">standardized.</span></h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-12">
          {assets.map((asset, i) => (
            <div key={i} className="group border-l border-slate-800 pl-8 py-2 hover:border-blue-600 transition-colors duration-500">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest italic">
                  Asset 0{i+1} // {asset.label}
                </span>
                <p className="text-xl font-bold text-slate-100 group-hover:text-white transition-colors">
                  {asset.value}
                </p>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {asset.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-10 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">
            * All assets are transfered with full intellectual property rights.
          </p>
          <div className="h-px flex-grow mx-8 bg-slate-900 hidden sm:block" />
          <span className="text-blue-500 font-bold text-xs uppercase tracking-tighter">
            Enterprise Ready
          </span>
        </div>
      </div>
    </section>
  );
}