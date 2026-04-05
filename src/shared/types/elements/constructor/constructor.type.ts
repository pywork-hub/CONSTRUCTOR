import type { ISelectItem } from '@/shared/interfaces/elements/select/select.interface'
import type { TypePlayer } from '../../entities/player/player.type'

export type TypeConstructorTab = 'shirt' | 'shorts' | 'players'

export type TypeConstructorState = {
	isShortsActive: boolean
	shirtCollar: ISelectItem
	shirtFont: ISelectItem
	shirtTextsColor: ISelectItem
	shirtLogoColor: ISelectItem
	shirtBigNumber: boolean
	shirtChestNumber: boolean
	shirtLastName: boolean
	shirtSmallLogoPath: null | string
	shirtBigLogoPath: null | string
	shortsTextsColor: ISelectItem
	shortsLogoColor: ISelectItem
	shortsNumber: boolean
	shortsLogoPath: null | string
	players: TypePlayer[]
	price: number
}
