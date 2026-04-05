import logo from '@/assets/images/global/logo.png'
import { EnumShirtSleeve } from '@/shared/enums/shirt-collar/shirt-sleeve.enum'
import type { IConstructorPick } from '@/shared/interfaces/elements/constructor/constructor.interface'
import { formatClassName } from '@/utils/formats/class-name/format-class-name.util'
import type { FC } from 'react'
import styles from './ConstructorSliderBuilder.module.scss'

const ConstructorSliderBuilder: FC<IConstructorPick> = ({
	shirt,
	shorts,
	state,
}) => {
	const lastPlayerIndex = state.players.length - 1

	const pickedShirt = shirt.variations.find(
		(v) =>
			v.collar === state.shirtCollar.key &&
			v.sleeve === state.players[lastPlayerIndex].sleeve.key
	)
	
	return (
		<div
			id="builder"
			className={styles.wrapper}
			style={{ fontFamily: `var(--font-${state.shirtFont.key})` }}
		>
			<div className={styles.box}>
				<div className={styles.shirts}>
					<div className={formatClassName(styles.shirt, styles.first)}>
						{pickedShirt && (
							// <Image
							// 	{...BASE_IMAGE_PART_PROPS}
							// 	src={pickedShirt.imagePath}
							// 	width={240}
							// 	height={288}
							// 	alt=""
							// />
							<img src={pickedShirt.imagePath} width={240} height={288} />
						)}
						<div className={styles.logo}>
							{/* <Image
								{...BASE_IMAGE_PART_PROPS}
								src={logo}
								width={64}
								height={16}
								alt=""
							/> */}
							<img src={logo.src} />
						</div>
						{state.shirtChestNumber && (
							<span
								style={{ color: state.shirtTextsColor.key }}
								className={styles.number}
							>
								{state.players[lastPlayerIndex].number || 10}
							</span>
						)}
						{state.shirtSmallLogoPath && (
							<div className={styles.smallLogo}>
								{/* <Image
									{...BASE_IMAGE_PART_PROPS}
									src={state.shirtSmallLogoPath}
									width={29}
									height={15}
									alt=""
								/> */}
								<img src={state.shirtSmallLogoPath} width={29} height={15} />
							</div>
						)}
						{state.shirtBigLogoPath && (
							<div className={styles.bigLogo}>
								{/* <Image
									{...BASE_IMAGE_PART_PROPS}
									src={state.shirtBigLogoPath}
									width={56}
									height={28}
									alt=""
								/> */}
								<img src={state.shirtBigLogoPath} width={56} height={28} />
							</div>
						)}
					</div>
					<div className={formatClassName(styles.shirt, styles.last)}>
						{/* <Image
							{...BASE_IMAGE_PART_PROPS}
							src={
								state.players[lastPlayerIndex].sleeve.key ===
								EnumShirtSleeve.SHORT
									? shirt.backShortImagePath
									: shirt.backLongImagePath
							}
							width={240}
							height={288}
							alt=""
						/> */}
						<img
							src={
								state.players[lastPlayerIndex].sleeve.key ===
								EnumShirtSleeve.SHORT
									? shirt.backShortImagePath
									: shirt.backLongImagePath
							}
							width={240}
							height={288}
						/>
						<div className={styles.logo}>
							{/* <Image
								{...BASE_IMAGE_PART_PROPS}
								src={logo}
								width={64}
								height={16}
								alt=""
							/> */}
							<img src={logo.src} />
						</div>
						{state.shirtLastName && (
							<span
								style={{ color: state.shirtTextsColor.key }}
								className={styles.lastName}
							>
								{state.players[lastPlayerIndex].lastName || 'Фамилия'}
							</span>
						)}
						{state.shirtBigNumber && (
							<span
								style={{ color: state.shirtTextsColor.key }}
								className={styles.bigNumber}
							>
								{state.players[lastPlayerIndex].number || 10}
							</span>
						)}
					</div>
				</div>
				{state.isShortsActive && (
					<div className={styles.shorts}>
						<div className={formatClassName(styles.short, styles.first)}>
							{/* <Image
								{...BASE_IMAGE_PART_PROPS}
								src={shorts.imagePath}
								width={176}
								height={208}
								alt=""
							/> */}
							<img src={shorts.imagePath} width={176} height={208} />
							<div className={styles.logo}>
								{/* <Image
									{...BASE_IMAGE_PART_PROPS}
									src={logo}
									width={64}
									height={16}
									alt=""
								/> */}
								<img src={logo.src} width={64} height={16} />
							</div>
							{state.shortsNumber && (
								<span
									style={{ color: state.shortsTextsColor.key }}
									className={styles.number}
								>
									{state.players[lastPlayerIndex].number || 10}
								</span>
							)}
							{state.shortsLogoPath && (
								<div className={styles.shortsLogo}>
									{/* <Image
										{...BASE_IMAGE_PART_PROPS}
										src={state.shortsLogoPath}
										width={26}
										height={13}
										alt=""
									/> */}
									<img src={state.shortsLogoPath} width={26} height={13} />
								</div>
							)}
						</div>
						<div className={formatClassName(styles.short, styles.last)}>
							{/* <Image
								{...BASE_IMAGE_PART_PROPS}
								src={shorts.backImagePath}
								width={176}
								height={208}
								alt=""
							/> */}
							<img src={shorts.backImagePath} width={176} height={208} />
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default ConstructorSliderBuilder
