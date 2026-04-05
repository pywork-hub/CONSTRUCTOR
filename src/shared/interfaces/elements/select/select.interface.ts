import type { IClassName } from '../../common/class-name/class-name.interface'

export interface ISelectItem<K = any> {
	label: string
	key: K
}

export interface ISelect<K = any> extends IClassName {
	variant: 'colors' | 'options' | 'size'
	data: ISelectItem<K>[]
	label: string
	value: ISelectItem<K> | null
	onChange: (item: ISelectItem) => void
}
