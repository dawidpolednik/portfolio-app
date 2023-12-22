import { FC } from 'react';
import styles from './AboutMe.module.scss';
import { useTranslation } from 'next-i18next';
import { AnimatedText } from '@/components/AnimatedText/AnimatedText';
import { NavigationSectionName } from '@/models/NavigationSectionName';

const sectionName: NavigationSectionName = 'aboutMe';

const AboutMe: FC = () => {
  const { t } = useTranslation('common');

  return (
    <div className={styles.aboutContainer} id={sectionName}>
      <section className={styles.aboutMeSection}>
        <AnimatedText
          text={t('aboutMeSection.header')}
          className={styles.title}
          el='h3'
        />

        <AnimatedText
          text={t('aboutMeSection.subHeader')}
          className={styles.subTitle}
        />

        <p>{t('aboutMeSection.firstParagraph')}</p>
        <p>{t('aboutMeSection.secondParagraph')}</p>
        <p>{t('aboutMeSection.thirdParagraph')}</p>
        <p>{t('aboutMeSection.fourthParagraph')}</p>
        <p>{t('aboutMeSection.fifthParagraph')}</p>
        <p>{t('aboutMeSection.sixthParagraph')}</p>
      </section>
    </div>
  );
};

export default AboutMe;
