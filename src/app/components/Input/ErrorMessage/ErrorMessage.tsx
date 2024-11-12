import React from 'react';
import styles from './ErrorMessage.module.scss';

interface ErrorMessageProps {
  error: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
  return <span className={styles.error}>{error}</span>;
};

export default ErrorMessage;
