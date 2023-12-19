import React, { FC, useEffect, useMemo, useRef, useCallback } from 'react';
import styles from './Menu.module.scss';
import { CloseIcon } from './CloseIcon/CloseIcon';
import ReactDOM from 'react-dom';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { Variants, motion } from 'framer-motion';

interface MenuProps {
  onClose: () => void;
  isOpen: boolean;
}

export const Menu: FC<MenuProps> = ({ isOpen, onClose }) => {
  const menuRef = useRef<HTMLDivElement>(null);

  const { t } = useTranslation();

  const { asPath, events } = useRouter();

  const menuItems: MenuItem[] = [
    { id: 1, name: t('menuOptions.home'), toNavigate: 'home' },
    { id: 2, name: t('menuOptions.aboutMe'), toNavigate: 'aboutMe' },
    { id: 3, name: t('menuOptions.education'), toNavigate: 'education' },
    {
      id: 4,
      name: t('menuOptions.technologies'),
      toNavigate: 'technologies',
    },
    { id: 5, name: t('menuOptions.projects'), toNavigate: 'projects' },
    { id: 6, name: t('menuOptions.contact'), toNavigate: 'contact' },
  ];

  const fadeInAnimationVariant: Variants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (idx: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.05 * idx,
      },
    }),
  };

  useEffect(() => {
    if (isOpen && menuRef?.current) disableBodyScroll(menuRef?.current);
  }, [isOpen]);

  const handleOnClose = useCallback(() => {
    onClose();
    if (menuRef?.current) enableBodyScroll(menuRef.current);
  }, [onClose, menuRef.current]);

  useEffect(() => {
    events.on('hashChangeStart', handleOnClose);

    return () => events.off('hashChangeStart', handleOnClose);
    // eslint-disable-next-line
  }, [events]);

  const renderMenu = useMemo(
    () => (
      <nav className={`${styles.menuWrapper} ${styles.resetBlur}`}>
        <ul className={styles.menuList}>
          {menuItems.map(({ id, name, toNavigate }, idx) => {
            return (
              <motion.li
                key={id}
                className={styles.menuItem}
                variants={fadeInAnimationVariant}
                whileInView={'animate'}
                initial={'initial'}
                custom={idx}
              >
                {/* <Link
                  className={styles.menuItemContent}
                  activeClass='active'
                  to={toNavigate}
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={0}
                  duration={1000}
                  delay={250}
                  isDynamic={false}
                  ignoreCancelEvents={false}
                  onClick={handleOnClose}
                >
                  {name}
                </Link> */}
                <Link
                  href={`#${toNavigate}`}
                  className={styles.menuItemContent}
                >
                  {name}
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </nav>
    ),
    [menuItems, handleOnClose],
  );

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div ref={menuRef} className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <div className={styles.closeIconWrapper} onClick={handleOnClose}>
          <CloseIcon />
        </div>
        {renderMenu}
      </div>
    </div>,
    document.getElementById('portal') as HTMLElement,
  );
};
