import { type CommonProps } from '../../../globals';

export type FilterItem = {
  selected: boolean;
  name: string;
  recurrence: number;
};

export type FilterProps = {
  repoLength: number;
  filteredLength: number;
  filters: FilterItem[];
  handleFilter: (event: React.ChangeEvent<HTMLInputElement>) => void;
} & CommonProps;
