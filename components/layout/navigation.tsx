import Link from 'next/link'
import { CiMenuFries } from 'react-icons/ci'

import { cn } from '@/lib/utils'
import { Container } from '../container'
import { MenuBar } from './menubar'

export const navigation = [
	{ name: 'Home', path: '/' },
	{ name: 'Our Cars', path: '/cars' },
	{ name: 'About Us', path: '/about' },
	{ name: 'Our Services', path: 'services' },
	{ name: 'Contact Us', path: 'contact' },
]

export function Navigation() {
	return (
		<header className="sticky inset-x-0 top-0 z-50 lg:fixed">
			<nav aria-label="Global" className="relative">
				<div className="absolute -z-50 h-full w-full bg-black/40 backdrop-blur-md" />
				<Container className="flex w-full items-center justify-between border-b border-white/30 py-10">
					<div className="flex items-center gap-20">
						<span className="whitespace-nowrap text-xl font-light tracking-wide text-yellow-200 xl:text-2xl">
							LUXURY FORCE
						</span>
						<div className="hidden gap-14 lg:flex">
							{navigation.map((link) => (
								<Link
									key={link.path}
									href={link.path}
									className={cn(
										'whitespace-nowrap text-sm font-extralight uppercase tracking-wide text-amber-200 xl:text-base',
									)}
								>
									{link.name}
								</Link>
							))}
						</div>
					</div>
					<MenuBar />
				</Container>
			</nav>
		</header>
	)
}
