import React from 'react';
import styles from './FAQ.module.scss';
import { FAQAccordion, SectionTitle } from '../../components';

export const FAQ = () => {
  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <SectionTitle titleText='Частые вопросы' place='faq' />
        <FAQAccordion />
      </div>
    </section>
  );
};
