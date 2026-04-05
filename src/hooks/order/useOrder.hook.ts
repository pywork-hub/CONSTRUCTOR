import { WEBSITE_URL } from '@/constants/global.constants'
import type { TypeConstructorState } from '@/shared/types/elements/constructor/constructor.type'
import type { TypeOrder } from '@/shared/types/order/order.type'
import { blobToBase64 } from '@/utils/covnerts/blob-to-base64/blob-to-base64.util'
import domtoimage from 'dom-to-image'
import { useEffect, useState } from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

export const useOrder = (state: TypeConstructorState) => {
	const [preview, setPreview] = useState<string | null>(null)
	const [isPending, setIsPending] = useState(false)
	const { control, handleSubmit, reset } = useForm<TypeOrder>({
		mode: 'onChange',
		defaultValues: {
			state,
		},
	})

	const onSubmit: SubmitHandler<TypeOrder> = async (data) => {
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

			const response = await fetch(`${WEBSITE_URL}/api/order`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					...data,
					...(preview
						? {
								preview: await blobToBase64(preview),
						  }
						: {}),
					...(data.design
						? {
								design: await blobToBase64(data.design),
						  }
						: {}),
					state: {
						...data.state,
						...(data.state.shirtSmallLogoPath
							? {
									shirtSmallLogoPath: await blobToBase64(
										data.state.shirtSmallLogoPath
									),
							  }
							: {}),
						...(data.state.shirtBigLogoPath
							? {
									shirtBigLogoPath: await blobToBase64(
										data.state.shirtBigLogoPath
									),
							  }
							: {}),
						...(data.state.shortsLogoPath
							? {
									shortsLogoPath: await blobToBase64(data.state.shortsLogoPath),
							  }
							: {}),
					},
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

	useEffect(() => {
		const divElement = document.getElementById('builder');
		if (!divElement) return;
	
		domtoimage.toPng(divElement, {
      bgcolor: 'white',
      width: divElement.offsetWidth * 2,
      height: divElement.offsetHeight * 2,
      style: {
        transform: 'scale(2)',
        transformOrigin: 'top left',
      },
    })
      .then(function (dataUrl) {
        setPreview(dataUrl);
      })
      .catch(function (error) {
        console.error('Ошибка при генерации изображения:', error);
      });
	}, [state]);	

	return {
		control,
		handleSubmit,
		onSubmit,
		isPending,
		preview,
	}
}
