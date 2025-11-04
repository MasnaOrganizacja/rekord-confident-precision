// Skrypt do automatycznego zastępowania ikon Lucide na LineIcons
const iconMappings = {
	ArrowRight: 'arrow-right',
	ArrowLeft: 'arrow-left',
	Shield: 'shield',
	Users: 'users',
	Database: 'database',
	Factory: 'construction',
	DollarSign: 'dollar',
	Layers: 'layers',
	Target: 'target',
	Cog: 'cog',
	Zap: 'bolt',
	BarChart3: 'bar-chart',
	Building2: 'apartment',
	FileText: 'files',
	TrendingUp: 'chart-line-up',
	Globe: 'world',
	CheckCircle: 'checkmark-circle',
	Lock: 'lock',
	Eye: 'eye',
	AlertTriangle: 'warning',
	Calendar: 'calendar',
	Home: 'home',
	Search: 'search',
	Heart: 'heart',
	Lightbulb: 'bulb',
	Award: 'medal',
	ChevronLeft: 'chevron-left',
	ChevronRight: 'chevron-right',
	Quote: 'quotation',
	X: 'close',
	MapPin: 'map-marker',
	Headphones: 'headphone',
	Clock: 'timer',
	Mail: 'envelope',
	Phone: 'phone',
}

console.log('Mapowanie ikon Lucide -> LineIcons:')
Object.entries(iconMappings).forEach(([lucide, lineicon]) => {
	console.log(`${lucide} -> lni-${lineicon}`)
})
