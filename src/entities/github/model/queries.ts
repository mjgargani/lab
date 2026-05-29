import { useQuery } from '@tanstack/react-query';
import { fetchProfile, fetchRepos } from '../api/githubApi';

const DEFAULT_PROFILE = {
  name: 'Rodrigo Gargani Oliveira',
  avatar_url: 'https://avatars.githubusercontent.com/u/46717827?v=4',
  bio: "If you can read this, GitHub API is not reachable :'(",
};

export const useProfile = () => {
  return useQuery({
    queryKey: ['githubProfile'],
    queryFn: fetchProfile,
    initialData: DEFAULT_PROFILE, // Used as a fallback if caching isn't there yet
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });
};

export const useRepos = () => {
  return useQuery({
    queryKey: ['githubRepos'],
    queryFn: fetchRepos,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });
};
