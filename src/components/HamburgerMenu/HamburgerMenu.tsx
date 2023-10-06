import React, { FC } from 'react';
import styles from './HamburgerMenu.module.scss';

interface HamburgerMenuProps {
  isOpen: boolean;
  onOpen: () => void;
}

export const HamburgerMenu: FC<HamburgerMenuProps> = ({ isOpen, onOpen }) => {
  return (
    !isOpen && (
      <section className={styles.hamburgerWrapper} onClick={onOpen}>
        <div className={styles.linesWrapper}>
          <div className={styles.lineItem} />
          <div className={styles.lineItemShorter} />
          <div className={styles.lineItemShortest} />
        </div>
      </section>
    )
  );
};
