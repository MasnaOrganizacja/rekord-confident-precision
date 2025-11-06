import { useEffect, useRef } from 'react'
import { LineIcon } from '@/components/ui/lineicon'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const NexoraDifference = () => {
	const sectionRef = useRef<HTMLElement>(null)

	useEffect(() => {
		if (!sectionRef.current) return

		const boxes = sectionRef.current.querySelectorAll('.bento-box')

		gsap.fromTo(
			boxes,
			{
				y: 60,
				opacity: 0,
			},
			{
				y: 0,
				opacity: 1,
				stagger: 0.15,
				duration: 0.8,
				ease: 'power3.out',
				scrollTrigger: {
					trigger: sectionRef.current,
					start: 'top 70%',
				},
			}
		)
	}, [])

	return (
		<section ref={sectionRef} className="py-32 bg-white">
			<div className="container mx-auto px-8">
				<h2 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-4 text-center font-sansation">
					Dlaczego <span className="text-luxury-forest-green">NEXORA</span>?
				</h2>
				<p className="text-xl text-gray-600 text-center mb-20 max-w-3xl mx-auto">
					35 lat doświadczenia przekłada się na przewagę, której nie da się skopiować
				</p>

				{/* Asymmetric Bento Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
					{/* Large box - 2x2 on desktop */}
					<div className="bento-box lg:col-span-2 lg:row-span-2 bg-luxury-forest-green border-4 border-luxury-forest-green p-8 sm:p-12 group hover:border-luxury-forest-green/80 transition-all duration-300 shadow-lg">
						<LineIcon
							name="medal"
							className="w-12 h-12 sm:w-16 sm:h-16 text-white mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300"
						/>
						<h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 font-sansation">Doświadczenie i Stabilność</h3>
						
						{/* Mobile version - only first paragraph */}
						<div className="lg:hidden">
							<p className="text-base sm:text-lg text-white/90 leading-relaxed mb-6">
								Od 35 lat dostarczamy oprogramowanie klasy enterprise dla najbardziej wymagających klientów. Nasze
								rozwiązania wspierają organizacje w każdym etapie rozwoju - od wdrożenia, przez codzienną pracę, aż po
								transformację cyfrową.
							</p>
							<div className="flex gap-4 sm:gap-8">
								<div>
									<div className="text-3xl sm:text-4xl font-bold text-white">500+</div>
									<div className="text-sm sm:text-base text-white/80">Klientów</div>
								</div>
								<div>
									<div className="text-3xl sm:text-4xl font-bold text-white">60%</div>
									<div className="text-sm sm:text-base text-white/80">Samorządów Śląskich</div>
								</div>
							</div>
						</div>

						{/* Desktop version - full content */}
						<div className="hidden lg:block">
							<p className="text-lg text-white/90 leading-relaxed mb-6">
								Od 35 lat dostarczamy oprogramowanie klasy enterprise dla najbardziej wymagających klientów. Nasze
								rozwiązania wspierają organizacje w każdym etapie rozwoju - od wdrożenia, przez codzienną pracę, aż po
								transformację cyfrową.
							</p>
							<p className="text-lg text-white/90 leading-relaxed">
								Ponad 500 organizacji wybrało NEXORA jako swojego długoterminowego partnera technologicznego. 60%
								samorządów województwa śląskiego zaufało naszemu systemowi NEXORA.CIVIC.
							</p>
							<div className="mt-8 flex gap-8">
								<div>
									<div className="text-5xl font-bold text-white">500+</div>
									<div className="text-white/80">Klientów</div>
								</div>
								<div>
									<div className="text-5xl font-bold text-white">60%</div>
									<div className="text-white/80">Samorządów Śląskich</div>
								</div>
							</div>
						</div>
					</div>

					{/* Small box 1 */}
					<div className="bento-box bg-white border-4 border-luxury-forest-green p-8 group hover:border-luxury-forest-green/80 transition-all duration-300 shadow-lg">
						<LineIcon
							name="map-marker"
							className="w-12 h-12 text-luxury-forest-green mb-4 group-hover:scale-110 transition-transform duration-300"
						/>
						<h3 className="text-2xl font-bold text-gray-900 mb-4 font-sansation">Polska Inżynieria</h3>
						<p className="text-gray-600 leading-relaxed">
							Znamy polskie przepisy, standardy i specyfikę rynku jak nikt inny. Nasze rozwiązania są w pełni
							dostosowane do wymogów prawnych i oczekiwań lokalnych klientów.
						</p>
					</div>

					{/* Small box 2 */}
					<div className="bento-box bg-white border-4 border-luxury-forest-green p-8 group hover:border-luxury-forest-green/80 transition-all duration-300 shadow-lg">
						<LineIcon
							name="headphone"
							className="w-12 h-12 text-luxury-forest-green mb-4 group-hover:scale-110 transition-transform duration-300"
						/>
						<h3 className="text-2xl font-bold text-gray-900 mb-4 font-sansation">Wsparcie Ekspertów</h3>
						<p className="text-gray-600 leading-relaxed">
							Dedykowany zespół specjalistów, kompleksowe szkolenia i ciągłe wsparcie techniczne zapewniają spokój i
							maksymalną efektywność wdrożenia.
						</p>
					</div>

					{/* Small box 3 */}
					<div className="bento-box lg:col-span-1 bg-gray-100 border-4 border-luxury-forest-green p-8 group hover:scale-105 transition-all duration-300 shadow-lg">
						<LineIcon
							name="bolt"
							className="w-12 h-12 text-luxury-forest-green mb-4 group-hover:scale-110 transition-transform duration-300"
						/>
						<h3 className="text-2xl font-bold text-gray-900 mb-4 font-sansation">Ciągła Innowacja</h3>
						<p className="text-gray-700 leading-relaxed">
							Inwestujemy w rozwój produktów i nowe technologie, aby nasze systemy zawsze wyprzedzały rynek.
						</p>
					</div>

					{/* Small box 4 */}
					<div className="bento-box bg-white border-4 border-luxury-forest-green p-8 group hover:border-luxury-forest-green/80 transition-all duration-300 shadow-lg">
						<LineIcon
							name="shield"
							className="w-12 h-12 text-luxury-forest-green mb-4 group-hover:scale-110 transition-transform duration-300"
						/>
						<h3 className="text-2xl font-bold text-gray-900 mb-4 font-sansation">Bezpieczeństwo Danych</h3>
						<p className="text-gray-600 leading-relaxed">
							Najwyższe standardy bezpieczeństwa, szyfrowanie danych i zgodność z RODO. Twoje dane są chronione na
							każdym etapie przetwarzania.
						</p>
					</div>

					{/* Small box 5 */}
					<div className="bento-box bg-white border-4 border-luxury-forest-green p-8 group hover:border-luxury-forest-green/80 transition-all duration-300 shadow-lg">
						<LineIcon
							name="timer"
							className="w-12 h-12 text-luxury-forest-green mb-4 group-hover:scale-110 transition-transform duration-300"
						/>
						<h3 className="text-2xl font-bold text-gray-900 mb-4 font-sansation">Szybkie Wdrożenie</h3>
						<p className="text-gray-600 leading-relaxed">
							Sprawdzone metodologie wdrożenia pozwalają na uruchomienie systemu w rekordowym czasie. Minimalizujemy
							przestoje i maksymalizujemy efektywność.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
