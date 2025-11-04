import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { LineIcon } from '@/components/ui/lineicon'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger)

export const BlogPreview = () => {
	const sectionRef = useRef<HTMLElement>(null)
	const floatingElementsRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (!sectionRef.current) return

		// Animate featured article
		gsap.fromTo(
			'.featured-article',
			{ x: -100, opacity: 0 },
			{
				x: 0,
				opacity: 1,
				duration: 1,
				ease: 'power3.out',
				scrollTrigger: {
					trigger: sectionRef.current,
					start: 'top 70%',
				},
			}
		)

		// Animate article cards with stagger
		gsap.fromTo(
			'.article-card',
			{ y: 60, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				stagger: 0.15,
				duration: 0.8,
				ease: 'power3.out',
				scrollTrigger: {
					trigger: '.articles-grid',
					start: 'top 80%',
				},
			}
		)

		// Floating elements animation for newsletter section
		if (floatingElementsRef.current) {
			const floatingElements = floatingElementsRef.current.children
			Array.from(floatingElements).forEach((element, index) => {
				gsap.to(element, {
					y: -15,
					duration: 2.5 + index * 0.3,
					repeat: -1,
					yoyo: true,
					ease: 'power2.inOut',
					delay: index * 0.2,
				})
			})
		}
	}, [])

	const featuredArticle = {
		id: 1,
		title: 'Jak zoptymalizować koszty produkcji dzięki danym z ERP?',
		excerpt:
			'Analiza kluczowych wskaźników KPI i praktyczne strategie redukcji kosztów operacyjnych w przedsiębiorstwach produkcyjnych. Dowiedz się, jak wykorzystać dane z systemu NEXORA.FLOW do podejmowania strategicznych decyzji biznesowych.',
		category: 'nexora-flow',
		author: 'Anna Kowalska',
		date: '2025-11-15',
		readTime: '8 min',
		image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800',
	}

	const articles = [
		{
			id: 2,
			title: 'KSeF w JST: Największe wyzwania i jak im sprostać',
			excerpt: 'Kompleksowy przewodnik po wdrożeniu Krajowego Systemu e-Faktur w jednostkach samorządu terytorialnego.',
			category: 'ksef',
			author: 'Piotr Nowak',
			date: '2025-11-12',
			readTime: '12 min',
			image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=400',
		},
		{
			id: 3,
			title: 'Polityka cyberbezpieczeństwa w urzędzie – od czego zacząć?',
			excerpt:
				'Praktyczne wskazówki dla administratorów publicznych dotyczące budowania skutecznej polityki bezpieczeństwa IT.',
			category: 'cyberbezpieczenstwo',
			author: 'Maria Wiśniewska',
			date: '2025-11-10',
			readTime: '6 min',
			image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=400',
		},
		{
			id: 4,
			title: 'Trendy technologiczne, które zdefiniują biznes w 2025 roku',
			excerpt: 'Analiza kluczowych trendów technologicznych i ich wpływu na transformację cyfrową przedsiębiorstw.',
			category: 'transformacja-cyfrowa',
			author: 'Michał Kowalczyk',
			date: '2025-11-03',
			readTime: '15 min',
			image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=400',
		},
		{
			id: 5,
			title: 'Elektroniczny Obieg Dokumentów (EZD) w praktyce',
			excerpt: 'Dobre praktyki wdrożeniowe i najczęstsze błędy w digitalizacji procesów dokumentowych w administracji.',
			category: 'nexora-civic',
			author: 'Katarzyna Lewandowska',
			date: '2025-11-05',
			readTime: '7 min',
			image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=400',
		},
		{
			id: 6,
			title: 'Mierzalne ROI: Jak uzasadnić inwestycję w nowy system ERP?',
			excerpt: 'Metodologie kalkulacji zwrotu z inwestycji i argumenty biznesowe dla decydentów finansowych.',
			category: 'nexora-flow',
			author: 'Tomasz Zieliński',
			date: '2025-11-08',
			readTime: '10 min',
			image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400',
		},
	]

	const getCategoryLabel = (category: string) => {
		const labels: { [key: string]: string } = {
			'nexora-flow': 'NEXORA.FLOW',
			'nexora-civic': 'NEXORA.CIVIC',
			ksef: 'KSeF',
			cyberbezpieczenstwo: 'Cyberbezpieczeństwo',
			'transformacja-cyfrowa': 'Transformacja Cyfrowa',
			wydarzenia: 'Wydarzenia',
		}
		return labels[category] || category
	}

	const getCategoryColor = (category: string) => {
		const colors: { [key: string]: string } = {
			'nexora-flow': 'bg-luxury-forest-green text-white',
			'nexora-civic': 'bg-blue-600 text-white',
			ksef: 'bg-orange-500 text-white',
			cyberbezpieczenstwo: 'bg-red-600 text-white',
			'transformacja-cyfrowa': 'bg-purple-600 text-white',
			wydarzenia: 'bg-gray-600 text-white',
		}
		return colors[category] || 'bg-gray-500 text-white'
	}

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 lg:py-32 bg-gray-50">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-4 sm:mb-6">
            Centrum <span className="text-luxury-forest-green">Wiedzy</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Ekspertka wiedza, praktyczne poradniki i najnowsze trendy w transformacji cyfrowej. 
            Budujemy autoritet poprzez wartościowe treści dla przedsiębiorców i administratorów publicznych.
          </p>
        </div>

				{/* Featured Article - Hidden on mobile, visible on desktop */}
				<div className="featured-article mb-16 sm:mb-20 lg:mb-24 hidden md:block">
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-12 items-center bg-white border-4 border-gray-900 shadow-2xl overflow-hidden">
						{/* Left Content - 60% */}
						<div className="lg:col-span-7 p-6 sm:p-8 lg:p-12">
							<div className="space-y-4 sm:space-y-6">
								<div
									className={`inline-block px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-bold ${getCategoryColor(featuredArticle.category)}`}>
									{getCategoryLabel(featuredArticle.category).toUpperCase()}
								</div>

								<h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
									{featuredArticle.title}
								</h3>

								<p className="text-base sm:text-lg text-gray-600 leading-relaxed">{featuredArticle.excerpt}</p>

								<div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0 text-sm sm:text-base text-gray-500">
									<div className="flex items-center space-x-2">
										<LineIcon name="user" className="w-4 h-4" />
										<span>{featuredArticle.author}</span>
									</div>
									<div className="flex items-center space-x-2">
										<LineIcon name="calendar" className="w-4 h-4" />
										<span>{new Date(featuredArticle.date).toLocaleDateString('pl-PL')}</span>
									</div>
									<div className="flex items-center space-x-2">
										<LineIcon name="timer" className="w-4 h-4" />
										<span>{featuredArticle.readTime}</span>
									</div>
								</div>
							</div>
						</div>

						{/* Right Content - 40% */}
						<div className="lg:col-span-5">
							<div className="relative overflow-hidden h-48 sm:h-64 lg:h-[500px]">
								<img
									src={featuredArticle.image}
									alt={featuredArticle.title}
									className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
								/>
							</div>
						</div>
					</div>
				</div>

				{/* Articles Grid - Show only 3 articles on mobile, all on desktop */}
				<div className="articles-grid">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
						{articles.slice(0, 3).map((article, idx) => (
							<div
								key={article.id}
								className="article-card bg-white border-4 border-gray-900 hover:border-luxury-forest-green transition-all duration-300 hover:shadow-2xl group cursor-pointer md:hidden">
								<div className="overflow-hidden">
									<img
										src={article.image}
										alt={article.title}
										className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
									/>
								</div>

								<div className="p-4 sm:p-6">
									<div
										className={`inline-block px-2 sm:px-3 py-1 text-xs font-bold mb-3 sm:mb-4 ${getCategoryColor(article.category)}`}>
										{getCategoryLabel(article.category).toUpperCase()}
									</div>

									<h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-luxury-forest-green transition-colors duration-300">
										{article.title}
									</h3>

									<p className="text-gray-600 mb-4 leading-relaxed">{article.excerpt}</p>

									<div className="flex items-center justify-between text-sm text-gray-500">
										<div className="flex items-center space-x-4">
											<span>{article.author}</span>
											<span>{new Date(article.date).toLocaleDateString('pl-PL')}</span>
										</div>
										<div className="flex items-center space-x-1">
											<LineIcon name="timer" className="w-4 h-4" />
											<span>{article.readTime}</span>
										</div>
									</div>
								</div>
							</div>
						))}
						
						{/* Desktop version - all articles with masonry layout */}
						{articles.map((article, idx) => (
							<div
								key={`desktop-${article.id}`}
								className={`article-card bg-white border-4 border-gray-900 hover:border-luxury-forest-green transition-all duration-300 hover:shadow-2xl group cursor-pointer hidden md:block ${
									idx === 0 ? 'sm:col-span-2 lg:col-span-2' : ''
								} ${idx === 3 ? 'lg:col-span-2 xl:col-span-2' : ''}`}>
								<div className="overflow-hidden">
									<img
										src={article.image}
										alt={article.title}
										className={`w-full object-cover group-hover:scale-110 transition-transform duration-500 ${
											idx === 3 ? 'h-40 sm:h-48' : 'h-48 sm:h-56'
										}`}
									/>
								</div>

								<div className="p-4 sm:p-6">
									<div
										className={`inline-block px-2 sm:px-3 py-1 text-xs font-bold mb-3 sm:mb-4 ${getCategoryColor(article.category)}`}>
										{getCategoryLabel(article.category).toUpperCase()}
									</div>

									<h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-luxury-forest-green transition-colors duration-300">
										{article.title}
									</h3>

									<p className="text-gray-600 mb-4 leading-relaxed">{article.excerpt}</p>

									<div className="flex items-center justify-between text-sm text-gray-500">
										<div className="flex items-center space-x-4">
											<span>{article.author}</span>
											<span>{new Date(article.date).toLocaleDateString('pl-PL')}</span>
										</div>
										<div className="flex items-center space-x-1">
											<LineIcon name="timer" className="w-4 h-4" />
											<span>{article.readTime}</span>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* CTA to Full Blog */}
				<div className="text-center">
					<Link to="/blog">
						<Button
							size="lg"
							variant="outline"
							className="bg-white text-luxury-forest-green border-2 border-luxury-forest-green hover:bg-luxury-forest-green hover:text-white font-bold px-12 py-6 text-lg transition-all duration-300 hover:scale-105">
							Zobacz wszystkie artykuły
							<LineIcon name="external-link" className="w-6 h-6 ml-2" />
						</Button>
					</Link>
				</div>

			</div>

			{/* Newsletter CTA - Full Width */}
			<div className="mt-24 bg-gradient-to-br from-luxury-forest-green via-luxury-forest-green to-luxury-forest-green/90 py-16 px-8 text-center relative overflow-hidden">
				{/* Floating Background Elements */}
				<div ref={floatingElementsRef} className="absolute inset-0 pointer-events-none">
					<div className="absolute top-8 left-8 w-16 h-16 border-2 border-white/10 rotate-45" />
					<div className="absolute top-16 right-12 w-12 h-12 bg-white/5 rounded-full" />
					<div className="absolute bottom-12 left-1/4 w-8 h-8 border border-white/10" />
					<div className="absolute bottom-8 right-1/3 w-10 h-10 bg-white/5 rotate-12" />
					<LineIcon name="bulb" className="absolute top-12 right-1/4 w-6 h-6 text-white/10" />
					<LineIcon name="envelope" className="absolute bottom-16 left-1/3 w-5 h-5 text-white/10" />
				</div>
				
				<div className="relative z-10 max-w-4xl mx-auto">
					<h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6">
						Wiedza, która daje <span className="text-white/80">przewagę</span>
					</h3>
					<p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
						Zapisz się na nasz newsletter i otrzymuj najnowsze artykuły, analizy rynkowe i praktyczne poradniki
						bezpośrednio na swoją skrzynkę e-mail.
					</p>

					<div className="max-w-xl mx-auto px-4">
						<form className="flex flex-col sm:grid sm:grid-cols-3 gap-3 sm:gap-4 items-center">
							<div className="w-full sm:col-span-2">
								<label htmlFor="newsletter-email" className="sr-only">
									Twój adres e-mail
								</label>
								<input
									id="newsletter-email"
									type="email"
									placeholder="Twój adres e-mail"
									className="w-full h-12 sm:h-16 px-4 sm:px-6 py-3 sm:py-4 border-2 border-white bg-white text-gray-900 text-base sm:text-lg focus:outline-none focus:border-white/80"
								/>
							</div>
							<Button
								type="submit"
								className="w-full h-12 sm:h-16 bg-white text-luxury-forest-green hover:bg-luxury-forest-green hover:text-white font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg border-2 border-white transition-all duration-300 hover:scale-105">
								Zapisz się
							</Button>
						</form>
					</div>

					<p className="text-white/70 text-sm mt-3 sm:mt-4 px-4">Bez spamu. Możesz się wypisać w każdej chwili.</p>
				</div>
			</div>
		</section>
	)
}
