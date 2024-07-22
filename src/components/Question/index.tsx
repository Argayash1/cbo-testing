import React from 'react';
import styles from './Question.module.scss';
import clsx from 'clsx';

interface IQuestionProps {
  titleText: string;
  questionImage: string;
}

export const Question = ({ titleText, questionImage }: IQuestionProps) => {
  return (
    <article className={styles.root}>
      <div
        className={clsx(styles.image, {
          [styles.imageTypeThird]: titleText.includes('выбрать'),
        })}
        style={{ backgroundImage: `url(${questionImage})` }}
      ></div>
      <h3 className={styles.title}>{titleText}</h3>
    </article>
  );
};
