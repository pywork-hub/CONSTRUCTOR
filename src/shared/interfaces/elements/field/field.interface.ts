import type { InputHTMLAttributes } from 'react'

export interface IField
	extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
	className?: string
	label: string
	value: any
	isRequired?: boolean
	onChange: (value: any) => void
}
