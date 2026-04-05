import type { IShirt } from '@/shared/interfaces/entities/shirt/shirt.interface'
import { formatClassName } from '@/utils/formats/class-name/format-class-name.util'
import type { FC } from 'react'
import styles from './Shirt.module.scss'

const Shirt: FC<IShirt> = ({
	isPicked,
	shirt,
	size,
	changeShirt,
	className,
}) => {
	const isBig = size === 'big'

	return (
		<li
			className={formatClassName(
				styles.shirt,
				`${className && className}${isPicked ? ' ' + styles.picked : ''}`
			)}
		>
			<button
				className={formatClassName(
					styles.fill,
					isBig ? styles.big : styles.small
				)}
				onClick={() => changeShirt(shirt)}
			>
				{/* <Image
					{...BASE_IMAGE_PROPS}
					src={shirt.variations[0].imagePath}
					width={isBig ? 64 : 57}
					height={isBig ? 75 : 69}
					alt=""
				/> */}
				<img src={shirt.variations[0].imagePath} />
			</button>
		</li>
	)
}

export default Shirt
