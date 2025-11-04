import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { LineIcon } from '@/components/ui/lineicon'
import { useNavigate, useLocation } from 'react-router-dom'

export const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false)
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const navigate = useNavigate()
	const location = useLocation()

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50)
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const navItems = [
		{ label: 'Strona główna', href: '/', type: 'route' },
		{ label: 'NEXORA.FLOW', href: '/nexora-flow', type: 'route' },
		{ label: 'NEXORA.CIVIC', href: '/nexora-civic', type: 'route' },
		{ label: 'O nas', href: '#about', type: 'section' },
		{ label: 'Case Studies', href: '#case-studies', type: 'section' },
		{ label: 'Zespół', href: '#team', type: 'section' },
		{ label: 'Kontakt', href: '#contact', type: 'section' },
	]

	const handleNavigation = (item: (typeof navItems)[0]) => {
		if (item.type === 'route') {
			if (item.href === '/') {
				// For home page button, always go to home and scroll to top
				navigate('/')
				setTimeout(() => {
					window.scrollTo({ top: 0, behavior: 'smooth' })
				}, 100)
			} else {
				navigate(item.href)
			}
		} else {
			// If we're not on the home page, go to home first
			if (location.pathname !== '/') {
				navigate('/' + item.href)
			} else {
				const element = document.querySelector(item.href)
				if (element) {
					element.scrollIntoView({ behavior: 'smooth' })
				}
			}
		}
		setIsMobileMenuOpen(false)
	}

	const handleLogoClick = () => {
		if (location.pathname === '/') {
			// If on home page, scroll to top
			window.scrollTo({ top: 0, behavior: 'smooth' })
		} else {
			// If on other page, navigate to home
			navigate('/')
		}
	}

	return (
		<>
			<nav
				className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
					isScrolled
						? 'bg-white/95 backdrop-blur-md border-b border-luxury-forest-green/20 shadow-sm'
						: 'bg-white/90 backdrop-blur-sm'
				}`}>
				<div className="container mx-auto px-8">
					<div className="flex items-center justify-between h-20">
						{/* Logo */}
						<div className="cursor-pointer" onClick={handleLogoClick}>
							<span className="text-2xl font-bold text-luxury-forest-green">NEXORA</span>
						</div>

						{/* Desktop Navigation */}
						<div className="hidden lg:flex items-center space-x-8">
							{navItems.map(item => (
								<button
									key={item.label}
									onClick={() => handleNavigation(item)}
									className="text-gray-700 hover:text-luxury-forest-green transition-colors duration-300 font-medium">
									{item.label}
								</button>
							))}
						</div>

						{/* CTA Button */}
						<div className="hidden lg:block">
							<Button className="bg-luxury-forest-green text-warm-white hover:bg-luxury-forest-green/90 font-bold transition-all duration-300 hover:scale-105 border-2 border-luxury-forest-green">
								Bezpłatna konsultacja
							</Button>
						</div>

						{/* Mobile Menu Button */}
						<button
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							className="lg:hidden text-luxury-forest-green p-2">
							{isMobileMenuOpen ? <LineIcon name="close" size="xl" /> : <LineIcon name="menu" size="xl" />}
						</button>
					</div>
				</div>
			</nav>

			{/* Mobile Menu */}
			<div
				className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
					isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
				}`}>
				<div className="absolute inset-0 bg-white/95 backdrop-blur-md"></div>
				<div className="relative flex flex-col items-center justify-center h-full space-y-8">
					{navItems.map(item => (
						<button
							key={item.label}
							onClick={() => handleNavigation(item)}
							className="text-2xl text-gray-700 hover:text-luxury-forest-green transition-colors duration-300 font-medium">
							{item.label}
						</button>
					))}
					<Button
						className="bg-luxury-forest-green text-warm-white hover:bg-luxury-forest-green/90 font-bold mt-8 border-2 border-luxury-forest-green"
						size="lg">
						Bezpłatna konsultacja
					</Button>
				</div>
			</div>
		</>
	)
}
