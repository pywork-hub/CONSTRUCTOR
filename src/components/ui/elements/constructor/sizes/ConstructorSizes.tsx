'use client'

import sizesImage from '@/assets/images/global/sizes.jpg'
import type { FC } from 'react'
import styles from './ConstructorSizes.module.scss'

const ConstructorSizes: FC = () => {
	return (
		<div className={styles.sizes}>
			<h2 className={styles.heading}>Конструктор</h2>
			<table className={styles.table}>
				<tbody className={styles.tbody}>
					<tr className={styles.tr}>
						<th className={styles.th}>РАЗМЕР</th>
						<th className={styles.th}>РОСТ*</th>
						<th className={styles.th}>1)ОБХВАТ ГРУДИ</th>
						<th className={styles.th}>2)ОБХВАТ ТАЛИИ</th>
						<th className={styles.th}>3)ОБХВАТ БЁДЕР</th>
					</tr>
					<tr className={styles.tr}>
						<td className={styles.td}>32</td>
						<td className={styles.td}>116-126</td>
						<td className={styles.td}>61-66</td>
						<td className={styles.td}>56-59</td>
						<td className={styles.td}>65-70</td>
					</tr>
					<tr className={styles.tr}>
						<td className={styles.td}>34</td>
						<td className={styles.td}>126-136</td>
						<td className={styles.td}>66-70</td>
						<td className={styles.td}>59-62</td>
						<td className={styles.td}>70-75</td>
					</tr>
					<tr className={styles.tr}>
						<td className={styles.td}>36</td>
						<td className={styles.td}>136-146</td>
						<td className={styles.td}>70-74</td>
						<td className={styles.td}>62-65</td>
						<td className={styles.td}>75-80</td>
					</tr>
					<tr className={styles.tr}>
						<td className={styles.td}>38</td>
						<td className={styles.td}>146-156</td>
						<td className={styles.td}>74-79</td>
						<td className={styles.td}>65-68</td>
						<td className={styles.td}>80-85</td>
					</tr>
					<tr className={styles.tr}>
						<td className={styles.td}>40-42</td>
						<td className={styles.td}>156-166</td>
						<td className={styles.td}>79-85</td>
						<td className={styles.td}>68-72</td>
						<td className={styles.td}>85-91</td>
					</tr>
					<tr className={styles.tr}>
						<td className={styles.td}>42-44</td>
						<td className={styles.td}>170</td>
						<td className={styles.td}>83-89</td>
						<td className={styles.td}>72-78</td>
						<td className={styles.td}>89-94</td>
					</tr>
					<tr className={styles.tr}>
						<td className={styles.td}>44-46</td>
						<td className={styles.td}>176</td>
						<td className={styles.td}>89-94</td>
						<td className={styles.td}>78-84</td>
						<td className={styles.td}>94-99</td>
					</tr>
					<tr className={styles.tr}>
						<td className={styles.td}>48-50</td>
						<td className={styles.td}>179</td>
						<td className={styles.td}>94-100</td>
						<td className={styles.td}>84-90</td>
						<td className={styles.td}>99-105</td>
					</tr>
					<tr className={styles.tr}>
						<td className={styles.td}>50-52</td>
						<td className={styles.td}>182</td>
						<td className={styles.td}>100-106</td>
						<td className={styles.td}>90-96</td>
						<td className={styles.td}>105-111</td>
					</tr>
					<tr className={styles.tr}>
						<td className={styles.td}>54-56</td>
						<td className={styles.td}>185</td>
						<td className={styles.td}>106-113</td>
						<td className={styles.td}>96-102</td>
						<td className={styles.td}>111-117</td>
					</tr>
					<tr className={styles.tr}>
						<td className={styles.td}>56-58</td>
						<td className={styles.td}>188</td>
						<td className={styles.td}>113-118</td>
						<td className={styles.td}>102-107</td>
						<td className={styles.td}>117-123</td>
					</tr>
					<tr className={styles.tr}>
						<td className={styles.td}>60-62</td>
						<td className={styles.td}>191</td>
						<td className={styles.td}>118-124</td>
						<td className={styles.td}>107-113</td>
						<td className={styles.td}>123-128</td>
					</tr>
				</tbody>
			</table>
			<p className={styles.text}>РОСТ* - Ориентировочный параметр.</p>
			<h3 className={styles.title}>КАК УЗНАТЬ МОЙ РАЗМЕР?</h3>
			<p className={styles.text}>
				<strong>1) ОБХВАТ ГРУДИ</strong>
			</p>
			<p className={styles.text}>
				ИЗМЕРЯЕТСЯ В ОБЛАСТИ ГРУДИ И ЛОПАТОК В НАИБОЛЕЕ ШИРОКОМ МЕСТЕ.
			</p>
			<p className={styles.text}>
				<strong>2) ОБХВАТ ТАЛИИ</strong>
			</p>
			<p className={styles.text}>
				ПРОИЗВЕДИТЕ ИЗМЕРЕНИЕ НА УРОВНЕ ЕСТЕСТВЕННОЙ ЛИНИИ ТАЛИИ.
			</p>
			<p className={styles.text}>
				<strong>3) ОБХВАТ БЁДЕР </strong>
			</p>
			<p className={styles.text}>
				ИЗМЕРЬТЕ ОБЪЕМ БЁДЕР В НАИБОЛЕЕ ШИРОКОМ МЕСТЕ.
			</p>
			<h3 className={styles.title}>СТЫК РАЗМЕРОВ</h3>
			<p className={styles.text}>
				При выборе размера можно столкнуться с попаданием в промежуток между
				двумя размерами. В таком случае мы рекомендуем склоняться в большую
				сторону. Если одежда должна прилегать, выбор можно делать в меньшую
				сторону.
			</p>
			<div className={styles.preview}>
				{/* <Image
					{...BASE_IMAGE_PART_PROPS}
					src={sizesImage.src}
					width={207}
					height={566}
					alt=""
				/> */}
				<img src={sizesImage.src} width={207} height={566} />
			</div>
		</div>
	)
}

export default ConstructorSizes
