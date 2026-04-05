import { SHIRTS, SHORTS } from '@/base/base.data'
import {
	CONSTRUCTOR_COLORS,
	CONSTRUCTOR_SHIRT_COLLARS,
	CONSTRUCTOR_SHIRT_FONTS,
	CONSTRUCTOR_SHIRT_SLEEVE,
} from '@/components/ui/elements/constructor/data/constructor.data'
import { EnumShirtSleeve } from '@/shared/enums/shirt-collar/shirt-sleeve.enum'
import type { TypeConstructorState } from '@/shared/types/elements/constructor/constructor.type'
import type { TypeShirt } from '@/shared/types/entities/shirt/shirt.type'
import type { TypeShorts } from '@/shared/types/entities/shorts/shorts.type'
import { useEffect, useRef, useState } from 'react'
import type { Settings } from 'react-slick'

export const useConstructor = () => {
	const sliderRef = useRef<any>(null)
	const [state, setState] = useState<TypeConstructorState>({
		isShortsActive: true,
		shirtCollar: CONSTRUCTOR_SHIRT_COLLARS[0],
		shirtFont: CONSTRUCTOR_SHIRT_FONTS[0],
		shirtTextsColor: CONSTRUCTOR_COLORS[0],
		shirtLogoColor: CONSTRUCTOR_COLORS[0],
		shirtBigNumber: true,
		shirtChestNumber: true,
		shirtLastName: true,
		shirtSmallLogoPath: null,
		shirtBigLogoPath: null,
		shortsTextsColor: CONSTRUCTOR_COLORS[0],
		shortsLogoColor: CONSTRUCTOR_COLORS[0],
		shortsNumber: true,
		shortsLogoPath: null,
		players: [
			{
				sleeve: CONSTRUCTOR_SHIRT_SLEEVE[0],
			},
		],
		price: 3190
	})

	const [index, setIndex] = useState(0)
	const [shirt, setShirt] = useState(SHIRTS[0])
	const [shorts, setShorts] = useState(SHORTS[0])

	const settings: Settings = {
		infinite: false,
		arrows: false,
		draggable: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		beforeChange: (index) => setIndex(index),
		afterChange: (index) => setIndex(index),
	}

	const isConstructor = index === 0

	const goTo = (index: number) =>
		sliderRef.current ? sliderRef.current.slickGoTo(index) : {}

	const changeShirt = (shirt: TypeShirt) => {
		goTo(0)
		setShirt(shirt)
	}
	const changeShorts = (shorts: TypeShorts) => {
		goTo(0)
		setShorts(shorts)
	}

	useEffect(() => {
		const price = state.players.reduce((sum, player) => {
			// const shirtPrice =
			// 	player.sleeve.key === EnumShirtSleeve.SHORT ? 2190 : 2490
			const shirtPrice = 1990
			const shortsPrice = state.isShortsActive ? 1200 : 0

			return sum + shirtPrice + shortsPrice
		}, 0)

		setState((prev) => ({
			...prev,
			price,
		}))
	}, [state.players, state.isShortsActive])

	return {
		exampleIndex: index,
		sliderRef,
		isConstructor,
		settings,
		shirt,
		shorts,
		changeShirt,
		changeShorts,
		goTo,
		state,
		setState,
		setShirt,
		setShorts,
		index,
	}
}
