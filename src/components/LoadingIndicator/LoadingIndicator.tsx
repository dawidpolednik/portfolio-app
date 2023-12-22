import { FC } from 'react';
import styles from './LoadingIndicator.module.scss';

export interface LoadingIndicatorProps {
  visible: boolean;
  className?: string;
}

export const LoadingIndicator: FC<LoadingIndicatorProps> = ({
  visible,
  className = '',
}) => {
  return (
    <div
      className={`${styles.spinnerWrapper} ${
        visible ? styles.visible : ''
      } ${className}`}
    >
      <div className={styles.spinner} />
    </div>
  );
};
