import React, { FC, SyntheticEvent } from 'react';

import style from './Contact.module.scss';

interface TextAreaProps {
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: SyntheticEvent) => void;
}

const TextArea: FC<TextAreaProps> = ({
  name,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <>
      <label className={style.label} htmlFor={name}></label>
      <div className={`${style.col}`}>
        <textarea
          name={name}
          className={style.effect}
          rows={15}
          cols={50}
          placeholder={placeholder}
          value={value}
          id={name}
          onChange={onChange}
          style={{ resize: 'none' }}
        ></textarea>
      </div>
    </>
  );
};

export default TextArea;
