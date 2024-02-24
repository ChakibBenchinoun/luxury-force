import AudiA5 from './images/audi-a5.jpg'
import BmwM4 from './images/bmw-m4.jpg'
import Coupe from './images/coupe.jpg'
import MercedesCLS from './images/mercedes-cls.jpg'
import MercedesGClass from './images/mercedes-g-class2.jpg'
import Porche718 from './images/porsche-718.jpg'
import PorchePanamera from './images/porsche-panamera.jpg'
import RangeRover from './images/range-rover.jpg'
import Sedan from './images/sedan.jpg'
import SUV from './images/suv.jpg'
import Volkswagen7 from './images/volkswagen-7.jpg'

type CarTypes = 'Coupe' | 'Sedan' | 'SUV'

export const carsData = [
	{
		brand: 'Audi',
		carDefaultImage: AudiA5,
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
