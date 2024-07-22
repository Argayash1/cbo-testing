import React from 'react';
import logo from '../../assets/images/lead-arblogo.png';
import tabletogo from '../../assets/images/lead-arb-tablet-logo.svg';
import styles from './ARBLogo.module.scss';
import useResize from '../../hooks/useResize';

export const ARBLogo = () => {
  const screenWidth = useResize();

  return (
    <img src={screenWidth > 986 ? logo : tabletogo} alt='Логотип Центра бизнес-образования' className={styles.root} />
  );
};
