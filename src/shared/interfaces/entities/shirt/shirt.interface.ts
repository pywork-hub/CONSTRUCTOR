import type { TypeShirt } from '@/shared/types/entities/shirt/shirt.type'
import type { IClassName } from '../../common/class-name/class-name.interface'

export interface IShirt extends IClassName {
	isPicked: boolean
	shirt: TypeShirt
	changeShirt: (shirt: TypeShirt) => void
	size: 'big' | 'small'
}
