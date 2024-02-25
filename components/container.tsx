import { cn } from '@/lib/utils'

export function Container(props: React.ComponentProps<'div'>) {
	const { className, children, ...delegated } = props

	return (
		<div
			className={cn(' px-8 sm:px-10 lg:px-20 xl:px-28', className)}
			{...delegated}
		>
			{children}
		</div>
	)
}
