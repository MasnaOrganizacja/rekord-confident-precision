import { useEffect, useRef, useState } from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Shield, Users, FileText, TrendingUp, Globe, CheckCircle, Lock, Eye, Database, Zap, AlertTriangle, Calendar, ArrowLeft } from "lucide-react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Ratusz = () => {
  const lenisRef = useRef<Lenis | null>(null);
  const heroRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const securitySectionRef = useRef<HTMLElement>(null);
  const securityTextRef = useRef<HTMLDivElement>(null);
  const [activeModule, setActiveModule] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Add Google Fonts
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Hero kinetic typography
    if (heroRef.current) {
      const words = heroRef.current.querySelectorAll(".hero-word");
      gsap.fromTo(
        words,
        {
          opacity: 0,
          y: 50,
          rotationX: -90
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          stagger: 0.2,
          duration: 1.5,
          ease: "power3.out",
          delay: 0.5
        }
      );
    }

    // Timeline drawing animation
    if (timelineRef.current) {
      const timelinePath = timelineRef.current.querySelector('.timeline-path');
      if (timelinePath) {
        gsap.fromTo(timelinePath,
          { strokeDasharray: "0 1000" },
          {
            strokeDasharray: "1000 0",
            duration: 2,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: timelineRef.current,
              start: "top 70%",
            }
          }
        );
      }
    }

    // Security Architecture Sticky Scroll
    if (securitySectionRef.current && securityTextRef.current) {
      ScrollTrigger.create({
        trigger: securitySectionRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: securityTextRef.current,
        pinSpacing: false,
      });
    }

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const ksfTimeline = [
    {
      date: "1 lutego 2026",
      title: "Obowiązkowe KSeF dla dużych podatników",
      challenge: "Zarządzanie uprawnieniami i centralizacja NIP",
      solution: "RATUSZ automatycznie konfiguruje strukturę uprawnień zgodnie z wymogami KSeF"
    },
    {
      date: "1 kwietnia 2026",
      title: "Rozszerzenie na średnie przedsiębiorstwa",
      challenge: "Szkolenie pracowników i adaptacja procesów",
      solution: "Zintegrowane moduły szkoleniowe i automatyzacja przepływów dokumentów"
    },
    {
      date: "1 lipca 2026",
      title: "Pełne wdrożenie dla wszystkich podatników",
      challenge: "Masowa migracja i wsparcie techniczne",
      solution: "Dedykowane centrum wsparcia i narzędzia migracji danych"
    }
  ];

  const complianceModules = [
    {
      title: "Dyrektywa NIS2",
      description: "Kompleksowe zabezpieczenia cyberbezpieczeństwa zgodne z najnowszymi wymogami UE",
      icon: Shield,
      features: ["Monitoring zagrożeń 24/7", "Automatyczne raportowanie incydentów", "Zarządzanie ryzykiem", "Audyt bezpieczeństwa"]
    },
    {
      title: "KRI i RODO",
      description: "Pełna zgodność z przepisami o ochronie danych osobowych i krajowymi regulacjami",
      icon: Lock,
      features: ["Szyfrowanie danych", "Kontrola dostępu", "Dzienniki audytowe", "Zarządzanie zgodą"]
    },
    {
      title: "Cyberbezpieczny Samorząd",
      description: "Specjalizowane rozwiązania bezpieczeństwa dla jednostek samorządu terytorialnego",
      icon: Eye,
      features: ["Wykrywanie anomalii", "Backup i recovery", "Segmentacja sieci", "Szkolenia pracowników"]
    },
    {
      title: "Zarządzanie Ryzykiem",
      description: "Proaktywne identyfikowanie i mitygacja zagrożeń operacyjnych",
      icon: AlertTriangle,
      features: ["Analiza ryzyka", "Plany awaryjne", "Monitoring KRI", "Raportowanie zarządu"]
    }
  ];

  const modules = [
    {
      title: "Elektroniczny Obieg Dokumentów (EZD)",
      description: "Pełna digitalizacja procesów dokumentowych z zachowaniem wymogów prawnych",
      icon: FileText,
      benefits: ["Automatyczny obieg dokumentów", "Podpis elektroniczny", "Archiwizacja cyfrowa", "Integracja z ePUAP"]
    },
    {
      title: "Zarządzanie Finansami i Budżetem",
      description: "Kompleksowe narzędzia finansowe dostosowane do specyfiki sektora publicznego",
      icon: TrendingUp,
      benefits: ["Planowanie budżetu", "Kontrola wydatków", "Sprawozdawczość GUS", "Analiza finansowa"]
    },
    {
      title: "Portal Mieszkańca (e-Urząd)",
      description: "Nowoczesna platforma e-usług dla obywateli z intuicyjnym interfejsem",
      icon: Users,
      benefits: ["E-usługi online", "Powiadomienia SMS/email", "Płatności elektroniczne", "Status spraw"]
    },
    {
      title: "Cyberbezpieczeństwo i Audyt",
      description: "Zaawansowane systemy ochrony danych i monitoringu bezpieczeństwa",
      icon: Shield,
      benefits: ["Monitoring 24/7", "Kopie zapasowe", "Kontrola dostępu", "Dzienniki audytowe"]
    }
  ];

  const securityLayers = [
    {
      title: "Szyfrowanie Danych",
      description: "End-to-end encryption dla wszystkich danych wrażliwych z wykorzystaniem algorytmów AES-256. Wszystkie dane przesyłane między klientem a serwerem są szyfrowane, zapewniając najwyższy poziom bezpieczeństwa informacji obywateli."
    },
    {
      title: "Kontrola Dostępu (IAM)",
      description: "Wielopoziomowy system zarządzania tożsamością i dostępem z uwierzytelnianiem dwuskładnikowym. Każdy użytkownik ma przypisane konkretne uprawnienia, a dostęp do wrażliwych danych jest ściśle kontrolowany."
    },
    {
      title: "System Wykrywania Włamań (IDS/IPS)",
      description: "Zaawansowane narzędzia wykrywania i zapobiegania intruzom w czasie rzeczywistym. System monitoruje całą infrastrukturę IT i automatycznie reaguje na potencjalne zagrożenia."
    },
    {
      title: "Firewall Aplikacyjny (WAF)",
      description: "Zaawansowany firewall aplikacyjny chroniący przed atakami na poziomie aplikacji webowych. Filtruje ruch HTTP/HTTPS i blokuje złośliwe żądania przed dotarciem do serwera."
    },
    {
      title: "Kopie Zapasowe i Odzyskiwanie",
      description: "Automatyczne, szyfrowane kopie zapasowe z możliwością szybkiego odzyskiwania danych. System zapewnia ciągłość działania nawet w przypadku awarii sprzętowej."
    },
    {
      title: "Monitoring i Audyt",
      description: "Kompleksowy system monitoringu i audytu wszystkich operacji w systemie. Każda akcja jest logowana i może być przeanalizowana w celach bezpieczeństwa i zgodności."
    },
    {
      title: "Plany Ciągłości Działania",
      description: "Kompleksowe procedury zapewniające ciągłość świadczenia usług publicznych. Obejmują scenariusze awaryjne, procedury odzyskiwania i plany komunikacji kryzysowej."
    },
    {
      title: "Zgodność z RODO i Przepisami",
      description: "Pełna zgodność z Rozporządzeniem o Ochronie Danych Osobowych oraz wszystkimi przepisami dotyczącymi bezpieczeństwa informacji w administracji publicznej."
    }
  ];

  const testimonials = [
    {
      quote: "RATUSZ znacznie uprościł nasze procesy administracyjne. Mieszkańcy doceniają możliwość załatwiania spraw online, a my oszczędzamy czas na rutynowych czynnościach.",
      author: "Anna Kowalska",
      position: "Burmistrz",
      city: "Gmina Przykładowa",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400",
      metric: "60% mniej wizyt w urzędzie"
    },
    {
      quote: "Dzięki systemowi RATUSZ nasza księgowość jest w pełni zgodna z przepisami, a raporty generują się automatycznie. To ogromna oszczędność czasu i pewność zgodności.",
      author: "Piotr Nowak",
      position: "Skarbnik",
      city: "Miasto Wzorcowe",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400",
      metric: "90% automatyzacji raportów"
    },
    {
      quote: "Portal mieszkańca to przełom w komunikacji z obywatelami. Znacznie zmniejszyła się liczba wizyt w urzędzie, a satysfakcja mieszkańców wzrosła.",
      author: "Maria Wiśniewska",
      position: "Kierownik USC",
      city: "Gmina Nowoczesna",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400",
      metric: "95% zadowolenia mieszkańców"
    }
  ];

  const faqData = [
    {
      category: "Bezpieczeństwo i Zgodność",
      questions: [
        {
          q: "Czy RATUSZ jest zgodny z dyrektywą NIS2?",
          a: "Tak, RATUSZ w pełni implementuje wszystkie wymagania dyrektywy NIS2, w tym monitoring cyberbezpieczeństwa, raportowanie incydentów i zarządzanie ryzykiem."
        },
        {
          q: "Jak system zapewnia ochronę danych osobowych?",
          a: "System wykorzystuje szyfrowanie AES-256, kontrolę dostępu opartą na rolach, dzienniki audytowe i automatyczne procedury zgodności z RODO."
        }
      ]
    },
    {
      category: "Wdrożenie i Szkolenia",
      questions: [
        {
          q: "Ile czasu zajmuje wdrożenie systemu RATUSZ?",
          a: "Standardowe wdrożenie zajmuje 3-6 miesięcy w zależności od wielkości jednostki i zakresu funkcjonalności. Proces jest podzielony na etapy z możliwością stopniowego uruchamiania modułów."
        },
        {
          q: "Jakie szkolenia są dostępne dla pracowników?",
          a: "Oferujemy kompleksowe szkolenia: podstawowe dla wszystkich użytkowników, zaawansowane dla administratorów oraz specjalistyczne dla poszczególnych modułów. Szkolenia dostępne stacjonarnie i online."
        }
      ]
    },
    {
      category: "KSeF",
      questions: [
        {
          q: "Czy RATUSZ jest gotowy na KSeF?",
          a: "Tak, system jest w pełni przygotowany na Krajowy System e-Faktur. Automatycznie generuje i przesyła faktury, zarządza uprawnieniami i zapewnia zgodność z harmonogramem wdrożenia."
        },
        {
          q: "Jak system pomoże w przygotowaniu do KSeF?",
          a: "RATUSZ oferuje narzędzia do migracji danych, automatyczną konfigurację uprawnień, szkolenia dla pracowników oraz dedykowane wsparcie techniczne podczas całego procesu wdrożenia."
        }
      ]
    }
  ];

  return (
    <main className="overflow-x-hidden bg-[#F0F6FC]">
      <Navbar />

      {/* Hero Section - Cyfrowa Twierdza */}
      <section ref={heroRef} className="relative min-h-screen flex items-center bg-[#0D1117] pt-20">
        {/* Animated network background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #3B82F6 2px, transparent 2px),
                             radial-gradient(circle at 75% 75%, #3B82F6 1px, transparent 1px)`,
            backgroundSize: '100px 100px'
          }}></div>
          {/* Connecting lines */}
          <svg className="absolute inset-0 w-full h-full">
            <defs>
              <pattern id="network" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <line x1="25" y1="25" x2="75" y2="75" stroke="#3B82F6" strokeWidth="0.5" opacity="0.3" />
                <line x1="75" y1="25" x2="25" y2="75" stroke="#3B82F6" strokeWidth="0.5" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#network)" />
          </svg>
        </div>

        <div className="container mx-auto px-8 relative z-10 text-center">
          <h1 className="text-6xl lg:text-8xl font-bold text-[#F0F6FC] leading-tight mb-8">
            <div className="hero-word inline-block">Bezpieczeństwo.</div>
            <br />
            <div className="hero-word inline-block">Zgodność.</div>
            <br />
            <div className="hero-word inline-block text-[#3B82F6]">Ciągłość.</div>
          </h1>

          <p className="text-xl text-[#8B949E] max-w-3xl mx-auto leading-relaxed mb-12">
            System RATUSZ: Cyfrowy fundament dla nowoczesnego samorządu.
            Bezpieczne, zgodne z prawem i gotowe na przyszłość rozwiązanie dla administracji publicznej.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#3B82F6] text-[#F0F6FC] hover:bg-[#3B82F6]/90 font-bold px-8 py-6 text-lg border-2 border-[#3B82F6] transition-all duration-300 hover:scale-105"
            >
              Umów Prezentację
              <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6] hover:text-[#F0F6FC] font-bold px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
            >
              Pobierz Materiały
            </Button>
          </div>
        </div>
      </section>

      {/* KSeF Mandate Timeline */}
      <section className="py-32 bg-[#F0F6FC]">
        <div className="container mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-bold text-[#0D1117] mb-6"> </h2>
            <p className="text-xl text-[#21262D] max-w-3xl mx-auto">
              Twoja droga do zgodności z Krajowym Systemem e-Faktur
            </p>
          </div>

          <div ref={timelineRef} className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <svg className="absolute left-8 top-0 h-full w-1" viewBox="0 0 2 400">
                <line
                  className="timeline-path"
                  x1="1" y1="0" x2="1" y2="400"
                  stroke="#3B82F6"
                  strokeWidth="4"
                  strokeDasharray="0 1000"
                />
              </svg>

              <div className="space-y-16">
                {ksfTimeline.map((item, idx) => (
                  <div key={idx} className="relative flex items-start space-x-8">
                    {/* Timeline dot */}
                    <div className="flex-shrink-0 w-16 h-16 bg-[#3B82F6] border-4 border-[#F0F6FC] rounded-full flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-[#F0F6FC]" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-[#0D1117] border-4 border-[#3B82F6] p-8">
                      <div className="text-[#3B82F6] font-bold text-lg mb-2">{item.date}</div>
                      <h3 className="text-2xl font-bold text-[#F0F6FC] mb-4">
                        {item.title}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-[#3B82F6] font-bold mb-2">Wyzwanie:</h4>
                          <p className="text-[#8B949E]">{item.challenge}</p>
                        </div>
                        <div>
                          <h4 className="text-[#3B82F6] font-bold mb-2">Rozwiązanie RATUSZ:</h4>
                          <p className="text-[#8B949E]">{item.solution}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Core - Diagonal Sections */}
      <section className="py-32 bg-[#0D1117] overflow-hidden">
        <div className="container mx-auto px-8 mb-20">
          <h2 className="text-5xl lg:text-7xl font-bold text-[#F0F6FC] text-center mb-6">
            Rdzeń <span className="text-[#3B82F6]">Zgodności</span>
          </h2>
          <p className="text-xl text-[#8B949E] text-center max-w-3xl mx-auto">
            Wielowarstwowa ochrona zgodna z najwyższymi standardami bezpieczeństwa
          </p>
        </div>

        <div className="space-y-0">
          {complianceModules.map((module, idx) => (
            <div
              key={idx}
              className={`relative py-20 ${idx % 2 === 0 ? 'bg-[#0D1117]' : 'bg-[#21262D]'}`}
              style={{
                clipPath: idx % 2 === 0
                  ? 'polygon(0 0, 100% 10%, 100% 100%, 0 90%)'
                  : 'polygon(0 10%, 100% 0, 100% 90%, 0 100%)'
              }}
            >
              <div className="container mx-auto px-8">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={idx % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <module.icon className="w-20 h-20 text-[#3B82F6] mb-6" />
                    <h3 className="text-4xl font-bold text-[#F0F6FC] mb-6">
                      {module.title}
                    </h3>
                    <p className="text-xl text-[#8B949E] mb-8 leading-relaxed">
                      {module.description}
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      {module.features.map((feature, featureIdx) => (
                        <div key={featureIdx} className="flex items-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-[#3B82F6] flex-shrink-0" />
                          <span className="text-[#8B949E]">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={`${idx % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''} flex justify-center`}>
                    <div className="w-64 h-64 bg-[#3B82F6]/10 border-4 border-[#3B82F6] flex items-center justify-center">
                      <module.icon className="w-32 h-32 text-[#3B82F6]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Modules - Horizontal Scroll */}
      <section className="py-32 bg-[#F0F6FC] overflow-hidden">
        <div className="container mx-auto px-8 mb-20">
          <h2 className="text-5xl lg:text-7xl font-bold text-[#0D1117] text-center mb-6">
            Kluczowe <span className="text-[#3B82F6]">Moduły</span>
          </h2>
          <p className="text-xl text-[#21262D] text-center max-w-3xl mx-auto">
            Kompletny ekosystem dla nowoczesnej administracji publicznej
          </p>
        </div>

        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
            {modules.map((module, idx) => (
              <div
                key={idx}
                className="w-full max-w-[400px] h-[600px] bg-[#0D1117] border-4 border-[#3B82F6] p-8 hover:scale-105 transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setActiveModule(idx)}
              >
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <module.icon className="w-16 h-16 text-[#3B82F6] mb-6" />
                    <h3 className="text-2xl font-bold text-[#F0F6FC] mb-4">
                      {module.title}
                    </h3>
                    <p className="text-[#8B949E] leading-relaxed mb-8">
                      {module.description}
                    </p>

                    <div className="space-y-3">
                      {module.benefits.map((benefit, benefitIdx) => (
                        <div key={benefitIdx} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-[#3B82F6] flex-shrink-0" />
                          <span className="text-[#8B949E]">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <ArrowRight className="w-6 h-6 text-[#3B82F6] mt-4 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Architecture - Sticky Scroll */}
      <section ref={securitySectionRef} className="relative pt-32 pb-64  bg-[#0D1117]">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Sticky Left Column */}
            <div ref={securityTextRef} className="lg:h-screen flex flex-col justify-center">
              <div className="text-center lg:text-left mb-16">
                <h2 className="text-5xl lg:text-7xl font-bold text-[#F0F6FC] mb-6">
                  Architektura <span className="text-[#3B82F6]">Bezpieczeństwa</span>
                </h2>
                <p className="text-xl text-[#8B949E] max-w-2xl">
                  Wielowarstwowa ochrona danych obywateli i infrastruktury krytycznej
                </p>
              </div>

              <div className="relative w-full h-[400px] flex items-center justify-center pb-28">
                {/* Security Shield Diagram */}
                <div className="relative w-80 h-80">
                  {/* Outer ring */}
                  <div className="absolute inset-0 border-4 border-[#3B82F6] rounded-full animate-pulse"></div>
                  {/* Middle ring */}
                  <div className="absolute inset-8 border-4 border-[#3B82F6]/70 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  {/* Inner ring */}
                  <div className="absolute inset-16 border-4 border-[#3B82F6]/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  {/* Center */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Shield className="w-24 h-24 text-[#3B82F6]" />
                  </div>

                  {/* Security layer indicators */}
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#3B82F6] rounded-full"></div>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#3B82F6] rounded-full"></div>
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-[#3B82F6] rounded-full"></div>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-[#3B82F6] rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Scrolling Right Column */}
            <div className="space-y-24">
              {securityLayers.map((layer, idx) => (
                <div key={idx} className="space-y-6 min-h-[400px] flex flex-col justify-center py-8">
                  <div className="text-sm text-[#3B82F6] font-bold">WARSTWA {idx + 1}</div>
                  <h3 className="text-4xl font-bold text-[#F0F6FC]">
                    {layer.title}
                  </h3>
                  <p className="text-xl text-[#8B949E] leading-relaxed">
                    {layer.description}
                  </p>
                  <div className="w-16 h-1 bg-[#3B82F6]"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies - Full-screen Slider */}
      <section className="py-32 bg-[#F0F6FC]">
        <div className="container mx-auto px-8 mb-20">
          <h2 className="text-5xl lg:text-7xl font-bold text-[#0D1117] text-center mb-6">
            Studia <span className="text-[#3B82F6]">Przypadków</span>
          </h2>
          <p className="text-xl text-[#21262D] text-center max-w-3xl mx-auto">
            Cyfrowa transformacja w polskich JST
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto px-16">
          {/* Left Arrow */}
          <button
            onClick={() => setCurrentTestimonial(currentTestimonial === 0 ? testimonials.length - 1 : currentTestimonial - 1)}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#3B82F6] hover:bg-[#3B82F6]/80 text-white p-4 border-2 border-[#3B82F6] transition-all duration-300 hover:scale-110"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => setCurrentTestimonial(currentTestimonial === testimonials.length - 1 ? 0 : currentTestimonial + 1)}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#3B82F6] hover:bg-[#3B82F6]/80 text-white p-4 border-2 border-[#3B82F6] transition-all duration-300 hover:scale-110"
          >
            <ArrowRight className="w-6 h-6" />
          </button>

          <div className="bg-[#0D1117] border-4 border-[#3B82F6] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 h-[600px]">
              {/* Image */}
              <div className="relative h-full">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].city}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#3B82F6]/20"></div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col h-full">
                {/* Top Section - Metric (Fixed Height) */}
                <div className="h-24 flex items-start">
                  <div className="text-4xl font-bold text-[#3B82F6]">
                    {testimonials[currentTestimonial].metric}
                  </div>
                </div>

                {/* Middle Section - Quote (Fixed Height) */}
                <div className="h-48 flex items-center py-4">
                  <p className="text-xl text-[#F0F6FC] leading-relaxed italic max-w-lg">
                    "{testimonials[currentTestimonial].quote}"
                  </p>
                </div>

                {/* Bottom Section - Author Info (Fixed Height) */}
                <div className="h-24 flex flex-col justify-end">
                  <p className="font-bold text-[#F0F6FC] text-lg">
                    {testimonials[currentTestimonial].author}
                  </p>
                  <p className="text-[#8B949E]">
                    {testimonials[currentTestimonial].position}
                  </p>
                  <p className="text-[#3B82F6] font-bold">
                    {testimonials[currentTestimonial].city}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-4">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentTestimonial(idx)}
                className={`w-4 h-4 rounded-full transition-all duration-300 hover:scale-125 ${currentTestimonial === idx ? 'bg-[#3B82F6]' : 'bg-[#21262D] hover:bg-[#3B82F6]/50'
                  }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-[#3B82F6]">
        <div className="container mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-bold text-[#F0F6FC] mb-6">
              RATUSZ w <span className="text-[#F0F6FC]/80">Liczbach</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-6xl font-bold text-[#F0F6FC] mb-4 counter" data-target="300">0</div>
              <div className="text-xl text-[#F0F6FC]/90">Jednostek JST</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-[#F0F6FC] mb-4 counter" data-target="60">0</div>
              <div className="text-xl text-[#F0F6FC]/90">% Samorządów Śląskich</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-[#F0F6FC] mb-4">2M+</div>
              <div className="text-xl text-[#F0F6FC]/90">Obsłużonych Mieszkańców</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-[#F0F6FC] mb-4">99.9</div>
              <div className="text-xl text-[#F0F6FC]/90">% Dostępność Systemu</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-[#F0F6FC]">
        <div className="container mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-bold text-[#0D1117] mb-6">
              Twoje Pytania, <span className="text-[#3B82F6]">Nasze Odpowiedzi</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {faqData.map((category, categoryIdx) => (
              <div key={categoryIdx} className="mb-12">
                <h3 className="text-2xl font-bold text-[#0D1117] mb-6">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.questions.map((faq, faqIdx) => (
                    <div key={faqIdx} className="bg-[#0D1117] border-4 border-[#3B82F6] p-6">
                      <h4 className="text-lg font-bold text-[#F0F6FC] mb-3">
                        {faq.q}
                      </h4>
                      <p className="text-[#8B949E] leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-[#0D1117]">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* CTA Content */}
            <div className="space-y-8">
              <h2 className="text-5xl lg:text-7xl font-bold text-[#F0F6FC]">
                Zabezpiecz <span className="text-[#3B82F6]">Przyszłość</span> Swojego Samorządu
              </h2>
              <p className="text-xl text-[#8B949E] leading-relaxed">
                Dołącz do grona nowoczesnych samorządów, które już korzystają z systemu RATUSZ.
                Umów się na bezpłatną prezentację i zobacz jak możemy pomóc Twojemu urzędowi.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-[#3B82F6] text-[#F0F6FC] hover:bg-[#3B82F6]/90 font-bold px-8 py-6 text-lg border-2 border-[#3B82F6] transition-all duration-300 hover:scale-105"
                >
                  Umów Prezentację
                  <ArrowRight className="w-6 h-6 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6] hover:text-[#F0F6FC] font-bold px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
                >
                  Pobierz Case Study
                </Button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-[#F0F6FC] border-4 border-[#3B82F6] p-8">
              <h3 className="text-2xl font-bold text-[#0D1117] mb-6">
                Kontakt Bezpośredni
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Building2 className="w-6 h-6 text-[#3B82F6] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-[#0D1117]">Dział Administracji Publicznej</p>
                    <p className="text-[#21262D]">ul. Samorządowa 35<br />40-000 Katowice</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Users className="w-6 h-6 text-[#3B82F6] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-[#0D1117]">Dedykowana Linia JST</p>
                    <p className="text-[#21262D]">+48 32 456 78 90</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Globe className="w-6 h-6 text-[#3B82F6] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-[#0D1117]">Email</p>
                    <p className="text-[#21262D]">ratusz@rekordsi.pl</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Ratusz;
