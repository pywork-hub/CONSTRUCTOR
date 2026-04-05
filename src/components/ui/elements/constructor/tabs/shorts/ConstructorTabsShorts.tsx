import Shorts from '@/components/parts/shorts/Shorts'
import type { IConstructorShorts } from '@/shared/interfaces/elements/constructor/constructor.interface'
import { formatClassName } from '@/utils/formats/class-name/format-class-name.util'
import { useMemo, useState, type FC } from 'react'
import Select from '../../../select/Select'
import Switch from '../../../switch/Switch'
import Upload from '../../../upload/Upload'
import { CONSTRUCTOR_COLORS } from '../../data/constructor.data'
import styles from '../ConstructorTabsGlobal.module.scss'

const ConstructorTabsShorts: FC<IConstructorShorts> = ({
	shorts,
	pickedShorts,
	changeShorts,
	state,
	setState,
}) => {
	const count = 16

	const [isMore, setIsMore] = useState(pickedShorts.id > count ? true : false)

	const displayedItems = useMemo(() => {
		return shorts.slice(0, isMore ? undefined : count)
	}, [shorts, isMore])

	return (
		<div className={styles.wrapper}>
			<label className={styles.disable}>
				Убрать шорты
				<Switch
					isChecked={!state.isShortsActive}
					onClick={() =>
						setState((prev) => ({
							...prev,
							isShortsActive: !prev.isShortsActive,
						}))
					}
				/>
			</label>
			{state.isShortsActive && (
				<>
					<div className={styles.shorts}>
						<div className={styles.label}>
							<span>Цвет шорт:</span>
							{/* <Image
								{...BASE_IMAGE_PART_PROPS}
								src={pickedShorts.colorImagePath}
								width={24}
								height={24}
								alt=""
							/> */}
							<img src={pickedShorts.colorImagePath} width={24} height={24} />
						</div>
						<ul className={styles.cards}>
							{displayedItems.map((shorts) => (
								<Shorts
									key={shorts.id}
									className={styles.card}
									shorts={shorts}
									isPicked={shorts.id === pickedShorts.id}
									changeShorts={changeShorts}
								/>
							))}
						</ul>
						{shorts.length > count && (
							<button
								className={styles.more}
								onClick={() => setIsMore(!isMore)}
							>
								{isMore ? 'Свернуть' : 'Показать еще'}
							</button>
						)}
					</div>
					<div className={styles.selects}>
						<Select
							className={formatClassName(styles.select, styles.full)}
							variant="colors"
							data={CONSTRUCTOR_COLORS}
							label="Цвет номера:"
							value={state.shortsTextsColor}
							onChange={(color) =>
								setState((prev) => ({
									...prev,
									shortsTextsColor: color,
								}))
							}
						/>
					</div>
					<ul className={styles.options}>
						<li className={styles.option}>
							<span>Убрать номер</span>
							<Switch
								isChecked={!state.shortsNumber}
								onClick={() =>
									setState((prev) => ({
										...prev,
										shortsNumber: !prev.shortsNumber,
									}))
								}
							/>
						</li>
					</ul>
					<ul className={styles.uploads}>
						<li className={styles.upload}>
							<Upload
								heading="Добавить логотип на шорты"
								existHeading="Убрать логотип с шорт"
								value={state.shortsLogoPath}
								onChange={(path) =>
									setState((prev) => ({
										...prev,
										shortsLogoPath: path,
									}))
								}
							/>
						</li>
					</ul>
				</>
			)}
		</div>
	)
}

export default ConstructorTabsShorts
