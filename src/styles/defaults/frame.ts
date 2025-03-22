 
import { type AlphaRange, type Color, type PageEndPoints } from '../../globals';

export type FrameStyles = {
  [key in PageEndPoints]: {
    color: [Color, Color];
    shadow: AlphaRange;
  };
};

const frameStyles: FrameStyles = {
  '/': {
    color: ['#0422ce', '#873ea1'],
    shadow: 0.5,
  },
  '/projects': {
    color: ['#636311', '#417883'],
    shadow: 0.9,
  },
  '/about': {
    color: ['#690808', '#64c773'],
    shadow: 0.7,
  },
};

export default frameStyles;
