import { GitHubProfile, GitHubRepoItem } from './types';

const GITHUB_USERNAME = 'mjgargani';

export const fetchProfile = async (): Promise<GitHubProfile> => {
  const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const fetchRepos = async (): Promise<GitHubRepoItem[]> => {
  const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};
