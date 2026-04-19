import { achievements } from "../data/achievements";
import { projects } from "../data/projects";
import { skillCategories } from "../data/skills";

const GITHUB_USERNAME = "sanikommu-bhanu";

export type ResumeProject = {
  title: string;
  stack: string;
  bullets: string[];
  link?: string;
};

export type ResumeData = {
  fullName: string;
  roleLine: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  portfolio: string;
  summary: string;
  education: {
    degree: string;
    institution: string;
    period: string;
    score: string;
  }[];
  technicalSkills: string[];
  toolsAndTech: string[];
  softSkills: string[];
  keywords: string[];
  achievements: string[];
  projects: ResumeProject[];
};

type GitHubRepo = {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  topics?: string[];
  fork: boolean;
  archived: boolean;
};

function toTitleCaseFromSlug(slug: string) {
  return slug
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (ch) => ch.toUpperCase());
}

function trimSentence(text: string, max = 145) {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  return `${clean.slice(0, max - 3)}...`;
}

function buildProjectBullets(problem: string, solution: string, features: string[]) {
  const featureLine = features.slice(0, 2).join("; ");
  return [
    trimSentence(`Solved: ${problem}`),
    trimSentence(`Built: ${solution}`),
    trimSentence(`Delivered: ${featureLine}`),
  ];
}

async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=60&type=owner`,
      {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) return [];
    const repos = (await res.json()) as GitHubRepo[];
    return repos.filter((repo) => !repo.fork && !repo.archived);
  } catch {
    return [];
  }
}

function buildAIPlatformProject(repos: GitHubRepo[]): ResumeProject {
  const aiRepo =
    repos.find((repo) => /ai-platform|ai_resume|resume-analyzer|ai/i.test(repo.name)) ??
    repos.find((repo) => /\bai\b|ml|llm|rag|vision/i.test(repo.name));

  if (aiRepo) {
    const stack = [
      aiRepo.language,
      ...(aiRepo.topics ?? []).filter(Boolean).slice(0, 4),
    ]
      .filter(Boolean)
      .join(", ");

    return {
      title: `AI Platform (${toTitleCaseFromSlug(aiRepo.name)})`,
      stack: stack || "Python, TypeScript, LLMs, RAG",
      link: aiRepo.html_url,
      bullets: [
        trimSentence(
          "Solved: Reduced manual, error-prone candidate or data evaluation workflows using AI-assisted analysis and ranking."
        ),
        trimSentence(
          `Built: ${aiRepo.description || "Designed an AI-first platform with modular pipelines, API integration, and production-ready architecture."}`
        ),
        trimSentence(
          "Impact: Improved decision speed and consistency through intelligent scoring, search, and recommendation features."
        ),
      ],
    };
  }

  return {
    title: "AI Platform",
    stack: "Python, TypeScript, LLMs, LangChain, RAG",
    link: `https://github.com/${GITHUB_USERNAME}`,
    bullets: [
      "Solved: Automated high-effort manual analysis workflows with AI-driven evaluation and recommendations.",
      "Built: Production-focused platform with LLM pipelines, retrieval-augmented context, and API-integrated UX.",
      "Impact: Enabled faster, more consistent outcomes for decision-making and candidate profiling.",
    ],
  };
}

function buildCoreProjects(): ResumeProject[] {
  const preferredOrder = [
    "Rural Innovation Hub",
    "CinAI",
    "CivicLens",
    "Fairy Dairy",
    "Real-Time Coding Interview Platform",
  ];

  return preferredOrder
    .map((title) => projects.find((project) => project.title === title))
    .filter((project): project is NonNullable<typeof project> => Boolean(project))
    .map((project) => ({
      title: project.title,
      stack: project.tech.slice(0, 5).join(", "),
      link: project.github,
      bullets: buildProjectBullets(project.problem, project.solution, project.features),
    }));
}

export async function getResumeData(): Promise<ResumeData> {
  const repos = await fetchGitHubRepos();
  const aiPlatform = buildAIPlatformProject(repos);
  const coreProjects = buildCoreProjects();

  const technicalSkills = skillCategories
    .flatMap((category) => category.skills.map((skill) => skill.name))
    .filter((value, index, self) => self.indexOf(value) === index);

  const toolsAndTech = [
    "Next.js",
    "React",
    "TypeScript",
    "Python",
    "Node.js",
    "FastAPI",
    "MongoDB",
    "PostgreSQL",
    "Redis",
    "Docker",
    "Git",
    "Vercel",
  ];

  const achievementLines = achievements
    .filter((item) => item.category === "certification" || item.category === "academic" || item.category === "hackathon")
    .slice(0, 5)
    .map((item) => `${item.title}${item.issuer ? ` (${item.issuer})` : ""}`);

  return {
    fullName: "Sanikommu Bhanu",
    roleLine: "Full Stack Developer | UI/UX Designer | App Developer | AI/ML Engineer",
    location: "India (Open to Remote / Hybrid / On-Site)",
    email: "sanikommu.bhanu@gmail.com",
    linkedin: "https://linkedin.com/in/Bhanu-Sanikommu",
    github: "https://github.com/sanikommu-bhanu",
    portfolio: "https://bhanusanikommu.vercel.app",
    summary:
      "Results-driven B.Tech AI & ML student with 9.3 CGPA, building production-grade full-stack and AI products end-to-end. Strong in modern frontend architecture, backend APIs, and intelligent systems with a product-first mindset and recruiter-ready communication.",
    education: [
      {
        degree: "B.Tech - Artificial Intelligence & Machine Learning",
        institution: "Saveetha School of Engineering, Chennai",
        period: "2022-2026",
        score: "CGPA: 9.3/10",
      },
      {
        degree: "Intermediate - MPC",
        institution: "Sri Chaitanya Junior College",
        period: "2020-2022",
        score: "96%",
      },
    ],
    technicalSkills,
    toolsAndTech,
    softSkills: [
      "Product Thinking",
      "Problem Solving",
      "Communication",
      "Collaboration",
      "Ownership",
      "Rapid Learning",
    ],
    keywords: [
      "Software Engineering Intern",
      "Full Stack Development",
      "AI/ML Engineer",
      "System Design",
      "Data Structures and Algorithms",
      "REST APIs",
      "Cloud Deployment",
      "Scalable Web Applications",
    ],
    achievements: achievementLines,
    projects: [coreProjects[0], coreProjects[1], coreProjects[2], coreProjects[3], aiPlatform, coreProjects[4]].filter(
      Boolean
    ) as ResumeProject[],
  };
}
