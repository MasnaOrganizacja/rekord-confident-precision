import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { LineIcon } from '@/components/ui/lineicon'
import { useNavigate, useLocation } from 'react-router-dom'

export const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const [isScrolled, setIsScrolled] = useState(false)
	const [isVisible, setIsVisible] = useState(true)
	const [lastScrollY, setLastScrollY] = useState(0)
	const navigate = useNavigate()
	const location = useLocation()

	// Scroll to top when route changes
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}, [location.pathname])

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY
			
			setIsScrolled(currentScrollY > 50)
			
			// Show/hide navbar based on scroll direction
			if (currentScrollY > lastScrollY && currentScrollY > 100) {
				// Scrolling down & past 100px - hide navbar
				setIsVisible(false)
			} else if (currentScrollY < lastScrollY || currentScrollY <= 100) {
				// Scrolling up or near top - show navbar
				setIsVisible(true)
			}
			
			setLastScrollY(currentScrollY)
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [lastScrollY])

	const navItems = [
		{ label: 'Strona główna', href: '/', type: 'route' },
		{ label: 'NEXORA.FLOW', href: '/nexora-flow', type: 'route' },
		{ label: 'NEXORA.CIVIC', href: '/nexora-civic', type: 'route' },
	]

	const isActiveRoute = (href: string) => {
		if (href === '/') {
			return location.pathname === '/'
		}
		return location.pathname === href
	}

	const handleNavigation = (item: (typeof navItems)[0]) => {
		if (item.type === 'route') {
			// Always scroll to top when navigating to any route
			navigate(item.href)
			setTimeout(() => {
				window.scrollTo({ top: 0, behavior: 'smooth' })
			}, 100)
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
			{/* Static navbar for layout */}
			<nav className="relative bg-white border-b border-luxury-forest-green/20 shadow-sm">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-16 sm:h-20">
						{/* Logo */}
						<div className="cursor-pointer" onClick={handleLogoClick}>
							<span className="text-xl sm:text-2xl font-bold text-luxury-forest-green">NEXORA</span>
						</div>

						{/* Desktop Navigation */}
						<div className="hidden lg:flex items-center space-x-8">
							{navItems.map(item => (
								<button
									key={item.label}
									onClick={() => handleNavigation(item)}
									className={`transition-colors duration-300 font-medium relative ${
										isActiveRoute(item.href)
											? 'text-luxury-forest-green'
											: 'text-gray-700 hover:text-luxury-forest-green'
									}`}>
									{item.label}
									{isActiveRoute(item.href) && (
										<div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-luxury-forest-green"></div>
									)}
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
							className="lg:hidden text-luxury-forest-green p-1 sm:p-2">
							{isMobileMenuOpen ? <LineIcon name="close" className="w-6 h-6 sm:w-8 sm:h-8" /> : <LineIcon name="menu" className="w-6 h-6 sm:w-8 sm:h-8" />}
						</button>
					</div>
				</div>
			</nav>

			{/* Sticky navbar that appears on scroll up */}
			<nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isVisible && isScrolled ? 'translate-y-0' : '-translate-y-full'
			} ${
				isScrolled
					? 'bg-white/95 backdrop-blur-md border-b border-luxury-forest-green/20 shadow-lg'
					: 'bg-white/90 backdrop-blur-sm'
			}`}>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-16 sm:h-20">
						{/* Logo */}
						<div className="cursor-pointer" onClick={handleLogoClick}>
							<span className="text-xl sm:text-2xl font-bold text-luxury-forest-green">NEXORA</span>
						</div>

						{/* Desktop Navigation */}
						<div className="hidden lg:flex items-center space-x-8">
							{navItems.map(item => (
								<button
									key={item.label}
									onClick={() => handleNavigation(item)}
									className={`transition-colors duration-300 font-medium relative ${
										isActiveRoute(item.href)
											? 'text-luxury-forest-green'
											: 'text-gray-700 hover:text-luxury-forest-green'
									}`}>
									{item.label}
									{isActiveRoute(item.href) && (
										<div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-luxury-forest-green"></div>
									)}
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
							className="lg:hidden text-luxury-forest-green p-1 sm:p-2">
							{isMobileMenuOpen ? <LineIcon name="close" className="w-6 h-6 sm:w-8 sm:h-8" /> : <LineIcon name="menu" className="w-6 h-6 sm:w-8 sm:h-8" />}
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
				<div className="relative flex flex-col items-center justify-center h-full space-y-6 sm:space-y-8 px-4">
					{navItems.map(item => (
						<button
							key={item.label}
							onClick={() => handleNavigation(item)}
							className={`text-xl sm:text-2xl transition-colors duration-300 font-medium text-center ${
								isActiveRoute(item.href)
									? 'text-luxury-forest-green'
									: 'text-gray-700 hover:text-luxury-forest-green'
							}`}>
							{item.label}
						</button>
					))}
					<Button
						className="bg-luxury-forest-green text-warm-white hover:bg-luxury-forest-green/90 font-bold mt-6 sm:mt-8 border-2 border-luxury-forest-green px-6 py-3"
						size="lg">
						Bezpłatna konsultacja
					</Button>
				</div>
			</div>
		</>
	)
}
