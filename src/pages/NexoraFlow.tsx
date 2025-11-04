import { useEffect, useRef, useState } from 'react'
import { Navbar } from '@/components/sections/Navbar'
import { Button } from '@/components/ui/button'
import { LineIcon } from '@/components/ui/lineicon'
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const NexoraFlow = () => {
	const lenisRef = useRef<Lenis | null>(null)
	const heroRef = useRef<HTMLElement>(null)
	const [activeKPI, setActiveKPI] = useState(0)
	const [roiInputs, setRoiInputs] = useState({
		downtime: 0,
		employees: 0,
		inventory: 0,
	})
	const [roiResults, setRoiResults] = useState({
		savings: 0,
		roi: 0,
	})

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

		// Hero text reveal animation
		if (heroRef.current) {
			const words = heroRef.current.querySelectorAll('.hero-word')
			gsap.fromTo(
				words,
				{ y: 100, opacity: 0 },
				{
					y: 0,
					opacity: 1,
					stagger: 0.1,
					duration: 1.2,
					ease: 'power3.out',
					delay: 0.5,
				}
			)
		}

		// Animated counters
		const counters = document.querySelectorAll('.counter')
		counters.forEach(counter => {
			const target = parseInt(counter.getAttribute('data-target') || '0')
			gsap.fromTo(
				counter,
				{ textContent: 0 },
				{
					textContent: target,
					duration: 2,
					ease: 'power2.out',
					snap: { textContent: 1 },
					scrollTrigger: {
						trigger: counter,
						start: 'top 80%',
					},
				}
			)
		})

		return () => {
			lenis.destroy()
		}
	}, [])

	const calculateROI = () => {
		const downtimeSavings = roiInputs.downtime * 1000 * 12 // $1000 per hour saved monthly
		const employeeSavings = roiInputs.employees * 500 * 12 // $500 per employee monthly
		const inventorySavings = roiInputs.inventory * 0.15 // 15% inventory optimization

		const totalSavings = downtimeSavings + employeeSavings + inventorySavings
		const systemCost = 50000 // Base system cost
		const roi = ((totalSavings - systemCost) / systemCost) * 100

		setRoiResults({
			savings: totalSavings,
			roi: Math.max(roi, 0),
		})
	}

	const kpiData = [
		{
			title: 'Ogólna Efektywność Urządzeń (OEE)',
			value: '87.3%',
			description: 'Monitoruj wydajność urządzeń w czasie rzeczywistym i identyfikuj wąskie gardła natychmiast.',
			improvement: '+23% vs poprzedni kwartał',
		},
		{
			title: 'Średni Czas Naprawy (MTTR)',
			value: '2.4h',
			description: 'Redukuj przestoje dzięki predykcyjnej konserwacji i szybkim protokołom reagowania.',
			improvement: '-45% redukcja czasu napraw',
		},
		{
			title: 'Czas Cyklu Produkcyjnego',
			value: '14.2min',
			description: 'Optymalizuj przepływ produkcji i eliminuj marnotrawstwo w procesach wytwórczych.',
			improvement: '-18% szybsza produkcja',
		},
		{
			title: 'Rotacja Zapasów',
			value: '8.7x',
			description: 'Maksymalizuj przepływ gotówki dzięki inteligentnemu zarządzaniu zapasami i prognozowaniu popytu.',
			improvement: '+31% efektywność zapasów',
		},
	]

	const bentoModules = [
		{
			title: 'Produkcja i OEE',
			description: 'Monitorowanie produkcji w czasie rzeczywistym z kompleksową analityką OEE',
			icon: 'construction',
			size: 'large', // 2x2
			color: 'bg-[#0D1117]',
			textColor: 'text-[#F0F6FC]',
		},
		{
			title: 'Finanse i Controlling',
			description: 'Kompleksowe zarządzanie finansami z automatycznym raportowaniem',
			icon: 'dollar',
			size: 'medium', // 1x1
			color: 'bg-[#F0F6FC]',
			textColor: 'text-[#0D1117]',
		},
		{
			title: 'Łańcuch Dostaw',
			description: 'Kompleksowa optymalizacja logistyki od końca do końca',
			icon: 'layers',
			size: 'medium', // 1x1
			color: 'bg-[#34D399]',
			textColor: 'text-[#0D1117]',
		},
		{
			title: 'Kontrola Jakości',
			description: 'Automatyczne zapewnienie jakości',
			icon: 'target',
			size: 'medium', // 1x1
			color: 'bg-[#F0F6FC]',
			textColor: 'text-[#0D1117]',
		},
		{
			title: 'HR i Płace',
			description: 'Kompleksowe zarządzanie zasobami ludzkimi',
			icon: 'users',
			size: 'medium', // 1x1
			color: 'bg-[#F0F6FC]',
			textColor: 'text-[#0D1117]',
		},
	]

	const implementationSteps = [
		{
			title: 'Odkrywanie i Analiza',
			description: 'Kompleksowa ocena Twoich obecnych systemów i procesów',
			duration: '2-3 tygodnie',
			icon: 'target',
		},
		{
			title: 'Konfiguracja Systemu',
			description: 'Niestandardowa konfiguracja dostosowana do Twoich specyficznych wymagań biznesowych',
			duration: '3-4 tygodnie',
			icon: 'cog',
		},
		{
			title: 'Migracja Danych',
			description: 'Bezpieczny transfer wszystkich istniejących danych bez strat',
			duration: '1-2 tygodnie',
			icon: 'database',
		},
		{
			title: 'Szkolenie Użytkowników',
			description: 'Kompleksowe programy szkoleniowe dla wszystkich poziomów użytkowników',
			duration: '2-3 tygodnie',
			icon: 'users',
		},
		{
			title: 'Uruchomienie',
			description: 'Płynne przejście do produkcji z pełnym wsparciem',
			duration: '1 tydzień',
			icon: 'bolt',
		},
		{
			title: 'Wsparcie Ciągłe',
			description: 'Wsparcie 24/7 i ciągła optymalizacja systemu',
			duration: 'Ciągłe',
			icon: 'shield',
		},
	]

	const testimonials = [
		{
			quote:
				'NEXORA.FLOW całkowicie zmienił naszą efektywność produkcji. Osiągnęliśmy 23% poprawę OEE w pierwszym kwartale.',
			author: 'Anna Kowalska',
			position: 'Dyrektor Produkcji',
			company: 'TechManufacturing Sp. z o.o.',
			metric: '23% poprawa OEE',
		},
		{
			quote: 'Możliwości raportowania finansowego są wybitne. Skróciliśmy czas zamknięcia miesiąca z 10 dni do 3 dni.',
			author: 'Piotr Nowak',
			position: 'Dyrektor Finansowy',
			company: 'Industrial Solutions Ltd.',
			metric: '70% szybsze raportowanie',
		},
		{
			quote:
				'Wdrożenie przebiegło płynnie, a ROI był widoczny już po 6 miesiącach. To najlepsza inwestycja, jaką poczyniliśmy od lat.',
			author: 'Maria Wiśniewska',
			position: 'Kierownik Operacyjny',
			company: 'Manufacturing Excellence',
			metric: '6-miesięczny ROI',
		},
	]

	return (
		<main className="overflow-x-hidden bg-[#F0F6FC]">
			<Navbar />

			{/* Hero Section - Centrum Dowodzenia */}
			<section ref={heroRef} className="relative min-h-screen flex items-center bg-[#0D1117] pt-24 md:pt-20">
				{/* Animated background grid */}
				<div className="absolute inset-0 opacity-10">
					<div
						className="absolute inset-0"
						style={{
							backgroundImage: `linear-gradient(rgba(52, 211, 153, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(52, 211, 153, 0.1) 1px, transparent 1px)`,
							backgroundSize: '50px 50px',
						}}></div>
				</div>

				<div className="container mx-auto px-4 md:px-8 relative z-10">
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
						{/* Left Content - 60% */}
						<div className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left">
							<h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-[#F0F6FC] leading-tight font-rubik">
								<span className="hero-word inline-block">Twoje</span>{' '}
								<span className="hero-word inline-block">Dane.</span> <br />
								<span className="hero-word inline-block">Twoje</span>{' '}
								<span className="hero-word inline-block">Decyzje.</span> <br />
								<span className="hero-word inline-block text-[#34D399]">Twoja</span>{' '}
								<span className="hero-word inline-block text-[#34D399]">Dominacja.</span>
							</h1>

							<p className="text-lg md:text-xl text-[#8B949E] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
								Zintegrowany system ERP dla liderów produkcji, którzy wymagają mierzalnego ROI. Przekształć złożone dane
								w strategiczną przewagę konkurencyjną.
							</p>

							<div className="flex flex-col sm:flex-row gap-4 pt-6 md:pt-8 justify-center lg:justify-start">
								<Button
									size="lg"
									className="bg-[#34D399] text-[#0D1117] hover:bg-[#34D399]/90 font-bold px-6 md:px-8 py-4 md:py-6 text-base md:text-lg border-2 border-[#34D399] transition-all duration-300 hover:scale-105 magnetic-button">
									Rozpocznij Demo
									<LineIcon name="arrow-right" className="w-5 h-5 md:w-6 md:h-6 ml-2" />
								</Button>
								<Button
									size="lg"
									variant="outline"
									className="border-2 border-[#34D399] text-[#34D399] hover:bg-[#34D399] hover:text-[#0D1117] font-bold px-6 md:px-8 py-4 md:py-6 text-base md:text-lg transition-all duration-300 hover:scale-105">
									Oblicz ROI
								</Button>
							</div>
						</div>

						{/* Right Content - 40% - 3D Visualization - Hidden on mobile */}
						<div className="lg:col-span-5 relative hidden lg:block">
							<div className="relative w-full h-[400px] lg:h-[500px] flex items-center justify-center">
								{/* Abstract 3D-style data visualization */}
								<div className="relative w-80 h-80 animate-pulse">
									<div className="absolute inset-0 border-4 border-[#34D399] rotate-45 transform-gpu"></div>
									<div className="absolute inset-8 border-4 border-[#34D399]/60 rotate-12 transform-gpu"></div>
									<div className="absolute inset-16 border-4 border-[#34D399]/30 -rotate-6 transform-gpu"></div>
									<div className="absolute inset-0 flex items-center justify-center">
										<LineIcon
											name="database"
											className="text-[#34D399] w-24 h-24 animate-spin"
											style={{ animationDuration: '20s' }}
										/>
									</div>
									{/* Floating data points */}
									<div className="absolute top-4 right-4 w-4 h-4 bg-[#34D399] rounded-full animate-bounce"></div>
									<div
										className="absolute bottom-8 left-8 w-3 h-3 bg-[#34D399]/70 rounded-full animate-bounce"
										style={{ animationDelay: '0.5s' }}></div>
									<div
										className="absolute top-1/2 left-4 w-2 h-2 bg-[#34D399]/50 rounded-full animate-bounce"
										style={{ animationDelay: '1s' }}></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Social Proof - Infinite Scroll */}
			<section className="py-12 md:py-16 bg-[#0D1117] overflow-hidden">
				<div className="mb-6 md:mb-8 px-4">
					<h2 className="text-xl md:text-2xl font-bold text-[#F0F6FC] text-center">Zwiększamy wydajność w:</h2>
				</div>
				<div className="relative">
					<div className="flex animate-scroll space-x-12">
						{[
							'TechManufacturing',
							'Industrial Solutions',
							'Manufacturing Excellence',
							'Production Leaders',
							'Factory Innovations',
							'Smart Manufacturing',
							'TechManufacturing',
							'Industrial Solutions',
							'Manufacturing Excellence',
						].map((client, idx) => (
							<div
								key={idx}
								className="flex-shrink-0 px-4 md:px-8 py-3 md:py-4 bg-[#21262D] border border-[#34D399]/20 min-w-[160px] md:min-w-[200px] flex items-center justify-center">
								<span className="text-sm md:text-lg font-medium text-[#F0F6FC]">{client}</span>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CFO Dilemma Section */}
			<section className="py-16 md:py-32 bg-[#F0F6FC]">
				<div className="container mx-auto px-4 md:px-8 text-center">
					<h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#0D1117] mb-12 md:mb-16 font-rubik leading-tight">
						Nawigowanie w niepewności wymaga więcej niż instynktu.
					</h2>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
						<div className="space-y-3 md:space-y-4">
							<div className="text-4xl md:text-6xl font-bold text-[#34D399] counter" data-target="39">
								0
							</div>
							<div className="text-base md:text-xl text-[#0D1117] font-medium">
								% wskazuje na niepewność ekonomiczną
							</div>
						</div>
						<div className="space-y-3 md:space-y-4">
							<div className="text-4xl md:text-6xl font-bold text-[#34D399] counter" data-target="33">
								0
							</div>
							<div className="text-base md:text-xl text-[#0D1117] font-medium">
								% zmaga się z zarządzaniem łańcuchem dostaw
							</div>
						</div>
						<div className="space-y-3 md:space-y-4">
							<div className="text-4xl md:text-6xl font-bold text-[#34D399] counter" data-target="41">
								0
							</div>
							<div className="text-base md:text-xl text-[#0D1117] font-medium">
								% postrzega cyfryzację jako kluczową szansę
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Bento Grid - Key Modules */}
			<section className="py-32 bg-[#0D1117]">
				<div className="container mx-auto px-8">
					<div className="text-center mb-20">
						<h2 className="text-5xl lg:text-7xl font-bold text-[#F0F6FC] mb-6 font-rubik">
							Twój Zintegrowany <span className="text-[#34D399]">Ekosystem</span>
						</h2>
						<p className="text-xl text-[#8B949E] max-w-3xl mx-auto">
							Asymetryczna architektura modułów zaprojektowana dla maksymalnej efektywności
						</p>
					</div>

					{/* Asymmetric Bento Grid */}
					<div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
						{bentoModules.map((module, idx) => (
							<div
								key={idx}
								className={`
                  ${module.size === 'large' ? 'md:col-span-2 md:row-span-2' : 'md:col-span-1'}
                  ${module.color} ${module.textColor} p-8 border-4 border-[#34D399] 
                  hover:scale-105 transition-all duration-300 cursor-pointer group
                  ${module.size === 'large' ? 'min-h-[400px]' : 'min-h-[200px]'}
                  flex flex-col justify-between
                `}
								style={{
									transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
								}}
								onMouseMove={e => {
									const rect = e.currentTarget.getBoundingClientRect()
									const x = e.clientX - rect.left
									const y = e.clientY - rect.top
									const centerX = rect.width / 2
									const centerY = rect.height / 2
									const rotateX = ((y - centerY) / centerY) * -10
									const rotateY = ((x - centerX) / centerX) * 10
									e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
								}}
								onMouseLeave={e => {
									e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)'
								}}>
								<div>
									<LineIcon
										name={module.icon}
										className={`w-16 h-16 mb-6 group-hover:scale-110 transition-transform duration-300 ${module.textColor}`}
									/>
									<h3 className={`text-2xl font-bold mb-4 font-rubik ${module.textColor}`}>{module.title}</h3>
									<p
										className={`${
											module.textColor === 'text-[#F0F6FC]' ? 'text-[#8B949E]' : 'text-[#21262D]'
										} leading-relaxed`}>
										{module.description}
									</p>
								</div>
								<LineIcon
									name="arrow-right"
									className={`w-6 h-6 mt-4 group-hover:translate-x-2 transition-transform duration-300 ${module.textColor}`}
								/>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* KPI Dashboard - Sticky Scroll */}
			<section className="py-32 bg-[#F0F6FC]">
				<div className="container mx-auto px-8">
					<div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
						{/* Sticky Dashboard Mockup - Larger */}
						<div className="lg:col-span-3 lg:sticky lg:top-32">
							<div className="bg-[#0D1117] border-4 border-[#34D399] p-6 min-h-[600px]">
								<div className="mb-6">
									<h3 className="text-2xl font-bold text-[#F0F6FC] mb-2">Dashboard Produkcji</h3>
									<p className="text-[#8B949E]">Monitorowanie KPI w czasie rzeczywistym</p>
								</div>

								{/* KPI Cards - Larger */}
								<div className="grid grid-cols-2 gap-4 mb-6">
									{kpiData.map((kpi, idx) => (
										<div
											key={idx}
											className={`p-4 border-2 transition-all duration-300 hover:scale-105 ${
												activeKPI === idx ? 'border-[#34D399] bg-[#34D399]/10' : 'border-[#21262D] bg-[#21262D]'
											}`}>
											<div className="text-2xl font-bold text-[#34D399] mb-2">{kpi.value}</div>
											<div className="text-sm text-[#8B949E] leading-tight">
												{kpi.title.split(' ').slice(0, 3).join(' ')}
											</div>
											<div className="text-xs text-[#8B949E] mt-1">{kpi.title.split(' ').slice(3).join(' ')}</div>
										</div>
									))}
								</div>

								{/* Chart Placeholder - Larger */}
								<div className="h-48 bg-[#21262D] border-2 border-[#34D399]/20 flex items-center justify-center mb-4">
									<LineIcon name="bar-chart" className="w-16 h-16 text-[#34D399]/50" />
								</div>

								{/* Additional Dashboard Elements */}
								<div className="grid grid-cols-3 gap-3">
									<div className="bg-[#21262D] p-3 border border-[#34D399]/20">
										<div className="text-base font-bold text-[#34D399]">98.2%</div>
										<div className="text-xs text-[#8B949E]">Czas pracy</div>
									</div>
									<div className="bg-[#21262D] p-3 border border-[#34D399]/20">
										<div className="text-base font-bold text-[#34D399]">1.2M</div>
										<div className="text-xs text-[#8B949E]">Jednostek/Miesiąc</div>
									</div>
									<div className="bg-[#21262D] p-3 border border-[#34D399]/20">
										<div className="text-base font-bold text-[#34D399]">€2.1M</div>
										<div className="text-xs text-[#8B949E]">Oszczędności</div>
									</div>
								</div>
							</div>
						</div>

						{/* Scrolling Content - Smaller */}
						<div className="lg:col-span-2 space-y-10">
							{kpiData.map((kpi, idx) => (
								<div key={idx} className="space-y-3" onMouseEnter={() => setActiveKPI(idx)}>
									<h3 className="text-2xl font-bold text-[#0D1117] font-rubik leading-tight">{kpi.title}</h3>
									<p className="text-base text-[#21262D] leading-relaxed">{kpi.description}</p>
									<div className="text-base font-bold text-[#34D399] bg-[#34D399]/10 px-3 py-1 inline-block border-l-4 border-[#34D399]">
										{kpi.improvement}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* ROI Calculator */}
			<section className="py-32 bg-[#0D1117]">
				<div className="container mx-auto px-8">
					<div className="text-center mb-20">
						<h2 className="text-5xl lg:text-7xl font-bold text-[#F0F6FC] mb-6 font-rubik">
							Silnik <span className="text-[#34D399]">ROI</span>
						</h2>
						<p className="text-xl text-[#8B949E] max-w-3xl mx-auto">Oblicz swoją przewagę konkurencyjną</p>
					</div>

					<div className="max-w-4xl mx-auto bg-[#F0F6FC] border-4 border-[#34D399] p-12">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
							{/* Input Form */}
							<div className="space-y-6">
								<h3 className="text-2xl font-bold text-[#0D1117] mb-6">Wprowadź swoje dane:</h3>

								<div>
									<label className="block text-sm font-medium text-[#0D1117] mb-2">
										Godziny przestojów miesięcznie
									</label>
									<input
										type="number"
										value={roiInputs.downtime}
										onChange={e => setRoiInputs({ ...roiInputs, downtime: parseInt(e.target.value) || 0 })}
										className="w-full p-4 border-2 border-[#0D1117] bg-white text-[#0D1117] text-lg"
										placeholder="np. 20"
									/>
								</div>

								<div>
									<label className="block text-sm font-medium text-[#0D1117] mb-2">
										Liczba pracowników działu finansów
									</label>
									<input
										type="number"
										value={roiInputs.employees}
										onChange={e => setRoiInputs({ ...roiInputs, employees: parseInt(e.target.value) || 0 })}
										className="w-full p-4 border-2 border-[#0D1117] bg-white text-[#0D1117] text-lg"
										placeholder="np. 5"
									/>
								</div>

								<div>
									<label className="block text-sm font-medium text-[#0D1117] mb-2">Wartość zapasów (PLN)</label>
									<input
										type="number"
										value={roiInputs.inventory}
										onChange={e => setRoiInputs({ ...roiInputs, inventory: parseInt(e.target.value) || 0 })}
										className="w-full p-4 border-2 border-[#0D1117] bg-white text-[#0D1117] text-lg"
										placeholder="np. 500000"
									/>
								</div>

								<Button
									onClick={calculateROI}
									className="w-full bg-[#34D399] text-[#0D1117] hover:bg-[#34D399]/90 font-bold text-lg py-6">
									Oblicz ROI
								</Button>
							</div>

							{/* Results */}
							<div className="space-y-6">
								<h3 className="text-2xl font-bold text-[#0D1117] mb-6">Prognozowane rezultaty:</h3>

								<div className="space-y-4">
									<div className="p-6 bg-[#34D399]/10 border-2 border-[#34D399]">
										<div className="text-3xl font-bold text-[#34D399] mb-2">
											{roiResults.savings.toLocaleString('pl-PL')} PLN
										</div>
										<div className="text-[#0D1117]">Roczne oszczędności</div>
									</div>

									<div className="p-6 bg-[#34D399]/10 border-2 border-[#34D399]">
										<div className="text-3xl font-bold text-[#34D399] mb-2">{roiResults.roi.toFixed(1)}%</div>
										<div className="text-[#0D1117]">Zwrot z inwestycji (ROI)</div>
									</div>

									{roiResults.savings > 0 && (
										<div className="p-4 bg-[#0D1117] text-[#F0F6FC]">
											<p className="text-sm">
												* Kalkulacja oparta na średnich wskaźnikach branżowych i doświadczeniu z wdrożeń
											</p>
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Implementation Roadmap - Horizontal Scroll */}
			<section className="py-32 bg-[#F0F6FC]">
				<div className="container mx-auto px-8 mb-20">
					<h2 className="text-5xl lg:text-7xl font-bold text-[#0D1117] text-center mb-6 font-rubik">
						Mapa Drogowa <span className="text-[#34D399]">Wdrożenia</span>
					</h2>
					<p className="text-xl text-[#21262D] text-center max-w-3xl mx-auto">
						Przejrzysta ścieżka do sukcesu w 6 etapach
					</p>
				</div>

				<div
					className="overflow-x-auto pb-4 scrollbar-hide"
					style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
					<div
						className="flex space-x-8 px-8 cursor-grab active:cursor-grabbing"
						style={{ width: 'max-content' }}
						onMouseDown={e => {
							const container = e.currentTarget.parentElement
							if (!container) return

							const startX = e.pageX - container.offsetLeft
							const scrollLeft = container.scrollLeft
							let isDown = true

							const handleMouseMove = (e: MouseEvent) => {
								if (!isDown) return
								e.preventDefault()
								const x = e.pageX - container.offsetLeft
								const walk = (x - startX) * 2
								container.scrollLeft = scrollLeft - walk
							}

							const handleMouseUp = () => {
								isDown = false
								document.removeEventListener('mousemove', handleMouseMove)
								document.removeEventListener('mouseup', handleMouseUp)
								e.currentTarget.classList.remove('cursor-grabbing')
							}

							document.addEventListener('mousemove', handleMouseMove)
							document.addEventListener('mouseup', handleMouseUp)
							e.currentTarget.classList.add('cursor-grabbing')
						}}>
						{implementationSteps.map((step, idx) => (
							<div
								key={idx}
								className="flex-shrink-0 w-[400px] h-[500px] bg-[#0D1117] border-4 border-[#34D399] p-8 transition-all duration-300 select-none">
								<div className="flex flex-col h-full justify-between">
									<div>
										<div className="text-6xl font-bold text-[#34D399] mb-4">
											{(idx + 1).toString().padStart(2, '0')}
										</div>
										<LineIcon name={step.icon} className="w-16 h-16 text-[#34D399] mb-6" />
										<h3 className="text-2xl font-bold text-[#F0F6FC] mb-4 font-rubik">{step.title}</h3>
										<p className="text-[#8B949E] leading-relaxed mb-6">{step.description}</p>
									</div>
									<div className="text-[#34D399] font-bold">Czas trwania: {step.duration}</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Success Stories - Masonry */}
			<section className="py-32 bg-[#0D1117]">
				<div className="container mx-auto px-8">
					<div className="text-center mb-20">
						<h2 className="text-5xl lg:text-7xl font-bold text-[#F0F6FC] mb-6 font-rubik">
							Historie <span className="text-[#34D399]">Sukcesu</span>
						</h2>
						<p className="text-xl text-[#8B949E] max-w-3xl mx-auto">Mierzalne rezultaty od liderów branży</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
						{testimonials.map((testimonial, idx) => (
							<div
								key={idx}
								className="bg-[#F0F6FC] border-4 border-[#34D399] p-8 hover:scale-105 transition-all duration-300"
								style={{ animationDelay: `${idx * 0.1}s` }}>
								<div className="text-4xl text-[#34D399] mb-4 font-bold">{testimonial.metric}</div>
								<p className="text-lg text-[#0D1117] mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
								<div>
									<p className="font-bold text-[#0D1117]">{testimonial.author}</p>
									<p className="text-[#21262D]">{testimonial.position}</p>
									<p className="text-[#34D399] font-bold">{testimonial.company}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Final CTA */}
			<section className="py-32 bg-[#34D399] relative overflow-hidden">
				{/* Morphing background shapes */}
				<div className="absolute inset-0">
					<div className="absolute top-20 left-20 w-64 h-64 bg-[#0D1117]/10 rotate-45 animate-pulse"></div>
					<div
						className="absolute bottom-20 right-20 w-48 h-48 bg-[#0D1117]/10 -rotate-12 animate-pulse"
						style={{ animationDelay: '1s' }}></div>
				</div>

				<div className="container mx-auto px-8 text-center relative z-10">
					<h2 className="text-5xl lg:text-7xl font-bold text-[#0D1117] mb-6 font-rubik">
						Gotowy, by zbudować odporne przedsiębiorstwo?
					</h2>
					<p className="text-xl text-[#0D1117]/80 mb-12 max-w-3xl mx-auto">
						Dołącz do liderów, którzy już przekształcili swoje dane w przewagę konkurencyjną
					</p>

					<div className="flex flex-wrap gap-4 justify-center">
						<Button
							size="lg"
							className="bg-[#0D1117] text-[#F0F6FC] hover:bg-[#0D1117]/90 font-bold px-8 py-6 text-lg border-2 border-[#0D1117] transition-all duration-300 hover:scale-105">
							Zarezerwuj Demo
							<LineIcon name="arrow-right" className="w-6 h-6 ml-2" />
						</Button>
						<Button
							size="lg"
							variant="outline"
							className="border-2 border-[#0D1117] text-[#0D1117] hover:bg-[#0D1117] hover:text-[#F0F6FC] font-bold px-8 py-6 text-lg transition-all duration-300 hover:scale-105">
							Porozmawiaj z ekspertem
						</Button>
					</div>
				</div>
			</section>
		</main>
	)
}

export default NexoraFlow
