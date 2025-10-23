import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section id="contact" className="py-32 bg-gray-50">
      <div className="container mx-auto px-8">
        <h2 className="text-5xl lg:text-7xl font-bold text-gray-900 text-center mb-6">
          Gotowy na <span className="text-luxury-forest-green">Transformację</span>?
        </h2>
        <p className="text-xl text-gray-600 text-center mb-20 max-w-3xl mx-auto">
          Skontaktuj się z nami i rozpocznij swoją cyfrową podróż z liderem rynku
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white border-4 border-luxury-forest-green p-12 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Wyślij zapytanie
            </h3>
            <form className="space-y-6">
              <div>
                <Input
                  placeholder="Imię i nazwisko *"
                  className="border-2 border-luxury-forest-green focus:border-luxury-forest-green/80 text-lg py-6"
                />
              </div>
              <div>
                <Input
                  placeholder="Firma / Instytucja *"
                  className="border-2 border-luxury-forest-green focus:border-luxury-forest-green/80 text-lg py-6"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email *"
                  className="border-2 border-luxury-forest-green focus:border-luxury-forest-green/80 text-lg py-6"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Telefon"
                  className="border-2 border-luxury-forest-green focus:border-luxury-forest-green/80 text-lg py-6"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Wiadomość *"
                  className="border-2 border-luxury-forest-green focus:border-luxury-forest-green/80 text-lg min-h-[150px]"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-luxury-forest-green text-white hover:bg-luxury-forest-green/90 font-bold text-lg py-6 border-2 border-luxury-forest-green magnetic-button"
              >
                Wyślij zapytanie
              </Button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div className="bg-white border-4 border-luxury-forest-green p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Dane kontaktowe
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-luxury-forest-green flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-900">Adres</p>
                    <p className="text-gray-600">ul. Innowacyjna 35<br />40-000 Katowice, Polska</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-luxury-forest-green flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-900">Telefon</p>
                    <p className="text-gray-600">+48 32 123 45 67</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-luxury-forest-green flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-900">Email</p>
                    <p className="text-gray-600">kontakt@rekordsi.pl</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-300 border-4 border-luxury-forest-green h-80 flex items-center justify-center shadow-lg">
              <p className="text-gray-600 font-bold">Mapa Google - Katowice</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-8 mt-20 pt-12 border-t-2 border-gray-300">
        <div className="text-center text-gray-500">
          <p className="text-lg">© 2024 Rekord Systemy Informatyczne. 35 lat innowacji w Polsce.</p>
        </div>
      </div>
    </section>
  );
};
