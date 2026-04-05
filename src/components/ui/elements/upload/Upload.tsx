import type { IUpload } from '@/shared/interfaces/elements/upload/upload.interface'
import { formatClassName } from '@/utils/formats/class-name/format-class-name.util'
import { Download } from 'lucide-react'
import type { ChangeEvent, FC } from 'react'
import toast from 'react-hot-toast'
import styles from './Upload.module.scss'

const Upload: FC<IUpload> = ({
	heading,
	existHeading,
	value,
	onChange,
	className,
}) => {
	const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0]

		if (file) {
			const maxSize = 1 * 1024 * 1024

			if (file.size > maxSize) {
				toast.error('Файл слишком большой. Максимальный размер 1 МБ.')
			} else {
				onChange(URL.createObjectURL(file))
			}
		} else {
			onChange(null)
		}
	}

	return value ? (
		<button
			className={formatClassName(styles.upload, className && className)}
			onClick={() => onChange(null)}
		>
			{existHeading}
		</button>
	) : (
		<label className={formatClassName(styles.upload, className && className)}>
			<span>{heading}</span>
			<Download />
			<input
				hidden
				type="file"
				multiple={false}
				accept="image/jpeg, image/png"
				onChange={handleFileChange}
			/>
		</label>
	)
}

export default Upload
