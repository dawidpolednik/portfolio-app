import React, { FC, SyntheticEvent } from 'react';
import style from './Contact.module.scss';
import { ErrorMessage } from '@/components/Contact/ErrorMessage';
import { useTranslation } from 'next-i18next';
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
      <label className={style.label} htmlFor={name}></label>
      <div className={`${style.col}`}>
        <input
          name={name}
          id={name}
          className={`${style.formField} ${style.effect}`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <span className='focus-bg' />
      </div>
    </>
  );
};

export default Input;
