'use client'

import type { IField } from '@/shared/interfaces/elements/field/field.interface'
import { formatClassName } from '@/utils/formats/class-name/format-class-name.util'
import { forwardRef } from 'react'
import styles from './Field.module.scss'

const Field = forwardRef<HTMLInputElement, IField>(
	({ className, label, value, isRequired, onChange, ...rest }, ref) => {
		return (
			<div className={formatClassName(styles.field, className)}>
				<p className={styles.label}>
					{label}
					{isRequired && <span>*</span>}
				</p>
				<input
					ref={ref}
					className={styles.input}
					value={value}
					onChange={(e) => {
						onChange(e.target.value)
					}}
					{...rest}
				/>
			</div>
		)
	}
)

export default Field
