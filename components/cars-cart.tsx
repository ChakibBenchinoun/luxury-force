import Image, { StaticImageData } from 'next/image'
import { BaggageClaim, Check, User } from 'lucide-react'
import { GiCarDoor, GiGearStickPattern } from 'react-icons/gi'

import { cn } from '@/lib/utils'
import { Star } from '@/components/icons/star'

export function Cart({
	product: { image, name, starRate, reviews, features, price, included },
}: {
	product: {
		image: StaticImageData
		name: string
		starRate: number
		reviews: number
		features: { feat: string; type: string }[]
		price: string
		included: string[]
	}
}) {
	return (
		<div className="sm:flex">
			<div className="flex-shrink-0">
				<Image
					src={image}
					alt={`${name}-alt`}
					className="aspect-video rounded-md object-cover object-center sm:aspect-auto sm:h-60 sm:w-60"
				/>
			</div>
			<div className="mt-5 flex flex-1 flex-col justify-between sm:ml-6 sm:mt-0">
				<div className="relative sm:grid sm:grid-cols-2 sm:gap-x-6">
					<div>
						<div className="flex justify-between">
							<h3 className="whitespace-nowrap text-xl md:text-2xl">
								<a
									href="#"
									className="font-bold text-amber-100 hover:text-amber-200"
								>
									{name}
								</a>
							</h3>
						</div>
						<div className="mt-1 flex text-sm">
							<div className="flex items-center">
								{Array.from({ length: 5 }, (_, i) => (
									<Star
										key={i}
										isActive={i < starRate}
										className={cn(i === 5 ? '' : 'mr-1', 'h-4 w-4')}
									/>
								))}
							</div>
							<p className="ml-2 whitespace-nowrap border-l border-gray-500 pl-3 text-gray-400">
								{reviews} reviews
							</p>
						</div>
						<div className="mt-4 flex items-center">
							{features.map((feature, i) => (
								<Feature
									key={feature.feat}
									className={cn(
										i === features.length ? '' : 'mr-7',
										'text-gray-400',
									)}
									feature={feature}
								/>
							))}
						</div>
					</div>

					<div className="hidden pr-9 sm:block">
						<div className="right-0 top-0 sm:absolute">
							<div className="flex">
								<span className="mr-1 text-xl font-bold md:text-3xl">
									{price}
								</span>
								<span className="mt-1 text-xs text-gray-400">DA</span>
							</div>
							<div className=" mt-1 flex justify-end">
								<span className="text-xs text-gray-400">Per Day</span>
							</div>
						</div>
					</div>
				</div>

				<div className="grid grid-cols-2 gap-1 sm:border-t sm:border-yellow-200/40 sm:pt-3">
					{included.map((item: string, i: number) => (
						<span key={item} className="item-center flex text-sm text-gray-400">
							<Check className="mr-3 h-5 w-5" />
							{item}
						</span>
					))}
				</div>

				<div className="mt-5 flex items-center justify-between sm:hidden">
					<div className="flex">
						<span className="mr-1 text-xl font-bold md:text-3xl">{price}</span>
						<span className="mt-1 text-xs text-gray-400">DA</span>
					</div>
					<div className=" mt-1 flex justify-end">
						<span className="text-xs text-gray-400">Per Day</span>
					</div>
				</div>
			</div>
		</div>
	)
}

function CheckFeat({ type, className }: { type: string; className?: string }) {
	if (type === 'Passengers') {
		return <User className={className} />
	} else if (type === 'Luggages') {
		return <BaggageClaim className={className} />
	} else if (type === 'GearBox') {
		return <GiGearStickPattern className={className} />
	} else if (type === 'Doors') {
		return <GiCarDoor className={className} />
	}
}

function Feature({
	className,
	feature,
}: {
	className?: string
	feature: { type: string; feat: string }
}) {
	return (
		<div className={className}>
			<CheckFeat type={feature.feat} className="h-5 w-5" />
			<span className="mt-1 inline-flex w-full justify-center text-sm">
				{feature.type}
			</span>
		</div>
	)
}
