import React, { FC, useCallback, useMemo } from 'react';
import styles from './LanguageSwitcher.module.scss';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';

export const LanguageSwitcher: FC = ({}) => {
  const { i18n } = useTranslation();

  const { push, pathname, query, asPath } = useRouter();

  const currentLanguage = i18n?.language;

  const handleChangeLanguage = useCallback(
    (isoCode: string) => {
      push({ pathname, query }, asPath, { locale: isoCode });
      i18n.changeLanguage(isoCode);
    },
    [pathname, asPath, query, push, i18n],
  );

  const renderToggleField = (
    <div className={styles.wrapper}>
      <label className={styles.toggleWrapper} htmlFor='checkbox'>
        <input
          id='checkbox'
          type='checkbox'
          checked={currentLanguage === 'en'}
          onChange={() =>
            handleChangeLanguage(currentLanguage === 'pl' ? 'en' : 'pl')
          }
          className={styles.hiddenInput}
        />
        <span className={styles.slider}></span>
      </label>
      <div className={styles.activeLanguageLabel}>
        {currentLanguage?.toUpperCase()}
      </div>
    </div>
  );

  return <div className={styles.wrapper}>{renderToggleField}</div>;
};
