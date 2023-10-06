import React, { FC, SyntheticEvent } from 'react';
import style from './Contact.module.scss';

interface InputProps {
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: SyntheticEvent) => void;
}

const Input: FC<InputProps> = ({ name, placeholder, value, onChange }) => {
  return (
    <>
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
        <span className={style.focusBorder}>
          <i />
        </span>
      </div>
    </>
  );
};

export default Input;
