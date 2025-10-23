export const SocialProof = () => {
  const clients = [
    "Alior Bank", "PKO BP", "PZU", "Tauron", "JSW", "KGHM",
    "Miasto Katowice", "Urząd Śląski", "Sosnowiec", "Gliwice", 
    "Tychy", "Ruda Śląska", "Zabrze", "Bytom", "Chorzów",
    "Dąbrowa Górnicza", "Jaworzno", "Mysłowice", "Siemianowice Śląskie", "Świętochłowice"
  ];

  return (
    <section className="py-24 bg-[hsl(var(--warm-white))] overflow-hidden">
      <div className="container mx-auto px-8 mb-12">
        <h2 className="text-4xl lg:text-5xl font-bold text-[hsl(var(--deep-navy))] text-center">
          Zaufało nam ponad <span className="text-[hsl(var(--electric-cyan))]">500 organizacji</span>, w tym:
        </h2>
      </div>

      {/* Infinite Scroll Carousel */}
      <div className="relative">
        <div className="flex gap-12 animate-infinite-scroll">
          {[...clients, ...clients].map((client, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 px-8 py-6 bg-white border-2 border-[hsl(var(--deep-navy))] min-w-[280px] flex items-center justify-center"
            >
              <span className="text-2xl font-bold text-[hsl(var(--deep-navy))]">{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
