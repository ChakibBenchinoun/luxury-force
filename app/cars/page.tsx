import HeroImage from 'assets/images/bmw-m4.jpg'
import { Clock, FileQuestion, Phone, Search } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Cart } from '@/components/cars-cart'
import HeroSection from '@/components/secondary-hero-section'
import { Button } from '@/components/ui/button'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { carsData, carTypes } from '@/assets/data'

// const products = [
// 	{
// 		image:
// 			'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg',
// 		href: '#',
// 		name: 'Basic Tee',
// 		starRate: 4,
// 		reviews: 3,
// 		features: [
// 			{ feat: 'Passengers', type: '4' },
// 			{ feat: 'Luggages', type: '2' },
// 			{ feat: 'GearBox', type: 'Auto' },
// 			{ feat: 'Doors', type: '4' },
// 		],
// 		price: '32.00',
// 		included: [
// 			'Audio input',
// 			'Bluetooth',
// 			'Heated seats',
// 			'All Wheel drive',
// 			'USB input',
// 		],
// 	},
// 	{
// 		image:
// 			'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg',
// 		href: '#',
// 		name: 'Basic Tee',
// 		starRate: 4,
// 		reviews: 3,
// 		features: [
// 			{ feat: 'Passengers', type: '4' },
// 			{ feat: 'Luggages', type: '2' },
// 			{ feat: 'GearBox', type: 'Auto' },
// 			{ feat: 'Doors', type: '4' },
// 		],
// 		price: '32.00',
// 		included: [
// 			'Audio input',
// 			'Bluetooth',
// 			'Heated seats',
// 			'All Wheel drive',
// 			'USB input',
// 		],
// 	},
// 	{
// 		image:
// 			'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg',
// 		href: '#',
// 		name: 'Basic Tee',
// 		starRate: 4,
// 		reviews: 3,
// 		features: [
// 			{ feat: 'Passengers', type: '4' },
// 			{ feat: 'Luggages', type: '2' },
// 			{ feat: 'GearBox', type: 'Auto' },
// 			{ feat: 'Doors', type: '4' },
// 		],
// 		price: '32.00',
// 		included: [
// 			'Audio input',
// 			'Bluetooth',
// 			'Heated seats',
// 			'All Wheel drive',
// 			'USB input',
// 		],
// 	},
// ]

const products = carsData.flatMap((cars) => cars.cars)

export default function Cars() {
	return (
		<main className="relative z-20 bg-black">
			{/* hero section  */}
			<HeroSection image={HeroImage} />
			<div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
				{/* Cars Filter */}
				<div className="mt-16 grid grid-flow-row gap-y-4 rounded-md bg-white/20 px-4  py-6 sm:p-6 lg:mt-8 lg:flex lg:items-center lg:justify-center lg:gap-x-8 xl:mt-10 xl:gap-x-10">
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
				{/* Cars Section */}
				<div className="mt-20 lg:grid lg:grid-cols-10 lg:items-start lg:gap-x-12 xl:gap-x-16">
					{/* Cars Grid */}
					<section aria-labelledby="our-cars" className="lg:col-span-7">
						<ul role="list">
							{products.map((product, i) => (
								<li
									key={product.name}
									className={cn(
										'py-6 sm:py-16',
										i === 0 ? 'pt-0 sm:pt-0' : 'border-t',
									)}
								>
									<Cart product={product} />
								</li>
							))}
						</ul>
					</section>
					{/* Info section */}
					<section
						aria-labelledby="summary-heading"
						className="sticky top-32 mt-16 rounded-md bg-white/20 px-4 py-6 sm:p-6 lg:col-span-3 lg:mt-0"
					>
						<h2 className="text-lg font-medium text-gray-300">
							For More Informations
						</h2>

						<div className="mt-1 flex-col border-t border-white/50 py-6">
							<div className="flex items-center text-sm text-gray-300 hover:text-gray-400">
								<Phone className="h-5 w-5" />
								<a className="ml-2" href="tel:+1 (555) 234-5678">
									+1 (555) 234-5678
								</a>
							</div>
							<div className="mt-2 flex items-center text-sm text-gray-300">
								<Clock className="h-5 w-5" />
								<span className="ml-2">Mon - Sat 8.00 - 18.00</span>
							</div>
						</div>
					</section>
				</div>
			</div>
		</main>
	)
}
