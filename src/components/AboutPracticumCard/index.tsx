import React from 'react';
import styles from './AboutPracticumCard.module.scss';
import clsx from 'clsx';

interface IAboutPracticumCardProps {
  name: string;
  title: string;
  about: string;
  image: string;
  index: number;
}

export const AboutPracticumCard = ({ name, title, about, image, index }: IAboutPracticumCardProps) => {
  return (
    <article className={styles.root}>
      <img
        src={image}
        alt={name + title}
        className={clsx(styles.photo, {
          [styles.photoTypeThird]: index === 2,
          [styles.photoTypeFourth]: index === 3,
        })}
        loading='lazy'
      />
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.title}>{title}</p>
      <p className={styles.about}>{about}</p>
    </article>
  );
};
