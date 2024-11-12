import React from 'react';
import styles from './ToggleButton.module.scss';

interface ToggleButtonProps {
  onClick: () => void;
  hide: boolean;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ onClick, hide }) => {
  return (
    <button type="button" onClick={onClick} className={styles.buttonHide}>
      <svg width={24} height={24}>
        <use href="/img/sprite.svg#icon-hide"></use>
      </svg>
      {hide ? 'Show' : 'Hide'}
    </button>
  );
};

export default ToggleButton;
