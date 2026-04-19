"use client";

import { useState, useEffect } from "react";

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  updated_at: string;
  created_at: string;
  size: number;
  open_issues_count: number;
  fork: boolean;
  archived: boolean;
  visibility: string;
}

export interface GitHubUser {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  location: string;
}

const GITHUB_USERNAME = "sanikommu-bhanu";

export function useGitHubRepos() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [reposRes, userRes] = await Promise.all([
          fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=30&type=owner`,
            {
              headers: {
                Accept: "application/vnd.github.v3+json",
              },
              next: { revalidate: 3600 },
            }
          ),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
            headers: {
              Accept: "application/vnd.github.v3+json",
            },
            next: { revalidate: 3600 },
          }),
        ]);

        if (!reposRes.ok) throw new Error("Failed to fetch repositories");
        if (!userRes.ok) throw new Error("Failed to fetch user");

        const reposData: GitHubRepo[] = await reposRes.json();
        const userData: GitHubUser = await userRes.json();

        // Filter non-fork, non-archived repos
        const filtered = reposData
          .filter((repo) => !repo.fork && !repo.archived)
          .sort((a, b) => b.stargazers_count - a.stargazers_count);

        setRepos(filtered);
        setUser(userData);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
        // Set fallback data
        setRepos(FALLBACK_REPOS);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { repos, user, loading, error };
}

// Fallback repos in case API fails
const FALLBACK_REPOS: GitHubRepo[] = [
  {
    id: 1,
    name: "ai-crop-disease-detection",
    full_name: `${GITHUB_USERNAME}/ai-crop-disease-detection`,
    description: "Computer vision platform for real-time crop disease detection using TensorFlow and FastAPI",
    html_url: `https://github.com/${GITHUB_USERNAME}`,
    homepage: null,
    language: "Python",
    stargazers_count: 0,
    forks_count: 0,
    topics: ["python", "tensorflow", "computer-vision", "fastapi", "react"],
    updated_at: new Date().toISOString(),
    created_at: new Date().toISOString(),
    size: 0,
    open_issues_count: 0,
    fork: false,
    archived: false,
    visibility: "public",
  },
  {
    id: 2,
    name: "ai-resume-analyzer",
    full_name: `${GITHUB_USERNAME}/ai-resume-analyzer`,
    description: "LLM-powered resume analysis and ATS optimization platform using LangChain and OpenAI",
    html_url: `https://github.com/${GITHUB_USERNAME}`,
    homepage: null,
    language: "TypeScript",
    stargazers_count: 0,
    forks_count: 0,
    topics: ["nextjs", "langchain", "openai", "typescript", "rag"],
    updated_at: new Date().toISOString(),
    created_at: new Date().toISOString(),
    size: 0,
    open_issues_count: 0,
    fork: false,
    archived: false,
    visibility: "public",
  },
  {
    id: 3,
    name: "github-analytics-dashboard",
    full_name: `${GITHUB_USERNAME}/github-analytics-dashboard`,
    description: "Comprehensive developer analytics dashboard powered by GitHub GraphQL API",
    html_url: `https://github.com/${GITHUB_USERNAME}`,
    homepage: null,
    language: "TypeScript",
    stargazers_count: 0,
    forks_count: 0,
    topics: ["nextjs", "typescript", "github-api", "recharts", "analytics"],
    updated_at: new Date().toISOString(),
    created_at: new Date().toISOString(),
    size: 0,
    open_issues_count: 0,
    fork: false,
    archived: false,
    visibility: "public",
  },
];

export const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Java: "#b07219",
  "C++": "#f34b7d",
  Rust: "#dea584",
  Go: "#00ADD8",
  Ruby: "#701516",
  Swift: "#F05138",
  Kotlin: "#A97BFF",
  Dart: "#00B4AB",
  Shell: "#89e051",
  Jupyter: "#DA5B0B",
};
