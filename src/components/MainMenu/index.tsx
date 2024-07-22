import React from 'react';
import styles from './MainMenu.module.scss';
import { mainMenuItems } from '../../utils/mainMenuItems';
import clsx from 'clsx';

export const MainMenu = () => {
  const mainMenuListItems = mainMenuItems.map((item, index) => (
    <li key={index} className={styles.menuItem}>
      <a
        href='/'
        className={clsx(styles.navLink, {
          [styles.navLinkTypeFirst]: index === 0,
        })}
      >
        {item}
        {index === 0 && <span className={styles.arrowIcon}></span>}
      </a>
    </li>
  ));
  return (
    <nav>
      <ul className={styles.list}>{mainMenuListItems}</ul>
    </nav>
  );
};
