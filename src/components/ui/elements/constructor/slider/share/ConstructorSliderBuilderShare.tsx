import { ACCENT_COLOR } from '@/constants/global.constants'
import Link from 'next/link'
import type { FC } from 'react'
import styles from './ConstructorSliderShare.module.scss'

const ConstructorSliderShare: FC = () => {
	return (
		<div className={styles.share}>
			<p className={styles.text}>Поделиться:</p>
			<ul className={styles.list}>
				<li className={styles.item}>
					<Link
						className={styles.link}
						href="https://vk.com/share.php?url=https%3A%2F%2Fconstructor.penalty.ru%2F%3Fcid%3D8kHqRg474U&title=%D0%98%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B5%D1%82-%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD%20constructor.penalty.ru.%20%D0%9A%D0%BE%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D0%BE%D1%80%20%D1%84%D1%83%D1%82%D0%B1%D0%BE%D0%BB%D1%8C%D0%BD%D0%BE%D0%B9%20%D1%84%D0%BE%D1%80%D0%BC%D1%8B.&image=https%3A%2F%2Fconstructor.penalty.ru%2Fimages%2Fother%2Fsocial.jpg&utm_source=share2"
					>
						<svg
							width="32"
							height="32"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M28.772 9.14c.187-.62 0-1.075-.883-1.075h-2.924c-.744 0-1.084.394-1.27.826 0 0-1.487 3.625-3.594 5.976-.68.684-.99.9-1.36.9-.186 0-.456-.216-.456-.836V9.14c0-.745-.214-1.076-.834-1.076h-4.595c-.464 0-.744.344-.744.672 0 .704 1.053.867 1.161 2.851v4.304c0 .943-.169 1.115-.542 1.115-.99 0-3.402-3.639-4.832-7.804-.279-.81-.56-1.136-1.307-1.136H3.67c-.836 0-1.002.393-1.002.825 0 .776.99 4.616 4.614 9.695 2.416 3.468 5.818 5.348 8.916 5.348 1.858 0 2.087-.418 2.087-1.138v-2.62c0-.836.177-1.004.765-1.004.432 0 1.176.22 2.911 1.89 1.981 1.981 2.31 2.87 3.423 2.87h2.922c.835 0 1.252-.417 1.012-1.24-.262-.82-1.209-2.014-2.465-3.426-.683-.806-1.703-1.672-2.013-2.106-.434-.558-.308-.805 0-1.3.001 0 3.562-5.016 3.933-6.72Z"
								fill={ACCENT_COLOR}
							/>
						</svg>
					</Link>
				</li>
				<li className={styles.item}>
					<Link
						className={styles.link}
						href="https://t.me/share/url?url=https%3A%2F%2Fconstructor.penalty.ru%2F%3Fcid%3D8kHqRg474U&text=%D0%98%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B5%D1%82-%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD%20constructor.penalty.ru.%20%D0%9A%D0%BE%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D0%BE%D1%80%20%D1%84%D1%83%D1%82%D0%B1%D0%BE%D0%BB%D1%8C%D0%BD%D0%BE%D0%B9%20%D1%84%D0%BE%D1%80%D0%BC%D1%8B.&utm_source=share2"
					>
						<svg
							width="32"
							height="32"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="m27.553 4.956-23.64 9.116c-1.613.648-1.604 1.548-.296 1.95l6.07 1.892 14.042-8.86c.664-.404 1.271-.186.772.256L13.124 19.578h-.003l.003.002-.419 6.256c.614 0 .884-.282 1.228-.614l2.948-2.866 6.132 4.53c1.131.622 1.943.302 2.224-1.048l4.026-18.97c.412-1.652-.631-2.4-1.71-1.912Z"
								fill={ACCENT_COLOR}
							/>
						</svg>
					</Link>
				</li>
				<li className={styles.item}>
					<Link
						className={styles.link}
						href="https://api.whatsapp.com/send?text=%D0%98%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B5%D1%82-%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD%20constructor.penalty.ru.%20%D0%9A%D0%BE%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D0%BE%D1%80%20%D1%84%D1%83%D1%82%D0%B1%D0%BE%D0%BB%D1%8C%D0%BD%D0%BE%D0%B9%20%D1%84%D0%BE%D1%80%D0%BC%D1%8B.%20https%3A%2F%2Fconstructor.penalty.ru%2F%3Fcid%3D8kHqRg474U&utm_source=share2"
					>
						<svg
							width="32"
							height="32"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="m2.672 29.334 1.803-6.624A13.272 13.272 0 0 1 2.667 16C2.667 8.636 8.637 2.667 16 2.667c7.364 0 13.333 5.97 13.333 13.333 0 7.364-5.969 13.334-13.333 13.334a13.272 13.272 0 0 1-6.707-1.807l-6.62 1.807Zm8.516-19.59c-.172.011-.34.056-.495.134a1.727 1.727 0 0 0-.392.304c-.16.15-.25.281-.348.408a3.638 3.638 0 0 0-.753 2.237c.003.653.173 1.29.44 1.884.545 1.203 1.443 2.476 2.628 3.656.285.284.564.57.864.835a12.6 12.6 0 0 0 5.12 2.728l.759.116c.246.013.493-.006.741-.018.388-.02.768-.125 1.11-.308a6.42 6.42 0 0 0 .511-.293s.058-.037.167-.12c.18-.133.29-.228.44-.384.11-.115.207-.25.28-.403.104-.217.208-.632.25-.977.033-.264.023-.408.02-.497-.006-.143-.125-.291-.254-.354l-.776-.348s-1.16-.505-1.868-.828a.664.664 0 0 0-.236-.054.642.642 0 0 0-.504.169v-.003c-.007 0-.096.076-1.06 1.244a.466.466 0 0 1-.49.174 1.91 1.91 0 0 1-.255-.088c-.166-.07-.223-.096-.336-.146l-.007-.002a8.014 8.014 0 0 1-2.093-1.334c-.168-.146-.324-.306-.484-.461a8.396 8.396 0 0 1-1.36-1.69l-.079-.127a1.233 1.233 0 0 1-.136-.274c-.05-.196.081-.353.081-.353s.324-.355.475-.547c.126-.16.243-.325.35-.497.158-.253.207-.513.125-.715-.374-.912-.76-1.82-1.158-2.721-.078-.179-.312-.307-.524-.332a5.91 5.91 0 0 0-.216-.021 4.512 4.512 0 0 0-.537.006Z"
								fill={ACCENT_COLOR}
							/>
						</svg>
					</Link>
				</li>
			</ul>
		</div>
	)
}

export default ConstructorSliderShare
