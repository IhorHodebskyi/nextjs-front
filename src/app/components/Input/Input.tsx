'use client';

import { useState } from 'react';
import ToggleButton from './ToggleButton/ToggleButton';
import InputField from './InputField/InputField';
import SuccessMessage from './SuccessMessage/SuccessMessage';
import { useField } from 'formik';
import styles from './Input.module.scss';
import ErrorMessage from './ErrorMessage/ErrorMessage';

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  name: string;
  hideToggle?: boolean;
}

const Input: React.FC<InputProps> = ({ hideToggle, type, ...props }) => {
  const [field, meta] = useField(props.name);
  const [hide, setHide] = useState(true);

  const handleToggleHide = () => {
    setHide(!hide);
  };

  const inputType =
    type === 'password' && hideToggle ? (hide ? 'password' : 'text') : type;

  return (
    <>
      <div className={styles.group}>
        {type === 'password' && hideToggle && (
          <ToggleButton onClick={handleToggleHide} hide={hide} />
        )}
        <InputField {...field} type={inputType} />
        {meta.touched && !meta.error && <SuccessMessage />}
        {meta.touched && meta.error && <ErrorMessage error={meta.error} />}
        <label htmlFor={props.name} className={styles.label}>
          {props.title}
        </label>
      </div>
    </>
  );
};

export default Input;
