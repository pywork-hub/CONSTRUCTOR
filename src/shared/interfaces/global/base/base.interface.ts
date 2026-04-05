import type { TypeExample } from '@/shared/types/entities/example/example.type'
import type { TypeShirt } from '@/shared/types/entities/shirt/shirt.type'
import type { TypeShorts } from '@/shared/types/entities/shorts/shorts.type'

export interface IBase {
	shirts: {
		items: TypeShirt[]
	}[]
	shorts: TypeShorts[]
	examples: TypeExample[]
}
