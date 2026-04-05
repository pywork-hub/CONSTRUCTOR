module.exports = {
	apps: [
		{
			name: 'pywork',
			script: 'yarn',
			args: 'start',
			watch: true,
			ignore_watch: ['node_modules', '.next/cache'],
			env: {
				NEXT_APP_ENV: 'production',
				NEXT_SITE_URL: 'https://domain.com',
				NEXT_EMAIL_SMTP: 'smtp.beget.com',
				NEXT_EMAIL_USERNAME: 'support@domain.com',
				NEXT_EMAIL_PASSWORD: '11111',
				NEXT_PERSONAL_EMAIL: 'test@gmail.com',
			},
		},
	],
}
