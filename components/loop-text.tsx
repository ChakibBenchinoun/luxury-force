'use client'

import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const variants = {
	enter: () => {
		return {
			y: -20,
			opacity: 0,
		}
	},
	center: {
		zIndex: 1,
		y: 0,
		opacity: 1,
	},
	exit: () => {
		return {
			zIndex: 0,
			opacity: 0,
		}
	},
}

export function TextLoop({ texts }: { texts: string[]; className?: string }) {
	const [index, setIndex] = useState(0)

	useEffect(() => {
		setTimeout(() => {
			let next = index + 1
			if (next === texts.length) {
				next = 0
			}
			setIndex(next)
		}, 5 * 1000)
	}, [index, setIndex])

	return (
		<div className="relative inline-block h-14 w-full max-w-lg lg:h-16 lg:max-w-2xl xl:h-20 xl:max-w-4xl">
			<AnimatePresence>
				<motion.div
					className="absolute inset-0 h-fit w-full text-3xl font-semibold uppercase text-amber-200 lg:text-4xl xl:text-5xl"
					variants={variants}
					key={index}
					initial="enter"
					animate="center"
					exit="exit"
					transition={{
						y: { type: 'spring', stiffness: 300, damping: 200 },
						opacity: { duration: 0.5 },
					}}
				>
					{texts[index]}
				</motion.div>
			</AnimatePresence>
		</div>
	)
}
