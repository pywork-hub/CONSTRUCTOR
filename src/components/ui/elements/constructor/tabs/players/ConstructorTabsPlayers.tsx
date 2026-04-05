import type { IConstructorState } from '@/shared/interfaces/elements/constructor/constructor.interface'
import type { FC } from 'react'
import Field from '../../../field/Field'
import Select from '../../../select/Select'
import {
	CONSTRUCTOR_SHIRT_SLEEVE,
	CONSTRUCTOR_SIZES,
} from '../../data/constructor.data'
import styles from './ConstructorTabsPlayers.module.scss'

const ConstructorTabsPlayers: FC<IConstructorState> = ({ state, setState }) => {
	const isMultiple = state.players.length > 1
	const lastPlayerIndex = state.players.length - 1

	return (
		<div className={styles.wrapper}>
			<ul className={styles.players}>
				{state.players.map((p, index) => (
					<li
						key={index}
						className={`${styles.player}${
							lastPlayerIndex === index ? ' ' + styles.active : ''
						}`}
					>
						<Field
							className={styles.lastName}
							label="Фамилия"
							value={p.lastName || ''}
							onChange={(value) =>
								setState((prev) => ({
									...prev,
									players: prev.players.map((player, playerIndex) =>
										index === playerIndex
											? { ...player, lastName: value }
											: player
									),
								}))
							}
						/>
						<Field
							className={styles.number}
							label="Номер"
							value={p.number || ''}
							onChange={(value) =>
								setState((prev) => ({
									...prev,
									players: prev.players.map((player, playerIndex) =>
										index === playerIndex
											? { ...player, number: value }
											: player
									),
								}))
							}
						/>
						<Select
							className={styles.size}
							variant="size"
							data={CONSTRUCTOR_SIZES}
							label="Футболка"
							value={p.shirtSize || null}
							onChange={(item) =>
								setState((prev) => ({
									...prev,
									players: prev.players.map((player, playerIndex) =>
										index === playerIndex
											? { ...player, shirtSize: item }
											: player
									),
								}))
							}
						/>
						{state.isShortsActive && (
							<Select
								className={styles.size}
								variant="size"
								data={CONSTRUCTOR_SIZES}
								label="Шорты"
								value={p.shortsSize || null}
								onChange={(item) =>
									setState((prev) => ({
										...prev,
										players: prev.players.map((player, playerIndex) =>
											index === playerIndex
												? { ...player, shortsSize: item }
												: player
										),
									}))
								}
							/>
						)}
						<Select
							className={styles.sleeve}
							variant="options"
							data={CONSTRUCTOR_SHIRT_SLEEVE}
							label="Рукав"
							value={p.sleeve || null}
							onChange={(item) =>
								setState((prev) => ({
									...prev,
									players: prev.players.map((player, playerIndex) =>
										index === playerIndex ? { ...player, sleeve: item } : player
									),
								}))
							}
						/>
						<div className={styles.actions}>
							<button
								className={styles.duplicate}
								onClick={() =>
									setState((prev) => ({
										...prev,
										players: [...prev.players, { ...prev.players[index] }],
									}))
								}
							>
								<svg
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
								>
									<path
										d="M12.87 3.5h-9.3C2.7 3.5 2 4.2 2 5.08v13.34c0 .87.7 1.58 1.57 1.58h9.3c.87 0 1.58-.7 1.58-1.58V5.08c0-.87-.71-1.58-1.58-1.58m.47 14.92c0 .26-.21.47-.47.47h-9.3a.5.5 0 0 1-.48-.47V5.08c0-.26.22-.48.48-.48h9.3c.26 0 .47.22.47.48z"
										fill="#4D4D4D"
									/>
									<path
										d="M16.43 0h-9.3c-.87 0-1.58.7-1.58 1.58a.55.55 0 1 0 1.1 0c0-.26.22-.47.48-.47h9.3c.26 0 .47.2.47.47v13.34c0 .26-.21.48-.47.48a.55.55 0 1 0 0 1.1c.87 0 1.58-.7 1.58-1.58V1.58A1.6 1.6 0 0 0 16.43 0"
										fill="#4D4D4D"
									/>
								</svg>
							</button>
							<button
								className={styles.remove}
								onClick={() =>
									isMultiple
										? setState((prev) => ({
												...prev,
												players: prev.players.filter((_, i) => i !== index),
										  }))
										: {}
								}
							>
								<svg
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
								>
									<path
										d="M16.5 17.2 16 17 3 4a.7.7 0 1 1 1-1l13 13a.7.7 0 0 1-.5 1.2"
										fill="#7F1A4B"
									/>
									<path
										d="M3.5 17.2A.7.7 0 0 1 3 16L16 3a.7.7 0 1 1 1 1L4 17z"
										fill="#7F1A4B"
									/>
								</svg>
							</button>
						</div>
					</li>
				))}
			</ul>
			<div className={styles.foot}>
				<div className={styles.count}>
					Количество игроков: <span>{state.players.length}</span>
				</div>
				<button
					className={styles.add}
					onClick={() =>
						setState((prev) => ({
							...prev,
							players: [
								...prev.players,
								{ sleeve: state.players[lastPlayerIndex].sleeve },
							],
						}))
					}
				>
					Добавить игрока
					<svg
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
					>
						<path
							d="M16.5 17.2 16 17 3 4a.7.7 0 1 1 1-1l13 13a.7.7 0 0 1-.5 1.2"
							fill="#7F1A4B"
						/>
						<path
							d="M3.5 17.2A.7.7 0 0 1 3 16L16 3a.7.7 0 1 1 1 1L4 17z"
							fill="#7F1A4B"
						/>
					</svg>
				</button>
			</div>
		</div>
	)
}

export default ConstructorTabsPlayers
