import React from 'react'
import styles from './CTA.module.scss'
import { clsx } from 'clsx'

interface ICTAProps {
	path: string
	linkText?: string
	type?: string
	linkType?: string
}

export const CTA = ({
	path,
	linkText = 'Узнать стоимость',
	type,
	linkType,
}: ICTAProps) => {
	return (
		<>
			{linkType === 'download' ? (
				<a
					href={path}
					className={clsx(styles.root, {
						[styles.rootTypePracticeActivity]: type === 'practice-activity',
					})}
					download
				>
					{linkText}
				</a>
			) : (
				<a
					href={path}
					className={clsx(styles.root, {
						[styles.rootTypeHeader]: type === 'header',
						[styles.rootTypeLead]: type === 'lead',
						[styles.rootTypeCentered]:
							type === 'target-audience' || type === 'how-it-will-go',
						[styles.rootTypeTargetAudience]: type === 'target-audience',
						[styles.rootTypePracticeActivity]: type === 'practice-activity',
						[styles.rootTypeHowItWillGo]: type === 'how-it-will-go',
						[styles.rootTypeFeedback]: type === 'feedback',
					})}
				>
					{linkText}
				</a>
			)}
		</>
	)
}
