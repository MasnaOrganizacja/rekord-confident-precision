import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { LineIcon } from '@/components/ui/lineicon'

export const FinalCTA = () => {
	return (
		<section id="contact" className="py-32 bg-gray-50">
			<div className="container mx-auto px-8">
				<h2 className="text-5xl lg:text-7xl font-bold text-gray-900 text-center mb-6 font-sansation">
					Gotowy na <span className="text-luxury-forest-green">Transformację</span>?
				</h2>
				<p className="text-xl text-gray-600 text-center mb-20 max-w-3xl mx-auto">
					Skontaktuj się z nami i rozpocznij swoją cyfrową podróż z liderem rynku
				</p>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
					{/* Contact Form */}
					<div className="bg-white border-4 border-luxury-forest-green p-12 shadow-lg">
						<h3 className="text-3xl font-bold text-gray-900 mb-8 font-sansation">Wyślij zapytanie</h3>
						<form className="space-y-6">
							<div>
								<Input
									placeholder="Imię i nazwisko *"
									className="border-2 border-luxury-forest-green focus:border-luxury-forest-green/80 text-lg py-6"
								/>
							</div>
							<div>
								<Input
									placeholder="Firma / Instytucja *"
									className="border-2 border-luxury-forest-green focus:border-luxury-forest-green/80 text-lg py-6"
								/>
							</div>
							<div>
								<Input
									type="email"
									placeholder="Email *"
									className="border-2 border-luxury-forest-green focus:border-luxury-forest-green/80 text-lg py-6"
								/>
							</div>
							<div>
								<Input
									type="tel"
									placeholder="Telefon"
									className="border-2 border-luxury-forest-green focus:border-luxury-forest-green/80 text-lg py-6"
								/>
							</div>
							<div>
								<Textarea
									placeholder="Wiadomość *"
									className="border-2 border-luxury-forest-green focus:border-luxury-forest-green/80 text-lg min-h-[150px]"
								/>
							</div>
							<Button
								type="submit"
								className="w-full bg-luxury-forest-green text-white hover:bg-luxury-forest-green/90 font-bold text-lg py-6 border-2 border-luxury-forest-green magnetic-button">
								Wyślij zapytanie
							</Button>
						</form>
					</div>

					{/* Contact Info & Map */}
					<div className="flex flex-col h-full">
						<div className="bg-white border-4 border-luxury-forest-green p-8 shadow-lg flex-1 mb-8">
							<h3 className="text-2xl font-bold text-gray-900 mb-6 font-sansation">Dane kontaktowe</h3>
							<div className="space-y-4">
								<div className="flex items-start gap-4">
									<LineIcon name="map-marker" className="w-6 h-6 text-luxury-forest-green flex-shrink-0 mt-1" />
									<div>
										<p className="font-bold text-gray-900">Adres</p>
										<p className="text-gray-600">
											ul. Innowacyjna 35
											<br />
											40-000 Katowice, Polska
										</p>
									</div>
								</div>
								<div className="flex items-start gap-4">
									<LineIcon name="phone" className="w-6 h-6 text-luxury-forest-green flex-shrink-0 mt-1" />
									<div>
										<p className="font-bold text-gray-900">Telefon</p>
										<p className="text-gray-600">+48 32 123 45 67</p>
									</div>
								</div>
								<div className="flex items-start gap-4">
									<LineIcon name="envelope" className="w-6 h-6 text-luxury-forest-green flex-shrink-0 mt-1" />
									<div>
										<p className="font-bold text-gray-900">Email</p>
										<p className="text-gray-600">kontakt@nexora.pl</p>
									</div>
								</div>
							</div>
						</div>

						<div className="bg-white border-4 border-luxury-forest-green shadow-lg flex-1 overflow-hidden">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2551.8234567890123!2d19.0237815!3d50.2648919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716ce2b1b1b1b1b%3A0x1b1b1b1b1b1b1b1b!2sKatowice%2C%20Poland!5e0!3m2!1sen!2spl!4v1234567890123!5m2!1sen!2spl"
								width="100%"
								height="100%"
								style={{ border: 0, minHeight: '300px' }}
								allowFullScreen
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								title="Lokalizacja NEXORA - Katowice"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
