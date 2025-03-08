import React from 'react';
import tile from '../../../assets/tile.webp';
import randomId from '@/utils/randomId';
import styles from './Frame.module.css';

const FrameTiles: React.FC = () => {
  return (
    <div
      data-testid={randomId('frame-wrapper')}
      className={`${styles.frame__tiles} z-[-40] bg-repeat opacity-[0.015] animate-bgMove`}
      style={{
        backgroundImage: `url(${tile})`,
      }}
    />
  );
};

export default FrameTiles;
