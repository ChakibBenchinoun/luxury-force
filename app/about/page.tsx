import Image from 'next/image'
import FAQ from 'assets/images/asking.jpg'
import AllYouNeed from 'assets/images/bmw.jpg'
import Keys from 'assets/images/handing-keys.jpg'
import Driver from 'assets/images/happy-driver.jpg'
import HeroImage from 'assets/images/range-rover.jpg'

import { Container } from '@/components/container'
import HeroSection from '@/components/secondary-hero-section'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import { carsData } from '@/assets/data'

const process = [
	{
		order: '01',
		title: 'RESERVE YOUR RIDE',
		description:
			'Aqestic optio amet a saepe aliquid voluptate dicta fuga dolor error eum dolor error totam voluptate',
	},
	{
		order: '02',
		title: 'SIGN THE CONTRACT',
		description:
			'Qqestic optio amet a aliquid voluptate dicta fuga dolor error eum dolor error totam voluptate saepe',
	},
	{
		order: '03',
		title: 'WE DELIVERED YOUR CAR',
		description:
			'Mqestic optio amet a saepe aliquid voluptate dicta fuga dolor error dolor error totam voluptate aestum',
	},
	{
		order: '04',
		title: 'ENJOY YOUR DRIVE',
		description:
			'Aqestic optio amet a saepe aliquid voluptate dicta fuga dolor error eum dolor error totam voluptate',
	},
]

const faq = [
	{
		quetion: 'WHAT DOCUMENTS ARE REQUIRED TO RENT A CAR?',
		answer:
			'Aqestic optio amet a ququam saepe aliquid voluate dicta fuga dolor error error sit quam minus sint rem a rerum dolobus delectus.',
	},
	{
		quetion: 'WHAT IS THE MINIMUM AGE TO RENT A CAR?',
		answer:
			'Aqestic optio amet a ququam saepe aliquid voluate dicta fuga dolor error error sit quam minus sint rem a rerum dolobus delectus.',
	},
	{
		quetion: 'CAN I CHANGE WHERE I RETURN A VEHICLE?',
		answer:
			'Aqestic optio amet a ququam saepe aliquid voluate dicta fuga dolor error error sit quam minus sint rem a rerum dolobus delectus.',
	},
	{
		quetion: 'CAN SOMEONE ELSE DRIVE THE CAR?',
		answer:
			'Aqestic optio amet a ququam saepe aliquid voluate dicta fuga dolor error error sit quam minus sint rem a rerum dolobus delectus.',
	},
	{
		quetion: 'WHAT IS THE ALLOWED MILEAGE PER DAY?',
		answer:
			'Aqestic optio amet a ququam saepe aliquid voluate dicta fuga dolor error error sit quam minus sint rem a rerum dolobus delectus.',
	},
	{
		quetion: 'IS SMOKING PERMITTED IN RENTAL CARS?',
		answer:
			'Aqestic optio amet a ququam saepe aliquid voluate dicta fuga dolor error error sit quam minus sint rem a rerum dolobus delectus.',
	},
]

