import { StatusCodes } from 'http-status-codes';

type GitHubRequest<T> = {
  endPoint: string; // GitHub API endpoint (e.g., 'users/username/repos' or 'users/username')
  etag: {
    name: string; // Key for storing in localStorage
    data?: string; // Previous ETag value for cache validation
  };
  content?: T; // Cached content to return if not modified
  callback?: (response: T) => T | Promise<T>; // Optional transform function
};

export async function gitHubRequest<T>({ 
  endPoint, 
  etag, 
  content, 
  callback 
}: GitHubRequest<T>): Promise<Partial<{
  newEtag: string;
  body: T;
}>> {
  const isInLocalStorage = Boolean(etag.data) && Boolean(content);
  
  return fetch(`https://api.github.com/${endPoint}`, {
    headers: { 
      'If-None-Match': isInLocalStorage ? etag.data! : '' 
    },
  })
    .then(async (res) => {
      const newEtag = res.headers.get('etag') ?? '';
      localStorage.setItem(`etag-${etag.name}`, newEtag);

      if ([StatusCodes.NOT_MODIFIED, StatusCodes.FORBIDDEN].includes(res.status)) {
        return { newEtag };
      }

      const response = (await res.json()) as T;
      if (!response) return { newEtag };

      const body = callback ? await callback(response) : response;
      
      localStorage.setItem(etag.name, JSON.stringify(body));


      return { newEtag, body };
    })
    .catch(() => {
      return {};
    });
}
