import React from 'react'
import styles from './AboutAuthor.module.scss'
import { SectionTitle, SectionSubtitle } from '../../components'
import { competenciesItems } from '../../utils/competenciesItems'
import authorsPhoto from '../../assets/images/about-author-photo.png'
import authorsPhotoTablet from '../../assets/images/about-author-tablet-photo.png'
import useResize from '../../hooks/useResize'

export const AboutAuthor = () => {
	const screenWidth = useResize()

	const competenciesListItems = competenciesItems.map((competence, index) => (
		<li key={index} className={styles.competence}>
			{competence}
		</li>
	))

	return (
		<section className={styles.root}>
			<div className={styles.container}>
				<p className={styles.presentation}>
					Программу ведет руководитель стратегического консалтинга ГК «Институт
					Тренинга - АРБ Про»
				</p>
				<SectionTitle titleText='Демид Голиков' place='about-author' />
				<SectionSubtitle
					text='Эксперт и консультант по направлениям: стратегическое планирование, 
                    концепции и бизнес-идеи, фасилитация стратегических сессий. C 2013 ежегодно 
                    участвует в Глобальном саммите директоров по стратегическому планированию.'
					place='about-author'
				/>
				<h3 className={styles.competenciesListTitle}>Компетенции:</h3>
				<ul className={styles.competencies}>{competenciesListItems}</ul>
				<img
					src={
						screenWidth > 986 || screenWidth <= 531
							? authorsPhoto
							: authorsPhotoTablet
					}
					alt='Фото Демида Голикова - автора семинара-практикума'
					className={styles.authorPhoto}
					loading='lazy'
				/>
			</div>
		</section>
	)
}
