import { useEffect, useRef, useState } from 'react'
import { Navbar } from '@/components/sections/Navbar'
import { Button } from '@/components/ui/button'
import { LineIcon } from '@/components/ui/lineicon'
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Blog = () => {
	const lenisRef = useRef<Lenis | null>(null)
	const [activeFilter, setActiveFilter] = useState('wszystkie')
	const [filteredArticles, setFilteredArticles] = useState<any[]>([])

	useEffect(() => {
		// Initialize Lenis smooth scroll
		const lenis = new Lenis({
			lerp: 0.1,
			smoothWheel: true,
			wheelMultiplier: 1,
			touchMultiplier: 2,
		})

		lenisRef.current = lenis

		function raf(time: number) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}

		requestAnimationFrame(raf)

		// Add Google Fonts
		const link = document.createElement('link')
		link.href =
			'https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap'
		link.rel = 'stylesheet'
		document.head.appendChild(link)

		// Stagger animation for article cards
		const cards = document.querySelectorAll('.article-card')
		gsap.fromTo(
			cards,
			{ y: 50, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				stagger: 0.1,
				duration: 0.8,
				ease: 'power3.out',
				scrollTrigger: {
					trigger: '.articles-grid',
					start: 'top 80%',
				},
			}
		)

		return () => {
			lenis.destroy()
		}
	}, [])

	const categories = [
		'wszystkie',
		'nexora-flow',
		'nexora-civic',
		'ksef',
		'cyberbezpieczenstwo',
		'transformacja-cyfrowa',
		'wydarzenia',
	]

	const articles = [
		{
			id: 1,
			title: 'Jak zoptymalizować koszty produkcji dzięki danym z NEXORA.FLOW?',
			excerpt:
				'Analiza kluczowych wskaźników KPI i praktyczne strategie redukcji kosztów operacyjnych w przedsiębiorstwach produkcyjnych.',
			category: 'nexora-flow',
			author: 'Anna Kowalska',
			date: '2024-01-15',
			readTime: '8 min',
			image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800',
			featured: true,
		},
		{
			id: 2,
			title: 'KSeF w JST: Największe wyzwania i jak im sprostać',
			excerpt: 'Kompleksowy przewodnik po wdrożeniu Krajowego Systemu e-Faktur w jednostkach samorządu terytorialnego.',
			category: 'ksef',
			author: 'Piotr Nowak',
			date: '2024-01-12',
			readTime: '12 min',
			image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800',
		},
		{
			id: 3,
			title: 'Polityka cyberbezpieczeństwa w urzędzie – od czego zacząć?',
			excerpt:
				'Praktyczne wskazówki dla administratorów publicznych dotyczące budowania skutecznej polityki bezpieczeństwa IT.',
			category: 'cyberbezpieczenstwo',
			author: 'Maria Wiśniewska',
			date: '2024-01-10',
			readTime: '6 min',
			image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800',
		},
		{
			id: 4,
			title: 'Mierzalne ROI: Jak uzasadnić inwestycję w nowy system NEXORA.FLOW?',
			excerpt: 'Metodologie kalkulacji zwrotu z inwestycji i argumenty biznesowe dla decydentów finansowych.',
			category: 'nexora-flow',
			author: 'Tomasz Zieliński',
			date: '2024-01-08',
			readTime: '10 min',
			image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800',
		},
		{
			id: 5,
			title: 'Elektroniczny Obieg Dokumentów (EZD) w praktyce',
			excerpt: 'Dobre praktyki wdrożeniowe i najczęstsze błędy w digitalizacji procesów dokumentowych w administracji.',
			category: 'nexora-civic',
			author: 'Katarzyna Lewandowska',
			date: '2024-01-05',
			readTime: '7 min',
			image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=800',
		},
		{
			id: 6,
			title: 'Trendy technologiczne, które zdefiniują biznes w 2025 roku',
			excerpt: 'Analiza kluczowych trendów technologicznych i ich wpływu na transformację cyfrową przedsiębiorstw.',
			category: 'transformacja-cyfrowa',
			author: 'Michał Kowalczyk',
			date: '2024-01-03',
			readTime: '15 min',
			image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=800',
		},
		{
			id: 7,
			title: 'NEXORA ponownie w gronie Przedsiębiorstw Fair Play',
			excerpt:
				'Otrzymaliśmy po raz kolejny prestiżowe wyróżnienie za transparentność i wysokie standardy etyczne w biznesie.',
			category: 'wydarzenia',
			author: 'Zespół NEXORA',
			date: '2024-01-01',
			readTime: '3 min',
			image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800',
		},
		{
			id: 8,
			title: 'Jak przygotować JST na dyrektywę NIS2?',
			excerpt: 'Praktyczny przewodnik po nowych wymogach cyberbezpieczeństwa dla jednostek samorządu terytorialnego.',
			category: 'cyberbezpieczenstwo',
			author: 'Adam Rutkowski',
			date: '2023-12-28',
			readTime: '9 min',
			image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800',
		},
	]

	useEffect(() => {
		if (activeFilter === 'wszystkie') {
			setFilteredArticles(articles)
		} else {
			setFilteredArticles(articles.filter(article => article.category === activeFilter))
		}
	}, [activeFilter])

	const featuredArticle = articles.find(article => article.featured)
	const regularArticles = filteredArticles.filter(article => !article.featured || activeFilter !== 'wszystkie')

	const getCategoryLabel = (category: string) => {
		const labels: { [key: string]: string } = {
			wszystkie: 'Wszystkie',
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
		<main className="overflow-x-hidden bg-white">
			<Navbar />

			{/* Hero Section - Featured Article */}
			{featuredArticle && activeFilter === 'wszystkie' && (
				<section className="relative min-h-screen flex items-center bg-gray-50 pt-20">
					<div className="container mx-auto px-8">
						<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
							{/* Left Content - 60% */}
							<div className="lg:col-span-7 space-y-8">
								<div className="space-y-6">
									<div
										className={`inline-block px-4 py-2 text-sm font-bold ${getCategoryColor(
											featuredArticle.category
										)}`}>
										{getCategoryLabel(featuredArticle.category).toUpperCase()}
									</div>

									<h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight font-rubik">
										{featuredArticle.title}
									</h1>

									<p className="text-xl text-gray-600 leading-relaxed">{featuredArticle.excerpt}</p>

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

								<Button
									size="lg"
									className="bg-luxury-forest-green text-white hover:bg-luxury-forest-green/90 font-bold px-8 py-6 text-lg border-2 border-luxury-forest-green transition-all duration-300 hover:scale-105 magnetic-button">
									Czytaj dalej
									<LineIcon name="arrow-right" className="w-6 h-6 ml-2" />
								</Button>
							</div>

							{/* Right Content - 40% */}
							<div className="lg:col-span-5">
								<div className="relative overflow-hidden border-4 border-luxury-forest-green shadow-2xl">
									<img
										src={featuredArticle.image}
										alt={featuredArticle.title}
										className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-500"
									/>
								</div>
							</div>
						</div>
					</div>
				</section>
			)}

			{/* Blog Header (when not showing featured) */}
			{(activeFilter !== 'wszystkie' || !featuredArticle) && (
				<section className="py-32 bg-gray-50 pt-32">
					<div className="container mx-auto px-8 text-center">
						<h1 className="text-6xl lg:text-8xl font-bold text-gray-900 mb-6 font-rubik">
							Centrum <span className="text-luxury-forest-green">Wiedzy</span>
						</h1>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Ekspertka wiedza, praktyczne poradniki i najnowsze trendy w transformacji cyfrowej
						</p>
					</div>
				</section>
			)}

			{/* Filtering and Categories */}
			<section className="py-16 bg-white border-b-4 border-gray-200">
				<div className="container mx-auto px-8">
					<div className="flex flex-wrap justify-center gap-4">
						{categories.map(category => (
							<button
								key={category}
								onClick={() => setActiveFilter(category)}
								className={`px-6 py-3 border-2 font-bold transition-all duration-300 hover:scale-105 ${
									activeFilter === category
										? 'bg-luxury-forest-green border-luxury-forest-green text-white'
										: 'bg-white border-luxury-forest-green text-luxury-forest-green hover:border-luxury-forest-green/80'
								}`}>
								{getCategoryLabel(category)}
							</button>
						))}
					</div>
				</div>
			</section>

			{/* Articles Grid - Equal Height Layout */}
			<section className="py-32 bg-gray-50">
				<div className="container mx-auto px-8">
					<div className="articles-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{regularArticles.map((article, idx) => (
							<div
								key={article.id}
								className="article-card bg-white border-4 border-gray-900 hover:border-luxury-forest-green transition-all duration-300 hover:shadow-2xl group cursor-pointer flex flex-col h-full"
								style={{ animationDelay: `${idx * 0.1}s` }}>
								<div className="overflow-hidden">
									<img
										src={article.image}
										alt={article.title}
										className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
									/>
								</div>

								<div className="p-6 flex flex-col flex-grow">
									<div
										className={`inline-block px-3 py-1 text-xs font-bold mb-4 self-start ${getCategoryColor(
											article.category
										)}`}>
										{getCategoryLabel(article.category).toUpperCase()}
									</div>

									<h3 className="text-xl font-bold text-gray-900 mb-3 font-rubik group-hover:text-luxury-forest-green transition-colors duration-300">
										{article.title}
									</h3>

									<p className="text-gray-600 mb-4 leading-relaxed flex-grow">{article.excerpt}</p>

									<div className="flex items-center justify-between text-sm text-gray-500 mt-auto">
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
			</section>

			{/* Newsletter CTA */}
			<section className="py-32 bg-luxury-forest-green">
				<div className="container mx-auto px-8 text-center">
					<h2 className="text-5xl lg:text-7xl font-bold text-white mb-6 font-rubik">
						Wiedza, która daje <span className="text-white/80">przewagę</span>
					</h2>
					<p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
						Zapisz się na nasz newsletter i otrzymuj najnowsze artykuły, analizy rynkowe i praktyczne poradniki
						bezpośrednio na swoją skrzynkę e-mail.
					</p>

					<div className="max-w-md mx-auto flex gap-4">
						<input
							type="email"
							placeholder="Twój adres e-mail"
							className="flex-1 px-6 py-4 h-14 border-2 border-white bg-white text-gray-900 text-lg focus:outline-none focus:border-white/80"
						/>
						<Button className="bg-white text-luxury-forest-green hover:bg-luxury-forest-green hover:text-white font-bold px-8 py-4 h-14 text-lg border-2 border-white transition-all duration-300 hover:scale-105 whitespace-nowrap">
							Zapisz się
						</Button>
					</div>

					<p className="text-white/70 text-sm mt-4">Bez spamu. Możesz się wypisać w każdej chwili.</p>
				</div>
			</section>
		</main>
	)
}

export default Blog
