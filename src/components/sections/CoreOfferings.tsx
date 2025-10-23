import { useEffect, useRef, useState } from "react";
import { ArrowRight, Database, FileText, TrendingUp, Shield, Building2, Users } from "lucide-react";

export const CoreOfferings = () => {
  const [tilt1, setTilt1] = useState({ x: 0, y: 0 });
  const [tilt2, setTilt2] = useState({ x: 0, y: 0 });
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    cardRef: React.RefObject<HTMLDivElement>,
    setTilt: React.Dispatch<React.SetStateAction<{ x: number; y: number }>>
  ) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = ((y - centerY) / centerY) * -10;
    const tiltY = ((x - centerX) / centerX) * 10;
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = (setTilt: React.Dispatch<React.SetStateAction<{ x: number; y: number }>>) => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section className="py-32 bg-[hsl(var(--deep-navy))]">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Rekord.ERP Card */}
          <div
            ref={card1Ref}
            onMouseMove={(e) => handleMouseMove(e, card1Ref, setTilt1)}
            onMouseLeave={() => handleMouseLeave(setTilt1)}
            className="relative group cursor-pointer"
            style={{
              transform: `perspective(1000px) rotateX(${tilt1.x}deg) rotateY(${tilt1.y}deg)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            <div className="bg-[hsl(var(--warm-white))] border-4 border-[hsl(var(--electric-cyan))] p-12 h-full min-h-[600px] flex flex-col">
              <div className="mb-6">
                <Database className="w-16 h-16 text-[hsl(var(--electric-cyan))]" />
              </div>
              
              <h3 className="text-5xl font-bold text-[hsl(var(--deep-navy))] mb-6">
                Rekord.ERP
              </h3>
              
              <p className="text-xl text-[hsl(var(--near-black))/80] mb-8 leading-relaxed">
                Zintegrowany system do zarządzania przedsiębiorstwem, który optymalizuje procesy, 
                redukuje koszty i wspiera wzrost.
              </p>

              <div className="space-y-4 mb-8 flex-grow">
                <div className="flex items-start gap-4">
                  <TrendingUp className="w-6 h-6 text-[hsl(var(--electric-cyan))] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg text-[hsl(var(--deep-navy))]">Finanse i Księgowość</h4>
                    <p className="text-[hsl(var(--near-black))/70]">Pełna kontrola finansowa w czasie rzeczywistym</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <FileText className="w-6 h-6 text-[hsl(var(--electric-cyan))] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg text-[hsl(var(--deep-navy))]">Logistyka i Magazyn</h4>
                    <p className="text-[hsl(var(--near-black))/70]">Zarządzanie łańcuchem dostaw i zapasami</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Database className="w-6 h-6 text-[hsl(var(--electric-cyan))] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg text-[hsl(var(--deep-navy))]">Produkcja i Projekty</h4>
                    <p className="text-[hsl(var(--near-black))/70]">Planowanie i kontrola procesów produkcyjnych</p>
                  </div>
                </div>
              </div>

              <a 
                href="#" 
                className="magnetic-button inline-flex items-center gap-2 text-[hsl(var(--deep-navy))] font-bold text-lg group-hover:gap-4 transition-all duration-300"
              >
                Dowiedz się więcej
                <ArrowRight className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* RATUSZ Card */}
          <div
            ref={card2Ref}
            onMouseMove={(e) => handleMouseMove(e, card2Ref, setTilt2)}
            onMouseLeave={() => handleMouseLeave(setTilt2)}
            className="relative group cursor-pointer"
            style={{
              transform: `perspective(1000px) rotateX(${tilt2.x}deg) rotateY(${tilt2.y}deg)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            <div className="bg-[hsl(var(--warm-white))] border-4 border-[hsl(var(--electric-cyan))] p-12 h-full min-h-[600px] flex flex-col">
              <div className="mb-6">
                <Building2 className="w-16 h-16 text-[hsl(var(--electric-cyan))]" />
              </div>
              
              <h3 className="text-5xl font-bold text-[hsl(var(--deep-navy))] mb-6">
                RATUSZ
              </h3>
              
              <p className="text-xl text-[hsl(var(--near-black))/80] mb-8 leading-relaxed">
                Kompleksowe rozwiązanie dla administracji publicznej, zapewniające zgodność z prawem, 
                bezpieczeństwo danych i efektywną obsługę obywateli.
              </p>

              <div className="space-y-4 mb-8 flex-grow">
                <div className="flex items-start gap-4">
                  <Shield className="w-6 h-6 text-[hsl(var(--electric-cyan))] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg text-[hsl(var(--deep-navy))]">Podatki i Opłaty Lokalne</h4>
                    <p className="text-[hsl(var(--near-black))/70]">Automatyzacja poboru i ewidencji należności</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Users className="w-6 h-6 text-[hsl(var(--electric-cyan))] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg text-[hsl(var(--deep-navy))]">E-urząd i Obsługa Obywatela</h4>
                    <p className="text-[hsl(var(--near-black))/70]">Platforma cyfrowej komunikacji z mieszkańcami</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <TrendingUp className="w-6 h-6 text-[hsl(var(--electric-cyan))] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg text-[hsl(var(--deep-navy))]">Budżet i Finanse Publiczne</h4>
                    <p className="text-[hsl(var(--near-black))/70]">Zarządzanie budżetem zgodne z przepisami</p>
                  </div>
                </div>
              </div>

              <a 
                href="#" 
                className="magnetic-button inline-flex items-center gap-2 text-[hsl(var(--deep-navy))] font-bold text-lg group-hover:gap-4 transition-all duration-300"
              >
                Dowiedz się więcej
                <ArrowRight className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
