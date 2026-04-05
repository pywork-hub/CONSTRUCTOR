import type { TypeConstructorState } from '../elements/constructor/constructor.type'

export type TypeOrder = {
	name: string
	email: string
	phone: string
	comment: string
	design: string
	preview?: string
	state: TypeConstructorState
}
