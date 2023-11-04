import React from 'react';
import styles from './Projects.module.scss';
// import ScrollAnimation from 'react-animate-on-scroll';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

const titleButtons = ['GitHub', 'Live Demo'];

type ProjectProps = Project;

const ProjectFC = ({
  id,
  image,
  title,
  description,
  tools,
  gitHub,
  liveDemo,
}: ProjectProps) => {
  const { t } = useTranslation();

  console.log('image :>> ', image);

  return (
    // <ScrollAnimation
    //   animateIn="fadeInDown"
    //   initiallyVisible={false}
    //   duration={1}
    //   delay={100}
    //   animateOnce
    // >
    <div className={styles.projectsItem}>
      <a href={gitHub} target='_blank' rel='noopener noreferrer'>
        <div className={styles.imgContainer}>
          <Image src={image} className={styles.img} alt='project' fill={true} />
          <div className={styles.searchIconContainer}>
            <i className={`${styles.searchIcon} ${'fa fa-search-plus'}`}></i>
          </div>
        </div>
      </a>
      <div className={styles.projectContent}>
        <h4 className={styles.projectTitle}>{title}</h4>
        <p className={styles.projectDescription}>{description}</p>
        <p className={styles.projectTools}>{`${t(
          'projectsSection.tools',
        )} : ${tools}`}</p>

        {id !== 2 && id !== 1 ? (
          <div className={styles.buttonsContainer}>
            <a
              className={styles.buttonItem}
              href={gitHub}
              target='_blank'
              rel='noopener noreferrer'
            >
              {titleButtons[0]}
            </a>
            <a
              className={styles.buttonItem}
              href={liveDemo}
              target='_blank'
              rel='noopener noreferrer'
            >
              {titleButtons[1]}
            </a>
          </div>
        ) : (
          <div className={styles.buttonContainer}>
            <a
              className={styles.buttonItem}
              href={gitHub}
              target='_blank'
              rel='noopener noreferrer'
            >
              {titleButtons[0]}
            </a>
          </div>
        )}
      </div>
    </div>
  );
  // );
};
export default ProjectFC;
