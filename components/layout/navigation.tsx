import Link from 'next/link'
import { CiMenuFries } from 'react-icons/ci'

import { cn } from '@/lib/utils'
import { Container } from '../container'
import { Logo } from '../icons/logo'
import { Button } from '../ui/button'

const navigation = [
	{ name: 'Home', path: '/' },
	{ name: 'Our Cars', path: '/cars' },
	{ name: 'About Us', path: '/about' },
	{ name: 'Our Services', path: 'services' },
	{ name: 'Contact Us', path: 'contact' },
]

export function Navigation() {
	return (
		<header className="absolute inset-x-0 top-0 z-50">
			<nav
				aria-label="Global"
				className="relative from-white via-black to-white shadow-2xl shadow-black"
			>
				<div className="absolute -z-50 h-full w-full bg-black/40 backdrop-blur-sm" />
				<Container className="flex w-full items-center justify-between border-b border-white/30 py-10">
					<div className="flex items-center gap-20">
						<span className="text-2xl font-light tracking-wide text-yellow-200">
							LUXURY FORCE
						</span>
						<div className="flex gap-14">
							{navigation.map((link) => (
								<Link
									key={link.path}
									href={link.path}
									className={cn(
										'font-extralight uppercase tracking-widest text-amber-200',
									)}
								>
									{link.name}
								</Link>
							))}
						</div>
					</div>
					<button>
						<CiMenuFries className="h-8 w-8" />
					</button>
				</Container>
			</nav>
		</header>
	)
}
