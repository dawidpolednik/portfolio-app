import { FC, SyntheticEvent } from 'react';
import styles from './Contact.module.scss';
import { ErrorMessage } from '@/components/Contact/ErrorMessage';

interface TextAreaProps {
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: SyntheticEvent) => void;
  errorMessage?: string;
}

const TextArea: FC<TextAreaProps> = ({
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
      <div className={`${styles.textareaWrapper}`}>
        <textarea
          name={name}
          className={styles.textarea}
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
