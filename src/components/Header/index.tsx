import React from 'react';
import styles from './Header.module.scss';
import { BurgerButton, CTA, Logo, MainMenu, TopMenu } from '../../components';
import useResize from '../../hooks/useResize';

export const Header = () => {
  const screenWidth = useResize();

  return (
    <header className={styles.root}>
      <p className={styles.screenWidth}>{screenWidth}</p>

      <div className={styles.container}>
        <Logo />
        <TopMenu />
        <a href='tel:8 800 700 1996' className={styles.phone}>
          8&nbsp;800&nbsp;700&nbsp;1996
        </a>
        <BurgerButton />
      </div>
      <div className={styles.mainMenuContainer}>
        <div className={styles.container}>
          <MainMenu />
          <CTA path='#' linkText='Календарь программ' type='header' />
        </div>
      </div>
    </header>
  );
};
