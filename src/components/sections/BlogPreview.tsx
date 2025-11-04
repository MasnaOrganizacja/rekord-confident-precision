import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { LineIcon } from '@/components/ui/lineicon'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger)

export const BlogPreview = () => {
	const sectionRef = useRef<HTMLElement>(null)

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
		<section ref={sectionRef} className="py-32 bg-gray-50">
			<div className="max-w-[1600px] mx-auto px-8">
				{/* Section Header */}
				<div className="text-center mb-20">
					<h2 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 font-rubik">
						Centrum <span className="text-luxury-forest-green">Wiedzy</span>
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
						Ekspertka wiedza, praktyczne poradniki i najnowsze trendy w transformacji cyfrowej. Budujemy autoritet
						poprzez wartościowe treści dla przedsiębiorców i administratorów publicznych.
					</p>
				</div>

				{/* Featured Article - Asymmetric 60/40 Layout */}
				<div className="featured-article mb-24">
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white border-4 border-gray-900 shadow-2xl overflow-hidden">
						{/* Left Content - 60% */}
						<div className="lg:col-span-7 p-12">
							<div className="space-y-6">
								<div
									className={`inline-block px-4 py-2 text-sm font-bold ${getCategoryColor(featuredArticle.category)}`}>
									{getCategoryLabel(featuredArticle.category).toUpperCase()}
								</div>

								<h3 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight font-rubik">
									{featuredArticle.title}
								</h3>

								<p className="text-lg text-gray-600 leading-relaxed">{featuredArticle.excerpt}</p>

								<div className="flex items-center space-x-6 text-gray-500">
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

							{/* <Button
								size="lg"
								className="mt-8 bg-luxury-forest-green text-white hover:bg-luxury-forest-green/90 font-bold px-8 py-6 text-lg border-2 border-luxury-forest-green transition-all duration-300 hover:scale-105">
								Czytaj dalej
								<LineIcon name="arrow-right" className="w-6 h-6 ml-2" />
							</Button> */}
						</div>

						{/* Right Content - 40% */}
						<div className="lg:col-span-5">
							<div className="relative overflow-hidden h-[500px]">
								<img
									src={featuredArticle.image}
									alt={featuredArticle.title}
									className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
								/>
							</div>
						</div>
					</div>
				</div>

				{/* Articles Grid - Asymmetric Masonry Style */}
				<div className="articles-grid">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8 mb-16">
						{articles.map((article, idx) => (
							<div
								key={article.id}
								className={`article-card bg-white border-4 border-gray-900 hover:border-luxury-forest-green transition-all duration-300 hover:shadow-2xl group cursor-pointer ${
									idx === 0 ? 'md:col-span-2 lg:col-span-2' : ''
								} ${idx === 3 ? 'lg:col-span-2 xl:col-span-2' : ''}`}>
								<div className="overflow-hidden">
									<img
										src={article.image}
										alt={article.title}
										className={`w-full object-cover group-hover:scale-110 transition-transform duration-500 ${
											idx === 3 ? 'h-48' : 'h-56'
										}`}
									/>
								</div>

								<div className="p-6">
									<div
										className={`inline-block px-3 py-1 text-xs font-bold mb-4 ${getCategoryColor(article.category)}`}>
										{getCategoryLabel(article.category).toUpperCase()}
									</div>

									<h3 className="text-xl font-bold text-gray-900 mb-3 font-rubik group-hover:text-luxury-forest-green transition-colors duration-300">
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

				{/* Newsletter CTA */}
				<div className="mt-24 bg-luxury-forest-green border-4 border-luxury-forest-green p-12 text-center">
					<h3 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-rubik">
						Wiedza, która daje <span className="text-white/80">przewagę</span>
					</h3>
					<p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
						Zapisz się na nasz newsletter i otrzymuj najnowsze artykuły, analizy rynkowe i praktyczne poradniki
						bezpośrednio na swoją skrzynkę e-mail.
					</p>

					<div className="max-w-xl mx-auto">
						<form className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
							<div className="sm:col-span-2">
								<label htmlFor="newsletter-email" className="sr-only">
									Twój adres e-mail
								</label>
								<input
									id="newsletter-email"
									type="email"
									placeholder="Twój adres e-mail"
									className="w-full h-16 px-6 py-4 border-2 border-white bg-white text-gray-900 text-lg focus:outline-none focus:border-white/80"
								/>
							</div>
							<Button
								type="submit"
								className="w-full h-16 bg-white text-luxury-forest-green hover:bg-luxury-forest-green hover:text-white font-bold px-8 py-4 text-lg border-2 border-white transition-all duration-300 hover:scale-105">
								Zapisz się
							</Button>
						</form>
					</div>

					<p className="text-white/70 text-sm mt-4">Bez spamu. Możesz się wypisać w każdej chwili.</p>
				</div>
			</div>
		</section>
	)
}
