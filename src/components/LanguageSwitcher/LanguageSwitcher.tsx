import React, { FC, useMemo } from 'react';
import styles from './LanguageSwitcher.module.scss';
import { useTranslation } from 'react-i18next';

interface LanguageSwitcherProps {
  changeLanguage: (lng: 'pl' | 'en') => void;
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({
  changeLanguage,
}) => {
  const { i18n } = useTranslation();

  const currentLanguage = useMemo(() => i18n.language, [i18n.language]);

  const renderToggleField = (
    <div className={styles.wrapper}>
      <label className={styles.toggleWrapper} htmlFor="checkbox">
        <input
          id="checkbox"
          type="checkbox"
          checked={currentLanguage === 'en'}
          onChange={() =>
            changeLanguage(currentLanguage === 'pl' ? 'en' : 'pl')
          }
          className={styles.hiddenInput}
        />
        <span className={styles.slider}></span>
      </label>
      <div className={styles.activeLanguageLabel}>
        {currentLanguage.toUpperCase()}
      </div>
    </div>
  );

  return <div className={styles.wrapper}>{renderToggleField}</div>;
};
