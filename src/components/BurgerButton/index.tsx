import React from 'react'
import styles from './BurgerButton.module.scss'
import clsx from 'clsx'

type BurgerButtonProps = {
	isOpen?: boolean
	onToggle?: () => void
}

export const BurgerButton = ({ isOpen, onToggle }: BurgerButtonProps) => {
	const handleToggle = () => {
		if (onToggle) {
			onToggle()
		}
	}

	return (
		<button
			className={clsx(styles.root, isOpen && styles.rootActive)}
			onClick={handleToggle}
		>
			<span className={styles.line}></span>
			<span className={styles.line}></span>
			<span className={styles.line}></span>
		</button>
	)
}
