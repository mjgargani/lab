import { type CommonProps } from '../../../globals';

export type BgImg = {
  source: string;
  new?: boolean;
  pinned?: boolean;
  stars?: number;
  watchers?: number;
};

export type CardProps = {
  bgImg?: BgImg;
  isLoading?: boolean;
  url?: string;
  title?: string;
  isContent?: boolean;
  style?: React.CSSProperties;
} & CommonProps;
