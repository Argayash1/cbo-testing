import React from 'react';
import styles from './SpecialistCard.module.scss';
import specialistPhoto from '../../assets/images/feedback-specialist-photo.jpg';

export const SpecialistCard = () => {
  return (
    <article className={styles.root}>
      <img
        src={specialistPhoto}
        alt='Фото ведущегшо специалиста Бизнес-школы ЦБО Надежды Шуравиной'
        className={styles.photo}
        loading='lazy'
      />
      <h3 className={styles.name}>Шуравина Надежда</h3>
      <p className={styles.job}>Ведущий специалист Бизнес-школы&nbsp;ЦБО</p>
      <a href='phone: +7 (343) 38 50 500' className={styles.phone}>
        +7 (343) 38 50 500 (доб. 410)
      </a>
      <a href='mailto: m02@cbo.ru' className={styles.email}>
        m02@cbo.ru
      </a>
    </article>
  );
};
