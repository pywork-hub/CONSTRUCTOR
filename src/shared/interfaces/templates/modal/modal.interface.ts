import type { IClassName } from '../../common/class-name/class-name.interface'

export interface IModal extends IClassName {
	closeModal: () => void
	heading: string
	size: 'sm' | 'md' | 'lg'
}
