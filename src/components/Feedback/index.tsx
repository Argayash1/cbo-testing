import React from 'react'
import styles from './Feedback.module.scss'
import {
	SectionTitle,
	SectionSubtitle,
	CTA,
	FeedbackForm,
	SpecialistCard,
} from '../../components'
import useResize from '../../hooks/useResize'

export const Feedback = () => {
	const screenWidth = useResize()
	const subtitleText =
		screenWidth > 986
			? 'Пишите нам, мы проконсультируем по всем вопросам.'
			: 'Я готова вас проконсультировать'
	return (
		<section className={styles.root}>
			<div className={styles.container}>
				<SectionTitle
					titleText='Хотите уточнить условия участия?'
					place='feedback'
				/>
				<SectionSubtitle text={subtitleText} place='feedback' />
				<FeedbackForm />
				<CTA path='#' type='feedback' />
				<SpecialistCard />
			</div>
		</section>
	)
}
