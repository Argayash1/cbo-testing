import React from 'react'
import { CTA } from '../../components'
import styles from './ActivityCard.module.scss'
import { clsx } from 'clsx'
import useResize from '../../hooks/useResize'

interface ActivityCardProps {
	title: string
	subtitle?: string
	ideasList?: string[]
	addition?: string
	summaryList?: string[]
	icon?: string
}

export const ActivityCard = ({
	title,
	subtitle,
	ideasList,
	addition,
	summaryList,
	icon,
}: ActivityCardProps) => {
	const screenWidth = useResize()

	const ideasListItems = ideasList?.map((idea, index) => (
		<li key={index} className={styles.ideasListItem}>
			{idea}
		</li>
	))

	const summaryListItems = summaryList?.map((summary, index) => (
		<li key={index} className={styles.summaryListItem}>
			<span></span>
			{summary}
		</li>
	))

	const additionContent = addition?.split(' ').map((word, index) =>
		word.startsWith('*') ? (
			<span key={index} className={styles.additionSpan}>
				{word.replace('*', '') + ' '}
			</span>
		) : (
			word + ' '
		)
	)

	const isThirdCard = title.startsWith('Брейншторм')
	const isSecondCard = title.startsWith('Что делать?')

	const subtitleWithNonBreakingSpace = subtitle
		?.split(' ')
		.map((word) => (word.startsWith('*') ? word + '\u00A0' : word + ' '))
		.join('')

	const subtitleTextContent =
		isThirdCard && screenWidth <= 986 ? subtitleWithNonBreakingSpace : subtitle

	function replaceStar(text: string): string {
		return text.replace(/\*/g, '')
	}

	return (
		<article
			className={clsx(styles.root, {
				[styles.rootTypeSecond]: isSecondCard,
				[styles.rootTypeThird]: isThirdCard,
				[styles.rootTypeFourth]: !subtitle,
			})}
		>
			<h3
				className={clsx(styles.title, {
					[styles.titleTypeFourth]: !subtitle,
				})}
			>
				{title}
			</h3>
			{subtitle && (
				<p className={styles.subtitle}>
					{subtitleTextContent && replaceStar(subtitleTextContent)}
				</p>
			)}
			{ideasList && <ul className={styles.ideasList}>{ideasListItems}</ul>}
			{addition && <p className={styles.addition}>{additionContent}</p>}
			{summaryList && (
				<ul className={styles.summaryList}>{summaryListItems}</ul>
			)}
			{!subtitle && (
				<>
					<CTA
						path='#'
						linkText='Скачать программу'
						type='practice-activity'
						linkType='download'
					/>
					<div className={styles.fourthCardFigure}></div>
				</>
			)}
			{subtitle && (
				<div
					className={clsx(styles.icon, {
						[styles.iconTypeSecond]: isSecondCard,
						[styles.iconTypeThird]: isThirdCard,
					})}
					style={{ backgroundImage: `url(${icon})` }}
				></div>
			)}
		</article>
	)
}
