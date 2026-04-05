import type { TypeOrder } from '@/shared/types/order/order.type'
import { formatPrice } from '@/utils/formats/price/format-price.util'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
	try {
		const data = (await request.json()) as TypeOrder

		const colorParentStyle = 'display: flex;'
		const colorStyle =
			'width: 15px; height: 15px; display: block; border-radius: 50%; margin: auto 5px;'

		const attachments = []

		if (data.preview) {
			attachments.push({
				filename: 'preview.png',
				content: Buffer.from(data.preview, 'base64'),
				encoding: 'base64',
			})
		}

		if (data.design) {
			attachments.push({
				filename: 'design.png',
				content: Buffer.from(data.design, 'base64'),
				encoding: 'base64',
			})
		}

		if (data.state.shirtSmallLogoPath) {
			attachments.push({
				filename: 'shirt-small-logo.png',
				content: Buffer.from(data.state.shirtSmallLogoPath, 'base64'),
				encoding: 'base64',
			})
		}

		if (data.state.shirtBigLogoPath) {
			attachments.push({
				filename: 'shirt-big-logo.png',
				content: Buffer.from(data.state.shirtBigLogoPath, 'base64'),
				encoding: 'base64',
			})
		}

		if (data.state.shortsLogoPath) {
			attachments.push({
				filename: 'shorts-logo.png',
				content: Buffer.from(data.state.shortsLogoPath, 'base64'),
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
			subject: `Новый заказ`,
			html: `
				<h2>Клиент:</h2>
				<p>Имя: ${data.name}</p>
				<p>E-mail: ${data.email}</p>
				<p>Номер телефона: ${data.phone}</p>
				<p>Комментарий: ${data.comment}</p>
				<p>Загружен собственный дизайн: ${
					data.design ? 'Файл design.png' : '❌ Не выбран'
				}</p>
				<p>Макет: ${data.preview ? 'Файл preview.png' : '❌ Нету'}</p>
				<h2>Футболка</h2>
				<p>Воротник: ${data.state.shirtCollar.label}</p>
				<p style='${colorParentStyle}'>Цвет текстов: <span style='${colorStyle} background-color: ${
				data.state.shirtTextsColor.key
			};'></span> (${data.state.shirtTextsColor.label})</p>
				<p style='${colorParentStyle}'>Цвет логотипа: <span style='${colorStyle} background-color: ${
				data.state.shirtLogoColor.key
			};'></span> (${data.state.shirtLogoColor.label})</p>
				<p>Большой номер на футболке: ${
					data.state.shirtBigNumber ? '✅ Выбран' : '❌ Не выбран'
				}</p>
				<p>Номер на груди: ${
					data.state.shirtChestNumber ? '✅ Выбран' : '❌ Не выбран'
				}</p>
				<p>Фамилия на футболке: ${
					data.state.shirtLastName ? '✅ Выбрана' : '❌ Не выбрана'
				}</p>
				<p>Маленький логотип: ${
					data.state.shirtSmallLogoPath
						? 'Файл shirt-small-logo.png'
						: '❌ Не выбран'
				}</p>
				<p>Большой логотип: ${
					data.state.shirtBigLogoPath
						? 'Файл shirt-big-logo.png'
						: '❌ Не выбран'
				}</p>
				${
					data.state.isShortsActive
						? `
				<h2>Шорты</h2>
				<p style='${colorParentStyle}'>Цвет текстов: <span style='${colorStyle} background-color: ${
								data.state.shortsTextsColor.key
						  };'></span> (${data.state.shortsTextsColor.label})</p>
				<p style='${colorParentStyle}'>Цвет логотипа: <span style='${colorStyle} background-color: ${
								data.state.shortsLogoColor.key
						  };'></span> (${data.state.shortsLogoColor.label})</p>
				<p>Номер на шортах: ${
					data.state.shortsNumber ? '✅ Выбран' : '❌ Не выбран'
				}</p>
				<p>Логотип на шортах: ${
					data.state.shortsLogoPath ? 'Файл shorts-logo.png' : '❌ Не выбран'
				}</p>
				`
						: ''
				}
				<h2>Игроки</h2>
				${data.state.players
					.map(
						(player, index) => `
				<h4>Игрок ${index + 1}</h4>
				<p>Фамилия: ${player.lastName}</p>
				<p>Номер: ${player.number}</p>
				<p>Размер футболки: ${player.shirtSize?.label}</p>
				<p>Размер шортов: ${player.shortsSize?.label}</p>
				<p>Длина рукава: ${player.sleeve.label}</p>`
					)
					.join('')}
				<h2>Дополнительные параметры</h2>
				<p>Шрифт: ${data.state.shirtFont.label}</p>
				<h1>Цена: ${formatPrice(data.state.price)} рублей</h1>
      `,
			attachments: attachments,
		})

		return new Response(
			JSON.stringify({ success: true, message: 'Заказ успешно отправлен.' }),
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
