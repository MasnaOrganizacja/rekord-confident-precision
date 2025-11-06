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
  // Show only first 3 cases
  const displayedCases = filteredCases.slice(0, 3);

  return (
    <section id="case-studies" className="py-32 bg-gray-50">
      <div className="container mx-auto px-8">
        <h2 className="text-5xl lg:text-7xl font-bold text-gray-900 text-center mb-6 font-sansation">
          Studia <span className="text-luxury-forest-green">Przypadków</span>
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          Prawdziwe wdrożenia, mierzalne rezultaty
        </p>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <button
            onClick={() => setFilter("all")}
            className={`px-6 sm:px-8 py-3 sm:py-4 border-2 font-bold transition-all duration-300 text-sm sm:text-base ${
              filter === "all"
                ? "bg-luxury-forest-green border-luxury-forest-green text-white"
                : "bg-white border-luxury-forest-green text-luxury-forest-green hover:border-luxury-forest-green/80"
            }`}
          >
            Wszystkie
          </button>
          <button
            onClick={() => setFilter("enterprise")}
            className={`px-6 sm:px-8 py-3 sm:py-4 border-2 font-bold transition-all duration-300 flex items-center gap-2 text-sm sm:text-base ${
              filter === "enterprise"
                ? "bg-luxury-forest-green border-luxury-forest-green text-white"
                : "bg-white border-luxury-forest-green text-luxury-forest-green hover:border-luxury-forest-green/80"
            }`}
          >
            <Factory className="w-4 h-4 sm:w-5 sm:h-5" />
            Przedsiębiorstwa
          </button>
          <button
            onClick={() => setFilter("public")}
            className={`px-6 sm:px-8 py-3 sm:py-4 border-2 font-bold transition-all duration-300 flex items-center gap-2 text-sm sm:text-base ${
              filter === "public"
                ? "bg-luxury-forest-green border-luxury-forest-green text-white"
                : "bg-white border-luxury-forest-green text-luxury-forest-green hover:border-luxury-forest-green/80"
            }`}
          >
            <Landmark className="w-4 h-4 sm:w-5 sm:h-5" />
            Administracja Publiczna
          </button>
        </div>

        {/* Cases Grid - Show only first 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {displayedCases.map((caseStudy, idx) => (
            <div
              key={idx}
              className="group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="overflow-hidden border-4 border-luxury-forest-green mb-4 group-hover:border-luxury-forest-green/80 transition-all duration-300 shadow-lg">
                <img
                  src={caseStudy.image}
                  alt={caseStudy.client}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 font-sansation">
                {caseStudy.client}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mb-3 uppercase tracking-wider">
                {caseStudy.industry}
              </p>
              <p className="text-base sm:text-lg text-luxury-forest-green font-bold">
                {caseStudy.result}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
