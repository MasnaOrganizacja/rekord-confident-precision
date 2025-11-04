import { useState, useEffect } from 'react'
import { LineIcon } from '@/components/ui/lineicon'

export const Testimonials = () => {
	const [currentIndex, setCurrentIndex] = useState(0)

	const testimonials = [
		{
			quote:
				'NEXORA.FLOW całkowicie zmienił sposób, w jaki zarządzamy naszą produkcją. Wzrost efektywności o 40% to wynik, którego nie spodziewaliśmy się osiągnąć tak szybko.',
			author: 'Anna Kowalska',
			position: 'Dyrektor Operacyjny',
			company: 'Grupa Produkcyjna ALFA',
		},
		{
			quote:
				'System NEXORA.CIVIC pozwolił nam zdigitalizować wszystkie usługi dla mieszkańców. Jesteśmy dumni, że możemy oferować obsługę na poziomie europejskim.',
			author: 'Jan Nowak',
			position: 'Prezydent Miasta',
			company: 'Miasto Katowice',
		},
		{
			quote:
				'Profesjonalizm zespołu NEXORA i jakość wsparcia technicznego są na najwyższym poziomie. To partner, na którego można liczyć.',
			author: 'Maria Wiśniewska',
			position: 'Dyrektor IT',
			company: 'Sieć Handlowa BETA',
		},
		{
			quote:
				'Wdrożenie było płynne, a korzyści przekroczyły nasze oczekiwania. Automatyzacja procesów budżetowych oszczędza nam setki godzin pracy rocznie.',
			author: 'Piotr Zieliński',
			position: 'Skarbnik Miasta',
			company: 'Urząd Miejski Gliwice',
		},
		{
			quote:
				'Bezpieczeństwo danych i zgodność z regulacjami to dla nas priorytet. NEXORA doskonale to rozumie i dostarcza rozwiązania na najwyższym poziomie.',
			author: 'Katarzyna Lewandowska',
			position: 'Kierownik Działu Zgodności',
			company: 'Zakłady Chemiczne GAMMA',
		},
		{
			quote:
				'Integracja 15 różnych systemów w jeden spójny ekosystem to była ogromna transformacja. NEXORA przeprowadził ją bez zakłóceń w naszej pracy.',
			author: 'Tomasz Dąbrowski',
			position: 'Starosta Powiatu',
			company: 'Starostwo Powiatowe Tychy',
		},
		{
			quote:
				'Real-time tracking całej floty i automatyczna optymalizacja tras to funkcje, które dały nam przewagę konkurencyjną na rynku.',
			author: 'Ewa Kaczmarek',
			position: 'CEO',
			company: 'Firma Logistyczna DELTA',
		},
		{
			quote:
				'Portal mieszkańca z 50+ e-usługami zmienił sposób, w jaki nasza gmina komunikuje się z obywatelami. Satysfakcja mieszkańców wzrosła o 85%.',
			author: 'Paweł Szymański',
			position: 'Wójt Gminy',
			company: 'Gmina Sosnowiec',
		},
		{
			quote:
				'Zarządzanie setką projektów jednocześnie było niemożliwe przed NEXORA.FLOW. Teraz mamy pełną kontrolę i widoczność w czasie rzeczywistym.',
			author: 'Michał Woźniak',
			position: 'Dyrektor Projektów',
			company: 'Przedsiębiorstwo Budowlane EPSILON',
		},
		{
			quote:
				'Transformacja cyfrowa całej organizacji to ogromne przedsięwzięcie. Z NEXORA mieliśmy partnera, który rozumiał nasze potrzeby i wyzwania.',
			author: 'Agnieszka Kamińska',
			position: 'Zastępca Prezydenta',
			company: 'Urząd Miasta Zabrze',
		},
		{
			quote:
				'Skalowalne rozwiązanie, które rośnie razem z naszą firmą. Od 100 do 500+ pracowników bez problemów wydajnościowych.',
			author: 'Krzysztof Wojtaszek',
			position: 'CTO',
			company: 'Korporacja IT ZETA',
		},
		{
			quote:
				'Gotowość na KSeF przed terminem to zasługa proaktywnego podejścia zespołu NEXORA. Dzięki temu mieliśmy czas na testy i szkolenia.',
			author: 'Jolanta Mazur',
			position: 'Skarbnik Powiatu',
			company: 'Powiat Bielski',
		},
		{
			quote:
				'ROI osiągnięte w pierwszym roku po wdrożeniu przekroczyło nasze najśmielsze prognozy. To była jedna z najlepszych inwestycji w historii firmy.',
			author: 'Robert Grabowski',
			position: 'CFO',
			company: 'Grupa Kapitałowa OMEGA',
		},
		{
			quote:
				'Analityka BI w czasie rzeczywistym zmieniła sposób podejmowania decyzji. Mamy dane wtedy, gdy ich potrzebujemy, w formie, która jest zrozumiała.',
			author: 'Magdalena Olejnik',
			position: 'Dyrektor Strategii',
			company: 'Holding Przemysłowy THETA',
		},
		{
			quote:
				'Mobilny dostęp do systemu oznacza, że mogę zarządzać firmą z dowolnego miejsca. To elastyczność, której wymagają współczesni liderzy.',
			author: 'Adam Rutkowski',
			position: 'Prezes Zarządu',
			company: 'Grupa Biznesowa IOTA',
		},
		{
			quote:
				'Wsparcie 24/7 i czas reakcji na zgłoszenia to coś, czego nie doświadczyliśmy u poprzedniego dostawcy. NEXORA ustanawia nowy standard.',
			author: 'Beata Jaworska',
			position: 'Administrator Systemu',
			company: 'Urząd Wojewódzki',
		},
	]

	const nextSlide = () => {
		setCurrentIndex(prev => (prev + 1) % testimonials.length)
	}

	const prevSlide = () => {
		setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length)
	}

	useEffect(() => {
		const timer = setInterval(nextSlide, 8000)
		return () => clearInterval(timer)
	}, [])

	return (
		<section className="relative py-16 md:py-32 bg-luxury-forest-green overflow-hidden">
			<div className="container mx-auto px-4 md:px-8">
				<h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white text-center mb-12 md:mb-20">
					Co mówią nasi <span className="text-white/90">Klienci</span>
				</h2>

				<div className="relative max-w-5xl mx-auto">
					{/* Testimonial Content */}
					<div className="relative bg-white border-4 border-white p-8 md:p-16 min-h-[300px] md:min-h-[400px] flex flex-col justify-center shadow-lg">
						{/* Opening Quote Icon - Left Top */}
						<LineIcon
							name="quotation"
							className="absolute -top-2 -left-0 w-12 h-12 md:w-16 md:h-16 text-luxury-forest-green/30 z-10"
						/>

						{/* Closing Quote Icon - Right Bottom */}
						<LineIcon
							name="quotation"
							className="absolute -bottom-2 -right-0 w-12 h-12 md:w-16 md:h-16 text-luxury-forest-green/30 z-10 rotate-180"
						/>

						<p className="text-lg md:text-2xl lg:text-3xl text-gray-900 leading-relaxed mb-8 md:mb-12 font-medium">
							{testimonials[currentIndex].quote}
						</p>
						<div>
							<p className="text-lg md:text-xl font-bold text-gray-900">{testimonials[currentIndex].author}</p>
							<p className="text-base md:text-lg text-gray-600">{testimonials[currentIndex].position}</p>
							<p className="text-base md:text-lg text-luxury-forest-green font-bold">
								{testimonials[currentIndex].company}
							</p>
						</div>
					</div>

					{/* Navigation */}
					<div className="flex justify-center gap-4 mt-8 md:mt-12">
						<button
							onClick={prevSlide}
							className="w-12 h-12 md:w-16 md:h-16 border-4 border-white bg-transparent text-white hover:bg-white hover:text-luxury-forest-green transition-all duration-300 flex items-center justify-center">
							<LineIcon name="chevron-left" className="w-6 h-6 md:w-8 md:h-8" />
						</button>
						<button
							onClick={nextSlide}
							className="w-12 h-12 md:w-16 md:h-16 border-4 border-white bg-transparent text-white hover:bg-white hover:text-luxury-forest-green transition-all duration-300 flex items-center justify-center">
							<LineIcon name="chevron-right" className="w-6 h-6 md:w-8 md:h-8" />
						</button>
					</div>

					{/* Indicator */}
					<p className="text-center text-white/60 mt-4 md:mt-6 text-sm md:text-base">
						{currentIndex + 1} / {testimonials.length}
					</p>
				</div>
			</div>
		</section>
	)
}
