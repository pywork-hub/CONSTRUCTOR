export const blobToBase64 = async (blobUrl: string): Promise<string> => {
	const response = await fetch(blobUrl)
	const blob = await response.blob()

	return new Promise<string>((resolve, reject) => {
		const reader = new FileReader()

		reader.onloadend = () => {
			const base64Data = (reader.result as string).split(',')[1]
			resolve(base64Data)
		}

		reader.onerror = reject
		reader.readAsDataURL(blob)
	})
}
