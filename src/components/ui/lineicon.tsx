import { cn } from '@/lib/utils'
import { CSSProperties } from 'react'

interface LineIconProps {
	name: string
	className?: string
	size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'
	style?: CSSProperties
}

const sizeClasses = {
	sm: 'text-base', // 16px
	md: 'text-xl', // 20px
	lg: 'text-2xl', // 24px
	xl: 'text-3xl', // 30px
	'2xl': 'text-4xl', // 36px
	'3xl': 'text-5xl', // 48px
	'4xl': 'text-6xl', // 60px
}

export const LineIcon = ({ name, className, size = 'md', style }: LineIconProps) => {
	// Jeśli className zawiera w-* h-*, użyj odpowiedniego font-size
	const hasCustomSize = className?.includes('w-') || className?.includes('h-')

	if (hasCustomSize) {
		// Mapowanie rozmiarów Tailwind na font-size
		let fontSize = '1.25rem' // domyślny

		if (className?.includes('w-4') || className?.includes('h-4')) fontSize = '1rem'
		else if (className?.includes('w-5') || className?.includes('h-5')) fontSize = '1.25rem'
		else if (className?.includes('w-6') || className?.includes('h-6')) fontSize = '1.5rem'
		else if (className?.includes('w-8') || className?.includes('h-8')) fontSize = '2rem'
		else if (className?.includes('w-10') || className?.includes('h-10')) fontSize = '2.5rem'
		else if (className?.includes('w-12') || className?.includes('h-12')) fontSize = '3rem'
		else if (className?.includes('w-14') || className?.includes('h-14')) fontSize = '3.5rem'
		else if (className?.includes('w-16') || className?.includes('h-16')) fontSize = '4rem'
		else if (className?.includes('w-20') || className?.includes('h-20')) fontSize = '5rem'
		else if (className?.includes('w-24') || className?.includes('h-24')) fontSize = '6rem'
		else if (className?.includes('w-32') || className?.includes('h-32')) fontSize = '8rem'

		return <i className={cn(`lni lni-${name}`, className)} style={{ fontSize, ...style }} />
	}

	return <i className={cn(`lni lni-${name}`, sizeClasses[size], className)} style={style} />
}
