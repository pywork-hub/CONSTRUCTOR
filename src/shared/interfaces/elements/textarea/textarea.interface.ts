import type { TextareaHTMLAttributes } from 'react'

export interface ITextarea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	className?: string
	label: string
}
