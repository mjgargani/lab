 
import { type GitHubRepoItem } from '../context/types';
import { StatusCodes } from 'http-status-codes';

type GitHubRequest<T> = {
  endPoint: string;
  etag: {
    name: string;
    data?: string;
  };
  content?: T;
  callback?: (response: any) => Promise<T>;
};

export async function gitHubRequest<T>({ endPoint, etag, content, callback }: GitHubRequest<T>): Promise<
  Partial<{
    newEtag: string;
    body: T;
  }>
> {
  const isInLocalStorage = Boolean(etag.data) && Boolean(content);
  return fetch(`https://api.github.com/${endPoint}`, {
    headers: { 'If-None-Match': isInLocalStorage ? etag.data! : '' },
  })
    .then(async (res) => {
      const newEtag = res.headers.get('etag') ?? '';
      localStorage.setItem(`etag-${etag.name}`, newEtag);

      if ([StatusCodes.NOT_MODIFIED, StatusCodes.FORBIDDEN].includes(res.status)) return { newEtag };

      const response = (await res.json()) as T;
      if (!response) return { newEtag };

      const body = callback ? await callback(response) : response;
      localStorage.setItem(etag.name, JSON.stringify(body));

      return { newEtag, body };
    })
    .catch((e) => ({}));
}

// Source: https://github.com/egoist/gh-pinned-repos
export type PinnedRepos = {
  repo: string;
};

export const pinnedRepos = async (repos: GitHubRepoItem[]): Promise<GitHubRepoItem[]> =>
  fetch('https://gh-pinned-repos.egoist.dev/?username=mjgargani')
    .then(async (response) => response.json() as Promise<PinnedRepos[]>)
    .then((pinnedRepos): string[] => (pinnedRepos.length ? pinnedRepos : [{ repo: 'mjgargani' }]).map((el) => el.repo))
    .then((pinnedNames) =>
      repos.map((el) => ({
        id: el.id,
        created_at: el.created_at,
        name: el.name,
        new: Date.now() - new Date(el.created_at).getTime() <= 15778800000,
        pinned: pinnedNames.includes(el.name),
        stargazers_count: el.stargazers_count,
        watchers_count: el.watchers_count,
        description: el.description,
        html_url: el.html_url,
        thumbnail: `https://raw.githubusercontent.com/mjgargani/${el.name}/main/thumbnail.webp`,
        homepage: el.homepage,
      })),
    );
