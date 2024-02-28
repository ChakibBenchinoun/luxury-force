import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import { Container } from './container'
import { Button } from './ui/button'

export default function DetailsGrid({
	className,
	title,
	paragraph,
	asset,
	link,
	reverse,
}: {
	className?: string
	title: string
	paragraph: string
	asset: StaticImageData
	link?: { label: string; link: string }
	reverse?: boolean
}) {
	return (
		<div
			className={cn(
				className,
				'relative my-20 items-center lg:grid lg:grid-cols-2',
			)}
		>
			<div
				className={cn(
					reverse ? 'order-first' : 'order-last',
					'absolute inset-0 z-10 m-auto h-fit w-full max-w-md px-8 text-center sm:px-0 lg:relative lg:h-auto lg:text-left',
				)}
			>
				<h2 className="text-2xl font-semibold sm:text-4xl">{title}</h2>
				<p className="mt-2 text-sm text-gray-300 sm:text-base md:mt-4 lg:mt-8 lg:text-gray-400">
					{paragraph}
				</p>
				{link ? (
					<div className="mx-auto mt-5 px-6 sm:mt-16 lg:mt-10 lg:px-0">
						<Button asChild>
							<Link href={link.link}>{link.label}</Link>
						</Button>
					</div>
				) : null}
			</div>
			<Image
				src={asset}
				alt=""
				className={cn(
					'aspect-square border border-yellow-500/50 object-cover blur-sm md:aspect-auto lg:blur-0',
					reverse ? 'order-last border-r-0' : 'order-first border-l-0',
				)}
			/>
			<div className="absolute inset-0 bg-black/50 lg:hidden" />
		</div>
	)
}
