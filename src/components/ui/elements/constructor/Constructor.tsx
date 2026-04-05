'use client'

import { BASE, EXAMPLES, SHORTS } from '@/base/base.data'
import { useConstructor } from '@/hooks/constructor/useConstructor.hook'
import type { FC } from 'react'
import styles from './Constructor.module.scss'
import ConstructorSlider from './slider/ConstructorSlider'
import ConstructorTabs from './tabs/ConstructorTabs'

const Constructor: FC = () => {
	const rest = useConstructor()
	
	return (
		<div className={styles.wrapper}>
			<ConstructorSlider examples={EXAMPLES} {...rest} />
			<ConstructorTabs
				isConstructor={rest.isConstructor}
				shirts={BASE.shirts}
				shorts={SHORTS}
				pickedShirt={rest.shirt}
				pickedShorts={rest.shorts}
				changeShirt={rest.changeShirt}
				changeShorts={rest.changeShorts}
				state={rest.state}
				setState={rest.setState}
			/>
		</div>
	)
}

export default Constructor
