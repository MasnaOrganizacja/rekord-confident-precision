import { useEffect, useRef } from "react";
import { Heart, Users, Lightbulb, Award } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ValuesCSR = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const values = [
    {
      icon: Users,
      title: "Partnerstwo",
      description: "Budujemy długoterminowe relacje oparte na wzajemnym zaufaniu i wspólnym sukcesie. Sukces naszych klientów to nasz sukces.",
    },
    {
      icon: Heart,
      title: "Odpowiedzialność",
      description: "Wspieramy lokalne społeczności, angażujemy się w projekty CSR i dbamy o środowisko. Biznes to nie tylko zysk, ale także wpływ na społeczeństwo.",
    },
    {
      icon: Lightbulb,
      title: "Innowacja",
      description: "Nieustannie poszukujemy nowych rozwiązań i technologii, aby nasze produkty były zawsze o krok przed rynkiem. Inwestujemy 20% przychodów w R&D.",
    },
    {
      icon: Award,
      title: "Jakość",
      description: "Certyfikaty ISO, nagrody branżowe i wyróżnienie Fair Play to dowody na to, że jakość jest dla nas priorytetem w każdym aspekcie działalności.",
    },
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    const cards = sectionRef.current.querySelectorAll(".value-card");

    cards.forEach((card, idx) => {
      gsap.fromTo(
        card,
        {
          y: 100,
          opacity: 0,
          rotation: idx % 2 === 0 ? -5 : 5,
        },
        {
          y: 0,
          opacity: 1,
          rotation: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-white">
      <div className="container mx-auto px-8">
        <h2 className="text-5xl lg:text-7xl font-bold text-gray-900 text-center mb-6">
          Nasze <span className="text-luxury-forest-green">Wartości</span>
        </h2>
        <p className="text-xl text-gray-600 text-center mb-20 max-w-3xl mx-auto">
          Fundamenty, na których budujemy naszą firmę od 35 lat
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {values.map((value, idx) => {
            const Icon = value.icon;
            return (
              <div
                key={idx}
                className="value-card bg-white border-4 border-luxury-forest-green p-12 hover:border-luxury-forest-green/80 hover:shadow-2xl transition-all duration-300 group"
              >
                <Icon className="w-16 h-16 text-luxury-forest-green mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CSR Highlight */}
        <div className="mt-20 max-w-4xl mx-auto bg-luxury-forest-green border-4 border-luxury-forest-green p-12 text-center shadow-lg">
          <h3 className="text-4xl font-bold text-white mb-6">
            Więcej niż oprogramowanie
          </h3>
          <p className="text-xl text-white/90 leading-relaxed">
            Od lat wspieramy edukację informatyczną w szkołach, sponsorujemy lokalne inicjatywy sportowe
            i angażujemy się w projekty pro bono dla organizacji non-profit. W 2023 roku przekazaliśmy
            bezpłatne licencje RATUSZ dla 15 małych gmin, pomagając im w cyfrowej transformacji.
          </p>
        </div>
      </div>
    </section>
  );
};
