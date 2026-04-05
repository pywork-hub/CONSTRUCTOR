import { BASE_IMAGE_PROPS } from '@/constants/global.constants'
import type { IShorts } from '@/shared/interfaces/entities/shorts/shorts.interface'
import { formatClassName } from '@/utils/formats/class-name/format-class-name.util'
import Image from 'next/image'
import type { FC } from 'react'
import styles from './Shorts.module.scss'

const Shorts: FC<IShorts> = ({ isPicked, shorts, changeShorts, className }) => {
	return (
		<li
			className={formatClassName(
				styles.shorts,
				`${className && className}${isPicked ? ' ' + styles.picked : ''}`
			)}
		>
			<button
				className={formatClassName(styles.fill)}
				onClick={() => changeShorts(shorts)}
			>
				<Image
					{...BASE_IMAGE_PROPS}
					src={shorts.imagePath}
					width={64}
					height={77}
					alt=""
				/>
			</button>
		</li>
	)
}

export default Shorts
