import type { TypeShorts } from '@/shared/types/entities/shorts/shorts.type'
import type { IClassName } from '../../common/class-name/class-name.interface'

export interface IShorts extends IClassName{
	isPicked: boolean
	shorts: TypeShorts
	changeShorts: (shorts: TypeShorts) => void
}
