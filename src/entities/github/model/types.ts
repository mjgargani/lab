export type GitHubProfile = {
  name: string;
  avatar_url: string;
  bio: string;
};

export type GitHubRepoItem = {
  id: number;
  created_at: string;
  name: string;
  stargazers_count: number;
  watchers_count: number;
  description: string;
  html_url: string;
  homepage: string;
  topics: string[];
};

export type Topic = {
  recurrence: number;
  name: string;
};
