import React from 'react';
import randomId from '../../../utils/randomId';
import styles from './Frame.module.css';

const FrameShadow: React.FC = () => {
  // const shadowOpacity = `opacity-${Math.round(100 * (page === '/about' ? 0.7 : 0.5))}`;
  const shadowOpacity = `opacity-50`;

  return (
    <div
      data-testid={randomId('frame-shadow')}
      className={`${styles.frame__shadow} z-[-30] pointer-events-none  ${shadowOpacity} animate-fadeIn`}
    />
  );
};

export default FrameShadow;
