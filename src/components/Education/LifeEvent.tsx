import React, { FC } from 'react';
import styles from './Education.module.scss';
import { Variants, motion } from 'framer-motion';

interface LifeEventProps {
  date: string;
  title: string;
  description: string;
  idx: number;
}

const fadeInBottomAnimationVariant: Variants = {
  initial: {
    opacity: 0,
    y: -200,
  },
  animate: (idx: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.2 * idx,
    },
  }),
};

const LifeEvent: FC<LifeEventProps> = ({ date, title, description, idx }) => {
  return (
    <motion.li
      className={styles.event}
      data-date={date}
      variants={fadeInBottomAnimationVariant}
      initial='initial'
      whileInView={'animate'}
      viewport={{
        once: true,
      }}
      custom={idx}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.li>
  );
};
export default LifeEvent;
