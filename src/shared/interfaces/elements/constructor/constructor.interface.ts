import type { TypeConstructorState } from '@/shared/types/elements/constructor/constructor.type'
import type { TypeExample } from '@/shared/types/entities/example/example.type'
import type { TypeShirt } from '@/shared/types/entities/shirt/shirt.type'
import type { TypeShorts } from '@/shared/types/entities/shorts/shorts.type'
import type { Dispatch, SetStateAction } from 'react'
import type { Settings as ISlickSettings } from 'react-slick'

export interface IConstructorSlider extends IConstructorSliderNavigation {
	exampleIndex: number
	sliderRef: any
	isConstructor: boolean
	settings: ISlickSettings
	setShirt: Dispatch<SetStateAction<TypeShirt>>
	setShorts: Dispatch<SetStateAction<TypeShorts>>
	index: number
}

export interface IConstructorSliderNavigation extends IConstructorPick {
	index: number
	examples: TypeExample[]
	goTo: (index: number) => void
	shirt: TypeShirt
	shorts: TypeShorts
}

export interface IConstructorState {
	state: TypeConstructorState
	setState: Dispatch<SetStateAction<TypeConstructorState>>
}

export interface IConstructorPick extends IConstructorState {
	shirt: TypeShirt
	shorts: TypeShorts
}

export interface IConstructorTabs extends IConstructorState {
	isConstructor: boolean
	pickedShirt: TypeShirt
	pickedShorts: TypeShorts
	shirts: {
		items: TypeShirt[]
	}[]
	shorts: TypeShorts[]
	changeShirt: (shirt: TypeShirt) => void
	changeShorts: (shorts: TypeShorts) => void
}

export interface IConstructorShirts extends IConstructorState {
	pickedShirt: TypeShirt
	shirts: {
		items: TypeShirt[]
	}[]
	changeShirt: (shirt: TypeShirt) => void
}

export interface IConstructorShorts extends IConstructorState {
	pickedShorts: TypeShorts
	shorts: TypeShorts[]
	changeShorts: (shorts: TypeShorts) => void
}

export interface IConstructorOrder {
	state: TypeConstructorState
}
