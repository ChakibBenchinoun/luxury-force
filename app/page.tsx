import Image from 'next/image'
import MercedesIn from 'assets/images/mercedes-g-class.jpg'
import { Car, Heart, Search, Smile } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Container } from '@/components/container'
import { TextLoop } from '@/components/loop-text'
import { Button } from '@/components/ui/button'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { carsData, carTypes } from '@/assets/data'

const features = [
	{
		name: 'Variety of Car Brands',
		description:
			'Lorem ipsum dolor sit amet, consectadipiscing elit. Aenean commodo ligula eget dolor.',
		icon: Car,
	},
	{
		name: 'Best Rate Guarantee',
		description:
			'Lorem ipsum dolor sit amet, consectadipiscing elit. Aenean commodo ligula eget dolor.',
		icon: Smile,
	},
	{
		name: 'Awesome Customer Support',
		description:
			'Lorem ipsum dolor sit amet, consectadipiscing elit. Aenean commodo ligula eget dolor.',
		icon: Heart,
	},
]

export default function Home() {
	const carsLengthIsInteger = (withThisNumber: number) =>
		Number.isInteger((carsData.length + withThisNumber) / 3)

	return (
		<main>
			{/* Hero Section */}
			<div className="relative flex items-center overflow-hidden border-b border-white/40 bg-black/50">
				<Image
					src={MercedesIn}
					alt=""
					className="absolute top-0 -z-10 h-full w-full object-cover object-top blur-[00.5px]"
				/>
				<Container className="z-10 mx-auto w-full max-w-6xl py-32 sm:py-48 lg:py-96">
					<div className="flex justify-center text-center">
						<p className="text-xs text-amber-200/60 sm:text-base">
							From as low as $10 per day with limited time offer discounts
						</p>
					</div>
					<div className="mt-3 w-full text-center sm:mt-2 xl:mt-3">
						<TextLoop
							className=""
							texts={[
								'Drive the dream not just the destination',
								'Find the best car that suits your needs',
							]}
						/>
						<div className="mt-16 grid grid-flow-row gap-y-4 lg:mt-8 lg:flex lg:items-center lg:justify-center lg:gap-x-8 xl:mt-10 xl:gap-x-10">
							<Select>
								<SelectTrigger className="mx-auto w-full max-w-lg">
									<SelectValue placeholder="Select a Brand" />
								</SelectTrigger>
								<SelectContent>
									{carsData.map((item) => (
										<SelectItem key={item.brand} value={item.brand}>
											{item.brand}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
							<Select>
								<SelectTrigger className="mx-auto w-full max-w-lg">
									<SelectValue placeholder="Select a Type" />
								</SelectTrigger>
								<SelectContent>
									{carTypes.map((item) => (
										<SelectItem key={item.type} value={item.type}>
											{item.type}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
							<Select>
								<SelectTrigger className="mx-auto w-full max-w-lg">
									<SelectValue placeholder="Sort By" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="apple">Price Low to High</SelectItem>
									<SelectItem value="banana">Price High to Low</SelectItem>
									<SelectItem value="blueberry">Sort By Popularity</SelectItem>
								</SelectContent>
							</Select>
							<Button className="mx-auto w-full max-w-lg">
								<Search className="mr-2 h-4 w-4" />
								Search
							</Button>
						</div>
					</div>
				</Container>
			</div>
			{/* Cars Section */}
			<Container className="py-28">
				{/* Find a car by Brand  */}
				<div>
					<div className="mx-auto max-w-2xl text-center">
						<h1 className="text-3xl font-bold uppercase tracking-tight sm:text-4xl">
							First Class Car Rental
						</h1>
						<p className="mt-2 text-lg">
							We offer professional car rental in our range of high-end vehicles
						</p>
					</div>
					<div
						className={cn(
							'mx-auto mt-16 grid w-full max-w-7xl justify-items-center gap-10 xl:gap-x-0',
							carsLengthIsInteger(0) ? 'lg:grid-cols-3' : 'lg:grid-cols-6',
						)}
					>
						{carsData.map((item, i) => (
							<div
								key={item.brand}
								className={cn(
									carsLengthIsInteger(0) ? 'lg:col-span-1' : 'lg:col-span-2',
									carsLengthIsInteger(-2) && i === carsData.length - 2
										? 'lg:col-start-2'
										: carsLengthIsInteger(-1) && i === carsData.length - 1
										? 'lg:col-start-3'
										: null,
									'relative flex aspect-square max-w-sm justify-center',
								)}
							>
								<Image
									src={item.carDefaultImage}
									alt={item.brand}
									className="-z-10 h-full w-full rounded-md object-cover"
								/>
								<div className="absolute inset-0 z-10 flex h-full w-full items-end">
									<div className="mb-3 ml-4 w-full text-2xl font-bold tracking-wide">
										{item.brand}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
				{/* Find a car by Type  */}
				<div className="mt-28">
					<div className="mx-auto max-w-2xl text-center">
						<h1 className="text-3xl font-bold uppercase tracking-tight sm:text-4xl">
							Find Car by Type
						</h1>
						<p className="mt-2 text-lg">
							We offer professional car rental in our range of high-end vehicles
						</p>
					</div>
					<div className="mx-auto mt-16 grid w-full max-w-7xl justify-items-center gap-10 lg:grid-cols-3">
						{carTypes.map((item) => (
							<div
								key={item.type}
								className="relative flex aspect-square max-w-sm justify-center"
							>
								<Image
									src={item.image}
									alt={`${item.type}-image`}
									className="-z-10 rounded-md object-cover"
								/>
								<div className="absolute inset-0 z-10 flex h-full w-full items-end">
									<div className="mb-3 ml-4 w-full text-2xl font-bold tracking-wide">
										{item.type}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</Container>
			{/* CTA Section  */}
			<div className="pt-24 sm:pt-32">
				<div className="relative overflow-hidden border-t border-white/40 bg-black/30 py-48 text-center shadow-2xl">
					<video
						autoPlay
						muted
						loop
						className="absolute inset-0 -z-10 h-full w-full object-cover"
					>
						<source src="/cta-video.mp4" type="video/mp4" />
					</video>
					<h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
						Our Fleet, Your Fleet
					</h2>
					<p className="mx-auto mt-6 hidden max-w-xl text-lg leading-8 text-gray-300 lg:block">
						We know the difference is in the details and that’s why our car
						rental services, in the tourism and business industry, stand out for
						their quality and good taste, to offer you an unique experience
					</p>
					<Button
						variant="ghost"
						asChild
						className="mt-3 text-2xl font-medium text-white lg:mt-10"
					>
						<a href="tel:+213553324323">Call Now +213-553-324-323</a>
					</Button>
				</div>
				<Container className="border-y border-white/40 bg-gray-700 py-20">
					<div className="mx-auto max-w-7xl">
						<div className="mx-auto max-w-2xl text-center">
							<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
								Why Choose Us
							</h2>
							<p className="mt-4 text-lg text-gray-300">
								Explore our first class limousine & car rental services
							</p>
						</div>
						<div className="mx-auto mt-10 flex max-w-2xl justify-center sm:mt-14 lg:mt-16 lg:max-w-none">
							<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
								{features.map((feature) => (
									<div key={feature.name} className="flex flex-col">
										<dt className="text-center">
											<div className="mx-auto mb-3 flex items-center justify-center">
												<feature.icon
													className="h-14 w-14 text-amber-400"
													aria-hidden="true"
												/>
											</div>
											<span className="text-xl font-semibold text-white">
												{feature.name}
											</span>
										</dt>
										<dd className="mt-3 flex flex-auto flex-col text-center text-gray-300">
											<p className="flex-auto">{feature.description}</p>
										</dd>
									</div>
								))}
							</dl>
						</div>
					</div>
				</Container>
			</div>
		</main>
	)
}
