import React, { FC } from 'react';
import styles from './Contact.module.scss';

interface ErrorProps {
  touched: boolean;
  name: string;
  content: string;
}

export const Error: FC<ErrorProps> = ({ touched, name, content }) => {
  return (
    <div className={styles.errorContainer}>
      {touched && name && <p className={styles.errorContent}>{content}</p>}
    </div>
  );
};
