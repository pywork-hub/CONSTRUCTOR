import type { ITextarea } from '@/shared/interfaces/elements/textarea/textarea.interface'
import { formatClassName } from '@/utils/formats/class-name/format-class-name.util'
import type { FC } from 'react'
import styles from './Textarea.module.scss'

const Textarea: FC<ITextarea> = ({ className, label, ...rest }) => {
	return (
		<div className={formatClassName(styles.field, className)}>
			<p className={styles.label}>{label}</p>
			<textarea className={styles.textarea} {...rest} />
		</div>
	)
}

export default Textarea
