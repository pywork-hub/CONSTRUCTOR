import Shirt from '@/components/parts/shirt/Shirt'
import Modal from '@/components/templates/modal/Modal'
import type { IConstructorShirts } from '@/shared/interfaces/elements/constructor/constructor.interface'
import { formatClassName } from '@/utils/formats/class-name/format-class-name.util'
import { useMemo, useState, type FC } from 'react'
import Select from '../../../select/Select'
import Switch from '../../../switch/Switch'
import Upload from '../../../upload/Upload'
import {
	CONSTRUCTOR_COLORS,
	CONSTRUCTOR_SHIRT_COLLARS,
	CONSTRUCTOR_SHIRT_FONTS,
	CONSTRUCTOR_SHIRT_SLEEVE,
} from '../../data/constructor.data'
import ConstructorDesign from '../../design/ConstructorDesign'
import styles from '../ConstructorTabsGlobal.module.scss'

const ConstructorTabsShirts: FC<IConstructorShirts> = ({
	shirts,
	pickedShirt,
	changeShirt,
	state,
	setState,
}) => {
	const count = 16

	const [isShow, setIsShow] = useState(false)
	const [isMore, setIsMore] = useState(false)

	const displayedItems = useMemo(() => {
		return shirts
			.map((group) => group.items[0])
			.slice(0, isMore ? undefined : count)
	}, [shirts, isMore])

	const variations = useMemo(() => {
		return shirts
			.filter((group) => group.items.some((item) => item.id === pickedShirt.id))
			.flatMap((group) => group.items)
	}, [shirts, pickedShirt])

	const lastPlayerIndex = state.players.length - 1

	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.shirts}>
					<div className={styles.head}>
						<p className={styles.label}>Выберите модель футболки:</p>
						<button className={styles.other} onClick={() => setIsShow(true)}>
							Не нашли нужный дизайн?
						</button>
					</div>
					<ul className={styles.cards}>
						{displayedItems.map((item) => (
							<Shirt
								key={item.id}
								className={styles.card}
								size="big"
								shirt={item}
								isPicked={variations.some(({ id }) => id === item.id)}
								changeShirt={changeShirt}
							/>
						))}
					</ul>
					{displayedItems.length > count && (
						<button className={styles.more} onClick={() => setIsMore(!isMore)}>
							{isMore ? 'Свернуть' : 'Показать еще'}
						</button>
					)}
				</div>
				<div className={styles.variations}>
					<div className={styles.label}>
						<span>Цвет формы:</span>
						{/* <Image
							{...BASE_IMAGE_PROPS}
							src={pickedShirt.colorImagePath}
							width={24}
							height={24}
							alt=""
						/> */}
						<img src={pickedShirt.colorImagePath} width={24} height={24} />
					</div>
					<ul className={styles.variants}>
						{variations.map((shirt) => (
							<Shirt
								key={shirt.id}
								className={styles.variant}
								size="small"
								shirt={shirt}
								isPicked={shirt.id === pickedShirt.id}
								changeShirt={changeShirt}
							/>
						))}
					</ul>
				</div>
				<div className={styles.selects}>
					<Select
						className={formatClassName(styles.select, styles.full)}
						variant="options"
						data={CONSTRUCTOR_SHIRT_COLLARS}
						label="Воротник"
						value={state.shirtCollar}
						onChange={(collar) =>
							setState((prev) => ({
								...prev,
								shirtCollar: collar,
							}))
						}
					/>
					<Select
						className={styles.select}
						variant="colors"
						data={CONSTRUCTOR_COLORS}
						label="Цвет номеров и фамилий"
						value={state.shirtTextsColor}
						onChange={(color) =>
							setState((prev) => ({
								...prev,
								shirtTextsColor: color,
							}))
						}
					/>
					<Select
						className={styles.select}
						variant="options"
						data={CONSTRUCTOR_SHIRT_SLEEVE}
						label="Длина рукава"
						value={state.players[lastPlayerIndex].sleeve}
						onChange={(sleeve) =>
							setState((prev) => ({
								...prev,
								players: prev.players.map((player, playerIndex) =>
									lastPlayerIndex === playerIndex
										? { ...player, sleeve }
										: player
								),
							}))
						}
					/>
					<Select
						className={formatClassName(styles.select, styles.full)}
						variant="options"
						data={CONSTRUCTOR_SHIRT_FONTS}
						label="Шрифт"
						value={state.shirtFont}
						onChange={(font) =>
							setState((prev) => ({
								...prev,
								shirtFont: font,
							}))
						}
					/>
				</div>
				<ul className={styles.options}>
					<li className={styles.option}>
						<span>Убрать большой номер</span>
						<Switch
							isChecked={!state.shirtBigNumber}
							onClick={() =>
								setState((prev) => ({
									...prev,
									shirtBigNumber: !prev.shirtBigNumber,
								}))
							}
						/>
					</li>
					<li className={styles.option}>
						<span>Убрать номер на груди</span>
						<Switch
							isChecked={!state.shirtChestNumber}
							onClick={() =>
								setState((prev) => ({
									...prev,
									shirtChestNumber: !prev.shirtChestNumber,
								}))
							}
						/>
					</li>
					<li className={styles.option}>
						<span>Убрать фамилию</span>
						<Switch
							isChecked={!state.shirtLastName}
							onClick={() =>
								setState((prev) => ({
									...prev,
									shirtLastName: !prev.shirtLastName,
								}))
							}
						/>
					</li>
				</ul>
				<ul className={styles.uploads}>
					<li className={styles.upload}>
						<Upload
							heading="Добавить маленький логотип"
							existHeading="Убрать маленький логотип"
							value={state.shirtSmallLogoPath}
							onChange={(path) =>
								setState((prev) => ({
									...prev,
									shirtSmallLogoPath: path,
								}))
							}
						/>
					</li>
					<li className={styles.upload}>
						<Upload
							heading="Добавить большой логотип"
							existHeading="Убрать большой логотип"
							value={state.shirtBigLogoPath}
							onChange={(path) =>
								setState((prev) => ({
									...prev,
									shirtBigLogoPath: path,
								}))
							}
						/>
					</li>
				</ul>
			</div>
			{isShow && (
				<Modal
					heading="Не нашли подходящий дизайн?"
					size="md"
					closeModal={() => setIsShow(false)}
				>
					<ConstructorDesign />
				</Modal>
			)}
		</>
	)
}

export default ConstructorTabsShirts
