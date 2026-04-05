import type { IModal } from '@/shared/interfaces/templates/modal/modal.interface'
import { formatClassName } from '@/utils/formats/class-name/format-class-name.util'
import type { FC, PropsWithChildren } from 'react'
import { useRef } from 'react'
import ReactDOM from 'react-dom'
import styles from './Modal.module.scss'

const Modal: FC<PropsWithChildren<IModal>> = ({
	closeModal,
	children,
	size,
	heading,
	className,
}) => {
	const modalRef = useRef<HTMLElement | null>(document.getElementById('modal'))

	if (!modalRef.current) return null

	return ReactDOM.createPortal(
		<div className={formatClassName(styles.overlay, className)}>
			<div className={formatClassName(styles.window, styles[size])}>
				{size === 'sm' ? (
					<>
						<div className={styles.head}>
							<button onClick={closeModal} className={styles.close}>
								<svg
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
								>
									<path
										d="M16.5 17.2 16 17 3 4a.7.7 0 1 1 1-1l13 13a.7.7 0 0 1-.5 1.2"
										fill="#fff"
									/>
									<path
										d="M3.5 17.2A.7.7 0 0 1 3 16L16 3a.7.7 0 1 1 1 1L4 17z"
										fill="#fff"
									/>
								</svg>
							</button>
							<h2 className={styles.heading}>{heading}</h2>
						</div>
						<div className={styles.fill}>{children}</div>
					</>
				) : (
					<>
						<button onClick={closeModal} className={styles.close}>
							<svg
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
							>
								<path
									d="M16.5 17.2 16 17 3 4a.7.7 0 1 1 1-1l13 13a.7.7 0 0 1-.5 1.2"
									fill="#7F1A4B"
								/>
								<path
									d="M3.5 17.2A.7.7 0 0 1 3 16L16 3a.7.7 0 1 1 1 1L4 17z"
									fill="#7F1A4B"
								/>
							</svg>
						</button>
						<div className={styles.fill}>
							<h2 className={styles.heading}>{heading}</h2>
							{children}
						</div>
					</>
				)}
			</div>
		</div>,
		modalRef.current
	)
}

export default Modal
