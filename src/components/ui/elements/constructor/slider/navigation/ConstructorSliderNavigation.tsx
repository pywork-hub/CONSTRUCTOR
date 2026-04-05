import type { IConstructorSliderNavigation } from '@/shared/interfaces/elements/constructor/constructor.interface'
import { formatClassName } from '@/utils/formats/class-name/format-class-name.util'
import type { FC } from 'react'
import styles from './ConstructorSliderNavigation.module.scss'

const ConstructorSliderNavigation: FC<IConstructorSliderNavigation> = ({
	index,
	state,
	examples,
	goTo,
	shirt,
	shorts,
}) => {
	return (
		<div className={styles.navigation}>
			<button
				className={formatClassName(
					styles.construct,
					index === 0 ? styles.active : undefined
				)}
				onClick={() => goTo(0)}
			>
				{/* <Image
					{...BASE_IMAGE_PROPS}
					src={shirt.variations[0].imagePath}
					width={55}
					height={66}
					alt=""
				/> */}
				<img src={shirt.variations[0].imagePath} width={55} height={66} />
				{state.isShortsActive && (
					// <Image
					// 	{...BASE_IMAGE_PROPS}
					// 	src={shorts.imagePath}
					// 	width={41}
					// 	height={47}
					// 	alt=""
					// />
					<img src={shorts.imagePath} width={41} height={47} />
				)}
			</button>
			<div className={styles.examples}>
				<p className={styles.heading}>Примеры базовых дизайнов</p>
				<ul className={styles.items}>
					{examples.map((example, exampleIndex) => (
						<li key={exampleIndex} className={styles.item}>
							<button
								className={formatClassName(
									styles.button,
									index === exampleIndex + 1 ? styles.active : undefined
								)}
								onClick={() => goTo(exampleIndex + 1)}
							>
								{/* <Image
									{...BASE_IMAGE_PROPS}
									src={example.imagesPaths[0]}
									width={100}
									height={130}
									alt=""
								/> */}
								<img src={example.imagesPaths[0]} width={100} height={130} />
							</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default ConstructorSliderNavigation
