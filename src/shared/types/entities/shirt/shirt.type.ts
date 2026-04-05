import type { EnumShirtCollar } from '@/shared/enums/shirt-collar/shirt-collar.enum'
import type { EnumShirtSleeve } from '@/shared/enums/shirt-collar/shirt-sleeve.enum'

export type TypeShirt = {
	id: number
	colorImagePath: string
	backShortImagePath: string
	backLongImagePath: string
	variations: [
		{
			imagePath: string
			collar: EnumShirtCollar.REGULAR
			sleeve: EnumShirtSleeve.SHORT
		},
		{
			imagePath: string
			collar: EnumShirtCollar.REGULAR
			sleeve: EnumShirtSleeve.LONG
		},
		{
			imagePath: string
			collar: EnumShirtCollar.POLO
			sleeve: EnumShirtSleeve.SHORT
		},
		{
			imagePath: string
			collar: EnumShirtCollar.POLO
			sleeve: EnumShirtSleeve.LONG
		},
		{
			imagePath: string
			collar: EnumShirtCollar.V
			sleeve: EnumShirtSleeve.SHORT
		},
		{
			imagePath: string
			collar: EnumShirtCollar.V
			sleeve: EnumShirtSleeve.LONG
		}
	]
}
