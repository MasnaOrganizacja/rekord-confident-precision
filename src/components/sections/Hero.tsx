import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useNavigate } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger)

export const Hero = () => {
	const heroRef = useRef<HTMLElement>(null)
	const layer1Ref = useRef<HTMLDivElement>(null)
	const layer2Ref = useRef<HTMLDivElement>(null)
	const layer3Ref = useRef<HTMLDivElement>(null)
	const navigate = useNavigate()

	useEffect(() => {
		if (!heroRef.current) return

		// Multi-layer parallax effect
		if (layer1Ref.current) {
			gsap.to(layer1Ref.current, {
				y: 200,
				ease: 'none',
				scrollTrigger: {
					trigger: heroRef.current,
					start: 'top top',
					end: 'bottom top',
					scrub: 1,
				},
			})
		}

		if (layer2Ref.current) {
			gsap.to(layer2Ref.current, {
				y: 100,
				ease: 'none',
				scrollTrigger: {
					trigger: heroRef.current,
					start: 'top top',
					end: 'bottom top',
					scrub: 1,
				},
			})
		}

		if (layer3Ref.current) {
			gsap.to(layer3Ref.current, {
				y: 50,
				ease: 'none',
				scrollTrigger: {
					trigger: heroRef.current,
					start: 'top top',
					end: 'bottom top',
					scrub: 1,
				},
			})
		}

		// Text reveal animation
		const words = heroRef.current.querySelectorAll('.hero-word')
		gsap.fromTo(
			words,
			{
				y: 30,
				opacity: 0,
			},
			{
				y: 0,
				opacity: 1,
				stagger: 0.05,
				duration: 0.8,
				ease: 'power3.out',
			}
		)
	}, [])

	return (
		<section
			id="home"
			ref={heroRef}
			className="relative min-h-screen flex items-center overflow-hidden bg-white  md:pt-0">
			{/* Parallax Background Layers - Hidden on mobile */}
			<div ref={layer1Ref} className="parallax-layer absolute inset-0 opacity-10 hidden lg:block">
				<div className="absolute top-20 left-20 w-96 h-96 border-4 border-luxury-forest-green rotate-12"></div>
			</div>
			<div ref={layer2Ref} className="parallax-layer absolute inset-0 opacity-15 hidden lg:block">
				<div className="absolute bottom-32 right-32 w-72 h-72 border-4 border-luxury-forest-green -rotate-6"></div>
			</div>
			<div ref={layer3Ref} className="parallax-layer absolute inset-0 opacity-8 hidden lg:block">
				<div className="absolute top-1/2 left-1/2 w-64 h-64 border-2 border-gray-300 rotate-45"></div>
			</div>

			<div className="container mx-auto px-8 relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
					{/* Left Content - 55% */}
					<div className="lg:col-span-7 space-y-8 text-center lg:text-left">
						<h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-gray-900 leading-tight">
							<span className="hero-word inline-block">35</span> <span className="hero-word inline-block">Lat</span>{' '}
							<span className="hero-word inline-block">Innowacji.</span> <br />
							<span className="hero-word inline-block text-luxury-forest-green">Oprogramowanie,</span>{' '}
							<span className="hero-word inline-block">Które</span>{' '}
							<span className="hero-word inline-block">Rozumie</span>{' '}
							<span className="hero-word inline-block text-luxury-forest-green">Ludzi.</span>
						</h1>

						<p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
							Jesteśmy liderem w produkcji systemów zarządzania dla biznesu i administracji publicznej w Polsce. Zaufaj
							partnerowi, który napędza cyfrową transformację.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
							<Button
								size="lg"
								onClick={() => navigate('/nexora-flow')}
								className="bg-luxury-forest-green text-white hover:bg-luxury-forest-green/90 font-bold px-8 py-6 text-lg border-2 border-luxury-forest-green transition-all duration-300 hover:scale-105 magnetic-button">
								Poznaj NEXORA.FLOW
							</Button>
							<Button
								size="lg"
								variant="outline"
								onClick={() => navigate('/nexora-civic')}
								className="border-2 border-luxury-forest-green text-luxury-forest-green hover:bg-luxury-forest-green hover:text-white font-bold px-8 py-6 text-lg transition-all duration-300 hover:scale-105 magnetic-button">
								Odkryj NEXORA.CIVIC
							</Button>
						</div>
					</div>

					{/* Right Content - 45% - Hidden on mobile */}
					<div className="lg:col-span-5 relative hidden lg:block">
						<div className="relative w-full h-[500px] flex items-center justify-center">
							{/* Abstract 3D-style geometric shape */}
							<div className="relative w-80 h-80 animate-float">
								<div className="absolute inset-0 border-4 border-luxury-forest-green rotate-45 transform-gpu"></div>
								<div className="absolute inset-8 border-4 border-luxury-forest-green/60 rotate-12 transform-gpu"></div>
								<div className="absolute inset-16 border-4 border-luxury-forest-green/30 -rotate-6 transform-gpu"></div>
								<div className="absolute inset-0 flex items-center justify-center">
									<div className="text-luxury-forest-green text-9xl font-bold opacity-20">35</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
