import { useEffect, useRef } from 'react'
import { Navbar } from '@/components/sections/Navbar'
import { Hero } from '@/components/sections/Hero'
import { SocialProof } from '@/components/sections/SocialProof'
import { CoreOfferings } from '@/components/sections/CoreOfferings'
import { NexoraDifference } from '@/components/sections/NexoraDifference'
import { BlogPreview } from '@/components/sections/BlogPreview'

import { DeepDiveFlow } from '@/components/sections/DeepDiveFlow'
import { DeepDiveCivic } from '@/components/sections/DeepDiveCivic'
import { OurHistory } from '@/components/sections/OurHistory'
import { CaseStudies } from '@/components/sections/CaseStudies'
import { Testimonials } from '@/components/sections/Testimonials'
import { VideoDivider } from '@/components/sections/VideoDivider'
import { ValuesCSR } from '@/components/sections/ValuesCSR'
//import { OurTeam } from '@/components/sections/OurTeam'
import { FAQ } from '@/components/sections/FAQ'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { Footer } from '@/components/sections/Footer'
import Lenis from '@studio-freight/lenis'

const Index = () => {
	const lenisRef = useRef<Lenis | null>(null)

	useEffect(() => {
		// Initialize Lenis smooth scroll
		const lenis = new Lenis({
			lerp: 0.1,
			smoothWheel: true,
			wheelMultiplier: 1,
			touchMultiplier: 2,
		})

		lenisRef.current = lenis
		// Make Lenis available globally for ScrollToTop component
		;(window as any).lenis = lenis

		function raf(time: number) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}

		requestAnimationFrame(raf)

		// Add Google Fonts
		const link = document.createElement('link')
		link.href =
			'https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&family=Sansation:wght@400;700&display=swap'
		link.rel = 'stylesheet'
		document.head.appendChild(link)

		return () => {
			lenis.destroy()
			;(window as any).lenis = null
		}
	}, [])

	return (
		<main className="overflow-x-hidden">
			<Navbar />
			<Hero />
			<SocialProof />
			<CoreOfferings />
			<BlogPreview />
			<NexoraDifference />
			<DeepDiveFlow />
			<DeepDiveCivic />
			<OurHistory />
			<CaseStudies />
			<Testimonials />
			<VideoDivider />
			<ValuesCSR />
			{/* <OurTeam /> */}
			<FAQ />
			<FinalCTA />
			<Footer />
		</main>
	)
}

export default Index
