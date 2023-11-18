import { FC } from 'react';
import styles from './AboutMe.module.scss';
import { useTranslation } from 'next-i18next';
import { useInView } from 'framer-motion';
import { useRouter } from 'next/router';
import { useHandleIdSection } from '@/hooks/useHandleIdSection';

const sectionName: NavigationSectionName = 'aboutMe';

const AboutMe: FC = () => {
  const { t } = useTranslation('common');

  // const { containerRef } = useHandleIdSection({
  //   sectionName,
  // });

  return (
    <div className={styles.aboutContainer} id={'aboutMe'}>
      <section className={styles.aboutMeSection}>
        <h3 className={styles.title}> {t('aboutMeSection.header')}</h3>
        <p className={styles.subTitle}> {t('aboutMeSection.subHeader')}</p>
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
