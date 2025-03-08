import randomId from '../../../utils/randomId';
import styles from './Frame.module.css';

const FrameWrapper: React.FC = () => {
  const page = '/';
  const gradColors = {
    '/': ['#00137f', '#0095ff'],
    '/projects': ['#0095ff', '#1d8700'],
    '/about': ['#1d8700', '#00137f'],
  };

  const colors = gradColors[page] || gradColors['/'];

  return (
    <div
      data-testid={randomId('frame-wrapper')}
      className={`${styles.frame__wrapper} z-[-50] animate-bgRotate`}
      style={{
        backgroundImage: `linear-gradient(0, ${colors[0]}, ${colors[1]})`,
      }}
    />
  );
};

export default FrameWrapper;
