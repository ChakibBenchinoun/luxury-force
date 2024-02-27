import AudiLogo from './images/Audi_logo.svg.png'
import AudiA5 from './images/audi-a5.jpg'
import BmwLogo from './images/BMW-logo.png'
import BmwM4 from './images/bmw-m4.jpg'
import Coupe from './images/coupe.jpg'
import LandRoverLogo from './images/land-rover-logo.png'
import MercedesLogo from './images/Mercedes-Benz_Logo.png'
import MercedesCLS from './images/mercedes-cls.jpg'
import MercedesGClass from './images/mercedes-g-class2.jpg'
import PorscheLogo from './images/Porsche_logo.png'
import Porche718 from './images/porsche-718.jpg'
import PorchePanamera from './images/porsche-panamera.jpg'
import RangeRover from './images/range-rover.jpg'
import Sedan from './images/sedan.jpg'
import SUV from './images/suv.jpg'
import Volkswagen7 from './images/volkswagen-7.jpg'
import VolkswagenLogo from './images/Volkswagen-logo.png'

type CarTypes = 'Coupe' | 'Sedan' | 'SUV'

export const carsData = [
	{
		brand: 'Audi',
		carDefaultImage: AudiA5,
		logoImage: AudiLogo,
		cars: [
			{
				name: 'Audi A5',
				type: 'Coupe',
				image: AudiA5,
				starRate: 4,
				reviews: 6,
				features: [
					{ feat: 'Passengers', type: '4' },
					{ feat: 'Luggages', type: '2' },
					{ feat: 'GearBox', type: 'Auto' },
					{ feat: 'Doors', type: '2' },
				],
				price: '22000.00',
				included: [
					'Audio input',
					'Bluetooth',
					'Heated seats',
					'All Wheel drive',
					'USB input',
				],
			},
		],
	},
	{
		brand: 'BMW',
		carDefaultImage: BmwM4,
		logoImage: BmwLogo,
		cars: [
			{
				name: 'BMW M4',
				type: 'Coupe',
				image: BmwM4,
				starRate: 4,
				reviews: 3,
				features: [
					{ feat: 'Passengers', type: '4' },
					{ feat: 'Luggages', type: '2' },
					{ feat: 'GearBox', type: 'Auto' },
					{ feat: 'Doors', type: '4' },
				],
				price: '25000.00',
				included: [
					'Audio input',
					'Bluetooth',
					'Heated seats',
					'All Wheel drive',
					'USB input',
				],
			},
		],
	},
	{
		brand: 'Mercedes Benz',
		carDefaultImage: MercedesGClass,
		logoImage: MercedesLogo,
		cars: [
			{
				name: 'Mercedes CLS',
				type: 'SUV',
				image: MercedesCLS,
				starRate: 4,
				reviews: 5,
				features: [
					{ feat: 'Passengers', type: '4' },
					{ feat: 'Luggages', type: '2' },
					{ feat: 'GearBox', type: 'Auto' },
					{ feat: 'Doors', type: '4' },
				],
				price: '32000.00',
				included: [
					'Audio input',
					'Bluetooth',
					'Heated seats',
					'All Wheel drive',
					'USB input',
				],
			},
			{
				name: 'Mercedes G Class',
				type: 'Sedan',
				image: MercedesGClass,
				starRate: 4,
				reviews: 10,
				features: [
					{ feat: 'Passengers', type: '4' },
					{ feat: 'Luggages', type: '4' },
					{ feat: 'GearBox', type: 'Auto' },
					{ feat: 'Doors', type: '4' },
				],
				price: '35000.00',
				included: [
					'Audio input',
					'Bluetooth',
					'Heated seats',
					'All Wheel drive',
					'USB input',
				],
			},
		],
	},
	{
		brand: 'Porsche',
		carDefaultImage: Porche718,
		logoImage: PorscheLogo,
		cars: [
			{
				name: 'Porche 718',
				type: 'Coupe',
				image: Porche718,
				starRate: 4,
				reviews: 3,
				features: [
					{ feat: 'Passengers', type: '4' },
					{ feat: 'Luggages', type: '2' },
					{ feat: 'GearBox', type: 'Auto' },
					{ feat: 'Doors', type: '4' },
				],
				price: '39000.00',
				included: [
					'Audio input',
					'Bluetooth',
					'Heated seats',
					'All Wheel drive',
					'USB input',
				],
			},
			{
				name: 'Porche Panamera',
				type: 'Sedan',
				image: PorchePanamera,
				starRate: 4,
				reviews: 3,
				features: [
					{ feat: 'Passengers', type: '4' },
					{ feat: 'Luggages', type: '2' },
					{ feat: 'GearBox', type: 'Auto' },
					{ feat: 'Doors', type: '4' },
				],
				price: '38000.00',
				included: [
					'Audio input',
					'Bluetooth',
					'Heated seats',
					'All Wheel drive',
					'USB input',
				],
			},
		],
	},
	{
		brand: 'Land Rover',
		carDefaultImage: RangeRover,
		logoImage: LandRoverLogo,
		cars: [
			{
				name: 'RANGE ROVER',
				type: 'SUV',
				image: RangeRover,
				starRate: 4,
				reviews: 3,
				features: [
					{ feat: 'Passengers', type: '4' },
					{ feat: 'Luggages', type: '2' },
					{ feat: 'GearBox', type: 'Auto' },
					{ feat: 'Doors', type: '4' },
				],
				price: '27000.00',
				included: [
					'Audio input',
					'Bluetooth',
					'Heated seats',
					'All Wheel drive',
					'USB input',
				],
			},
		],
	},
	{
		brand: 'Volkswagen',
		carDefaultImage: Volkswagen7,
		logoImage: VolkswagenLogo,
		cars: [
			{
				name: 'Golf 7',
				type: 'Coupe',
				image: Volkswagen7,
				starRate: 4,
				reviews: 3,
				features: [
					{ feat: 'Passengers', type: '4' },
					{ feat: 'Luggages', type: '2' },
					{ feat: 'GearBox', type: 'Auto' },
					{ feat: 'Doors', type: '4' },
				],
				price: '19000.00',
				included: [
					'Audio input',
					'Bluetooth',
					'Heated seats',
					'All Wheel drive',
					'USB input',
				],
			},
		],
	},
]

export const carTypes = [
	{ type: 'Coupe', image: Coupe },
	{ type: 'Sedan', image: Sedan },
	{ type: 'SUV', image: SUV },
]
