import React from 'react'
import styles from './AboutPractiсum.module.scss'
import { SectionTitle, CardSlider, AboutPracticumCard } from '../../components'
import { aboutPracticumCards } from '../../utils/aboutPracticumCards'
import useResize from '../../hooks/useResize'

export const AboutPractiсum = () => {
	const screenWidth = useResize()
	const [switchCount, setSwitchCount] = React.useState<number>(0)

	const nextButtonDisabled = aboutPracticumCards.length - switchCount <= 1

	const cardListItems = aboutPracticumCards.map((card, index) => (
		<li key={index}>
			<AboutPracticumCard {...card} index={index} />
		</li>
	))

	const offset =
		screenWidth > 986
			? 421
			: screenWidth <= 986 && screenWidth < 531
				? 235
				: 178

	return (
		<section>
			<div className={styles.container}>
				<SectionTitle
					titleText='Что говорят о&nbsp;практикуме?'
					place='about-practicum'
				/>
				<CardSlider
					switchCount={switchCount}
					sliderCount={aboutPracticumCards.length}
					onSwitchToPrevSlides={() => setSwitchCount((prev) => prev - 1)}
					onSwitchToNextSlides={() => setSwitchCount((prev) => prev + 1)}
					nextButtonDisabled={nextButtonDisabled}
					type='about-practicum'
				>
					{
						<ul
							className={styles.cardList}
							style={{ transform: `translateX(-${offset * switchCount}px)` }}
						>
							{cardListItems}
						</ul>
					}
				</CardSlider>
			</div>
		</section>
	)
}
