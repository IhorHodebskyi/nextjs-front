import React from 'react';
import styles from './SuccessMessage.module.scss';

const SuccessMessage: React.FC = () => {
  return <span className={styles.successMessage}>Looks good!</span>;
};

export default SuccessMessage;
