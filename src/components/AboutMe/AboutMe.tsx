import { FC } from 'react';
import { DoubleAngle } from '../DoubleAngle/DoubleAngle';
import styles from './AboutMe.module.scss';
import { useTranslation } from 'react-i18next';

const AboutMe: FC = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.aboutContainer} id="aboutMe">
      <section className={styles.aboutMeSection}>
        <h3 className={styles.title}> {t('aboutMeSection.header')}</h3>
        <p className={styles.subTitle}> {t('aboutMeSection.subHeader')}</p>
        <p>{t('aboutMeSection.firstParagraph')}</p>
        <p>{t('aboutMeSection.secondParagraph')}</p>
        <p>{t('aboutMeSection.thirdParagraph')}</p>
        <p>{t('aboutMeSection.fourthParagraph')}</p>
        <p>{t('aboutMeSection.fifthParagraph')}</p>
        <p>{t('aboutMeSection.sixthParagraph')}</p>
        <div className={styles.angleContainer}>
          <DoubleAngle subPage="education" />
          <DoubleAngle onUp={true} subPage="home" />
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
