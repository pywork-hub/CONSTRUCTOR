import type { Config } from 'tailwindcss'

const plugin = require('tailwindcss/plugin')

const config: Config = {
	content: ['./src/components/**/*.tsx', './src/app/**/*.tsx'],
	theme: {
		fontFamily: {
			din: 'var(--font-din), sans-serif',
			matthan: 'var(--font-matthan), sans-serif',
			font1: 'var(--font-1), sans-serif',
			font2: 'var(--font-2), sans-serif',
			font3: 'var(--font-3), sans-serif',
			font4: 'var(--font-4), sans-serif',
			font5: 'var(--font-5), sans-serif',
			font6: 'var(--font-6), sans-serif',
			font7: 'var(--font-7), sans-serif',
			font8: 'var(--font-8), sans-serif',
			font9: 'var(--font-9), sans-serif',
		},
		colors: {
			white: '#ffffff',
			black: '#000000',
			transparent: 'transparent',
			gray: {
				600: '#2c2c2c',
				500: '#4d4d4d',
				400: '#757575',
				300: '#b1b1b1',
				250: '#ccc',
				220: '#dadada',
				200: '#e5e5e5',
				150: '#d9dcdd',
				100: '#f5f5f5',
				80: '#f9f9f9',
				50: '#fafafa',
			},
			red: {
				base: '#7f1a4b',
				300: '#f34949',
			},
			green: {
				300: '#23ce70',
			},
		},
		lineHeight: {
			none: '1',
			base: '1.2',
			md: '1.5',
			lg: '1.7',
		},
		fontSize: {
			xsm: '12px',
			sm: '14px',
			md: '15px',
			base: '16px',
			lg: '18px',
			'2lg': '19px',
			'3lg': '25px',
			'4lg': '29px',
			'5lg': '40px',
			'6lg': '43px',
			xl: '48px',
			'2xl': '96px',
		},
		borderRadius: {
			xsm: '2px',
			full: '9999px',
		},
		zIndex: {
			1: '1',
		},
		extend: {
			transitionTimingFunction: {
				DEFAULT: 'ease-out',
			},
			transitionDuration: {
				DEFAULT: '300ms',
			},
			keyframes: {
				fade: {
					from: { opacity: '0' },
					to: { opacity: '1' },
				},
			},
			animation: {
				fade: 'fade 300ms ease-in-out forwards',
			},
		},
	},
	plugins: [
		plugin(
			({
				addComponents,
				theme,
				addUtilities,
			}: {
				addUtilities: Function
				addComponents: Function
				theme: Function
			}) => {
				addComponents({})

				addUtilities({
					'.flex-center-between': {
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
					},

					'.image-like-bg-contain': {
						width: '100%',
						height: '100%',
						objectPosition: 'center',
						objectFit: 'contain',
						pointerEvents: 'none',
					},

					'.image-like-bg-cover': {
						width: '100%',
						height: '100%',
						objectPosition: 'center',
						objectFit: 'cover',
						pointerEvents: 'none',
					},
				})
			}
		),
	],
}
export default config
