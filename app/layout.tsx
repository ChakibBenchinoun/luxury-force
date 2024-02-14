import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import '@/styles/globals.css'

import { cn } from '@/lib/utils'
import { Footer } from '@/components/layout/footer'
import { Navigation } from '@/components/layout/navigation'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
	title: 'LUXURY FORCE 3',
	description: 'Car Rentel',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang="en"
			className="h-full w-full overflow-x-hidden scroll-smooth antialiased"
		>
			<body
				className={cn('relative w-full bg-black text-white', inter.className)}
			>
				<Navigation />
				{children}
				<Footer />
			</body>
		</html>
	)
}
