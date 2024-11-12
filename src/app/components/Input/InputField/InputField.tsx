import React from 'react';
import { useField } from 'formik';
import styles from './InputField.module.scss';

interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  name: string;
}

const InputField: React.FC<InputFieldProps> = ({ type, ...props }) => {
  const [field] = useField(props);

  return (
    <input
      {...field}
      placeholder=""
      {...props}
      className={styles.input}
      type={type}
      onBlur={() => {}}
      autoComplete="off"
    />
  );
};

export default InputField;
