import React from 'react'
import {
	CardSlider,
	CTA,
	SectionSubtitle,
	SectionTitle,
} from '../../components'
import photo1 from '../../assets/images/hoitwilgo-photo1.jpg'
import photo2 from '../../assets/images/hoitwilgo-photo2.jpg'
import photo3 from '../../assets/images/hoitwilgo-photo3.jpg'
import styles from './HowItWillGo.module.scss'
import useResize from '../../hooks/useResize'
import { hoItWillGoItems } from '../../utils/hoItWillGoItems'

const photos = [
	{ image: photo1, altText: 'Фото 1' },
	{ image: photo2, altText: 'Фото 2' },
	{ image: photo3, altText: 'Фото 3' },
]

export const HowItWillGo = () => {
	const screenWidth = useResize()

	const [switchCount, setSwitchCount] = React.useState<number>(0)

	const switchToPrevSlide = () => {
		setSwitchCount((prev) => prev - 1)
	}

	const switchToNextSlide = () => {
		setSwitchCount((prev) => prev + 1)
	}

	const photoListItems = photos.map((photo, index) => (
		<li key={index} className={styles.photoListItem}>
			<img
				src={photo.image}
				alt={photo.altText}
				className={styles.photo}
				loading='lazy'
			/>
			<p className={styles.textOnPhoto}>{hoItWillGoItems[index]}</p>
		</li>
	))
	const initialSliderOffset = screenWidth > 531 ? 50 : 50.7
	const offset =
		screenWidth > 986
			? 707
			: screenWidth <= 986 && screenWidth > 531
				? 507
				: 285
	const nextButtonDisabled = photos.length - switchCount <= 1

	return (
		<section className={styles.root}>
			<div className={styles.container}>
				<SectionTitle
					titleText='Как все будет проходить?'
					place='how-will-it-go'
				/>
				<SectionSubtitle
					text='Предметный разговор без купюр:'
					place='how-it-will-go'
				/>
				<CardSlider
					switchCount={switchCount}
					onSwitchToPrevSlides={switchToPrevSlide}
					onSwitchToNextSlides={switchToNextSlide}
					nextButtonDisabled={nextButtonDisabled}
				>
					<ul
						className={styles.photoList}
						style={{
							transform: `translateX(calc(-${initialSliderOffset}% - ${offset * switchCount}px))`,
						}}
					>
						{photoListItems}
					</ul>
				</CardSlider>
				<CTA path='#' type='how-it-will-go' />
			</div>
		</section>
	)
}