export default function About() {
	return (
		<main className="relative z-20 bg-black">
			{/* hero section  */}
			<HeroSection image={HeroImage} />
			<div>
				<Container className="grid  gap-8 py-24 sm:grid-cols-2 lg:grid-cols-4">
					{process.map((item) => (
						<div key={item.title} className="text-center lg:text-left">
							<span className="mx-auto text-2xl font-bold text-amber-200 lg:ml-0">
								{item.order}.
							</span>
							<h2 className="mx-auto mt-4 max-w-48 text-2xl font-semibold leading-8 lg:ml-0">
								{item.title}
							</h2>
							<p className="mx-auto mt-4 max-w-64 text-gray-400 lg:ml-0">
								{item.description}
							</p>
						</div>
					))}
				</Container>
				<div className="mt-10 grid gap-20 md:grid-cols-2 xl:gap-x-28">
					<Image
						src={Driver}
						alt=""
						className="aspect-square border border-yellow-500/50 object-cover object-bottom md:aspect-auto xl:aspect-square"
					/>
					<div>
						<div className="mt-5 px-4 text-center md:pr-8 md:text-left">
							<span className="mx-auto font-bold text-amber-200 md:ml-0 lg:text-lg">
								DRIVE YOUR DREAMS
							</span>
							<h1 className="mx-auto mt-3 max-w-lg text-2xl font-bold sm:text-3xl md:ml-0 lg:text-4xl">
								EXPERIENCE FREEDOM ON FOUR WHEELS
							</h1>
							<p className="mx-auto mt-7 max-w-md text-sm text-gray-400 sm:text-base md:ml-0">
								Aqestic optio amet a ququam saepe aliquid voluate dicta fuga
								dolor saerror sed earum a magni soluta quam minus dolor dolor
								sed earum a magni soluta autem dolor error error sit quam minus
								sint rem a rerum dolobus veritatis delectus.
							</p>
						</div>
						<Image
							src={Keys}
							alt=""
							className="mt-16 w-full border border-yellow-500/50 object-cover object-bottom"
						/>
					</div>
				</div>
			</div>
			<div className="mt-20 bg-gray-900 py-24 sm:py-32">
				<Container>
					<p className="text-center text-lg font-bold text-amber-200">
						CAR BRANDS
					</p>
					<h2 className="mt-3 text-center text-4xl font-semibold leading-10">
						DISCOVER OUR FLEET OF CARS
					</h2>
					<div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6">
						{carsData
							.flatMap((brand) => [
								{ logo: brand.logoImage, logoName: brand.brand },
							])
							.map((item) => (
								<div
									key={item.logo.src}
									className="h-20 w-full rounded-lg bg-amber-100 p-3"
								>
									<img
										src={item.logo.src}
										alt=""
										className="col-span-2 h-full w-full object-contain lg:col-span-1"
									/>
								</div>
							))}
					</div>
				</Container>
			</div>
			<div className="relative my-20 grid items-center lg:grid-cols-2">
				<Image
					src={AllYouNeed}
					alt=""
					className="aspect-square border border-yellow-500/50 object-cover blur-sm md:aspect-auto lg:blur-0"
				/>
				<div className="absolute inset-0 bg-black/50 lg:hidden" />
				<div className="absolute inset-0 m-auto h-fit w-full max-w-md px-8 text-center sm:px-0 lg:relative lg:h-auto lg:text-left">
					<h1 className="text-2xl font-semibold sm:text-4xl">
						For Your Every Need
					</h1>
					<span className="mt-2 inline-block text-sm text-amber-400 sm:text-base md:mt-4">
						ONLY THE BEST
					</span>
					<p className="mt-2 text-sm text-gray-300 sm:text-base md:mt-4 lg:mt-8 lg:text-gray-400">
						Praesent elementum facilisis leo vel fringilla est. Vest bulum
						lectus a urise ultrices eros in cursus.
					</p>
					<div className="mt-5 px-6 sm:mt-16 sm:flex sm:justify-between lg:mt-10 lg:px-0">
						<div>
							<div className="relative">
								<span className="text-5xl font-semibold sm:text-7xl">21</span>
								<span className="absolute ml-1 text-3xl font-semibold sm:text-5xl">
									+
								</span>
							</div>
							<span className="mt-1 inline-block text-sm font-semibold text-gray-300 sm:mt-2 sm:text-base">
								Years of experience
							</span>
						</div>
						<div className="mt-6 sm:mt-0">
							<div className="relative">
								<span className="text-5xl font-semibold sm:text-7xl">157</span>
								<span className="text-3xl sm:text-5xl">k</span>
							</div>
							<span className="mt-1 inline-block text-sm font-semibold text-gray-300 sm:mt-2 sm:text-base">
								Satisfied clients
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className="relative grid items-center md:my-20 lg:grid-cols-2">
				<div className="m-auto h-fit w-full max-w-md px-8 text-center md:px-0 lg:h-auto lg:text-left">
					<span className="mt-4 inline-block text-sm text-amber-400 sm:text-base">
						ASK US A QUESTION
					</span>
					<h1 className="mt-2 text-2xl font-semibold sm:text-4xl md:mt-4">
						FREQUENTLY ASKED QUESTIONS
					</h1>
					<Accordion
						type="single"
						collapsible
						className="mt-3 w-full text-left text-sm md:mt-6 md:text-base"
					>
						{faq.map((question) => (
							<AccordionItem value={question.quetion}>
								<AccordionTrigger>{question.quetion}</AccordionTrigger>
								<AccordionContent>{question.answer}</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>

				<Image
					src={FAQ}
					alt=""
					className="mt-20 border border-yellow-500/50 lg:mt-0"
				/>
			</div>
		</main>
	)
}
