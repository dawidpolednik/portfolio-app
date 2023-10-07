'use client';

import styles from './Education.module.scss';
// import ScrollAnimation from "react-animate-on-scroll";
import { DoubleAngle } from '../DoubleAngle/DoubleAngle';
import LifeEvent from './LifeEvent';
import { useTranslation } from 'react-i18next';

const Education = () => {
  const { t } = useTranslation();

  const lifeEvents: LifeEvent[] = [
    {
      id: 0,
      date: t('educationSection.lifeEvents.currentWork.time'),
      title: t('educationSection.lifeEvents.currentWork.header'),
      description: t('educationSection.lifeEvents.currentWork.description'),
    },
    {
      id: 1,
      date: t('educationSection.lifeEvents.secondWork.time'),
      title: t('educationSection.lifeEvents.secondWork.header'),
      description: t('educationSection.lifeEvents.secondWork.description'),
    },
    {
      id: 2,
      date: t('educationSection.lifeEvents.firstWork.time'),
      title: t('educationSection.lifeEvents.firstWork.header'),
      description: t('educationSection.lifeEvents.firstWork.description'),
    },
    {
      id: 3,
      date: t('educationSection.lifeEvents.masterDegree.time'),
      title: t('educationSection.lifeEvents.masterDegree.header'),
      description: t('educationSection.lifeEvents.masterDegree.description'),
    },
    {
      id: 4,
      date: t('educationSection.lifeEvents.internship.time'),
      title: t('educationSection.lifeEvents.internship.header'),
      description: t('educationSection.lifeEvents.internship.description'),
    },
    {
      id: 5,
      date: t('educationSection.lifeEvents.academy.time'),
      title: t('educationSection.lifeEvents.academy.header'),
      description: t('educationSection.lifeEvents.academy.description'),
    },
    {
      id: 6,
      date: t('educationSection.lifeEvents.engineer.time'),
      title: t('educationSection.lifeEvents.engineer.header'),
      description: t('educationSection.lifeEvents.engineer.description'),
    },
  ];

  return (
    <>
      <section className={styles.container} id="education">
        <div className={styles.educationHeader}>
          <h2 className={styles.educationTitle}>
            {t('educationSection.header')}
          </h2>
        </div>
        {/* <ScrollAnimation
          animateIn="bounceInDown"
          initiallyVisible={false}
          duration={2}
          delay={300}
          animateOnce={true}
        > */}
        <div className={styles.educationSection}>
          <ul className={styles.timeline}>
            {lifeEvents.map(({ id, date, title, description }) => (
              <LifeEvent
                key={id}
                date={date}
                title={title}
                description={description}
              />
            ))}
          </ul>
        </div>
        {/* </ScrollAnimation> */}
        <div className={styles.angleContainer}>
          <DoubleAngle subPage="technologies" />
          <DoubleAngle onUp={true} subPage="aboutMe" />
        </div>
      </section>
    </>
  );
};
export default Education;
