import { useState } from "react";
import { X } from "lucide-react";

export const OurTeam = () => {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  const team = [
    {
      name: "Dr Krzysztof Adamczyk",
      role: "CEO & Założyciel",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400",
      bio: "Wizjoner technologiczny z 35-letnim doświadczeniem w branży IT. Absolwent Politechniki Śląskiej, doktor nauk informatycznych. Zainicjował rewolucję cyfrową w polskiej administracji publicznej.",
    },
    {
      name: "Anna Kowalczyk",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400",
      bio: "Ekspert w dziedzinie systemów rozproszonych i architektury enterprise. 15 lat doświadczenia w projektowaniu skalowalnych rozwiązań. Kieruje zespołem 50+ developerów.",
    },
    {
      name: "Piotr Nowak",
      role: "Dyrektor Produktu ERP",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400",
      bio: "Specjalista w zakresie procesów biznesowych i optymalizacji produkcji. Odpowiedzialny za rozwój flagowego produktu Rekord.ERP. Certyfikowany audytor ISO 9001.",
    },
    {
      name: "Magdalena Wiśniewska",
      role: "Dyrektor Produktu RATUSZ",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400",
      bio: "Prawnik i informatyk w jednej osobie. Głęboka znajomość przepisów regulujących administrację publiczną. 12 lat doświadczenia we współpracy z JST.",
    },
    {
      name: "Tomasz Zieliński",
      role: "Architekt Systemu",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=400",
      bio: "Projektuje najbardziej złożone moduły systemu. Ekspert w zakresie baz danych i optymalizacji wydajności. Autor 20+ publikacji naukowych z zakresu systemów transakcyjnych.",
    },
    {
      name: "Ewa Lewandowska",
      role: "Kierownik Wdrożeń",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=400",
      bio: "Zarządziła ponad 200 wdrożeniami w różnych sektorach. Certyfikowany Project Manager (PMP). Specjalistka w zakresie change management i szkoleń użytkowników.",
    },
    {
      name: "Michał Dąbrowski",
      role: "Head of Security",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400",
      bio: "Etyczny haker i specjalista ds. cyberbezpieczeństwa. Zapewnia najwyższe standardy ochrony danych klientów. Certyfikaty CISSP, CEH, OSCP.",
    },
    {
      name: "Katarzyna Szymańska",
      role: "UX/UI Design Lead",
      image: "https://images.unsplash.com/photo-1543132220-3ec99c6094dc?q=80&w=400",
      bio: "Projektuje intuicyjne interfejsy dla użytkowników biznesowych i urzędników. 8 lat doświadczenia w design thinking i badaniach użytkowników. Zdobywczyni Red Dot Design Award.",
    },
    {
      name: "Robert Woźniak",
      role: "DevOps Engineer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400",
      bio: "Architekt infrastruktury chmurowej i CI/CD. Zautomatyzował procesy deployment, osiągając 99.99% uptime. Certyfikaty AWS Solutions Architect i Kubernetes Administrator.",
    },
    {
      name: "Joanna Kaczmarek",
      role: "Customer Success Manager",
      image: "https://images.unsplash.com/photo-1562788869-4ed32648eb72?q=80&w=400",
      bio: "Buduje długoterminowe relacje z klientami korporacyjnymi. NPS na poziomie 85+ pod jej opieką. 10 lat doświadczenia w zarządzaniu kontami strategicznymi.",
    },
    {
      name: "Paweł Grabowski",
      role: "AI & Analytics Lead",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=400",
      bio: "Integruje sztuczną inteligencję i machine learning w produkty. Doktor nauk matematycznych, specjalista w zakresie predykcyjnej analityki biznesowej.",
    },
    {
      name: "Agnieszka Mazur",
      role: "Head of Support",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=400",
      bio: "Kieruje zespołem wsparcia technicznego dostępnego 24/7. Osiąga średni czas reakcji poniżej 15 minut. 12 lat doświadczenia w obsłudze klienta enterprise.",
    },
  ];

  return (
    <section id="team" className="py-32 bg-white">
      <div className="container mx-auto px-8">
        <h2 className="text-5xl lg:text-7xl font-bold text-gray-900 text-center mb-6">
          Nasz <span className="text-luxury-forest-green">Zespół</span>
        </h2>
        <p className="text-xl text-gray-600 text-center mb-20">
          Eksperci, którzy tworzą przyszłość oprogramowania
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {team.map((member, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedMember(idx)}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden border-4 border-luxury-forest-green mb-4 group-hover:scale-105 transition-all duration-300 shadow-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-luxury-forest-green">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedMember !== null && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-8"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="bg-white border-4 border-luxury-forest-green max-w-2xl w-full p-12 relative animate-scale-in shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 w-12 h-12 border-2 border-luxury-forest-green text-luxury-forest-green hover:bg-luxury-forest-green hover:text-white transition-all duration-300 flex items-center justify-center"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="flex gap-8 mb-6">
              <img
                src={team[selectedMember].image}
                alt={team[selectedMember].name}
                className="w-40 h-40 object-cover border-4 border-luxury-forest-green"
              />
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {team[selectedMember].name}
                </h3>
                <p className="text-xl text-luxury-forest-green font-bold">
                  {team[selectedMember].role}
                </p>
              </div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              {team[selectedMember].bio}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
