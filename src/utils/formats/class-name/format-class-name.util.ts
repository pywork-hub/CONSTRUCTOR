export const formatClassName = (
	className: string,
	nestedClassName?: string
) => {
	return `${className}${nestedClassName ? ' ' + nestedClassName : ''}`
}
