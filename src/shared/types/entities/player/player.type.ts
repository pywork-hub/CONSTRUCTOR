import type { ISelectItem } from '@/shared/interfaces/elements/select/select.interface'

export type TypePlayer = {
	lastName?: string | null
	number?: string | null
	shirtSize?: ISelectItem | null
	shortsSize?: ISelectItem | null
	sleeve: ISelectItem
}
