import React from 'react';
import { SectionTitle, SectionSubtitle, ActivityCard } from '../../components';
import styles from './PracticeActivities.module.scss';
import { activityCardItems } from '../../utils/activityCardItems';
import activityCardIcon1 from '../../assets/images/practice-activities-icon1.svg';
import activityCardIcon2 from '../../assets/images/practice-activities-icon2.svg';
import activityCardIcon3 from '../../assets/images/practice-activities-icon3.svg';

const activityCardIcons = [activityCardIcon1, activityCardIcon2, activityCardIcon3];

export const PracticeActivities = () => {
  const activitiesListItems = activityCardItems.map((activityCard, index) => (
    <li key={index} className={styles.listItem}>
      <ActivityCard {...activityCard} icon={activityCardIcons[index]} />
    </li>
  ));

  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <SectionTitle titleText='Что будем делать на&nbsp;практикуме?' place='practice-activities' />
        <SectionSubtitle
          text='В основе программы — стратегический инструментарий АРБ Про: *PIL-подход, карта рынка, матрица обновления «продукт – клиент»'
          place='practice-activity'
        />
        <ul className={styles.list}>{activitiesListItems}</ul>
      </div>
    </section>
  );
};
