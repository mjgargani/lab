import { GitHubRepoItem, type Topic } from "@/entities/github/model/types";

// This function will runs through a list of repository names and extract technology tags
export function filterList(repos: GitHubRepoItem[]): Topic[] {
  const list: Topic[] = [];

  for (const repo of repos) {
    const topics = repo.topics || [];
    for (const topic of topics) {
      const existingTopic = list.find((item) => item.name === topic);
      if (existingTopic) {
        existingTopic.recurrence += 1;
      } else {
        list.push({ name: topic, recurrence: 1 });
      }
    }
  }

  return list.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }

    if (a.name > b.name) {
      return 1;
    }

    return 0;
  });
}
