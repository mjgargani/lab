import Icon from '@/components/atoms/Icon/index';
import Card from '../../components/molecules/Card';
import { useRepos } from '@/entities/github/model/queries';
import { type GitHubRepoItem } from '@/entities/github/model/types';
import { type CommonProps } from '../../globals';
import imgLoader from '@/shared/utils/imgLoader';
import randomId from '@/shared/utils/randomId';
import Filter from '@/components/atoms/Filter';
import { type FilterItem } from '@/components/atoms/Filter/types';
import useQuery from '@/shared/hooks/useQuery';
import React, { useEffect, useState, useMemo } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { filterList } from '@/shared/utils/filterList';

const sortRepos = (a: GitHubRepoItem, b: GitHubRepoItem) => (a.id < b.id ? 1 : -1); // Newer repos first

const Repos: React.FC<CommonProps> = ({ dataTestId = randomId('page-repos') }) => {
  const { data: repos } = useRepos();
  const topics = useMemo(() => repos ? filterList(repos) : [], [repos]);
  const [filteredRepos, setFilteredRepos] = useState<GitHubRepoItem[]>([]);
  const [filters, setFilters] = useState<FilterItem[]>([]);

  const query = useQuery();
  const navigate = useNavigate();

  useEffect(() => {
    if (topics?.length && !filters.length) {
      const queryFilters = query.get('f')?.split('&') || [];
      
      if (queryFilters.length) {
        setFilters(
          topics.map((topic) => ({
            ...topic,
            selected: queryFilters.includes(topic.name),
          })),
        );
      } else {
        setFilters(topics.map((topic) => ({ ...topic, selected: true })));
      }
    }
  }, [topics, filters.length, query]);

  useEffect(() => {
    const hasRepos = !!repos?.length;
    const hasFilters = !!filters?.length;
    const hasSelection = filters.some((f) => f.selected);

    if (!hasRepos || !hasFilters) return;

    if (!hasSelection && filteredRepos.length) {
      setFilteredRepos([]);
      return;
    }

    if (hasSelection && !filteredRepos.length) {
      const sortedRepos = [
        ...repos!.filter((r) => r.topics!.includes("pinned")).sort(sortRepos),
        ...repos!.filter((r) => !r.topics!.includes("pinned")).sort(sortRepos),
      ];

      const filtered = sortedRepos.filter((repo) =>
        filters.some((filter) => 
          repo.topics?.includes(filter.name) && filter.selected
        ),
      );

      imgLoader(filtered.map((repo) => `https://github.com/mjgargani/${repo?.name}/blob/main/thumbnail.webp?raw=true`))
        .catch((err) => console.error('Failed to preload images:', err))
        .finally(() => setFilteredRepos(filtered));
    }
  }, [filters, repos, filteredRepos.length]);

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    let updatedFilters: FilterItem[];

    if (target.value === 'all') {
      updatedFilters = filters.map((f) => ({ 
        ...f, 
        selected: target.checked 
      }));
      // In @tanstack/react-router, clearing query params correctly
      navigate({ search: {} });
    } else {
      updatedFilters = filters.map((f) =>
        f.name === target.name ? { ...f, selected: !f.selected } : f,
      );
      
      const selectedTechs = updatedFilters
        .filter((f) => f.selected)
        .map((f) => f.name)
        .join('-');
      
      navigate({ search: { f: selectedTechs } });
    }

    setFilters(updatedFilters);
    setFilteredRepos([]); // Trigger re-filtering
  };

  return (
    <div data-testid={dataTestId} className='min-h-full flex flex-col'>
      <Filter
        repoLength={repos?.length ?? 0}
        filteredLength={filteredRepos.length}
        filters={filters}
        handleFilter={handleFilter}
      />
      <div className='flex flex-wrap flex-1 justify-center gap-4'>
        {filters.some((f) => f.selected) ? (
          filteredRepos?.length ? (
            filteredRepos.map((el, i) => (<Card key={`card_${i}`} repo={el} />))
          ) : (
            <span className='m-4'><Icon i={"loading"} /></span>
          )
        ) : (
          <span />
        )}
      </div>
    </div>
  );
};

export default Repos;
