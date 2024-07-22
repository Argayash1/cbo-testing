import React from 'react';
import styles from './BreadCrumbs.module.scss';

interface IBreadCrumbsProps {
  pathNames: (string | number)[];
}

export const BreadCrumbs = ({ pathNames }: IBreadCrumbsProps) => {
  const pathNamesListItems = pathNames.map((pathName, index) => (
    <li key={index}>
      <a href='/' className={styles.crumbLink}>
        {pathName}
      </a>
      <span className={styles.crumbSpan}>/</span>
    </li>
  ));

  return (
    <nav className={styles.root}>
      <ul className={styles.list}>{pathNamesListItems}</ul>
    </nav>
  );
};
