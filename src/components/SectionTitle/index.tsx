import React from 'react';
import styles from './SectionTitle.module.scss';
import { clsx } from 'clsx';

interface ISectionTitle {
  titleText: string;
  place?: string;
}

export const SectionTitle = ({ titleText, place }: ISectionTitle) => {
  return (
    <h2
      className={clsx(styles.root, {
        [styles.rootPlaceQuestions]: place === 'questions',
        [styles.rootPlaceTargetAudience]: place === 'target-audience',
        [styles.rootTypeTextAlignLeft]: place === 'about-author' || place === 'feedback',
        [styles.rootPlaceAboutAuthor]: place === 'about-author',
        [styles.rootPlacePracticeActivities]: place === 'practice-activities',
        [styles.rootPlaceHowWillItGo]: place === 'how-will-it-go',
        [styles.rootPlaceAboutPracticum]: place === 'about-practicum',
        [styles.rootPlaceFaq]: place === 'faq',
        [styles.rootPlaceFeedback]: place === 'feedback',
      })}
    >
      {titleText}
    </h2>
  );
};
