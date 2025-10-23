import { useState } from "react";
import { Shield, FileCheck, Users, TrendingUp } from "lucide-react";

export const DeepDiveRatusz = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Bezpieczeństwo Danych",
      icon: Shield,
      content: "Wielopoziomowa ochrona danych zgodna z RODO i standardami cyberbezpieczeństwa. Szyfrowanie end-to-end, regularne audyty bezpieczeństwa i certyfikowane procedury backup. Pełna izolacja danych jednostek, kontrola dostępu oparta na rolach oraz szczegółowe logi wszystkich operacji.",
    },
    {
      title: "Zgodność z KSeF",
      icon: FileCheck,
      content: "Pełna gotowość do obsługi Krajowego Systemu e-Faktur. Automatyczna walidacja, bezpieczne przesyłanie i odbiór e-faktur ustrukturyzowanych. Integracja z systemem finansowym, automatyczne księgowanie i archiwizacja zgodna z przepisami. Dedykowane wsparcie w procesie wdrożenia KSeF.",
    },
    {
      title: "Portal Mieszkańca",
      icon: Users,
      content: "Nowoczesna platforma cyfrowej komunikacji z obywatelami. E-usługi dostępne 24/7, możliwość załatwiania spraw online, elektroniczne formularze i wnioski. System powiadomień SMS/email, elektroniczny obieg dokumentów i bezpieczne podpisy elektroniczne. Responsywny interfejs dostosowany do wszystkich urządzeń.",
    },
    {
      title: "Zarządzanie Finansami Publicznymi",
      icon: TrendingUp,
      content: "Kompleksowe narzędzie do planowania, wykonywania i kontroli budżetu jednostki. Automatyczne generowanie sprawozdań budżetowych zgodnych z wymogami ministerstwa. Wieloletnia prognoza finansowa, kontrola wydatków i analiza planów finansowych. Integracja z bankami i systemem e-PUAP.",
    },
  ];

  return (
    <section className="py-32 bg-[hsl(var(--warm-white))]">
      <div className="container mx-auto px-8">
        <h2 className="text-6xl font-bold text-[hsl(var(--deep-navy))] mb-8 text-center">
          <span className="text-[hsl(var(--electric-cyan))]">RATUSZ</span> – Cyfrowa Administracja
        </h2>
        <p className="text-xl text-[hsl(var(--near-black))/70] text-center mb-16 max-w-3xl mx-auto">
          Kompleksowe rozwiązanie dla jednostek samorządu terytorialnego, 
          zaufane przez 60% samorządów województwa śląskiego
        </p>

        <div className="max-w-6xl mx-auto">
          {/* Tabs Navigation */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {tabs.map((tab, idx) => {
              const Icon = tab.icon;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`p-6 border-4 transition-all duration-300 ${
                    activeTab === idx
                      ? "bg-[hsl(var(--deep-navy))] border-[hsl(var(--electric-cyan))] text-[hsl(var(--warm-white))]"
                      : "bg-white border-[hsl(var(--deep-navy))] text-[hsl(var(--deep-navy))] hover:border-[hsl(var(--electric-cyan))]"
                  }`}
                >
                  <Icon className={`w-10 h-10 mb-3 mx-auto ${
                    activeTab === idx ? "text-[hsl(var(--electric-cyan))]" : ""
                  }`} />
                  <span className="font-bold text-sm lg:text-base">{tab.title}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="bg-white border-4 border-[hsl(var(--deep-navy))] p-12">
            <div className="animate-fade-in">
              <h3 className="text-4xl font-bold text-[hsl(var(--deep-navy))] mb-6 flex items-center gap-4">
                {(() => {
                  const Icon = tabs[activeTab].icon;
                  return <Icon className="w-12 h-12 text-[hsl(var(--electric-cyan))]" />;
                })()}
                {tabs[activeTab].title}
              </h3>
              <p className="text-lg text-[hsl(var(--near-black))/80] leading-relaxed">
                {tabs[activeTab].content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
