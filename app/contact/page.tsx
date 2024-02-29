import HeroImage from 'assets/images/contact.jpg'

import { Container } from '@/components/container'
import HeroSection from '@/components/secondary-hero-section'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const contactDetails = [
	{
		title: 'PHONE',
		items: ['+1 345 234 4600', '+1 097 980 3459'],
	},
	{
		title: 'EMAIL',
		items: ['Booking@ridealong.com', 'Contact@ridealong.com'],
	},
	{
		title: 'HOURS',
		items: ['Monday - Saturday', '8:00AM - 10:00PM'],
	},
	{
		title: 'ADDRESS',
		items: ['5the Avenue, E 28th St,', 'Brooklyn NY, 2300 USA'],
	},
]

export default function Contact() {
	return (
		<main className="relative z-20 bg-black">
			{/* hero section  */}
			<HeroSection image={HeroImage} />
			<Container className="grid gap-8 py-24 sm:grid-cols-2 lg:grid-cols-4">
				{contactDetails.map((item) => (
					<div key={item.title} className="text-center lg:text-left">
						<h2 className="mx-auto mt-4 max-w-48 text-2xl font-semibold leading-8 lg:ml-0">
							{item.title}
						</h2>
						<div className="mx-auto mt-4 max-w-64 leading-8 text-gray-400 lg:ml-0">
							{item.items.map((item) => (
								<span key={item} className="inline-block">
									{item}
								</span>
							))}
						</div>
					</div>
				))}
			</Container>
			<Container className="bg-gray-900 py-20 md:grid md:grid-cols-2 md:place-items-center">
				<div className="mx-auto max-w-xl px-0 text-center md:px-8 md:text-left">
					<h1 className="text-2xl font-semibold sm:text-4xl">Get in touch</h1>
					<p className="mt-2 text-sm text-gray-300 sm:text-base md:mt-4 lg:mt-8 lg:text-gray-400">
						Proin volutpat consequat porttitor cras nullam gravida at. Orci
						molestie a eu arcu. Sed ut tincidunt integer elementum id sem. Arcu
						sed malesuada et magna.
					</p>
				</div>
				<form action="#" method="POST" className="mt-16 md:mt-0">
					<div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
						<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
							<div>
								<Label
									htmlFor="first-name"
									className="block text-sm font-semibold leading-6 text-white"
								>
									First name
								</Label>
								<div className="mt-2.5">
									<Input
										type="text"
										name="first-name"
										id="first-name"
										autoComplete="given-name"
										className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>
							<div>
								<Label
									htmlFor="last-name"
									className="block text-sm font-semibold leading-6 text-white"
								>
									Last name
								</Label>
								<div className="mt-2.5">
									<Input
										type="text"
										name="last-name"
										id="last-name"
										autoComplete="family-name"
										className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>
							<div className="sm:col-span-2">
								<Label
									htmlFor="email"
									className="block text-sm font-semibold leading-6 text-white"
								>
									Email
								</Label>
								<div className="mt-2.5">
									<Input
										type="email"
										name="email"
										id="email"
										autoComplete="email"
										className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>
							<div className="sm:col-span-2">
								<Label
									htmlFor="phone-number"
									className="block text-sm font-semibold leading-6 text-white"
								>
									Phone number
								</Label>
								<div className="mt-2.5">
									<Input
										type="tel"
										name="phone-number"
										id="phone-number"
										autoComplete="tel"
										className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>
							<div className="sm:col-span-2">
								<Label
									htmlFor="message"
									className="block text-sm font-semibold leading-6 text-white"
								>
									Message
								</Label>
								<div className="mt-2.5">
									<Textarea
										name="message"
										id="message"
										rows={4}
										className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>
						</div>
						<div className="mt-8 flex justify-end">
							<Button type="submit">Send message</Button>
						</div>
					</div>
				</form>
			</Container>
			<div className="w-full">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6479.947245958667!2d-0.5766281000000126!3d35.7022667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7e63d2f50d04e9%3A0x42b1d020110ca16f!2sCamffix%20Oran!5e0!3m2!1sen!2sdz!4v1709212282314!5m2!1sen!2sdz"
					height="450"
					className="w-full"
					allowFullScreen
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				/>
			</div>
		</main>
	)
}
