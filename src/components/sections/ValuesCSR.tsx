import { useEffect, useRef } from 'react'
import { LineIcon } from '@/components/ui/lineicon'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const ValuesCSR = () => {
	const sectionRef = useRef<HTMLElement>(null)
	const floatingElementsRef = useRef<HTMLDivElement>(null)

	const values = [
		{
			icon: 'users',
			title: 'Partnerstwo',
			description:
				'Budujemy długoterminowe relacje oparte na wzajemnym zaufaniu i wspólnym sukcesie. Sukces naszych klientów to nasz sukces.',
		},
		{
			icon: 'heart',
			title: 'Odpowiedzialność',
			description:
				'Wspieramy lokalne społeczności, angażujemy się w projekty CSR i dbamy o środowisko. Biznes to nie tylko zysk, ale także wpływ na społeczeństwo.',
		},
		{
			icon: 'bulb',
			title: 'Innowacja',
			description:
				'Nieustannie poszukujemy nowych rozwiązań i technologii, aby nasze produkty były zawsze o krok przed rynkiem. Inwestujemy 20% przychodów w R&D.',
		},
		{
			icon: 'shield',
			title: 'Jakość',
			description:
				'Certyfikaty ISO, nagrody branżowe i wyróżnienie Fair Play to dowody na to, że jakość jest dla nas priorytetem w każdym aspekcie działalności.',
		},
	]

	useEffect(() => {
		if (!sectionRef.current) return

		const cards = sectionRef.current.querySelectorAll('.value-card')

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
					ease: 'power3.out',
					scrollTrigger: {
						trigger: card,
						start: 'top 80%',
					},
				}
			)
		})

		// Floating elements animation for CSR section
		if (floatingElementsRef.current) {
			const floatingElements = floatingElementsRef.current.children
			Array.from(floatingElements).forEach((element, index) => {
				gsap.to(element, {
					y: -12,
					duration: 2.2 + index * 0.3,
					repeat: -1,
					yoyo: true,
					ease: 'power2.inOut',
					delay: index * 0.2,
				})
			})
		}
	}, [])

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
						return (
							<div
								key={idx}
								className="value-card bg-white border-4 border-luxury-forest-green p-12 hover:border-luxury-forest-green/80 hover:shadow-2xl transition-all duration-300 group">
								<LineIcon
									name={value.icon}
									className="w-16 h-16 text-luxury-forest-green mb-6 group-hover:scale-110 transition-transform duration-300"
								/>
								<h3 className="text-3xl font-bold text-gray-900 mb-4">{value.title}</h3>
								<p className="text-lg text-gray-600 leading-relaxed">{value.description}</p>
							</div>
						)
					})}
				</div>

				{/* CSR Highlight */}
				<div className="mt-20 max-w-4xl mx-auto bg-gradient-to-br from-luxury-forest-green via-luxury-forest-green to-luxury-forest-green/90 border-4 border-luxury-forest-green p-12 text-center shadow-lg relative overflow-hidden">
					{/* Floating Background Elements */}
					<div ref={floatingElementsRef} className="absolute inset-0 pointer-events-none">
						<div className="absolute top-6 left-6 w-12 h-12 border border-white/10 rotate-45" />
						<div className="absolute top-8 right-8 w-10 h-10 bg-white/5 rounded-full" />
						<div className="absolute bottom-8 left-1/4 w-6 h-6 border border-white/10" />
						<div className="absolute bottom-6 right-1/3 w-8 h-8 bg-white/5 rotate-12" />
						<LineIcon name="heart" className="absolute top-10 right-1/4 w-5 h-5 text-white/10" />
						<LineIcon name="users" className="absolute bottom-10 left-1/3 w-4 h-4 text-white/10" />
					</div>
					
					<div className="relative z-10">
						<h3 className="text-4xl font-bold text-white mb-6">Więcej niż oprogramowanie</h3>
						<p className="text-xl text-white/90 leading-relaxed">
							Od lat wspieramy edukację informatyczną w szkołach, sponsorujemy lokalne inicjatywy sportowe i angażujemy
							się w projekty pro bono dla organizacji non-profit. W 2023 roku przekazaliśmy bezpłatne licencje
							NEXORA.CIVIC dla 15 małych gmin, pomagając im w cyfrowej transformacji.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
