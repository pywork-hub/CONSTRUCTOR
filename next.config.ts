import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	reactStrictMode: true,
	poweredByHeader: false,
	env: {
		APP_ENV: process.env.NEXT_APP_ENV,
		SITE_URL: process.env.NEXT_SITE_URL,
		EMAIL_SMTP: process.env.NEXT_EMAIL_SMTP,
		EMAIL_USERNAME: process.env.NEXT_EMAIL_USERNAME,
		EMAIL_PASSWORD: process.env.NEXT_EMAIL_PASSWORD,
		PERSONAL_EMAIL: process.env.NEXT_PERSONAL_EMAIL,
	},
	sassOptions: {
		silenceDeprecations: ['legacy-js-api'],
	},
	images: {
		formats: ['image/avif', 'image/webp'],
	},
}

export default nextConfig
