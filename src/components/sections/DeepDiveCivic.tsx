import { useState } from 'react'
import { LineIcon } from '@/components/ui/lineicon'

export const DeepDiveCivic = () => {
	const [activeTab, setActiveTab] = useState(0)

	const tabs = [
		{
			title: 'Bezpieczeństwo Danych',
			icon: 'shield',
			content:
				'Wielopoziomowa ochrona danych zgodna z RODO i standardami cyberbezpieczeństwa. Szyfrowanie end-to-end, regularne audyty bezpieczeństwa i certyfikowane procedury backup. Pełna izolacja danych jednostek, kontrola dostępu oparta na rolach oraz szczegółowe logi wszystkich operacji.',
		},
		{
			title: 'Zgodność z KSeF',
			icon: 'checkmark-circle',
			content:
				'Pełna gotowość do obsługi Krajowego Systemu e-Faktur. Automatyczna walidacja, bezpieczne przesyłanie i odbiór e-faktur ustrukturyzowanych. Integracja z systemem finansowym, automatyczne księgowanie i archiwizacja zgodna z przepisami. Dedykowane wsparcie w procesie wdrożenia KSeF.',
		},
		{
			title: 'Portal Mieszkańca',
			icon: 'users',
			content:
				'Nowoczesna platforma cyfrowej komunikacji z obywatelami. E-usługi dostępne 24/7, możliwość załatwiania spraw online, elektroniczne formularze i wnioski. System powiadomień SMS/email, elektroniczny obieg dokumentów i bezpieczne podpisy elektroniczne. Responsywny interfejs dostosowany do wszystkich urządzeń.',
		},
		{
			title: 'Zarządzanie Finansami Publicznymi',
			icon: 'pie-chart',
			content:
				'Kompleksowe narzędzie do planowania, wykonywania i kontroli budżetu jednostki. Automatyczne generowanie sprawozdań budżetowych zgodnych z wymogami ministerstwa. Wieloletnia prognoza finansowa, kontrola wydatków i analiza planów finansowych. Integracja z bankami i systemem e-PUAP.',
		},
	]

	return (
		<section className="py-32 bg-gray-50">
			<div className="container mx-auto px-8">
				<h2 className="text-6xl font-bold text-gray-900 mb-8 text-center">
					<span className="text-luxury-forest-green">NEXORA.CIVIC</span> – Cyfrowa Administracja
				</h2>
				<p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
					Kompleksowe rozwiązanie dla jednostek samorządu terytorialnego, zaufane przez 60% samorządów województwa
					śląskiego
				</p>

				<div className="max-w-6xl mx-auto">
					{/* Tabs Navigation */}
					<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
						{tabs.map((tab, idx) => {
							return (
								<button
									key={idx}
									onClick={() => setActiveTab(idx)}
									className={`p-6 border-4 transition-all duration-300 flex flex-col items-center justify-center min-h-[140px] ${
										activeTab === idx
											? 'bg-luxury-forest-green border-luxury-forest-green text-white'
											: 'bg-white border-luxury-forest-green text-luxury-forest-green hover:border-luxury-forest-green/80'
									}`}>
									<div className="flex flex-col items-center justify-center flex-grow space-y-3">
										<LineIcon
											name={tab.icon}
											className={`w-12 h-12 ${activeTab === idx ? 'text-white' : 'text-luxury-forest-green'}`}
										/>
										<span className="font-bold text-sm lg:text-base text-center leading-tight max-w-[120px]">
											{tab.title}
										</span>
									</div>
								</button>
							)
						})}
					</div>

					{/* Tab Content */}
					<div className="bg-white border-4 border-luxury-forest-green p-12 shadow-lg">
						<div className="animate-fade-in">
							<h3 className="text-4xl font-bold text-gray-900 mb-6 flex items-center gap-4">
								<LineIcon name={tabs[activeTab].icon} className="w-12 h-12 text-luxury-forest-green" />
								{tabs[activeTab].title}
							</h3>
							<p className="text-lg text-gray-700 leading-relaxed">{tabs[activeTab].content}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
