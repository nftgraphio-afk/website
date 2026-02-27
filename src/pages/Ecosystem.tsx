export function Ecosystem() {
  return (
    <div className="container mx-auto px-4 pt-32 pb-16">
      <h1 className="text-4xl md:text-6xl font-serif font-medium text-white mb-8">Ecosystem</h1>
      <div className="prose prose-invert max-w-none">
        <p className="text-lg text-white/70 leading-relaxed max-w-3xl mb-12">
          The Aura ecosystem is designed to be modular and interconnected. 
          Our suite of tools works together seamlessly to provide a comprehensive 
          platform for building the future of the web.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Core", desc: "The foundational framework powering everything." },
            { title: "Analytics", desc: "Deep insights into your performance metrics." },
            { title: "Design", desc: "A unified system for consistent UI/UX." },
            { title: "Cloud", desc: "Scalable infrastructure for global deployment." },
            { title: "Security", desc: "Enterprise-grade protection for your data." },
            { title: "API", desc: "Flexible interfaces for custom integrations." }
          ].map((item, i) => (
            <div key={i} className="group p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors backdrop-blur-sm">
              <h3 className="text-xl font-medium text-white mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="text-white/60">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
