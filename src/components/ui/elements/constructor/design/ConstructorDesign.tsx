'use client'

import { useDesign } from '@/hooks/design/useDesign.hook'
import { formatClassName } from '@/utils/formats/class-name/format-class-name.util'
import type { FC } from 'react'
import { Controller } from 'react-hook-form'
import Field from '../../field/Field'
import Loader from '../../loader/Loader'
import Textarea from '../../textarea/Textarea'
import Upload from '../../upload/Upload'
import styles from './ConstructorDesign.module.scss'

const ConstructorDesign: FC = () => {
	const { control, handleSubmit, onSubmit, isPending } = useDesign()

	return (
		<>
			<p className={styles.description}>
				Вы можете отправить нам запрос на изменение предложенных вариантов
				(другой цвет, другой рисунок, другой шрифт), либо отправить нам ваш
				дизайн, мы с радостью изготовим любую форму!
			</p>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<Controller
					defaultValue=""
					control={control}
					name="name"
					render={({ field: { onChange, value } }) => (
						<Field
							className={formatClassName(styles.field, styles.half)}
							label="Укажите ваше имя и фамилию"
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
							className={formatClassName(styles.field, styles.half)}
							label="Укажите вашу электронную почту"
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
							onChange={onChange}
							value={value}
							isRequired
						/>
					)}
				/>
				<div className={styles.textarea}>
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
					<button className={styles.submit}>Отправить</button>
				)}
			</form>
			<p className={styles.policy}>
				Нажимая кнопку «отправить» на данной странице, вы соглашаетесь с{' '}
				<span>условиями продаж</span> и{' '}
				<span>политикой конфиденциальности</span>.
			</p>
		</>
	)
}

export default ConstructorDesign
