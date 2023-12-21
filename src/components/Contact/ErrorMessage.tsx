import { FC } from 'react';
import styles from './Contact.module.scss';

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className={styles.errorContainer}>
      {<p className={styles.errorContent}>{message}</p>}
    </div>
  );
};
