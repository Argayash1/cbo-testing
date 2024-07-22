import React from 'react';
import styles from './SectionSubtitle.module.scss';
import { clsx } from 'clsx';

interface ISectionSubtitle {
  text: string;
  place?: string;
}

export const SectionSubtitle = ({ text, place }: ISectionSubtitle) => {
  const textContent = text.split(' ').map((word, index) =>
    word.startsWith('*') ? (
      <span key={index} className={styles.spanNoWrap}>
        {word.replace('*', '') + ' '}
      </span>
    ) : (
      word + ' '
    )
  );

  return (
    <p
      className={clsx(styles.root, {
        [styles.rootPlaceQuestions]: place === 'questions',
        [styles.rootPlacePracticeActivity]: place === 'practice-activity',
        [styles.rootPlaceHowItWillGo]: place === 'how-it-will-go',
        [styles.rootTypeTextAlignLeft]: place === 'about-author' || place === 'feedback',
        [styles.rootPlaceAboutAuthor]: place === 'about-author',
        [styles.rootPlaceFeedback]: place === 'feedback',
      })}
    >
      {textContent}
    </p>
  );
};
