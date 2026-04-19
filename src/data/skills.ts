export interface Skill {
  name: string;
  level: "expert" | "advanced" | "intermediate";
  icon?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  accent: string;
  skills: Skill[];
  description: string;
}

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Languages",
    icon: "Code2",
    accent: "#0ea5e9",
    description: "Core programming languages I build with",
    skills: [
      { name: "Python", level: "expert" },
      { name: "TypeScript", level: "advanced" },
      { name: "JavaScript", level: "advanced" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    icon: "Monitor",
    accent: "#06b6d4",
    description: "Modern frontend frameworks and styling",
    skills: [
      { name: "Next.js", level: "advanced" },
      { name: "React", level: "advanced" },
      { name: "Tailwind CSS", level: "expert" },
      { name: "Framer Motion", level: "advanced" },
      { name: "HTML5", level: "expert" },
      { name: "CSS3", level: "expert" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: "Server",
    accent: "#10b981",
    description: "Server-side architecture and APIs",
    skills: [
      { name: "Node.js", level: "advanced" },
      { name: "FastAPI", level: "advanced" },
      { name: "REST APIs", level: "expert" },
      { name: "Auth Systems", level: "advanced" },
      { name: "WebSockets", level: "intermediate" },
      { name: "Docker", level: "intermediate" },
    ],
  },
  {
    id: "aiml",
    title: "AI / ML",
    icon: "Brain",
    accent: "#8b5cf6",
    description: "Machine learning and intelligent systems",
    skills: [
      { name: "Machine Learning", level: "advanced" },
      { name: "Computer Vision", level: "advanced" },
      { name: "NLP", level: "advanced" },
      { name: "LLM Apps", level: "advanced" },
      { name: "RAG Systems", level: "intermediate" },
      { name: "TensorFlow", level: "advanced" },
      { name: "scikit-learn", level: "advanced" },
      { name: "OpenCV", level: "advanced" },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    icon: "Database",
    accent: "#f59e0b",
    description: "Data storage and retrieval systems",
    skills: [
      { name: "MongoDB", level: "advanced" },
      { name: "PostgreSQL", level: "intermediate" },
      { name: "Redis", level: "intermediate" },
      { name: "Pinecone", level: "intermediate" },
    ],
  },
  {
    id: "tools",
    title: "Tools & DevOps",
    icon: "Wrench",
    accent: "#ef4444",
    description: "Development tools and workflows",
    skills: [
      { name: "Git", level: "expert" },
      { name: "GitHub", level: "expert" },
      { name: "VS Code", level: "expert" },
      { name: "Jupyter", level: "advanced" },
      { name: "Vercel", level: "advanced" },
      { name: "Postman", level: "advanced" },
    ],
  },
  {
    id: "design",
    title: "Design",
    icon: "Palette",
    accent: "#ec4899",
    description: "UI/UX and visual design systems",
    skills: [
      { name: "UI/UX Design", level: "advanced" },
      { name: "Product Design", level: "advanced" },
      { name: "3D Design", level: "intermediate" },
      { name: "Figma", level: "advanced" },
      { name: "Visual Design", level: "advanced" },
    ],
  },
];

export const coreStats = [
  { value: "9.3", label: "CGPA", suffix: "" },
  { value: "5", label: "AI/ML Projects", suffix: "+" },
  { value: "10", label: "Tech Skills", suffix: "+" },
  { value: "3", label: "Certifications", suffix: "" },
];
