import React from 'react';
import { topMenuItems } from '../../utils/topMenuItems';
import styles from './TopMenu.module.scss';

export const TopMenu = () => {
  const topMenuListItems = topMenuItems.map((item, index) => (
    <li key={index}>
      <a href='/' className={styles.menuLink}>
        {item}
      </a>
    </li>
  ));

  return (
    <nav className={styles.root}>
      <ul className={styles.list}>{topMenuListItems}</ul>
    </nav>
  );
};
