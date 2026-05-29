import { type CommonProps, type PageEndPoints } from '../../../globals';

export type NavigationProps = {
  isHome?: boolean;
  page: PageEndPoints;
} & CommonProps;
