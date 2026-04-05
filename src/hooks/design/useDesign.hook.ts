import { WEBSITE_URL } from '@/constants/global.constants'
import type { TypeDesign } from '@/shared/types/design/design.type'
import { blobToBase64 } from '@/utils/covnerts/blob-to-base64/blob-to-base64.util'
import { useState } from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

export const useDesign = () => {
	const [isPending, setIsPending] = useState(false)
	const { control, handleSubmit, reset } = useForm<TypeDesign>({
		mode: 'onChange',
	})

	const onSubmit: SubmitHandler<TypeDesign> = async (data) => {
		if (!data.name) {
			toast.error('Пожалуйста, укажите ваше имя и фамилию.')
			return
		}

		if (!data.email) {
			toast.error('Пожалуйста, укажите вашу электронную почту.')
			return
		}

		if (!data.phone) {
			toast.error('Пожалуйста, укажите ваш контактный телефон.')
			return
		}

		try {
			setIsPending(true)

			const response = await fetch(`${WEBSITE_URL}/api/design`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					...data,
					...(data.design
						? {
								design: await blobToBase64(data.design),
						  }
						: {}),
				}),
			})

			const result = JSON.parse(await response.text())

			if (result.success) {
				toast.success(result.message)
			} else {
				toast.error(result.message)
			}
			setIsPending(false)
			reset()
		} catch (error) {
			toast.error('Произошла ошибка. Пожалуйста, попробуйте позже.')
			setIsPending(false)
		}
	}

	return {
		control,
		handleSubmit,
		onSubmit,
		isPending,
	}
}
