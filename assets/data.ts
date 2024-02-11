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
		cars: [{ name: 'Audi A5', type: 'SUV', image: AudiA5 }],
	},
	{
		brand: 'BMW',
		carDefaultImage: BmwM4,
		cars: [{ name: 'BMW M4', type: 'Coupe', image: BmwM4 }],
	},
	{
		brand: 'Mercedes Benz',
		carDefaultImage: MercedesGClass,
		cars: [
			{ name: 'Mercedes CLS', type: 'SUV', image: MercedesCLS },
			{ name: 'Mercedes G Class', type: 'Sedan', image: MercedesGClass },
		],
	},
	{
		brand: 'Porsche',
		carDefaultImage: Porche718,
		cars: [
			{ name: 'Porche 718', type: 'Coupe', image: Porche718 },
			{ name: 'Porche Panamera', type: 'Sedan', image: PorchePanamera },
		],
	},
	{
		brand: 'Land Rover',
		carDefaultImage: RangeRover,
		cars: [{ name: 'RANGE ROVER', type: 'SUV', image: RangeRover }],
	},
	{
		brand: 'Volkswagen',
		carDefaultImage: Volkswagen7,
		cars: [{ name: 'Golf 7', type: 'Coupe', image: Volkswagen7 }],
	},
]

export const carTypes = [
	{ type: 'Coupe', image: Coupe },
	{ type: 'Sedan', image: Sedan },
	{ type: 'SUV', image: SUV },
]
