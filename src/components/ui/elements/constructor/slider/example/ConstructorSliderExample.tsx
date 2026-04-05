import type { IExample } from '@/shared/interfaces/entities/example/example.interface'
import type { FC } from 'react'
import FancyBox from '../../../fancy-box/FancyBox'
import styles from './ConstructorSliderExample.module.scss'

const ConstructorSliderExample: FC<IExample> = ({ example }) => {
	return (
		<div className={styles.wrapper}>
			<FancyBox className={styles.example}>
				<a
					className={styles.main}
					data-fancybox="gallery"
					href={example.imagesPaths[0]}
				>
					{/* <Image
						{...BASE_IMAGE_PROPS}
						src={example.imagesPaths[0]}
						width={440}
						height={675}
						alt=""
					/> */}
					<img src={example.imagesPaths[0]} width={440} height={675} />
				</a>
				<div className={styles.dots}>
					{example.imagesPaths.slice(1, 4).map((path, index) => (
						<a
							className={styles.dot}
							key={index}
							data-fancybox="gallery"
							href={path}
						>
							{/* <Image
								{...BASE_IMAGE_PART_PROPS}
								src={path}
								width={158}
								height={209}
								alt=""
							/> */}
							<img src={path} width={158} height={209} />
						</a>
					))}
				</div>
			</FancyBox>
		</div>
	)
}

export default ConstructorSliderExample
