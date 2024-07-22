import React from 'react'
import logo from '../../assets/images/logo.png'
import styles from './Logo.module.scss'
import { clsx } from 'clsx'

interface ILogoProps {
	place?: string
}

export const Logo = ({ place }: ILogoProps) => {
	return (
		<a href='#top' className={styles.root}>
			<img
				src={logo}
				alt='Логотип Центра бизнес-образования'
				className={clsx(styles.image, {
					[styles.imageTypeSpeakerCard]: place === 'speakercard',
					[styles.imageTypeFooter]: place === 'footer',
				})}
			/>
		</a>
	)
}
