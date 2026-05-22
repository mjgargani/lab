import React from 'react';
import FrameWrapper from './wrapper';
import FrameTiles from './tiles';
import FrameShadow from './shadow';
import FramePotion from './potion';
import styles from './Frame.module.css';

const Frame: React.FC = () => {
  return (<div className={styles.frame}>
    <FrameWrapper />
    <FrameTiles />
    <FrameShadow />
    <FramePotion />
  </ div>);
};

export default Frame;
