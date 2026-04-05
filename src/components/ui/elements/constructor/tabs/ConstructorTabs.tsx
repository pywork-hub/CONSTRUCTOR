import Modal from '@/components/templates/modal/Modal'
import type { IConstructorTabs } from '@/shared/interfaces/elements/constructor/constructor.interface'
import type { TypeConstructorTab } from '@/shared/types/elements/constructor/constructor.type'
import { formatClassName } from '@/utils/formats/class-name/format-class-name.util'
import { formatPrice } from '@/utils/formats/price/format-price.util'
import { ChevronRight } from 'lucide-react'
import { useState, type FC } from 'react'
import toast from 'react-hot-toast'
import ConstructorOrder from '../order/ConstructorOrder'
import ConstructorSizes from '../sizes/ConstructorSizes'
import styles from './ConstructorTabs.module.scss'
import ConstructorTabsPlayers from './players/ConstructorTabsPlayers'
import ConstructorTabsShirts from './shirts/ConstructorTabsShirts'
import ConstructorTabsShorts from './shorts/ConstructorTabsShorts'

const ConstructorTabs: FC<IConstructorTabs> = ({
	isConstructor,
	pickedShirt,
	pickedShorts,
	shirts,
	shorts,
	changeShirt,
	changeShorts,
	state,
	setState,
}) => {
	const [isShowOrder, setIsShowOrder] = useState(false)
	const [isShowSizes, setIsShowSizes] = useState(false)
	const [tab, setTab] = useState<TypeConstructorTab>('shirt')

	const isShirtTab = tab === 'shirt'
	const isShortsTab = tab === 'shorts'
	const isPlayersTab = tab === 'players'

	return (
		<div
			className={formatClassName(
				styles.wrapper,
				!isConstructor ? styles.disabled : undefined
			)}
		>
			<div className={styles.tabs}>
				<button
					className={formatClassName(
						styles.tab,
						isShirtTab ? styles.picked : undefined
					)}
					onClick={() => setTab('shirt')}
				>
					<span>Футболка</span>
					<ChevronRight />
				</button>
				<button
					className={formatClassName(
						styles.tab,
						isShortsTab ? styles.picked : undefined
					)}
					onClick={() => setTab('shorts')}
				>
					<span>Шорты</span>
					<ChevronRight />
				</button>
				<button
					className={formatClassName(
						styles.tab,
						isPlayersTab ? styles.picked : undefined
					)}
					onClick={() => setTab('players')}
					disabled={isPlayersTab}
				>
					<span>Команда</span>
				</button>
			</div>
			{isShirtTab ? (
				<ConstructorTabsShirts
					shirts={shirts}
					pickedShirt={pickedShirt}
					changeShirt={changeShirt}
					state={state}
					setState={setState}
				/>
			) : isShortsTab ? (
				<ConstructorTabsShorts
					shorts={shorts}
					pickedShorts={pickedShorts}
					changeShorts={changeShorts}
					state={state}
					setState={setState}
				/>
			) : (
				isPlayersTab && (
					<ConstructorTabsPlayers state={state} setState={setState} />
				)
			)}
			<div className={styles.pay}>
				{isPlayersTab && (
					<>
						<button
							type="button"
							className={styles.sizes}
							onClick={() => setIsShowSizes(true)}
						>
							Таблица размеров
							<svg
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
							>
								<g clipPath="url(#a)" fill="#4D4D4D">
									<path d="M6.35 2.6c-1.14 0-2.03.65-2.03 1.46s.9 1.46 2.03 1.46 2.03-.65 2.03-1.46-.9-1.46-2.03-1.46m0 2.1c-.7 0-1.22-.36-1.22-.64 0-.33.53-.65 1.22-.65s1.22.36 1.22.65c0 .32-.53.65-1.22.65" />
									<path d="M17.63 7.3h-5.28V4.06c0-2.23-2.67-4.06-6-4.06s-6 1.83-6 4.06v8.27c0 1.83 1.82 3.45 4.42 3.94v3.32q.02.4.4.41h12.46a2 2 0 0 0 2.03-2.03V9.33a2 2 0 0 0-2.03-2.03M6.35.81c2.88 0 5.2 1.46 5.2 3.25 0 1.78-2.32 3.24-5.2 3.24s-5.2-1.46-5.2-3.24S3.48.8 6.36.8m5.2 5.28V7.3H9.91a5 5 0 0 0 1.62-1.21m-6.78 4.86v4.47c-2.11-.45-3.61-1.67-3.61-3.09V6.1c1.06 1.2 2.98 2 5.21 2h11.28c.69 0 1.21.53 1.21 1.22a1.2 1.2 0 0 1-1.21 1.22H5.17c-.24 0-.4.16-.4.4m14.15 6.98h-.08a1.2 1.2 0 0 1-1.21 1.22h-.49v-1.87c0-.24-.16-.4-.4-.4s-.41.16-.41.4v1.87h-1.5v-1.87c0-.24-.16-.4-.4-.4s-.41.16-.41.4v1.87h-1.5v-1.87c0-.24-.17-.4-.41-.4s-.4.16-.4.4v1.87h-1.5v-1.87c0-.24-.17-.4-.41-.4-.25 0-.4.16-.4.4v1.87H7.88v-1.87c0-.24-.16-.4-.4-.4s-.41.16-.41.4v1.87H5.66v-3.13c0-.04.04-.08.04-.08q.01-.1-.04-.2v-4.38H17.7c.44 0 .89-.16 1.21-.4z" />
								</g>
								<defs>
									<clipPath id="a">
										<path fill="#fff" d="M0 0h20v20H0z" />
									</clipPath>
								</defs>
							</svg>
						</button>
						{isShowSizes && (
							<Modal
								heading="Таблица размеров"
								size="sm"
								closeModal={() => setIsShowSizes(false)}
							>
								<ConstructorSizes />
							</Modal>
						)}
					</>
				)}
				<span className={styles.price}>{formatPrice(state.price)} р.</span>
				<button
					type="button"
					className={styles.order}
					onClick={() => {
						const isAnyPlayerIncomplete = state.players.some(
							(player) =>
								!player.lastName ||
								!player.number ||
								!player.shirtSize ||
								!player.shortsSize ||
								!player.sleeve
						)

						if (state.players.length < 5) {
							toast.error(
								'Выбрано недостаточно игроков для минимального заказа — 5 футболок, или комплектов.'
							)
							return
						}

						if (isAnyPlayerIncomplete) {
							toast.error(
								'Пожалуйста, заполните все данные для каждого игрока.'
							)
							return
						}

						setIsShowOrder(true)
					}}
				>
					Сформировать заказ
				</button>
			</div>
			{isShowOrder && (
				<Modal
					heading="Дизайн готов!"
					size="lg"
					closeModal={() => setIsShowOrder(false)}
				>
					<ConstructorOrder state={state} />
				</Modal>
			)}
		</div>
	)
}

export default ConstructorTabs
