import CarRental from 'assets/images/car-rental.jpg'
import HeroImage from 'assets/images/trafic.jpg'
import Wedding from 'assets/images/wedding.jpg'

import DetailsGrid from '@/components/details-grid'
import HeroSection from '@/components/secondary-hero-section'

export default function Services() {
	return (
		<main className="relative z-20 bg-black">
			{/* hero section  */}
			<HeroSection image={HeroImage} />
			<DetailsGrid
				title="Car Rental"
				asset={CarRental}
				link={{ label: 'View Plan & Price', link: '' }}
				paragraph="Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party deep v chillwave. Seitan High Life reprehenderit consectetur cupidatat kogi. Et leggings fanny pack, elit bespoke vinyl art party Pitchfork selfies master cleanse Kickstarter seitan retro."
			/>
			<DetailsGrid
				title="Weddings & Parties"
				asset={Wedding}
				reverse
				link={{ label: 'View Plan & Price', link: '' }}
				paragraph="Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party deep v chillwave. Seitan High Life reprehenderit consectetur cupidatat kogi. Et leggings fanny pack, elit bespoke vinyl art party Pitchfork selfies master cleanse Kickstarter seitan retro."
			/>
		</main>
	)
}
