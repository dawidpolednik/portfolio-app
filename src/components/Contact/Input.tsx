import React, { FC, SyntheticEvent } from 'react';
import styles from './Contact.module.scss';
import { ErrorMessage } from '@/components/Contact/ErrorMessage';
interface InputProps {
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: SyntheticEvent) => void;
  errorMessage?: string;
}

const Input: FC<InputProps> = ({
  name,
  placeholder,
  value,
  onChange,
  errorMessage,
}) => {
  return (
    <>
      {errorMessage && <ErrorMessage message={errorMessage} />}
      <label className={styles.label} htmlFor={name}></label>
      <div className={`${styles.inputWrapper}`}>
        <input
          name={name}
          id={name}
          className={`${styles.input}`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default Input;
