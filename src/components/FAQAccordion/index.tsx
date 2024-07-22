import React from 'react'
import styles from './FAQAccordion.module.scss'
import { FAQitems } from '../../utils/FAQitems'
import { FAQAccordionCard } from '../FAQAccordionCard'

export const FAQAccordion = () => {
	const [openItemIndex, setOpenItemIndex] = React.useState<number | null>(null)

	const faqAccordionListItems = FAQitems.map((item, index) => (
		<li key={index}>
			<FAQAccordionCard
				onClick={() => setOpenItemIndex(openItemIndex === index ? null : index)}
				{...item}
				isOpen={openItemIndex === index}
			/>
		</li>
	))

	return <ul className={styles.root}>{faqAccordionListItems}</ul>
}
