import { useLocation, Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { LineIcon } from '@/components/ui/lineicon'
import { gsap } from 'gsap'
import Lenis from '@studio-freight/lenis'

const NotFound = () => {
	const location = useLocation()
	const containerRef = useRef<HTMLDivElement>(null)
	const glitchRef = useRef<HTMLDivElement>(null)
	const lenisRef = useRef<Lenis | null>(null)

	useEffect(() => {
		console.error('404 Error: User attempted to access non-existent route:', location.pathname)

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

		// Entrance animations
		const tl = gsap.timeline()

		tl.fromTo(
			'.error-code',
			{ scale: 0, rotation: -180, opacity: 0 },
			{ scale: 1, rotation: 0, opacity: 1, duration: 1, ease: 'back.out(1.7)' }
		)
			.fromTo('.error-title', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, '-=0.5')
			.fromTo(
				'.error-description',
				{ y: 30, opacity: 0 },
				{ y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
				'-=0.3'
			)
			.fromTo(
				'.action-buttons',
				{ y: 40, opacity: 0 },
				{ y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.1 },
				'-=0.2'
			)
			.fromTo(
				'.helpful-links',
				{ y: 30, opacity: 0 },
				{ y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', stagger: 0.1 },
				'-=0.1'
			)

		// Glitch effect for 404
		const glitchAnimation = () => {
			if (glitchRef.current) {
				gsap.to(glitchRef.current, {
					x: Math.random() * 4 - 2,
					y: Math.random() * 4 - 2,
					duration: 0.1,
					ease: 'power2.inOut',
					onComplete: () => {
						gsap.to(glitchRef.current, {
							x: 0,
							y: 0,
							duration: 0.1,
						})
					},
				})
			}
		}

		// Random glitch effect
		const glitchInterval = setInterval(() => {
			if (Math.random() > 0.7) {
				glitchAnimation()
			}
		}, 2000)

		// Floating animation for icons
		gsap.to('.floating-icon', {
			y: -10,
			duration: 2,
			ease: 'power2.inOut',
			yoyo: true,
			repeat: -1,
			stagger: 0.3,
		})

		return () => {
			clearInterval(glitchInterval)
			lenis.destroy()
		}
	}, [location.pathname])

	const quickLinks = [
		{ label: 'Strona główna', href: '/', icon: 'home' },
		{ label: 'NEXORA.FLOW', href: '/nexora-flow', icon: 'bolt' },
		{ label: 'NEXORA.CIVIC', href: '/nexora-civic', icon: 'files' },
		{ label: 'Blog', href: '/blog', icon: 'search' },
	]

	return (
		<div
			ref={containerRef}
			className="min-h-screen bg-gray-50 flex items-center justify-center overflow-hidden relative">
			{/* Background Pattern */}
			<div className="absolute inset-0 opacity-5">
				<div
					className="absolute inset-0"
					style={{
						backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
					}}
				/>
			</div>

			<div className="max-w-4xl mx-auto px-8 text-center relative z-10">
				{/* Floating Icons */}
				<div className="absolute -top-20 -left-20 floating-icon">
					<LineIcon name="warning" className="w-16 h-16 text-luxury-forest-green/20" />
				</div>
				<div className="absolute -top-10 -right-32 floating-icon">
					<LineIcon name="search" className="w-12 h-12 text-luxury-forest-green/20" />
				</div>
				<div className="absolute -bottom-16 -left-32 floating-icon">
					<LineIcon name="files" className="w-14 h-14 text-luxury-forest-green/20" />
				</div>

				{/* Main Error Content */}
				<div className="space-y-12">
					{/* 404 Code with Glitch Effect */}
					<div className="relative">
						<div
							ref={glitchRef}
							className="error-code text-[12rem] lg:text-[16rem] font-bold text-luxury-forest-green font-rubik leading-none relative">
							404
							{/* Glitch layers */}
							<div
								className="absolute inset-0 text-red-500 opacity-30 mix-blend-multiply"
								style={{ transform: 'translate(-2px, 2px)' }}>
								404
							</div>
							<div
								className="absolute inset-0 text-blue-500 opacity-30 mix-blend-multiply"
								style={{ transform: 'translate(2px, -2px)' }}>
								404
							</div>
						</div>
					</div>

					{/* Error Title */}
					<div className="space-y-6">
						<h1 className="error-title text-4xl lg:text-6xl font-bold text-gray-900 font-rubik">
							Strona <span className="text-luxury-forest-green">nie istnieje</span>
						</h1>

						<p className="error-description text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
							Wygląda na to, że zabłądziłeś w cyfrowej przestrzeni. Strona, której szukasz, została przeniesiona,
							usunięta lub nigdy nie istniała.
						</p>

						{/* Current Path Display */}
						<div className="bg-white border-4 border-gray-900 p-4 max-w-lg mx-auto">
							<p className="text-sm text-gray-500 mb-2">Próbowałeś uzyskać dostęp do:</p>
							<code className="text-luxury-forest-green font-mono text-lg font-bold break-all">
								{location.pathname}
							</code>
						</div>
					</div>

					{/* Action Buttons */}
					<div className="action-buttons flex flex-col sm:flex-row gap-6 justify-center items-center">
						<Link to="/">
							<Button
								size="lg"
								className="bg-luxury-forest-green text-white hover:bg-luxury-forest-green/90 font-bold px-8 py-6 text-lg border-2 border-luxury-forest-green transition-all duration-300 hover:scale-105">
								<LineIcon name="home" className="w-6 h-6 mr-2" />
								Wróć do strony głównej
							</Button>
						</Link>

						<Button
							size="lg"
							variant="outline"
							onClick={() => window.history.back()}
							className="bg-white text-luxury-forest-green border-2 border-luxury-forest-green hover:bg-luxury-forest-green hover:text-white font-bold px-8 py-6 text-lg transition-all duration-300 hover:scale-105">
							<LineIcon name="arrow-left" className="w-6 h-6 mr-2" />
							Wróć do poprzedniej strony
						</Button>
					</div>

					{/* Quick Links */}
					<div className="helpful-links">
						<h3 className="text-2xl font-bold text-gray-900 mb-8 font-rubik">Może szukasz czegoś z tego?</h3>

						<div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
							{quickLinks.map((link, idx) => {
								return (
									<Link
										key={link.href}
										to={link.href}
										className="helpful-links bg-white border-4 border-gray-900 hover:border-luxury-forest-green p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 group">
										<LineIcon
											name={link.icon}
											className="w-8 h-8 text-luxury-forest-green mx-auto mb-3 group-hover:scale-110 transition-transform duration-300"
										/>
										<p className="font-bold text-gray-900 group-hover:text-luxury-forest-green transition-colors duration-300">
											{link.label}
										</p>
									</Link>
								)
							})}
						</div>
					</div>

					{/* Contact Info */}
					<div className="helpful-links bg-luxury-forest-green border-4 border-luxury-forest-green p-8 max-w-2xl mx-auto">
						<h4 className="text-2xl font-bold text-white mb-4 font-rubik">
							Nadal nie możesz znaleźć tego, czego szukasz?
						</h4>
						<p className="text-white/90 mb-6">
							Skontaktuj się z naszym zespołem - chętnie pomożemy Ci znaleźć właściwą informację.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<a
								href="mailto:kontakt@nexora.pl"
								className="bg-white text-luxury-forest-green hover:bg-white/90 font-bold px-6 py-3 transition-all duration-300 hover:scale-105 border-2 border-white">
								kontakt@nexora.pl
							</a>
							<a
								href="tel:+48323538800"
								className="bg-white text-luxury-forest-green hover:bg-white/90 font-bold px-6 py-3 transition-all duration-300 hover:scale-105 border-2 border-white">
								+48 32 353 88 00
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default NotFound
