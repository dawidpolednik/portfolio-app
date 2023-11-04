import React, { FC, useEffect, useMemo, useRef, useCallback } from 'react';
import styles from './Menu.module.scss';
import { CloseIcon } from './CloseIcon/CloseIcon';
import ReactDOM from 'react-dom';
import { useTranslation } from 'next-i18next';
import { Link } from 'react-scroll';

interface MenuProps {
  onClose: () => void;
  isOpen: boolean;
}

export const Menu: FC<MenuProps> = ({ isOpen, onClose }) => {
  const menuRef = useRef<HTMLDivElement>(null);

  const { t } = useTranslation();

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

  // useEffect(() => {
  //   if (isOpen) disableBodyScroll(menuRef.current);
  // }, [isOpen]);

  const handleOnClose = useCallback(() => {
    onClose();
    // enableBodyScroll(menuRef.current);
  }, [onClose]);

  const renderMenu = useMemo(
    () => (
      <nav className={`${styles.menuWrapper} ${styles.resetBlur}`}>
        <ul className={styles.menuList}>
          {menuItems.map(({ id, name, toNavigate }, index) => {
            return (
              <li key={id} className={styles.menuItem}>
                <Link
                  key={id}
                  className={styles.menuItemContent}
                  activeClass='active'
                  to={toNavigate}
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={0}
                  duration={1000}
                  delay={250}
                  isDynamic={true}
                  ignoreCancelEvents={false}
                  onClick={handleOnClose}
                >
                  {name}
                </Link>
              </li>
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
    document.getElementById('portal') as any,
  );
};
