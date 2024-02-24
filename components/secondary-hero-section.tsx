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
	return (
		<div className="relative flex h-[50vw] items-center overflow-hidden bg-black/20 py-48 shadow-2xl shadow-yellow-500 md:items-end md:py-0 md:pt-28">
			<Image
				src={image}
				alt=""
				className="absolute top-0 -z-10 h-full w-full object-cover object-center"
			/>
			<Container className="py-16">
				<Link
					href="/"
					className="mr-1 text-2xl text-white transition hover:text-yellow-400 sm:text-3xl lg:text-4xl"
				>
					Home
				</Link>{' '}
				<span className="text-3xl text-white lg:text-4xl">||</span>{' '}
				<span className="ml-1 border-b-4 border-yellow-400 pb-1 text-3xl font-bold capitalize text-white lg:text-4xl">
					{pathname.replace('/', '')}
				</span>
			</Container>
		</div>
	)
}
