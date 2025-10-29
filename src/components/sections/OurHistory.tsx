import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const OurHistory = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);

  const milestones = [
    { year: "1989", title: "Założenie Firmy", description: "Rozpoczęcie działalności jako pionier polskiego oprogramowania biznesowego" },
    { year: "1995", title: "Pierwsze Wdrożenie ERP", description: "Uruchomienie pierwszego pełnego systemu zarządzania przedsiębiorstwem" },
    { year: "2000", title: "Ekspansja na Śląsk", description: "Zdobycie pozycji lidera regionalnego w sektorze publicznym" },
    { year: "2004", title: "System dla JST", description: "Pierwsze wdrożenie w dużej jednostce samorządu terytorialnego" },
    { year: "2008", title: "Certyfikat Fair Play", description: "Wyróżnienie 'Przedsiębiorstwo Fair Play' za transparentność i jakość" },
    { year: "2012", title: "RATUSZ 2.0", description: "Rewolucyjna modernizacja platformy dla administracji publicznej" },
    { year: "2015", title: "500+ Klientów", description: "Przekroczenie progu 500 organizacji klienckich" },
    { year: "2018", title: "Cloud First", description: "Strategia transformacji do rozwiązań chmurowych" },
    { year: "2020", title: "Pandemia Digital", description: "Wsparcie klientów w przejściu na pracę zdalną i e-usługi" },
    { year: "2022", title: "AI & Analytics", description: "Integracja sztucznej inteligencji i zaawansowanej analityki" },
    { year: "2023", title: "Gotowość KSeF", description: "Pełna kompatybilność z Krajowym Systemem e-Faktur" },
    { year: "2024", title: "35 Lat Innowacji", description: "Kontynuacja misji cyfrowej transformacji Polski" },
  ];

  useEffect(() => {
    if (!sectionRef.current || !horizontalRef.current) return;

    const horizontal = horizontalRef.current;
    const scrollWidth = (horizontal.scrollWidth - window.innerWidth) *1.1;

    // Clear any existing ScrollTriggers
    ScrollTrigger.getAll().forEach(trigger => {
      if (trigger.trigger === sectionRef.current) {
        trigger.kill();
      }
    });

    const scrollTrigger = gsap.to(horizontal, {
      x: -scrollWidth,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${scrollWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      scrollTrigger.kill();
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative h-screen overflow-hidden bg-luxury-forest-green">
      <div className="absolute top-12 left-8 z-10">
        <h2 className="text-5xl font-bold text-white mb-2">
          Nasza <span className="text-white/90">Historia</span>
        </h2>
        <p className="text-xl text-white/80">35 lat budowania przyszłości</p>
      </div>

      <div ref={horizontalRef} className="absolute top-0 left-0 h-full flex items-center gap-12 pl-8 pr-8">
        {milestones.map((milestone, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-[500px] h-[400px] border-4 border-white bg-white p-10 flex flex-col justify-between hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            <div>
              <div className="text-8xl font-bold text-luxury-forest-green mb-4">
                {milestone.year}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {milestone.title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {milestone.description}
              </p>
            </div>
            <div className="w-16 h-1 bg-luxury-forest-green" />
          </div>
        ))}
      </div>
    </section>
  );
};
