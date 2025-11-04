import { useEffect, useRef } from 'react'
import { LineIcon } from '@/components/ui/lineicon'
import { Button } from '@/components/ui/button'
import { gsap } from 'gsap'

export const Footer = () => {
	const currentYear = new Date().getFullYear()
	const footerRef = useRef<HTMLElement>(null)
	const floatingElementsRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (!footerRef.current || !floatingElementsRef.current) return

		// Floating elements animation
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

		// Hover animations for cards
		const cards = footerRef.current.querySelectorAll('.footer-card')
		cards.forEach(card => {
			card.addEventListener('mouseenter', () => {
				gsap.to(card, { scale: 1.02, duration: 0.3, ease: 'power2.out' })
			})
			card.addEventListener('mouseleave', () => {
				gsap.to(card, { scale: 1, duration: 0.3, ease: 'power2.out' })
			})
		})
	}, [])

	return (
		<footer
			ref={footerRef}
			className="relative bg-gradient-to-br from-luxury-forest-green via-luxury-forest-green to-luxury-forest-green/90 text-white overflow-hidden">
			{/* Floating Background Elements */}
			<div ref={floatingElementsRef} className="absolute inset-0 pointer-events-none">
				<div className="absolute top-20 left-10 w-32 h-32 border-4 border-white/10 rotate-45" />
				<div className="absolute top-40 right-20 w-24 h-24 bg-white/5 rounded-full" />
				<div className="absolute bottom-40 left-1/4 w-16 h-16 border-2 border-white/10" />
				<div className="absolute bottom-20 right-1/3 w-20 h-20 bg-white/5 rotate-12" />
				<LineIcon name="bulb" className="absolute top-32 right-1/4 w-12 h-12 text-white/10" />
				<LineIcon name="users" className="absolute bottom-32 left-1/3 w-10 h-10 text-white/10" />
			</div>

			<div className="container mx-auto px-8 py-20 relative z-10">
				{/* Hero Section */}
				<div className="text-center mb-20">
					<h2 className="text-6xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
						NEXORA
					</h2>
					<p className="text-2xl text-white/90 mb-8 max-w-3xl mx-auto">Transformujemy przyszłość biznesu od 35 lat</p>
					<div className="w-32 h-1 bg-gradient-to-r from-white/50 to-white mx-auto" />
				</div>

				{/* Interactive Cards Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
					{/* Products Card */}
					<div className="footer-card bg-white/10 backdrop-blur-sm border border-white/20 p-8 hover:bg-white/15 transition-all duration-300 group">
						<div className="flex items-center mb-6">
							<LineIcon name="bulb" className="w-8 h-8 text-white mr-3 group-hover:scale-110 transition-transform" />
							<h4 className="text-2xl font-bold">Produkty</h4>
						</div>
						<ul className="space-y-3">
							<li>
								<a
									href="/nexora-flow"
									className="text-white/80 hover:text-white transition-colors flex items-center group/link">
									<span className="w-2 h-2 bg-white/50 rounded-full mr-3 group-hover/link:bg-white transition-colors" />
									NEXORA.FLOW
								</a>
							</li>
							<li>
								<a
									href="/nexora-civic"
									className="text-white/80 hover:text-white transition-colors flex items-center group/link">
									<span className="w-2 h-2 bg-white/50 rounded-full mr-3 group-hover/link:bg-white transition-colors" />
									NEXORA.CIVIC
								</a>
							</li>
							<li>
								<a href="#" className="text-white/80 hover:text-white transition-colors flex items-center group/link">
									<span className="w-2 h-2 bg-white/50 rounded-full mr-3 group-hover/link:bg-white transition-colors" />
									Moduły dodatkowe
								</a>
							</li>
							<li>
								<a href="#" className="text-white/80 hover:text-white transition-colors flex items-center group/link">
									<span className="w-2 h-2 bg-white/50 rounded-full mr-3 group-hover/link:bg-white transition-colors" />
									API & SDK
								</a>
							</li>
						</ul>
					</div>

					{/* Services Card */}
					<div className="footer-card bg-white/10 backdrop-blur-sm border border-white/20 p-8 hover:bg-white/15 transition-all duration-300 group">
						<div className="flex items-center mb-6">
							<LineIcon name="users" className="w-8 h-8 text-white mr-3 group-hover:scale-110 transition-transform" />
							<h4 className="text-2xl font-bold">Usługi</h4>
						</div>
						<ul className="space-y-3">
							<li>
								<a href="#" className="text-white/80 hover:text-white transition-colors flex items-center group/link">
									<span className="w-2 h-2 bg-white/50 rounded-full mr-3 group-hover/link:bg-white transition-colors" />
									Wdrożenia
								</a>
							</li>
							<li>
								<a href="#" className="text-white/80 hover:text-white transition-colors flex items-center group/link">
									<span className="w-2 h-2 bg-white/50 rounded-full mr-3 group-hover/link:bg-white transition-colors" />
									Szkolenia
								</a>
							</li>
							<li>
								<a href="#" className="text-white/80 hover:text-white transition-colors flex items-center group/link">
									<span className="w-2 h-2 bg-white/50 rounded-full mr-3 group-hover/link:bg-white transition-colors" />
									Wsparcie 24/7
								</a>
							</li>
							<li>
								<a href="#" className="text-white/80 hover:text-white transition-colors flex items-center group/link">
									<span className="w-2 h-2 bg-white/50 rounded-full mr-3 group-hover/link:bg-white transition-colors" />
									Konsultacje
								</a>
							</li>
						</ul>
					</div>

					{/* Contact Card */}
					<div className="footer-card bg-white/10 backdrop-blur-sm border border-white/20 p-8 hover:bg-white/15 transition-all duration-300 group md:col-span-2 lg:col-span-1">
						<div className="flex items-center mb-6">
							<LineIcon
								name="envelope"
								className="w-8 h-8 text-white mr-3 group-hover:scale-110 transition-transform"
							/>
							<h4 className="text-2xl font-bold">Kontakt</h4>
						</div>
						<div className="space-y-4">
							<div className="flex items-start gap-3">
								<LineIcon name="map-marker" className="w-5 h-5 text-white/80 flex-shrink-0 mt-1" />
								<div className="text-white/80">
									<p>ul. Innowacyjna 35</p>
									<p>40-000 Katowice</p>
								</div>
							</div>
							<div className="flex items-center gap-3">
								<LineIcon name="phone" className="w-5 h-5 text-white/80" />
								<p className="text-white/80">+48 32 123 45 67</p>
							</div>
							<div className="flex items-center gap-3">
								<LineIcon name="envelope" className="w-5 h-5 text-white/80" />
								<p className="text-white/80">kontakt@nexora.pl</p>
							</div>
						</div>
					</div>
				</div>

				{/* Social & Legal Section */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
					{/* Social Media */}
					<div className="text-center lg:text-left">
						<h4 className="text-2xl font-bold mb-6">Śledź nas</h4>
						<div className="flex justify-center lg:justify-start space-x-4 mb-8">
							<Button
								variant="outline"
								size="lg"
								className="border-2 border-white/30 bg-white/10 text-white hover:bg-white hover:scale-110 transition-all duration-300 w-16 h-16 rounded-full group">
								<LineIcon
									name="facebook"
									className="w-6 h-6 text-white group-hover:text-luxury-forest-green transition-colors"
								/>
							</Button>
							<Button
								variant="outline"
								size="lg"
								className="border-2 border-white/30 bg-white/10 text-white hover:bg-white hover:scale-110 transition-all duration-300 w-16 h-16 rounded-full group">
								<LineIcon
									name="linkedin"
									className="w-6 h-6 text-white group-hover:text-luxury-forest-green transition-colors"
								/>
							</Button>
							<Button
								variant="outline"
								size="lg"
								className="border-2 border-white/30 bg-white/10 text-white hover:bg-white hover:scale-110 transition-all duration-300 w-16 h-16 rounded-full group">
								<LineIcon
									name="twitter"
									className="w-6 h-6 text-white group-hover:text-luxury-forest-green transition-colors"
								/>
							</Button>
						</div>
					</div>

					{/* Legal Links */}
					<div className="text-center lg:text-right">
						<h4 className="text-2xl font-bold mb-6">Dokumenty</h4>
						<div className="flex flex-wrap justify-center lg:justify-end gap-6">
							<a href="#" className="text-white/80 hover:text-white transition-colors hover:underline">
								Regulamin
							</a>
							<a href="#" className="text-white/80 hover:text-white transition-colors hover:underline">
								Polityka prywatności
							</a>
							<a href="#" className="text-white/80 hover:text-white transition-colors hover:underline">
								RODO
							</a>
							<a href="#" className="text-white/80 hover:text-white transition-colors hover:underline">
								Warunki licencji
							</a>
						</div>
					</div>
				</div>

				{/* Bottom Bar with Gradient */}
				<div className="relative">
					<div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-lg" />
					<div className="relative border border-white/20 rounded-lg p-8 backdrop-blur-sm">
						<div className="flex flex-col lg:flex-row justify-between items-center gap-6">
							<div className="text-center lg:text-left">
								<p className="text-xl font-bold mb-2">© {currentYear} NEXORA</p>
								<p className="text-white/80">35 lat innowacji w Polsce • NIP: 123-456-78-90 • REGON: 123456789</p>
							</div>
							<div className="flex flex-wrap justify-center gap-6 text-sm">
								<a href="#" className="text-white/80 hover:text-white transition-colors hover:underline">
									Mapa strony
								</a>
								<a href="#" className="text-white/80 hover:text-white transition-colors hover:underline">
									Kariera
								</a>
								<a href="#" className="text-white/80 hover:text-white transition-colors hover:underline">
									Inwestorzy
								</a>
								<a href="#" className="text-white/80 hover:text-white transition-colors hover:underline">
									Centrum prasowe
								</a>
								<a href="#" className="text-white/80 hover:text-white transition-colors hover:underline">
									Partnerzy
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
