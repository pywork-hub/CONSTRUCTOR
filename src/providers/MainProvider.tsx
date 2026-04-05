'use client'

import '@/assets/styles/toaster.scss'
import type { PropsWithChildren } from 'react'
import { Toaster } from 'react-hot-toast'

export default function MainProvider({ children }: PropsWithChildren) {
	return (
		<>
			{children}
			<Toaster
				position="top-right"
				gutter={8}
				toastOptions={{
					duration: 3000,
					style: {
						fontWeight: 700,
					},
					error: {
						style: {
							color: '#fafafa',
							backgroundColor: '#F31559',
						},
					},
					success: {
						style: {
							color: '#fafafa',
							backgroundColor: '#2EE89A',
						},
					},
					className: 'toaster',
				}}
			/>
		</>
	)
}
