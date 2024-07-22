import React from 'react'
import styles from './SpeakerCard.module.scss'
import { ARBLogo, Logo } from '../../components'
import useResize from '../../hooks/useResize'

export const SpeakerCard = () => {
	const screenWidth = useResize()
	const speakerTitle =
		screenWidth > 986
			? 'Директор ГК «Институт Тренинга - АРБ Про», эксперт ЦБО'
			: 'Руководитель стратегического консалтинга ГК «Институт Тренинга - АРБ Про», эксперт ЦБО'

	return (
		<article className={styles.root}>
			<h3 className={styles.speakerName}>Демид Голиков</h3>
			<p className={styles.speakerTitle}>{speakerTitle}</p>
			<div className={styles.logoContainer}>
				<ARBLogo />
				<Logo place='speakercard' />
			</div>
		</article>
	)
}
