import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { LineIcon } from '@/components/ui/lineicon'

gsap.registerPlugin(ScrollTrigger)

export const DeepDiveFlow = () => {
	const sectionRef = useRef<HTMLElement>(null)
	const textRef = useRef<HTMLDivElement>(null)
	const imagesRef = useRef<HTMLDivElement>(null)
	const floatingElementsRef = useRef<HTMLDivElement>(null)

	const features = [
		{
			title: 'Elastyczna Analityka BI',
			description:
				'Zaawansowane narzędzia analityczne i raporty w czasie rzeczywistym pozwalają podejmować decyzje oparte na danych. Customizowalne dashboardy i automatyczne alerty biznesowe.',
			image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600',
		},
		{
			title: 'Zarządzanie Produkcją w Czasie Rzeczywistym',
			description:
				'Pełna kontrola nad procesami produkcyjnymi, planowanie zasobów, monitorowanie maszyn i optymalizacja efektywności linii produkcyjnych z wykorzystaniem IoT.',
			image: 'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?q=80&w=1600',
		},
		{
			title: 'Zintegrowany CRM i Sprzedaż',
			description:
				'Kompleksowe zarządzanie relacjami z klientami, automatyzacja procesów sprzedażowych, analiza lejka sprzedaży i integracja z systemami e-commerce.',
			image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600',
		},
		{
			title: 'Mobilny Dostęp i Chmura',
			description:
				'Pełna funkcjonalność dostępna z dowolnego urządzenia, bezpieczne przechowywanie danych w chmurze, automatyczne kopie zapasowe i skalowalna infrastruktura.',
			image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1600',
		},
	]

	useEffect(() => {
		if (!sectionRef.current || !textRef.current || !imagesRef.current) return

		// Pin the text column - only on desktop
		if (window.innerWidth >= 1024) {
			ScrollTrigger.create({
				trigger: sectionRef.current,
				start: 'top top',
				end: 'bottom bottom',
				pin: textRef.current,
				pinSpacing: false,
			})
		}

		// Zoom effect on images
		const images = imagesRef.current.querySelectorAll('img')
		images.forEach(img => {
			gsap.fromTo(
				img,
				{ scale: 1.2 },
				{
					scale: 1,
					ease: 'none',
					scrollTrigger: {
						trigger: img,
						start: 'top bottom',
						end: 'center center',
						scrub: 1,
					},
				}
			)
		})

		// Floating elements animation
		if (floatingElementsRef.current) {
			const floatingElements = floatingElementsRef.current.children
			Array.from(floatingElements).forEach((element, index) => {
				gsap.to(element, {
					y: -20,
					duration: 3 + index * 0.5,
					repeat: -1,
					yoyo: true,
					ease: 'power2.inOut',
					delay: index * 0.3,
				})
			})
		}
	}, [])

	return (
		<section ref={sectionRef} className="relative py-32 bg-gradient-to-br from-luxury-forest-green via-luxury-forest-green to-luxury-forest-green/90 overflow-hidden">
			{/* Floating Background Elements */}
			<div ref={floatingElementsRef} className="absolute inset-0 pointer-events-none">
				<div className="absolute top-20 left-10 w-32 h-32 border-4 border-white/10 rotate-45" />
				<div className="absolute top-40 right-20 w-24 h-24 bg-white/5 rounded-full" />
				<div className="absolute bottom-40 left-1/4 w-16 h-16 border-2 border-white/10" />
				<div className="absolute bottom-20 right-1/3 w-20 h-20 bg-white/5 rotate-12" />
				<LineIcon name="bulb" className="absolute top-32 right-1/4 w-12 h-12 text-white/10" />
				<LineIcon name="chart" className="absolute bottom-32 left-1/3 w-10 h-10 text-white/10" />
			</div>
			
			<div className="container mx-auto px-8 relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
					{/* Sticky Left Column */}
					<div ref={textRef} className="lg:h-screen flex flex-col justify-center">
						<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 font-sansation">
							NEXORA.<span className="text-white">FLOW</span>
						</h2>
						<p className="text-lg sm:text-xl text-white/90 leading-relaxed">
							System klasy enterprise, który łączy w sobie moc zaawansowanej analityki, elastyczność konfiguracji i
							prostotę obsługi. Zbudowany dla firm, które myślą o przyszłości.
						</p>
					</div>

					{/* Scrolling Right Column */}
					<div ref={imagesRef} className="space-y-24">
						{features.map((feature, idx) => (
							<div key={idx} className="group">
								<div className="overflow-hidden mb-6">
									<img src={feature.image} alt={feature.title} className="w-full h-80 object-cover" />
								</div>
								<h3 className="text-3xl font-bold text-white mb-4 font-sansation">{feature.title}</h3>
								<p className="text-lg text-white/80 leading-relaxed">{feature.description}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
