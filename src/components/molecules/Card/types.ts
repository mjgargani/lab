import { GitHubRepoItem } from '@/context/types';
import { type CommonProps } from '../../../globals';

export type BgImg = {
  source: string;
  new?: boolean;
  pinned?: boolean;
  stars?: number;
  watchers?: number;
};

export type CardProps = {
  repo?: GitHubRepoItem
} & CommonProps;
