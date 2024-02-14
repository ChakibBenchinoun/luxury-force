'use client'

import React from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { AlignRight, X } from 'lucide-react'
import { useClickAway } from 'react-use'

import { Logo } from '../icons/logo'
import { Button } from '../ui/button'
import { navigation } from './navigation'

const social = [
	{
		name: 'Facebook',
		href: '#',
		icon: (props: React.SVGProps<SVGSVGElement>) => (
			<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
				<path
					fillRule="evenodd"
					d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
					clipRule="evenodd"
				/>
			</svg>
		),
	},
	{
		name: 'Instagram',
		href: '#',
		icon: (props: React.SVGProps<SVGSVGElement>) => (
			<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
				<path
					fillRule="evenodd"
					d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
					clipRule="evenodd"
				/>
			</svg>
		),
	},
]

export const MenuBar = () => {
	const [open, setOpen] = React.useState(false)
	const ref = React.useRef(null)
	useClickAway(ref, () => setOpen(false))
	const toggleSidebar = () => setOpen((prev) => !prev)

	return (
		<>
			<button onClick={toggleSidebar} aria-label="toggle sidebar">
				<AlignRight className="h-7 w-7 xl:h-8 xl:w-8" />
			</button>
			<AnimatePresence mode="wait" initial={false}>
				{open && (
					<>
						<motion.div
							{...framerSidebarBackground}
							aria-hidden="true"
							className="fixed bottom-0 left-0 right-0 top-0 z-40 bg-[rgba(0,0,0,0.1)] backdrop-blur-sm"
						></motion.div>
						<motion.div
							{...framerSidebarPanel}
							className="fixed bottom-0 right-0 top-0 z-50 h-screen w-full max-w-xs border-r-2 border-zinc-800 bg-zinc-900"
							ref={ref}
							aria-label="Sidebar"
						>
							<div className="flex items-center justify-between border-b-2 border-zinc-800 px-5 py-8 lg:flex-col">
								<Logo className="w-44 lg:order-last lg:mt-2 lg:w-60" />
								<button onClick={toggleSidebar} aria-label="close sidebar">
									<X className="m-3 h-8 w-8" />
								</button>
							</div>
							<div className="hidden p-6 pt-10 text-center lg:block">
								<p className="font-light leading-7">
									Experience the thrill of the open road and the freedom to
									explore our diverse range of top-quality rental vehicles.
								</p>
								<Button
									variant="ghost"
									asChild
									className="mt-8 text-lg font-medium text-amber-200"
								>
									<a href="tel:+213553324323">Call Now +213-553-324-323</a>
								</Button>
								<div className="mt-4 flex w-full justify-center gap-3">
									{social.map((item) => (
										<a
											key={item.name}
											href={item.href}
											className="text-gray-400 transition-all hover:text-amber-300"
										>
											<span className="sr-only">{item.name}</span>
											<item.icon className="h-8 w-8" aria-hidden="true" />
										</a>
									))}
								</div>
							</div>
							<ul className="lg:hidden">
								{navigation.map((item, i) => {
									const { name, path } = item
									return (
										<li key={name}>
											<Link
												onClick={toggleSidebar}
												key={item.path}
												href={item.path}
												className="flex items-center justify-between gap-5 border-b-2 border-zinc-800 p-5 font-extralight uppercase tracking-widest text-amber-100 transition-all hover:bg-zinc-900"
											>
												{item.name}
											</Link>
										</li>
									)
								})}
							</ul>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</>
	)
}

const framerSidebarBackground = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0, transition: { delay: 0.2 } },
	transition: { duration: 0.3 },
}

const framerSidebarPanel = {
	initial: { x: '100%' },
	animate: { x: 0 },
	exit: { x: '100%' },
	transition: { duration: 0.3, ease: [0.075, 0.82, 0.165, 1] },
}

const framerText = (delay: number) => {
	return {
		initial: { opacity: 0, x: 50 },
		animate: { opacity: 1, x: 0 },
		transition: {
			delay: 0.5 + delay / 10,
		},
	}
}
