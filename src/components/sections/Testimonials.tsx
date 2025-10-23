import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "Rekord.ERP całkowicie zmienił sposób, w jaki zarządzamy naszą produkcją. Wzrost efektywności o 40% to wynik, którego nie spodziewaliśmy się osiągnąć tak szybko.",
      author: "Anna Kowalska",
      position: "Dyrektor Operacyjny",
      company: "Grupa Produkcyjna ALFA",
    },
    {
      quote: "System RATUSZ pozwolił nam zdigitalizować wszystkie usługi dla mieszkańców. Jesteśmy dumni, że możemy oferować obsługę na poziomie europejskim.",
      author: "Jan Nowak",
      position: "Prezydent Miasta",
      company: "Miasto Katowice",
    },
    {
      quote: "Profesjonalizm zespołu Rekord SI i jakość wsparcia technicznego są na najwyższym poziomie. To partner, na którego można liczyć.",
      author: "Maria Wiśniewska",
      position: "Dyrektor IT",
      company: "Sieć Handlowa BETA",
    },
    {
      quote: "Wdrożenie było płynne, a korzyści przekroczyły nasze oczekiwania. Automatyzacja procesów budżetowych oszczędza nam setki godzin pracy rocznie.",
      author: "Piotr Zieliński",
      position: "Skarbnik Miasta",
      company: "Urząd Miejski Gliwice",
    },
    {
      quote: "Bezpieczeństwo danych i zgodność z regulacjami to dla nas priorytet. Rekord SI doskonale to rozumie i dostarcza rozwiązania na najwyższym poziomie.",
      author: "Katarzyna Lewandowska",
      position: "Kierownik Działu Zgodności",
      company: "Zakłady Chemiczne GAMMA",
    },
    {
      quote: "Integracja 15 różnych systemów w jeden spójny ekosystem to była ogromna transformacja. Rekord SI przeprowadził ją bez zakłóceń w naszej pracy.",
      author: "Tomasz Dąbrowski",
      position: "Starosta Powiatu",
      company: "Starostwo Powiatowe Tychy",
    },
    {
      quote: "Real-time tracking całej floty i automatyczna optymalizacja tras to funkcje, które dały nam przewagę konkurencyjną na rynku.",
      author: "Ewa Kaczmarek",
      position: "CEO",
      company: "Firma Logistyczna DELTA",
    },
    {
      quote: "Portal mieszkańca z 50+ e-usługami zmienił sposób, w jaki nasza gmina komunikuje się z obywatelami. Satysfakcja mieszkańców wzrosła o 85%.",
      author: "Paweł Szymański",
      position: "Wójt Gminy",
      company: "Gmina Sosnowiec",
    },
    {
      quote: "Zarządzanie setką projektów jednocześnie było niemożliwe przed Rekord.ERP. Teraz mamy pełną kontrolę i widoczność w czasie rzeczywistym.",
      author: "Michał Woźniak",
      position: "Dyrektor Projektów",
      company: "Przedsiębiorstwo Budowlane EPSILON",
    },
    {
      quote: "Transformacja cyfrowa całej organizacji to ogromne przedsięwzięcie. Z Rekord SI mieliśmy partnera, który rozumiał nasze potrzeby i wyzwania.",
      author: "Agnieszka Kamińska",
      position: "Zastępca Prezydenta",
      company: "Urząd Miasta Zabrze",
    },
    {
      quote: "Skalowalne rozwiązanie, które rośnie razem z naszą firmą. Od 100 do 500+ pracowników bez problemów wydajnościowych.",
      author: "Krzysztof Wojtaszek",
      position: "CTO",
      company: "Korporacja IT ZETA",
    },
    {
      quote: "Gotowość na KSeF przed terminem to zasługa proaktywnego podejścia zespołu Rekord SI. Dzięki temu mieliśmy czas na testy i szkolenia.",
      author: "Jolanta Mazur",
      position: "Skarbnik Powiatu",
      company: "Powiat Bielski",
    },
    {
      quote: "ROI osiągnięte w pierwszym roku po wdrożeniu przekroczyło nasze najśmielsze prognozy. To była jedna z najlepszych inwestycji w historii firmy.",
      author: "Robert Grabowski",
      position: "CFO",
      company: "Grupa Kapitałowa OMEGA",
    },
    {
      quote: "Analityka BI w czasie rzeczywistym zmieniła sposób podejmowania decyzji. Mamy dane wtedy, gdy ich potrzebujemy, w formie, która jest zrozumiała.",
      author: "Magdalena Olejnik",
      position: "Dyrektor Strategii",
      company: "Holding Przemysłowy THETA",
    },
    {
      quote: "Mobilny dostęp do systemu oznacza, że mogę zarządzać firmą z dowolnego miejsca. To elastyczność, której wymagają współczesni liderzy.",
      author: "Adam Rutkowski",
      position: "Prezes Zarządu",
      company: "Grupa Biznesowa IOTA",
    },
    {
      quote: "Wsparcie 24/7 i czas reakcji na zgłoszenia to coś, czego nie doświadczyliśmy u poprzedniego dostawcy. Rekord SI ustanawia nowy standard.",
      author: "Beata Jaworska",
      position: "Administrator Systemu",
      company: "Urząd Wojewódzki",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-32 bg-[hsl(var(--deep-navy))] overflow-hidden">
      <div className="container mx-auto px-8">
        <h2 className="text-5xl lg:text-7xl font-bold text-[hsl(var(--warm-white))] text-center mb-20">
          Co mówią nasi <span className="text-[hsl(var(--electric-cyan))]">Klienci</span>
        </h2>

        <div className="relative max-w-5xl mx-auto">
          {/* Quote Icon */}
          <Quote className="absolute -top-8 left-0 w-24 h-24 text-[hsl(var(--electric-cyan))/20]" />

          {/* Testimonial Content */}
          <div className="bg-[hsl(var(--warm-white))] border-4 border-[hsl(var(--electric-cyan))] p-16 min-h-[400px] flex flex-col justify-center">
            <p className="text-2xl lg:text-3xl text-[hsl(var(--deep-navy))] leading-relaxed mb-12 font-medium">
              "{testimonials[currentIndex].quote}"
            </p>
            <div>
              <p className="text-xl font-bold text-[hsl(var(--deep-navy))]">
                {testimonials[currentIndex].author}
              </p>
              <p className="text-lg text-[hsl(var(--near-black))/70]">
                {testimonials[currentIndex].position}
              </p>
              <p className="text-lg text-[hsl(var(--electric-cyan))] font-bold">
                {testimonials[currentIndex].company}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-12">
            <button
              onClick={prevSlide}
              className="w-16 h-16 border-4 border-[hsl(var(--electric-cyan))] bg-transparent text-[hsl(var(--electric-cyan))] hover:bg-[hsl(var(--electric-cyan))] hover:text-[hsl(var(--deep-navy))] transition-all duration-300 flex items-center justify-center"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={nextSlide}
              className="w-16 h-16 border-4 border-[hsl(var(--electric-cyan))] bg-transparent text-[hsl(var(--electric-cyan))] hover:bg-[hsl(var(--electric-cyan))] hover:text-[hsl(var(--deep-navy))] transition-all duration-300 flex items-center justify-center"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>

          {/* Indicator */}
          <p className="text-center text-[hsl(var(--warm-white))/60] mt-6">
            {currentIndex + 1} / {testimonials.length}
          </p>
        </div>
      </div>
    </section>
  );
};
