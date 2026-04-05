import type { IClassName } from '../../common/class-name/class-name.interface'

export interface IUpload extends IClassName {
	heading: string
	existHeading: string
	onChange: (path: any) => void
	value: string | null
}
