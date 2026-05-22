import { describe, it, expect, vi } from "vitest";
import { fetchProfile, fetchRepos } from "../api/githubApi";

global.fetch = vi.fn();

describe("GitHub API model", () => {
  it("fetchProfile calls correct url", async () => {
    (global.fetch as ReturnType<typeof vi.fn>).mockResolvedValue({
      ok: true,
      json: async () => ({ name: "Test" }),
    });

    const data = await fetchProfile();
    expect(global.fetch).toHaveBeenCalledWith(
      "https://api.github.com/users/mjgargani",
    );
    expect(data.name).toBe("Test");
  });

  it("fetchRepos calls correct url", async () => {
    (global.fetch as ReturnType<typeof vi.fn>).mockResolvedValue({
      ok: true,
      json: async () => [{ name: "Repo1" }],
    });

    const data = await fetchRepos();
    expect(global.fetch).toHaveBeenCalledWith(
      "https://api.github.com/users/mjgargani/repos?per_page=100",
    );
    expect(data[0].name).toBe("Repo1");
  });
});
