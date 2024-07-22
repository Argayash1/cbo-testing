import React from 'react'
import styles from './Lead.module.scss'
import author from '../../assets/images/lead-author.png'
import { BreadCrumbs, CTA, SpeakerCard } from '../../components'
import { breadCrumbsItems } from '../../utils/breadCrumbsItems'
import clsx from 'clsx'

export const Lead = () => {
	return (
		<section className={styles.root}>
			<div className={styles.container}>
				<BreadCrumbs pathNames={breadCrumbsItems} />
				<div className={styles.dateContainer}>
					<span className={styles.date}>8-9 декабря 2022</span>
					<CTA
						path='https://cbo.ru/'
						type='lead'
						linkText='Семинар-практикум'
					/>
				</div>
				<h1 className={styles.title}>
					Жизнь и смерть вашего бизнеса:{' '}
					<span className={styles.titleSpan}>стабилизация</span>{' '}
					<span className={clsx(styles.titleSpan, styles.titleSpanTypeLast)}>
						в&nbsp;условиях санкций
					</span>
				</h1>
				<p className={styles.subtitle}>
					Куда вести компанию, когда горизонт планирования сужается?
				</p>
				<CTA path='#' linkText='Узнать подробнее' />
				<div className={styles.imageWrapper}>
					<img
						src={author}
						alt='Демид Голиков, автор семинара-практикума'
						className={styles.authorImage}
						loading='lazy'
					/>
					<SpeakerCard />
				</div>
			</div>
		</section>
	)
}
