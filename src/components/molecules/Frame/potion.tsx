import React from 'react';
import potion from '../../../assets/potion.webp';
import randomId from '../../../utils/randomId';
import styles from './Frame.module.css';

const FramePotion: React.FC<{ transparent?: boolean }> = ({ transparent = false }) => {
  const opacityValue = transparent ? 0.1 : 1;

  return (
    <div
      data-testid={randomId('frame-potion')}
      className={`${styles.frame__potion} z-[-20] animate-potion`}
      style={{
        backgroundImage: `url(${potion})`,
        opacity: opacityValue,
      }}
    />
  );
};

export default FramePotion;
