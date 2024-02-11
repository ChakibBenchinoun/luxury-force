'use client'

import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { cn } from '@/lib/utils'

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

export function TextLoop({
	texts,
	className,
}: {
	texts: string[]
	className?: string
}) {
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
		<div className="relative inline-block h-[120px] w-full">
			<AnimatePresence>
				<motion.div
					className={cn(
						'absolute relative inset-0 h-fit w-full text-amber-100/50',
						className,
					)}
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
					<span className="-z-1 absolute left-0.5 top-0.5 text-amber-200/90">
						{texts[index]}
					</span>
					{texts[index]}
				</motion.div>
			</AnimatePresence>
		</div>
	)
}
