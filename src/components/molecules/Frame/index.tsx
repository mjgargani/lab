// import { GitHubDataContext } from '../../../context/GitHubData';
// import bgMov from '../../../styles/utils/bgMov';
// import Potion from '../../atoms/Potion';
// import { Container, Shadow, Tiles } from './styles';
import React, { useContext, useMemo } from 'react';
import FrameWrapper from './wrapper';
import FrameTiles from './tiles';
import FrameShadow from './shadow';
import FramePotion from './potion';
import styles from './Frame.module.css';

const Frame: React.FC = () => {
  // const { loading } = useContext(GitHubDataContext);
  // const calcBgMov = useMemo(bgMov, []);

  return (<div className={styles.frame}>
    <FrameWrapper />
    <FrameTiles />
    <FrameShadow />
    <FramePotion />
  </ div>);
};

export default Frame;
