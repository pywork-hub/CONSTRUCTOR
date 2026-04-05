import { useOutside } from '@/hooks/outside/useOutside'
import type { ISelect } from '@/shared/interfaces/elements/select/select.interface'
import { formatClassName } from '@/utils/formats/class-name/format-class-name.util'
import { ChevronDown } from 'lucide-react'
import { useState, type FC } from 'react'
import styles from './Select.module.scss'

const Select: FC<ISelect> = ({
	variant,
	data,
	label,
	value,
	onChange,
	className,
}) => {
	const [isOpen, setIsOpen] = useState(false)
	const isColors = variant === 'colors'

	const { ref } = useOutside<HTMLUListElement>(() => setIsOpen(false))

	return (
		<div className={formatClassName(styles.select, className)}>
			<p className={styles.label}>{label}</p>
			<button
				className={formatClassName(
					styles.toggle,
					isOpen ? styles.picked : undefined
				)}
				onClick={() => setIsOpen(!isOpen)}
			>
				{value &&
					(isColors ? (
						<span style={{ backgroundColor: value.key }} />
					) : (
						value.label
					))}
				<ChevronDown />
			</button>
			{isOpen && (
				<ul ref={ref} className={styles.list}>
					{data.map((item, index) => (
						<li key={index} className={isColors ? styles.color : styles.item}>
							<button
								className={styles.button}
								onClick={() => {
									onChange(item)
									setIsOpen(false)
								}}
								disabled={item.key === value?.key}
							>
								{isColors ? (
									<span style={{ backgroundColor: item.key }} />
								) : (
									item.label
								)}
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default Select
