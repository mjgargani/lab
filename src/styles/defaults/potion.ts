 
import { type AlphaRange, type PageEndPoints } from '../../globals';

export type PotionStyles = {
  [key in PageEndPoints]: {
    opacity: AlphaRange;
  };
};

const potionStyles: PotionStyles = {
  '/': {
    opacity: 1,
  },
  '/projects': {
    opacity: 0.1,
  },
  '/about': {
    opacity: 0.1,
  },
};

export default potionStyles;
