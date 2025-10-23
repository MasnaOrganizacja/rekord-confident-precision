import { useState } from "react";
import { Building2, Factory, Landmark } from "lucide-react";

export const CaseStudies = () => {
  const [filter, setFilter] = useState<"all" | "enterprise" | "public">("all");

  const cases = [
    {
      category: "enterprise",
      client: "Grupa Produkcyjna ALFA",
      industry: "Produkcja przemysłowa",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800",
      result: "40% wzrost efektywności produkcji",
    },
    {
      category: "public",
      client: "Miasto Katowice",
      industry: "Administracja miejska",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800",
      result: "Pełna digitalizacja usług dla mieszkańców",
    },
    {
      category: "enterprise",
      client: "Sieć Handlowa BETA",
      industry: "Retail i Dystrybucja",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800",
      result: "30% redukcja kosztów logistycznych",
    },
    {
      category: "public",
      client: "Urząd Miejski Gliwice",
      industry: "Samorząd terytorialny",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800",
      result: "Automatyzacja 80% procesów budżetowych",
    },
    {
      category: "enterprise",
      client: "Zakłady Chemiczne GAMMA",
      industry: "Przemysł chemiczny",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800",
      result: "Zgodność z ISO i pełna traceability",
    },
    {
      category: "public",
      client: "Starostwo Powiatowe Tychy",
      industry: "Administracja powiatowa",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800",
      result: "Integracja 15 systemów w jeden",
    },
    {
      category: "enterprise",
      client: "Firma Logistyczna DELTA",
      industry: "Transport i Spedycja",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800",
      result: "Real-time tracking całej floty",
    },
    {
      category: "public",
      client: "Gmina Sosnowiec",
      industry: "Samorząd gminny",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800",
      result: "Portal mieszkańca z 50+ e-usługami",
    },
    {
      category: "enterprise",
      client: "Przedsiębiorstwo Budowlane EPSILON",
      industry: "Budownictwo",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800",
      result: "Zarządzanie 100+ projektami jednocześnie",
    },
    {
      category: "public",
      client: "Urząd Miasta Zabrze",
      industry: "Miasto na prawach powiatu",
      image: "https://images.unsplash.com/photo-1511406361295-0a1ff814c0ce?q=80&w=800",
      result: "Transformacja cyfrowa całej organizacji",
    },
    {
      category: "enterprise",
      client: "Korporacja IT ZETA",
      industry: "Technologia",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
      result: "Skalowalne rozwiązanie dla 500+ pracowników",
    },
    {
      category: "public",
      client: "Powiat Bielski",
      industry: "Administracja powiatowa",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800",
      result: "Pełna gotowość na KSeF przed terminem",
    },
  ];

  const filteredCases = cases.filter((c) => filter === "all" || c.category === filter);

  return (
    <section className="py-32 bg-[hsl(var(--warm-white))]">
      <div className="container mx-auto px-8">
        <h2 className="text-5xl lg:text-7xl font-bold text-[hsl(var(--deep-navy))] text-center mb-6">
          Studia <span className="text-[hsl(var(--electric-cyan))]">Przypadków</span>
        </h2>
        <p className="text-xl text-[hsl(var(--near-black))/70] text-center mb-12">
          Prawdziwe wdrożenia, mierzalne rezultaty
        </p>

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-16">
          <button
            onClick={() => setFilter("all")}
            className={`px-8 py-4 border-2 font-bold transition-all duration-300 ${
              filter === "all"
                ? "bg-[hsl(var(--deep-navy))] border-[hsl(var(--deep-navy))] text-[hsl(var(--warm-white))]"
                : "bg-white border-[hsl(var(--deep-navy))] text-[hsl(var(--deep-navy))] hover:border-[hsl(var(--electric-cyan))]"
            }`}
          >
            Wszystkie
          </button>
          <button
            onClick={() => setFilter("enterprise")}
            className={`px-8 py-4 border-2 font-bold transition-all duration-300 flex items-center gap-2 ${
              filter === "enterprise"
                ? "bg-[hsl(var(--deep-navy))] border-[hsl(var(--deep-navy))] text-[hsl(var(--warm-white))]"
                : "bg-white border-[hsl(var(--deep-navy))] text-[hsl(var(--deep-navy))] hover:border-[hsl(var(--electric-cyan))]"
            }`}
          >
            <Factory className="w-5 h-5" />
            Przedsiębiorstwa
          </button>
          <button
            onClick={() => setFilter("public")}
            className={`px-8 py-4 border-2 font-bold transition-all duration-300 flex items-center gap-2 ${
              filter === "public"
                ? "bg-[hsl(var(--deep-navy))] border-[hsl(var(--deep-navy))] text-[hsl(var(--warm-white))]"
                : "bg-white border-[hsl(var(--deep-navy))] text-[hsl(var(--deep-navy))] hover:border-[hsl(var(--electric-cyan))]"
            }`}
          >
            <Landmark className="w-5 h-5" />
            Administracja Publiczna
          </button>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredCases.map((caseStudy, idx) => (
            <div
              key={idx}
              className="group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              <div className="overflow-hidden border-4 border-[hsl(var(--deep-navy))] mb-4 group-hover:border-[hsl(var(--electric-cyan))] transition-all duration-300">
                <img
                  src={caseStudy.image}
                  alt={caseStudy.client}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold text-[hsl(var(--deep-navy))] mb-2">
                {caseStudy.client}
              </h3>
              <p className="text-sm text-[hsl(var(--near-black))/60] mb-3 uppercase tracking-wider">
                {caseStudy.industry}
              </p>
              <p className="text-lg text-[hsl(var(--electric-cyan))] font-bold">
                {caseStudy.result}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
