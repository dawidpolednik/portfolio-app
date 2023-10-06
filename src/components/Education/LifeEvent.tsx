import React, { FC } from 'react';
import styles from './Education.module.scss';

interface LifeEventProps {
  date: string;
  title: string;
  description: string;
}

const LifeEvent: FC<LifeEventProps> = ({ date, title, description }) => (
  <li className={styles.event} data-date={date}>
    <h3>{title}</h3>
    <p>{description}</p>
  </li>
);
export default LifeEvent;
