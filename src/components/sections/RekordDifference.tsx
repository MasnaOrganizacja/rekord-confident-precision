import { useEffect, useRef } from "react";
import { Award, MapPin, Headphones, Zap } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const RekordDifference = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const boxes = sectionRef.current.querySelectorAll(".bento-box");
    
    gsap.fromTo(
      boxes,
      {
        y: 60,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-[hsl(var(--warm-white))]">
      <div className="container mx-auto px-8">
        <h2 className="text-5xl lg:text-7xl font-bold text-[hsl(var(--deep-navy))] mb-4 text-center">
          Dlaczego <span className="text-[hsl(var(--electric-cyan))]">Rekord SI</span>?
        </h2>
        <p className="text-xl text-[hsl(var(--near-black))/70] text-center mb-20 max-w-3xl mx-auto">
          35 lat doświadczenia przekłada się na przewagę, której nie da się skopiować
        </p>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Large box - 2x2 on desktop */}
          <div className="bento-box lg:col-span-2 lg:row-span-2 bg-[hsl(var(--deep-navy))] border-4 border-[hsl(var(--deep-navy))] p-12 group hover:border-[hsl(var(--electric-cyan))] transition-all duration-300">
            <Award className="w-16 h-16 text-[hsl(var(--electric-cyan))] mb-6 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-4xl font-bold text-[hsl(var(--warm-white))] mb-6">
              Doświadczenie i Stabilność
            </h3>
            <p className="text-lg text-[hsl(var(--warm-white))/80] leading-relaxed mb-6">
              Od 35 lat dostarczamy oprogramowanie klasy enterprise dla najbardziej wymagających klientów. 
              Nasze rozwiązania wspierają organizacje w każdym etapie rozwoju - od wdrożenia, przez codzienną 
              pracę, aż po transformację cyfrową.
            </p>
            <p className="text-lg text-[hsl(var(--warm-white))/80] leading-relaxed">
              Ponad 500 organizacji wybrało Rekord SI jako swojego długoterminowego partnera technologicznego. 
              60% samorządów województwa śląskiego zaufało naszemu systemowi RATUSZ.
            </p>
            <div className="mt-8 flex gap-8">
              <div>
                <div className="text-5xl font-bold text-[hsl(var(--electric-cyan))]">500+</div>
                <div className="text-[hsl(var(--warm-white))/70]">Klientów</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-[hsl(var(--electric-cyan))]">60%</div>
                <div className="text-[hsl(var(--warm-white))/70]">Samorządów Śląskich</div>
              </div>
            </div>
          </div>

          {/* Small box 1 */}
          <div className="bento-box bg-white border-4 border-[hsl(var(--deep-navy))] p-8 group hover:border-[hsl(var(--electric-cyan))] transition-all duration-300">
            <MapPin className="w-12 h-12 text-[hsl(var(--electric-cyan))] mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-2xl font-bold text-[hsl(var(--deep-navy))] mb-4">
              Polska Inżynieria
            </h3>
            <p className="text-[hsl(var(--near-black))/70] leading-relaxed">
              Znamy polskie przepisy, standardy i specyfikę rynku jak nikt inny. 
              Nasze rozwiązania są w pełni dostosowane do wymogów prawnych i oczekiwań lokalnych klientów.
            </p>
          </div>

          {/* Small box 2 */}
          <div className="bento-box bg-white border-4 border-[hsl(var(--deep-navy))] p-8 group hover:border-[hsl(var(--electric-cyan))] transition-all duration-300">
            <Headphones className="w-12 h-12 text-[hsl(var(--electric-cyan))] mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-2xl font-bold text-[hsl(var(--deep-navy))] mb-4">
              Wsparcie Ekspertów
            </h3>
            <p className="text-[hsl(var(--near-black))/70] leading-relaxed">
              Dedykowany zespół specjalistów, kompleksowe szkolenia i ciągłe wsparcie techniczne 
              zapewniają spokój i maksymalną efektywność wdrożenia.
            </p>
          </div>

          {/* Small box 3 */}
          <div className="bento-box lg:col-span-1 bg-[hsl(var(--electric-cyan))] border-4 border-[hsl(var(--electric-cyan))] p-8 group hover:scale-105 transition-all duration-300">
            <Zap className="w-12 h-12 text-[hsl(var(--deep-navy))] mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-2xl font-bold text-[hsl(var(--deep-navy))] mb-4">
              Ciągła Innowacja
            </h3>
            <p className="text-[hsl(var(--deep-navy))/80] leading-relaxed">
              Inwestujemy w rozwój produktów i nowe technologie, aby nasze systemy zawsze wyprzedzały rynek.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
