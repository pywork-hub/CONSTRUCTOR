import type { ISwitch } from '@/shared/interfaces/elements/switch/switch.interface'
import { formatClassName } from '@/utils/formats/class-name/format-class-name.util'
import type { FC } from 'react'
import styles from './Switch.module.scss'

const Switch: FC<ISwitch> = ({ onClick, isChecked }) => {
	return (
		<button
			className={formatClassName(
				styles.switch,
				isChecked ? styles.checked : undefined
			)}
			onClick={onClick}
		>
			<span className={styles.point} />
		</button>
	)
}

export default Switch
