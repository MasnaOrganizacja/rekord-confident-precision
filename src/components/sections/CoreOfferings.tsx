import { useEffect, useRef, useState } from 'react'
import { LineIcon } from '@/components/ui/lineicon'
import { useNavigate } from 'react-router-dom'

export const CoreOfferings = () => {
	const [tilt1, setTilt1] = useState({ x: 0, y: 0 })
	const [tilt2, setTilt2] = useState({ x: 0, y: 0 })
	const card1Ref = useRef<HTMLDivElement>(null)
	const card2Ref = useRef<HTMLDivElement>(null)
	const navigate = useNavigate()

	const handleMouseMove = (
		e: React.MouseEvent<HTMLDivElement>,
		cardRef: React.RefObject<HTMLDivElement>,
		setTilt: React.Dispatch<React.SetStateAction<{ x: number; y: number }>>
	) => {
		if (!cardRef.current) return
		const card = cardRef.current
		const rect = card.getBoundingClientRect()
		const x = e.clientX - rect.left
		const y = e.clientY - rect.top
		const centerX = rect.width / 2
		const centerY = rect.height / 2
		const tiltX = ((y - centerY) / centerY) * -10
		const tiltY = ((x - centerX) / centerX) * 10
		setTilt({ x: tiltX, y: tiltY })
	}

	const handleMouseLeave = (setTilt: React.Dispatch<React.SetStateAction<{ x: number; y: number }>>) => {
		setTilt({ x: 0, y: 0 })
	}

	return (
		<section id="products" className="py-16 md:py-32 bg-gray-50">
			<div className="container mx-auto px-4 md:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
					{/* NEXORA.FLOW Card */}
					<div
						ref={card1Ref}
						onMouseMove={e => handleMouseMove(e, card1Ref, setTilt1)}
						onMouseLeave={() => handleMouseLeave(setTilt1)}
						className="relative group cursor-pointer"
						style={{
							transform: `perspective(1000px) rotateX(${tilt1.x}deg) rotateY(${tilt1.y}deg)`,
							transition: 'transform 0.1s ease-out',
						}}>
						<div className="bg-white border-4 border-luxury-forest-green p-6 md:p-12 h-full min-h-[500px] md:min-h-[600px] flex flex-col shadow-lg">
							<div className="mb-4 md:mb-6">
								<LineIcon name="database" className="w-16 h-16 md:w-20 md:h-20 text-luxury-forest-green" />
							</div>

							<h3 className="text-3xl md:text-5xl font-bold text-luxury-forest-green mb-4 md:mb-6 font-sansation">NEXORA.FLOW</h3>

							<p className="text-lg md:text-xl text-[hsl(var(--near-black))/80] mb-6 md:mb-8 leading-relaxed">
								Zintegrowany system do zarządzania przedsiębiorstwem, który optymalizuje procesy, redukuje koszty i
								wspiera wzrost.
							</p>

							<div className="space-y-3 md:space-y-4 mb-6 md:mb-8 flex-grow">
								<div className="flex items-start gap-4 md:gap-6">
									<LineIcon
										name="money-location"
										className="w-6 h-6 md:w-8 md:h-8 text-luxury-forest-green flex-shrink-0 mt-2 ml-2"
									/>
									<div>
										<h4 className="font-bold text-base md:text-lg text-gray-900 font-sansation">Finanse i Księgowość</h4>
										<p className="text-sm md:text-base text-[hsl(var(--near-black))/70]">
											Pełna kontrola finansowa w czasie rzeczywistym
										</p>
									</div>
								</div>

								<div className="flex items-start gap-4 md:gap-6">
									<LineIcon name="package" className="w-6 h-6 md:w-8 md:h-8 text-luxury-forest-green flex-shrink-0 mt-2 ml-2" />
									<div>
										<h4 className="font-bold text-base md:text-lg text-gray-900 font-sansation">Logistyka i Magazyn</h4>
										<p className="text-sm md:text-base text-[hsl(var(--near-black))/70]">
											Zarządzanie łańcuchem dostaw i zapasami
										</p>
									</div>
								</div>

								<div className="flex items-start gap-4 md:gap-6">
									<LineIcon name="cog" className="w-6 h-6 md:w-8 md:h-8 text-luxury-forest-green flex-shrink-0 mt-2 ml-2" />
									<div>
										<h4 className="font-bold text-base md:text-lg text-gray-900 font-sansation">Produkcja i Projekty</h4>
										<p className="text-sm md:text-base text-gray-600">Planowanie i kontrola procesów produkcyjnych</p>
									</div>
								</div>
							</div>

							<button
								onClick={() => navigate('/nexora-flow')}
								className="magnetic-button inline-flex items-center gap-2 text-luxury-forest-green font-bold text-base md:text-lg group-hover:gap-4 transition-all duration-300">
								Dowiedz się więcej
								<LineIcon name="arrow-right" className="w-5 h-5 md:w-6 md:h-6" />
							</button>
						</div>
					</div>

					{/* NEXORA.CIVIC Card */}
					<div
						ref={card2Ref}
						onMouseMove={e => handleMouseMove(e, card2Ref, setTilt2)}
						onMouseLeave={() => handleMouseLeave(setTilt2)}
						className="relative group cursor-pointer"
						style={{
							transform: `perspective(1000px) rotateX(${tilt2.x}deg) rotateY(${tilt2.y}deg)`,
							transition: 'transform 0.1s ease-out',
						}}>
						<div className="bg-white border-4 border-luxury-forest-green p-6 md:p-12 h-full min-h-[500px] md:min-h-[600px] flex flex-col shadow-lg">
							<div className="mb-4 md:mb-6">
								<LineIcon name="apartment" className="w-16 h-16 md:w-20 md:h-20 text-luxury-forest-green" />
							</div>

							<h3 className="text-3xl md:text-5xl font-bold text-luxury-forest-green mb-4 md:mb-6 font-sansation">NEXORA.CIVIC</h3>

							<p className="text-lg md:text-xl text-[hsl(var(--near-black))/80] mb-6 md:mb-8 leading-relaxed">
								Kompleksowe rozwiązanie dla administracji publicznej, zapewniające zgodność z prawem, bezpieczeństwo
								danych i efektywną obsługę obywateli.
							</p>

							<div className="space-y-3 md:space-y-4 mb-6 md:mb-8 flex-grow">
								<div className="flex items-start gap-4 md:gap-6">
									<LineIcon
										name="wallet"
										className="w-6 h-6 md:w-8 md:h-8 text-luxury-forest-green flex-shrink-0 mt-2 ml-2"
									/>
									<div>
										<h4 className="font-bold text-base md:text-lg text-gray-900 font-sansation">Podatki i Opłaty Lokalne</h4>
										<p className="text-sm md:text-base text-gray-600">Automatyzacja poboru i ewidencji należności</p>
									</div>
								</div>

								<div className="flex items-start gap-4 md:gap-6">
									<LineIcon
										name="users"
										className="w-6 h-6 md:w-8 md:h-8 text-luxury-forest-green flex-shrink-0 mt-2 ml-2"
									/>
									<div>
										<h4 className="font-bold text-base md:text-lg text-gray-900 font-sansation">E-urząd i Obsługa Obywatela</h4>
										<p className="text-sm md:text-base text-gray-600">Platforma cyfrowej komunikacji z mieszkańcami</p>
									</div>
								</div>

								<div className="flex items-start gap-4 md:gap-6">
									<LineIcon
										name="stats-up"
										className="w-6 h-6 md:w-8 md:h-8 text-luxury-forest-green flex-shrink-0 mt-2 ml-2"
									/>
									<div>
										<h4 className="font-bold text-base md:text-lg text-gray-900 font-sansation">Budżet i Finanse Publiczne</h4>
										<p className="text-sm md:text-base text-gray-600">Zarządzanie budżetem zgodne z przepisami</p>
									</div>
								</div>
							</div>

							<button
								onClick={() => navigate('/nexora-civic')}
								className="magnetic-button inline-flex items-center gap-2 text-luxury-forest-green font-bold text-base md:text-lg group-hover:gap-4 transition-all duration-300">
								Dowiedz się więcej
								<LineIcon name="arrow-right" className="w-5 h-5 md:w-6 md:h-6" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
