import React, { useRef } from 'react';
import styles from './Projects.module.scss';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { useScroll, motion, useTransform } from 'framer-motion';
import { Project } from '@/models/Project';

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

  const projectWrapperRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: projectWrapperRef,
    offset: ['0 1', '0.5 1'],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.4, 1]);

  return (
    <motion.div
      className={styles.projectsItem}
      ref={projectWrapperRef}
      style={{
        scale: scaleProgress,
        opacity: scrollYProgress,
      }}
    >
      <div className={styles.imgContainer}>
        <Image src={image} className={styles.img} alt={title} fill={true} />
      </div>

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
    </motion.div>
  );
};
export default ProjectFC;
