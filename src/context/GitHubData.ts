 
import useLocalStorage from '../hooks/useLocalStorage';
import { gitHubRequest, pinnedRepos } from '../utils/fetch';
import { type TechDetail, type GitHubData, type GitHubProfile, type GitHubRepoItem } from './types';
import { filterList } from '@/utils/filterList';
import { createContext, useEffect, useState } from 'react';

export const GitHubDataContext = createContext<Partial<GitHubData>>({});

type ContextDataFormat = {
  updated?: boolean;
  etagRepos: string;
  etagProfile: string;
  repos: GitHubRepoItem[];
  profile: GitHubProfile;
};

export const useGitHubDataValues = (): GitHubData => {
  const [loading, setLoading] = useState<boolean>(true);
  const [techs, setTechs] = useState<TechDetail[]>([]);

  const [data, setData] = useState<ContextDataFormat>({
    etagRepos: '',
    etagProfile: '',
    repos: [],
    profile: {
      name: 'Rodrigo Gargani Oliveira',
      avatar_url: 'https://avatars.githubusercontent.com/u/46717827?v=4',
      bio: '',
    },
  });

  const contextData = useLocalStorage<ContextDataFormat>();

  useEffect(() => {
    let newData = { updated: false, ...data };

    if (contextData !== false) {
      newData = { updated: false, ...contextData };
    }

    setData(newData);
  }, [contextData]);

  useEffect(() => {
    if (data?.updated === false) {
      Promise.all([
        gitHubRequest<GitHubRepoItem[]>({
          endPoint: 'users/mjgargani/repos',
          etag: { name: 'repos', data: data.etagRepos },
          content: data?.repos,
          callback: pinnedRepos,
        }),
        gitHubRequest<GitHubProfile>({
          endPoint: 'users/mjgargani',
          etag: { name: 'profile', data: data.etagProfile },
          content: data?.profile,
        }),
      ])
        .then((responses) => {
          const etagRepos: string = responses[0]?.newEtag?.trim() ? responses[0].newEtag : data.etagRepos;
          const etagProfile: string = responses[1]?.newEtag?.trim() ? responses[1].newEtag : data.etagProfile;
          const repos: GitHubRepoItem[] = responses[0].body?.length ? responses[0].body : data.repos;
          const profile: GitHubProfile = responses[1].body?.name?.trim() ? responses[1].body : data.profile;

          const newRepos = repos.map((el) =>
            el.name === 'mjgargani'
              ? { ...el, name: 'nodejs-typescript-vite-vitest-reactjs-styledcomp-docker_2023-portfolio' }
              : el,
          );

          const newData = {
            updated: true,
            etagRepos,
            etagProfile,
            repos: newRepos,
            profile,
          };

          setData(newData);

          const repoNames: string[] = newRepos.map((el) => el.name);
          const newTechs = filterList(repoNames);

          setTechs(newTechs);
        })
        .catch((err) => {
          console.error(err);
        });
    }

    if (data?.updated === true) {
      setLoading(false);
    }
  }, [data]);

  return {
    loading,
    profile: data.profile,
    repos: data.repos,
    techs,
  };
};
