import React from 'react';
import styles from './TargetAudience.module.scss';
import { CTA, SectionTitle, TargetAudienceCard } from '../../components';
import { targetAudienceItems } from '../../utils/targetAudienceItems';

export const TargetAudience = () => {
  const targetAudienceListItems = targetAudienceItems.map((targetAudienceItem, index) => (
    <li key={index}>
      <TargetAudienceCard
        cardNumber={`0${index + 1}`}
        cardTitle={targetAudienceItem.title}
        cardText={targetAudienceItem.description}
      />
    </li>
  ));

  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <SectionTitle titleText='Этот практикум необходим:' place='target-audience' />
        <ul className={styles.list}>{targetAudienceListItems}</ul>
        <div className={styles.warningContainer}>
          <span className={styles.warningIcon}></span>
          <p className={styles.warning}>Чтобы получить результат, лучше пройти практикум командой&nbsp;руководителей</p>
        </div>
        <CTA path='#' linkText='Узнать специальную цену для команды' type='target-audience' />
      </div>
    </section>
  );
};
