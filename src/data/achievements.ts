export interface Achievement {
  id: string;
  title: string;
  description: string;
  category: "hackathon" | "certification" | "academic" | "project";
  icon: string;
  accent: string;
  year: string;
  issuer?: string;
  credential?: string;
}

export const achievements: Achievement[] = [
  {
    id: "1",
    title: "AI Hackathon Participant",
    description:
      "Participated in a 24-hour AI-focused hackathon, building a functional ML product under extreme time pressure and demonstrating rapid prototyping skills.",
    category: "hackathon",
    icon: "Zap",
    accent: "#f59e0b",
    year: "2024",
  },
  {
    id: "2",
    title: "Infosys Certified",
    description:
      "Earned Infosys certification demonstrating proficiency in enterprise software development practices and modern technology solutions.",
    category: "certification",
    icon: "Award",
    accent: "#0ea5e9",
    year: "2024",
    issuer: "Infosys",
  },
  {
    id: "3",
    title: "IBM Certified",
    description:
      "Completed IBM's rigorous certification program in AI and cloud technologies, validating skills in enterprise-grade AI development.",
    category: "certification",
    icon: "BadgeCheck",
    accent: "#3b82f6",
    year: "2024",
    issuer: "IBM",
  },
  {
    id: "4",
    title: "Global Professional Certified",
    description:
      "Achieved global professional certification recognizing competence in software engineering and AI/ML development practices.",
    category: "certification",
    icon: "Globe",
    accent: "#10b981",
    year: "2024",
  },
  {
    id: "5",
    title: "9.3 CGPA — B.Tech AI & ML",
    description:
      "Maintaining exceptional academic performance in a competitive AI & ML program, consistently ranking among top students at Saveetha School of Engineering.",
    category: "academic",
    icon: "GraduationCap",
    accent: "#8b5cf6",
    year: "2022–Present",
    issuer: "Saveetha School of Engineering",
  },
  {
    id: "6",
    title: "5+ End-to-End AI Systems Built",
    description:
      "Independently architected, developed, and deployed multiple complete AI and full-stack products, from ideation through production.",
    category: "project",
    icon: "Layers",
    accent: "#ec4899",
    year: "2023–2024",
  },
];
