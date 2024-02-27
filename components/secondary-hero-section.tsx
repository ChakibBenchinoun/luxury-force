'use client'

import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Container } from './container'

export default function HeroSection({
	image,
}: {
	image: StaticImageData | string
}) {
	const pathname = usePathname()
	console.log(pathname)

	return (
		<div className="relative mx-auto flex w-full items-center overflow-hidden shadow-2xl shadow-yellow-500 md:items-end lg:pt-28">
			<div className="absolute inset-0 -z-0 bg-black/40 backdrop-blur-sm" />
			<Image
				src={image}
				alt=""
				className="absolute top-0 -z-10 h-full w-full object-cover object-center"
			/>
			<Container className="z-10 mx-auto py-32 lg:py-64">
				<Link
					href="/"
					className="mr-1 text-2xl text-white transition hover:text-yellow-400 lg:text-3xl"
				>
					Home
				</Link>{' '}
				<span className="text-3xl text-white lg:text-4xl">|</span>{' '}
				<span className="ml-1 border-b-4 border-yellow-400 pb-1 text-2xl font-bold capitalize text-white lg:text-3xl">
					{pathname === '/about'
						? `${pathname.replace('/', '')} Us`
						: pathname === '/cars'
						? `Our ${pathname.replace('/', '')}`
						: pathname.replace('/', '')}
				</span>
			</Container>
		</div>
	)
}
