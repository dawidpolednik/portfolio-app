'use client';
import { FC, useMemo } from 'react';
// import ScrollAnimation from "react-animate-on-scroll";
import { useTranslation } from 'react-i18next';
import { technologiesLoader } from '@/fixtures';
import { DoubleAngle } from '../DoubleAngle/DoubleAngle';
import styles from './Technologies.module.scss';
import Image from 'next/image';

type TechnologiesProps = Technology[];

export const Technologies: FC = () => {
  const { t } = useTranslation();

  const renderTechnologiesSection = useMemo(
    () =>
      technologiesLoader().map(({ id, image, title, description }) => (
        // <ScrollAnimation
        //   key={id}
        //   animateIn="fadeInLeftBig"
        //   duration={1}
        //   initiallyVisible={false}
        //   animateOnce
        // >
        <div className={styles.imgSection} key={id}>
          <div className={styles.imgContainer}>
            <Image className={styles.img} src={image} alt={description ?? ''} />
          </div>
          <p className={styles.imgHeader}>{title}</p>
        </div>
        // </ScrollAnimation>
      )),
    []
  );

  return (
    <section className={styles.container} id="technologies">
      <div className={styles.technologiesHeader}>
        <h2 className={styles.technologiesTitle}>
          {t('technologiesSection.header')}
        </h2>
      </div>
      <div className={styles.technologiesBackground}>
        <div className={styles.technologiesSection}>
          {renderTechnologiesSection}
        </div>
        <div className={styles.angleContainer}>
          <DoubleAngle subPage="projects" />
          <DoubleAngle onUp={true} subPage="education" />
        </div>
      </div>
    </section>
  );
};
