import { AnimatedText } from '@/components/AnimatedText/AnimatedText';
import styles from './Education.module.scss';
import { useTranslation } from 'next-i18next';
import { NavigationSectionName } from '@/models/NavigationSectionName';
import { LifeEvent as ILifeEvent } from '@/models/LifeEvent';
import LifeEvent from './LifeEvent';

const sectionName: NavigationSectionName = 'education';

const Education = () => {
  const { t } = useTranslation();

  const lifeEvents: ILifeEvent[] = [
    {
      date: t('educationSection.lifeEvents.currentWork.time'),
      title: t('educationSection.lifeEvents.currentWork.header'),
      description: t('educationSection.lifeEvents.currentWork.description'),
    },
    {
      date: t('educationSection.lifeEvents.secondWork.time'),
      title: t('educationSection.lifeEvents.secondWork.header'),
      description: t('educationSection.lifeEvents.secondWork.description'),
    },
    {
      date: t('educationSection.lifeEvents.firstWork.time'),
      title: t('educationSection.lifeEvents.firstWork.header'),
      description: t('educationSection.lifeEvents.firstWork.description'),
    },
    {
      date: t('educationSection.lifeEvents.masterDegree.time'),
      title: t('educationSection.lifeEvents.masterDegree.header'),
      description: t('educationSection.lifeEvents.masterDegree.description'),
    },
    {
      date: t('educationSection.lifeEvents.internship.time'),
      title: t('educationSection.lifeEvents.internship.header'),
      description: t('educationSection.lifeEvents.internship.description'),
    },
    {
      date: t('educationSection.lifeEvents.academy.time'),
      title: t('educationSection.lifeEvents.academy.header'),
      description: t('educationSection.lifeEvents.academy.description'),
    },
    {
      date: t('educationSection.lifeEvents.engineer.time'),
      title: t('educationSection.lifeEvents.engineer.header'),
      description: t('educationSection.lifeEvents.engineer.description'),
    },
  ];

  return (
    <>
      <section className={styles.container} id={sectionName}>
        <div className={styles.educationHeader}>
          <AnimatedText
            text={t('educationSection.header')}
            className={styles.educationTitle}
            el='h2'
          />
        </div>

        <div className={styles.educationSection}>
          <ul className={styles.timeline}>
            {lifeEvents.map(({ date, title, description }, idx) => (
              <LifeEvent
                key={`${title}-${idx}`}
                date={date}
                title={title}
                description={description}
                idx={idx}
              />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};
export default Education;
