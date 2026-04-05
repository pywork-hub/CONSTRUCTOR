'use client'

import type { IClassName } from '@/shared/interfaces/common/class-name/class-name.interface'
import { Fancybox as NativeFancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'
import { useEffect, useRef, type FC, type PropsWithChildren } from 'react'

const FancyBox: FC<PropsWithChildren<IClassName>> = ({
	children,
	className,
}) => {
	const containerRef = useRef(null)

	useEffect(() => {
		const container = containerRef.current

		if (!container) return

		NativeFancybox.bind(container, '[data-fancybox]', {
			Carousel: {
				infinite: false,
			},
		})

		return () => {
			NativeFancybox.unbind(container)
			NativeFancybox
		}
	})

	return (
		<div className={className && className} ref={containerRef}>
			{children}
		</div>
	)
}

export default FancyBox
