import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const DeepDiveERP = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      title: "Elastyczna Analityka BI",
      description: "Zaawansowane narzędzia analityczne i raporty w czasie rzeczywistym pozwalają podejmować decyzje oparte na danych. Customizowalne dashboardy i automatyczne alerty biznesowe.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600"
    },
    {
      title: "Zarządzanie Produkcją w Czasie Rzeczywistym",
      description: "Pełna kontrola nad procesami produkcyjnymi, planowanie zasobów, monitorowanie maszyn i optymalizacja efektywności linii produkcyjnych z wykorzystaniem IoT.",
      image: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?q=80&w=1600"
    },
    {
      title: "Zintegrowany CRM i Sprzedaż",
      description: "Kompleksowe zarządzanie relacjami z klientami, automatyzacja procesów sprzedażowych, analiza lejka sprzedaży i integracja z systemami e-commerce.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600"
    },
    {
      title: "Mobilny Dostęp i Chmura",
      description: "Pełna funkcjonalność dostępna z dowolnego urządzenia, bezpieczne przechowywanie danych w chmurze, automatyczne kopie zapasowe i skalowalna infrastruktura.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1600"
    }
  ];

  useEffect(() => {
    if (!sectionRef.current || !textRef.current || !imagesRef.current) return;

    // Pin the text column
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom bottom",
      pin: textRef.current,
      pinSpacing: false,
    });

    // Zoom effect on images
    const images = imagesRef.current.querySelectorAll("img");
    images.forEach((img) => {
      gsap.fromTo(
        img,
        { scale: 1.2 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "center center",
            scrub: 1,
          },
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 bg-[hsl(var(--deep-navy))]">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Sticky Left Column */}
          <div ref={textRef} className="lg:h-screen flex flex-col justify-center">
            <h2 className="text-6xl font-bold text-[hsl(var(--warm-white))] mb-8">
              Rekord.<span className="text-[hsl(var(--electric-cyan))]">ERP</span>
            </h2>
            <p className="text-xl text-[hsl(var(--warm-white))/80] leading-relaxed">
              System klasy enterprise, który łączy w sobie moc zaawansowanej analityki, 
              elastyczność konfiguracji i prostotę obsługi. Zbudowany dla firm, które 
              myślą o przyszłości.
            </p>
          </div>

          {/* Scrolling Right Column */}
          <div ref={imagesRef} className="space-y-24">
            {features.map((feature, idx) => (
              <div key={idx} className="group">
                <div className="overflow-hidden border-4 border-[hsl(var(--electric-cyan))] mb-6">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-80 object-cover"
                  />
                </div>
                <h3 className="text-3xl font-bold text-[hsl(var(--electric-cyan))] mb-4">
                  {feature.title}
                </h3>
                <p className="text-lg text-[hsl(var(--warm-white))/70] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
