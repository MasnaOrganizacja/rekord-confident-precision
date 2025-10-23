import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const [category, setCategory] = useState<"general" | "erp" | "ratusz">("general");

  const faqs = {
    general: [
      {
        q: "Jak długo trwa typowe wdrożenie systemu?",
        a: "Czas wdrożenia zależy od rozmiaru organizacji i zakresu funkcjonalności. Dla średniej firmy typowe wdrożenie Rekord.ERP trwa 3-6 miesięcy, natomiast RATUSZ dla JST to 4-8 miesięcy. Każde wdrożenie poprzedzamy szczegółową analizą i dostarczamy harmonogram dostosowany do specyfiki klienta.",
      },
      {
        q: "Czy oferujecie wsparcie techniczne po wdrożeniu?",
        a: "Tak, zapewniamy kompleksowe wsparcie techniczne 24/7 dla klientów z pakietem premium. Standard obejmuje wsparcie w godzinach roboczych. Oferujemy również dedykowanego opiekuna klienta, szkolenia okresowe i dostęp do bazy wiedzy online.",
      },
      {
        q: "Czy system działa w chmurze czy on-premise?",
        a: "Oferujemy obie opcje. Możesz wybrać wdrożenie w chmurze (Azure, AWS), rozwiązanie hybrydowe lub klasyczne on-premise. Klienci z sektora publicznego często wybierają dedykowane chmury rządowe lub infrastrukturę on-premise ze względu na wymogi bezpieczeństwa.",
      },
      {
        q: "Jak wygląda proces migracji z obecnego systemu?",
        a: "Proces migracji składa się z: (1) audytu obecnych danych i procesów, (2) mapowania struktury danych, (3) testowej migracji i weryfikacji, (4) finalnej migracji z minimalnym przestojem, (5) walidacji poprawności danych. Zapewniamy pełne wsparcie na każdym etapie.",
      },
      {
        q: "Czy mogę customizować system pod nasze unikalne potrzeby?",
        a: "Zdecydowanie tak. Nasze systemy są zbudowane z myślą o elastyczności. Oferujemy konfigurowalny workflow, własne raporty, niestandardowe pola i moduły. Dla bardziej zaawansowanych potrzeb oferujemy dedykowany development.",
      },
      {
        q: "Jakie są koszty licencji i modele rozliczeń?",
        a: "Oferujemy model subskrypcyjny (miesięczny/roczny) oraz zakup perpetualnej licencji. Cena zależy od liczby użytkowników, wybranych modułów i sposobu wdrożenia. Przygotujemy indywidualną ofertę po analizie Twoich potrzeb. Kontakt: sprzedaz@rekordsi.pl",
      },
      {
        q: "Czy oferujecie demo lub trial systemu?",
        a: "Tak, oferujemy 30-dniowy pełnofunkcyjny trial oraz prezentację live dostosowaną do Twojej branży. Możemy również zorganizować wizytę u klienta referencyjnego. Skontaktuj się z nami, aby umówić demo.",
      },
      {
        q: "Czy system integruje się z innymi aplikacjami?",
        a: "Tak, posiadamy gotowe integracje z popularnymi systemami: bankowość elektroniczna, e-commerce (WooCommerce, PrestaShop), CRM (Salesforce), BI (Power BI, Tableau), e-PUAP, KSeF i wiele innych. Możemy również stworzyć dedykowaną integrację przez REST API.",
      },
      {
        q: "Jakie gwarancje bezpieczeństwa danych oferujecie?",
        a: "Posiadamy certyfikaty ISO 27001, ISO 9001, spełniamy wymogi RODO i Krajowych Ram Interoperacyjności. Stosujemy szyfrowanie AES-256, regularne audyty bezpieczeństwa, wielopoziomowe backupy i plan disaster recovery. Dane klientów są izolowane i chronione zgodnie z najwyższymi standardami.",
      },
    ],
    erp: [
      {
        q: "Czy Rekord.ERP obsługuje produkcję wieloseryjną?",
        a: "Tak, system wspiera zarówno produkcję jednorazową, seryjną jak i wieloseryjną. Możesz planować produkcję z wykorzystaniem BOM (Bill of Materials), zarządzać liniami produkcyjnymi, śledzić postępy w czasie rzeczywistym i optymalizować alokację zasobów.",
      },
      {
        q: "Czy system wspiera zarządzanie wieloma magazynami?",
        a: "Tak, Rekord.ERP pozwala zarządzać nieograniczoną liczbą magazynów w różnych lokalizacjach. Transfer między magazynami, inwentaryzacje, śledzenie partii i numerów seryjnych, zarządzanie stanami minimalnymi i maksymalnymi – wszystko w jednym systemie.",
      },
      {
        q: "Czy mogę generować niestandardowe raporty finansowe?",
        a: "Zdecydowanie. Posiadamy zaawansowany moduł raportowania z drag-and-drop designerem. Możesz tworzyć własne raporty finansowe, eksportować do Excel/PDF, ustawić automatyczne generowanie i dystrybucję. Wspieramy także integrację z Power BI dla zaawansowanej analityki.",
      },
      {
        q: "Czy system obsługuje sprzedaż e-commerce?",
        a: "Tak, oferujemy integrację z popularnymi platformami e-commerce. Synchronizacja stanów magazynowych, automatyczne importowanie zamówień, zarządzanie cenami i promocjami, fakturowanie elektroniczne. Jedno źródło prawdy dla sprzedaży online i offline.",
      },
      {
        q: "Jak wygląda obsługa księgowości i VAT?",
        a: "Pełna księgowość syntetyczna i analityczna, automatyczne księgowania z dokumentów źródłowych, JPK_VAT, deklaracje podatkowe, środki trwałe, rozliczenia międzyokresowe i wiele więcej. System jest na bieżąco aktualizowany zgodnie z polskimi przepisami podatkowymi.",
      },
      {
        q: "Czy Rekord.ERP wspiera CRM i zarządzanie lead'ami?",
        a: "Tak, zintegrowany moduł CRM pozwala zarządzać kontaktami, szansami sprzedaży, kampaniami marketingowymi, zadaniami zespołu sprzedaży i historią komunikacji. Możesz także śledzić lejek sprzedaży i generować prognozy revenue.",
      },
      {
        q: "Czy system ma aplikację mobilną?",
        a: "Tak, oferujemy responsywny interfejs webowy działający na wszystkich urządzeniach oraz dedykowane aplikacje mobilne (iOS, Android) dla kluczowych funkcji: zatwierdzanie dokumentów, ewidencja czasu pracy, skanowanie kodów kreskowych w magazynie.",
      },
      {
        q: "Jak system wspiera planowanie zasobów (MRP)?",
        a: "Moduł MRP automatycznie planuje zapotrzebowanie materiałowe na podstawie zamówień i prognoz. Generuje propozycje zakupu i produkcji, uwzględnia czasy dostaw, stany magazynowe i bufory bezpieczeństwa. Optymalizuje wykorzystanie zasobów i minimalizuje koszty.",
      },
    ],
    ratusz: [
      {
        q: "Czy RATUSZ jest zgodny z wymogami KSeF?",
        a: "Tak, RATUSZ jest w pełni gotowy do obsługi Krajowego Systemu e-Faktur. Automatyczna walidacja, wysyłka i odbiór faktur ustrukturyzowanych, integracja z systemem finansowym, archiwizacja zgodna z przepisami. Zapewniamy pełne wsparcie w procesie wdrożenia KSeF.",
      },
      {
        q: "Czy system obsługuje e-PUAP i portal ePUAP?",
        a: "Tak, RATUSZ jest zintegrowany z platformą ePUAP. Automatyczny odbiór pism z ePUAP, elektroniczny obieg dokumentów, podpis elektroniczny i wysyłka odpowiedzi. Pełna zgodność z wymogami Krajowych Ram Interoperacyjności.",
      },
      {
        q: "Jak wygląda obsługa podatków i opłat lokalnych?",
        a: "Kompleksowy moduł obsługi podatków od nieruchomości, rolnego, leśnego, opłat za wywóz śmieci, za wodę i ścieki. Automatyczne naliczanie, wysyłka decyzji, integracja z systemami bankowymi, windykacja należności, ulgi i umorzenia.",
      },
      {
        q: "Czy oferujecie Portal Mieszkańca?",
        a: "Tak, nowoczesny Portal Mieszkańca to serce cyfrowej gminy. Obywatele mogą załatwiać sprawy online 24/7: składać wnioski, uzyskiwać zaświadczenia, sprawdzać wysokość podatków, zgłaszać awarie, rezerwować sale i obiekty sportowe. Wszystko z użyciem profilu zaufanego lub e-podpisu.",
      },
      {
        q: "Jak system wspiera zarządzanie budżetem jednostki?",
        a: "Moduł budżetowy zgodny z ustawą o finansach publicznych: planowanie, wykonanie i kontrola budżetu, WPF (Wieloletnia Prognoza Finansowa), sprawozdawczość budżetowa zgodna z wymogami MF, kontrola wydatków według klasyfikacji budżetowej, zarządzanie funduszami celowymi.",
      },
      {
        q: "Czy system obsługuje elektroniczny obieg dokumentów?",
        a: "Tak, zaawansowany moduł EZD (Elektroniczne Zarządzanie Dokumentacją) zgodny z wymogami archiwum państwowego. Rejestracja pism przychodzących i wychodzących, konfigurowalny workflow, kontrola terminów, wyszukiwanie pełnotekstowe, e-podpis, integracja z skanerami.",
      },
      {
        q: "Czy RATUSZ spełnia wymogi RODO dla jednostek publicznych?",
        a: "Zdecydowanie. System posiada funkcje wspierające zgodność z RODO: rejestr czynności przetwarzania, zarządzanie zgodami, prawo do bycia zapomnianym, eksport danych osobowych, logi dostępu, szyfrowanie danych wrażliwych, kontrola uprawnień na poziomie pól.",
      },
      {
        q: "Jak często system jest aktualizowany o nowe przepisy?",
        a: "Monitorujemy zmiany legislacyjne na bieżąco. Aktualizacje krytyczne (np. zmiany w sprawozdawczości budżetowej, nowe formularze JPK) dostarczamy w trybie pilnym. Standardowe aktualizacje funkcjonalne i poprawki wydajemy kwartalnie. Klienci z pakietem premium otrzymują dostęp do wersji beta.",
      },
    ],
  };

  return (
    <section className="py-32 bg-[hsl(var(--warm-white))]">
      <div className="container mx-auto px-8">
        <h2 className="text-5xl lg:text-7xl font-bold text-[hsl(var(--deep-navy))] text-center mb-6">
          Najczęściej Zadawane <span className="text-[hsl(var(--electric-cyan))]">Pytania</span>
        </h2>
        <p className="text-xl text-[hsl(var(--near-black))/70] text-center mb-16">
          Odpowiedzi na kluczowe pytania naszych klientów
        </p>

        {/* Category Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setCategory("general")}
            className={`px-8 py-4 border-2 font-bold transition-all duration-300 ${
              category === "general"
                ? "bg-[hsl(var(--deep-navy))] border-[hsl(var(--deep-navy))] text-[hsl(var(--warm-white))]"
                : "bg-white border-[hsl(var(--deep-navy))] text-[hsl(var(--deep-navy))] hover:border-[hsl(var(--electric-cyan))]"
            }`}
          >
            Pytania Ogólne
          </button>
          <button
            onClick={() => setCategory("erp")}
            className={`px-8 py-4 border-2 font-bold transition-all duration-300 ${
              category === "erp"
                ? "bg-[hsl(var(--deep-navy))] border-[hsl(var(--deep-navy))] text-[hsl(var(--warm-white))]"
                : "bg-white border-[hsl(var(--deep-navy))] text-[hsl(var(--deep-navy))] hover:border-[hsl(var(--electric-cyan))]"
            }`}
          >
            Rekord.ERP
          </button>
          <button
            onClick={() => setCategory("ratusz")}
            className={`px-8 py-4 border-2 font-bold transition-all duration-300 ${
              category === "ratusz"
                ? "bg-[hsl(var(--deep-navy))] border-[hsl(var(--deep-navy))] text-[hsl(var(--warm-white))]"
                : "bg-white border-[hsl(var(--deep-navy))] text-[hsl(var(--deep-navy))] hover:border-[hsl(var(--electric-cyan))]"
            }`}
          >
            RATUSZ
          </button>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto bg-white border-4 border-[hsl(var(--deep-navy))] p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs[category].map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-b-2 border-[hsl(var(--deep-navy))]">
                <AccordionTrigger className="text-left text-lg font-bold text-[hsl(var(--deep-navy))] hover:text-[hsl(var(--electric-cyan))] py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-[hsl(var(--near-black))/80] leading-relaxed pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
