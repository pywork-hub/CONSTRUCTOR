'use client'

import { useOrder } from '@/hooks/order/useOrder.hook'
import type { IConstructorOrder } from '@/shared/interfaces/elements/constructor/constructor.interface'
import { formatPrice } from '@/utils/formats/price/format-price.util'
import type { FC } from 'react'
import { Controller } from 'react-hook-form'
import Field from '../../field/Field'
import Loader from '../../loader/Loader'
import Textarea from '../../textarea/Textarea'
import Upload from '../../upload/Upload'
import styles from './ConstructorOrder.module.scss'

const ConstructorOrder: FC<IConstructorOrder> = ({ state }) => {
	const { isPending, control, handleSubmit, onSubmit, preview } =
		useOrder(state)

	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.left}>
					<p className={styles.required}>
						Заполните пожалуйста ваши контактные данные
					</p>
					<ul className={styles.options}>
						<li className={styles.option}>
							Проверьте правильность вашего выбора номеров, фамилий, логотипов,
							а также деталей дизайна.
						</li>
						<li className={styles.option}>
							Ожидайте звонок от нас в скором времени, наш менеджер
							проконсультирует вас по вопросам срока изготовления, оплаты и
							доставки.
						</li>
					</ul>
					<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
						<Controller
							defaultValue=""
							control={control}
							name="name"
							render={({ field: { onChange, value } }) => (
								<Field
									className={styles.field}
									label="Укажите ваше имя и фамилию"
									placeholder="Имя и фамилия"
									onChange={onChange}
									value={value}
									isRequired
								/>
							)}
						/>
						<Controller
							defaultValue=""
							control={control}
							name="email"
							render={({ field: { onChange, value } }) => (
								<Field
									className={styles.field}
									label="Укажите вашу электронную почту"
									placeholder="Почта"
									onChange={onChange}
									value={value}
									isRequired
								/>
							)}
						/>
						<Controller
							defaultValue=""
							control={control}
							name="phone"
							render={({ field: { onChange, value } }) => (
								<Field
									className={styles.field}
									label="Укажите ваш контактный телефон"
									placeholder="Телефон"
									onChange={onChange}
									value={value}
									isRequired
								/>
							)}
						/>
						<div>
							<Controller
								defaultValue=""
								control={control}
								name="comment"
								render={({ field: { onChange, value } }) => (
									<Textarea
										className={styles.field}
										label="Комментарий (Не обязательно)"
										onChange={onChange}
										value={value}
									/>
								)}
							/>
							<p className={styles.note}>
								<span>*</span> - Поля обязательные для заполнения
							</p>
						</div>
						<Controller
							defaultValue=""
							control={control}
							name="design"
							render={({ field: { onChange, value } }) => (
								<Upload
									className={styles.upload}
									heading="Прикрепите файл с вашим дизайном"
									existHeading="Удалить файл с вашим дизайном"
									value={value}
									onChange={onChange}
								/>
							)}
						/>
						{isPending ? (
							<div className={styles.submit}>
								<Loader />
							</div>
						) : (
							<button className={styles.submit}>Отправить заказ</button>
						)}
					</form>
					<p className={styles.policy}>
						Нажимая кнопку «отправить заказ» на данной странице, вы соглашаетесь
						с <span>условиями продаж</span> и{' '}
						<span>политикой конфиденциальности</span>.
					</p>
				</div>
				<div className={styles.right}>
					<div className={styles.design}>
						<p className={styles.pick}>Выбранный дизайн формы</p>
						<div className={styles.order}>
							{preview && (
								<div className={styles.preview}>
									{/* <Image
										{...BASE_IMAGE_PART_PROPS}
										src={preview}
										width={82}
										height={82}
										alt=""
									/> */}
									<img src={preview} width={82} height={82} />
								</div>
							)}
							<div className={styles.info}>
								<span className={styles.personalize}>Персонализация:</span>
								<span className={styles.number}>
									Игрок №{state.players.length}
								</span>
							</div>
						</div>
						<div className={styles.price}>
							<span className={styles.total}>Итоговая цена:</span>
							<span className={styles.amount}>
								{formatPrice(state.price)} р.
							</span>
						</div>
					</div>
					<ul className={styles.players}>
						{state.players.map((player, index) => (
							<li key={index} className={styles.player}>
								<span className={styles.index}>{index + 1}</span>
								<div className={styles.col}>
									<p className={styles.label}>Фамилия</p>
									<span className={styles.value}>{player.lastName}</span>
								</div>
								<div className={styles.col}>
									<p className={styles.label}>Номер</p>
									<span className={styles.value}>{player.number}</span>
								</div>
								<div className={styles.col}>
									<p className={styles.label}>Футболка</p>
									<span className={styles.value}>
										{player.shirtSize?.label}
									</span>
								</div>
								<div className={styles.col}>
									<p className={styles.label}>Шорты</p>
									<span className={styles.value}>
										{player.shortsSize?.label}
									</span>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	)
}

export default ConstructorOrder
