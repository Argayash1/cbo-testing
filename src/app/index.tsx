import { Home } from '../pages/Home'
import styles from './App.module.scss'

export const App = () => {
	return (
		<div className={styles.page}>
			<div className={styles.content}>
				<Home />
			</div>
		</div>
	)
}
