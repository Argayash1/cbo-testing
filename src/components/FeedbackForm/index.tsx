import React from 'react';
import styles from './FeedbackForm.module.scss';
import clsx from 'clsx';

export const FeedbackForm = () => {
  return (
    <form className={styles.form}>
      <label htmlFor='nameInput' className={styles.label}>
        ФИО
      </label>
      <input
        type='text'
        id='nameInput'
        placeholder='Укажите ваше ФИО полностью'
        required
        className={styles.input}
        name='name'
      />

      <label htmlFor='phoneInput' className={styles.label}>
        Телефон
      </label>
      <input type='phone' id='phoneInput' placeholder='+7' required className={styles.input} name='phone' />

      <label htmlFor='emailInput' className={styles.label}>
        e-mail
      </label>
      <input
        type='email'
        id='emailInput'
        placeholder='example@email.com'
        required
        className={styles.input}
        name='email'
      />
      <label htmlFor='agreeInput' className={styles.checkboxLabel}>
        <input type='checkbox' id='agreeInput' required className={styles.checkboxInvisible} name='checkbox' />
        <span className={clsx(styles.checkboxVisible, styles.checkboxVisibleTypeChecked)}></span>
        Согласен с политикой обработки персональных данных
      </label>
    </form>
  );
};
