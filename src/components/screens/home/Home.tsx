import Container from '@/components/ui/common/container/Container'
import Constructor from '@/components/ui/elements/constructor/Constructor'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import type { FC } from 'react'
import styles from './Home.module.scss'

const Home: FC = () => {
	return (
		<section>
			<Container>
				<div className={styles.wrapper}>
					<ul className={styles.breadcrumbs}>
						<li className={styles.breadcrumb}>
							<Link href="https://penalty.ru/">Главная</Link>
							<ChevronRight />
						</li>
						<li className={styles.breadcrumb}>Конструктор формы</li>
					</ul>
					<h1 className={styles.heading}>КОНСТРУКТОР ФОРМЫ</h1>
					<Constructor />
				</div>
			</Container>
		</section>
	)
}

export default Home
