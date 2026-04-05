import { EnumShirtCollar } from '@/shared/enums/shirt-collar/shirt-collar.enum'
import { EnumShirtSleeve } from '@/shared/enums/shirt-collar/shirt-sleeve.enum'
import type { IBase } from '@/shared/interfaces/global/base/base.interface'
import type { TypeExample } from '@/shared/types/entities/example/example.type'
import type { TypeShirt } from '@/shared/types/entities/shirt/shirt.type'
import type { TypeShorts } from '@/shared/types/entities/shorts/shorts.type'

export const SHIRTS: TypeShirt[] = Array.from({ length: 100 }, (_, i) => {
	const index = i + 1
	return {
		id: index,
		colorImagePath: `/images/shirts/${index}/color.jpg`,
		backShortImagePath: `/images/shirts/${index}/shirt-short-back.jpg`,
		backLongImagePath: `/images/shirts/${index}/shirt-long-back.jpg`,
		variations: [
			{
				imagePath: `/images/shirts/${index}/regular-short.jpg`,
				collar: EnumShirtCollar.REGULAR,
				sleeve: EnumShirtSleeve.SHORT,
			},
			{
				imagePath: `/images/shirts/${index}/regular-long.jpg`,
				collar: EnumShirtCollar.REGULAR,
				sleeve: EnumShirtSleeve.LONG,
			},
			{
				imagePath: `/images/shirts/${index}/polo-short.jpg`,
				collar: EnumShirtCollar.POLO,
				sleeve: EnumShirtSleeve.SHORT,
			},
			{
				imagePath: `/images/shirts/${index}/polo-long.jpg`,
				collar: EnumShirtCollar.POLO,
				sleeve: EnumShirtSleeve.LONG,
			},
			{
				imagePath: `/images/shirts/${index}/v-short.jpg`,
				collar: EnumShirtCollar.V,
				sleeve: EnumShirtSleeve.SHORT,
			},
			{
				imagePath: `/images/shirts/${index}/v-long.jpg`,
				collar: EnumShirtCollar.V,
				sleeve: EnumShirtSleeve.LONG,
			},
		],
	}
})

export const SHORTS: TypeShorts[] = Array.from({ length: 22 }, (_, i) => {
	const index = i + 1
	return {
		id: index,
		colorImagePath: `/images/shorts/${index}/color.jpg`,
		imagePath: `/images/shorts/${index}/shorts.jpg`,
		backImagePath: `/images/shorts/${index}/shorts-back.jpg`,
	}
})

export const EXAMPLES: TypeExample[] = [
	{
		imagesPaths: Array.from(
			{ length: 4 },
			(_, i) => `/images/examples/1/${i + 1}.jpg`
		),
		shirtId: 9,
		shortsId: 17,
	},
	{
		imagesPaths: Array.from(
			{ length: 4 },
			(_, i) => `/images/examples/2/${i + 1}.jpg`
		),
		shirtId: 1,
		shortsId: 3,
	},
	{
		imagesPaths: Array.from(
			{ length: 4 },
			(_, i) => `/images/examples/3/${i + 1}.jpg`
		),
		shirtId: 46,
		shortsId: 17,
	},
	{
		imagesPaths: Array.from(
			{ length: 4 },
			(_, i) => `/images/examples/4/${i + 1}.jpg`
		),
		shirtId: 17,
		shortsId: 17,
	},
]

export const BASE: IBase = {
	shirts: Array.from({ length: Math.ceil(SHIRTS.length / 5) }, (_, index) => {
		return {
			items: SHIRTS.slice(index * 5, (index + 1) * 5),
		}
	}),
	shorts: SHORTS,
	examples: EXAMPLES,
}
