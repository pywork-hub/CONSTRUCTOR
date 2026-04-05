import type { TypeDesign } from '@/shared/types/design/design.type'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
	try {
		const data = (await request.json()) as TypeDesign

		const attachments = []

		if (data.design) {
			attachments.push({
				filename: 'design.png',
				content: Buffer.from(data.design, 'base64'),
				encoding: 'base64',
			})
		}

		const smtp = process.env.EMAIL_SMTP
		const username = process.env.EMAIL_USERNAME
		const password = process.env.EMAIL_PASSWORD
		
		const transporter = nodemailer.createTransport({
			host: smtp,
			port: 465,
			auth: {
				user: username,
				pass: password,
			},
		})

		await transporter.sendMail({
			from: username,
			to: ['serpukhov@penalty.ru', 'sklad@penalty.ru', 'pywork.business@gmail.com'],
			subject: `Новый дизайн`,
			html: `
				<h2>Клиент:</h2>
				<p>Имя: ${data.name}</p>
				<p>E-mail: ${data.email}</p>
				<p>Номер телефона: ${data.phone}</p>
				<p>Комментарий: ${data.comment}</p>
				<p>Загружен собственный дизайн: ${
					data.design ? 'Файл design.png' : '❌ Не выбран'
				}</p>
      `,
			attachments: attachments,
		})

		return new Response(
			JSON.stringify({ success: true, message: 'Запрос успешно отправлен.' }),
			{
				status: 200,
				headers: { 'Content-Type': 'application/json' },
			}
		)
	} catch (error) {
		return new Response(
			JSON.stringify({
				success: false,
				message: 'Произошла ошибка. Пожалуйста попробуйте позже.',
			}),
			{
				status: 500,
				headers: { 'Content-Type': 'application/json' },
			}
		)
	}
}
