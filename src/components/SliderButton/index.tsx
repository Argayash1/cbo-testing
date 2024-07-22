import React from 'react'
import styles from './SliderButton.module.scss'
import clsx from 'clsx'

type SliderNextButtonProps = {
	switchCount: number
	onClick: () => void
	type?: string
	nextButtonDisabled?: boolean
}

export const SliderButton = ({
	type,
	onClick,
	switchCount,
	nextButtonDisabled,
}: SliderNextButtonProps) => {
	return (
		<button
			className={clsx(styles.root, {
				[styles.rootTypeLeft]: nextButtonDisabled === undefined,
				[styles.rootTypeAboutPracticum]: type === 'about-practicum',
				[styles.rootTypeLeftAboutPracticum]:
					nextButtonDisabled !== undefined && type === 'about-practicum',
			})}
			onClick={onClick}
			disabled={
				nextButtonDisabled === undefined
					? switchCount === 0
					: nextButtonDisabled
			}
		>
			{type === 'about-practicum' && (
				<svg
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M5 12H19M19 12L12 5M19 12L12 19'
						stroke='white'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			)}
		</button>
	)
}
