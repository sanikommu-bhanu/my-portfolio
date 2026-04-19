export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  tech: string[];
  features: string[];
  category: "featured" | "experimental";
  status: "live" | "development" | "completed";
  github: string;
  demo?: string;
  image: string;
  accent: string;
  year: string;
  challenges?: string;
  learnings?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "rural-innovation-hub",
    title: "Rural Innovation Hub",
    tagline: "A practical digital platform for rural problem-solving and innovation",
    description:
      "A full-stack platform designed to support rural communities through innovation-driven solutions, easy information access, and digital-first workflows tailored to real field needs.",
    problem:
      "Rural communities often struggle to access structured information, support systems, and innovation opportunities through one reliable, easy-to-use platform.",
    solution:
      "Built a responsive web application that centralizes resources, showcases initiatives, and provides accessible digital tools for rural users and stakeholders.",
    tech: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Node.js", "MongoDB"],
    features: [
      "Community-focused initiative showcase",
      "Simple, mobile-friendly UI for rural users",
      "Resource and opportunity discovery modules",
      "Scalable full-stack architecture",
      "Fast load performance and responsive design",
    ],
    category: "featured",
    status: "live",
    github: "https://github.com/sanikommu-bhanu",
    demo: "https://rural-innovation-hub.vercel.app",
    image: "/projects/crop-disease.svg",
    accent: "#10b981",
    year: "2024",
    challenges:
      "Designing for diverse users and constrained environments required careful UX simplification and performance-first frontend decisions.",
    learnings:
      "Learned how to align product UX with real rural workflows while maintaining a modern, maintainable codebase.",
  },
  {
    id: "2",
    slug: "cinai-movie-platform",
    title: "CinAI",
    tagline: "An AI-powered movie discovery and recommendation platform",
    description:
      "A smart movie platform that blends modern UI with AI-assisted recommendations, helping users discover films faster with personalized relevance.",
    problem:
      "Movie discovery is often noisy and generic. Users spend too much time scrolling and too little time finding films that match their taste.",
    solution:
      "Built an AI-enhanced recommendation and filtering experience with smooth interactions, rich metadata, and a clean, cinematic presentation.",
    tech: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Framer Motion", "API Integration"],
    features: [
      "AI-assisted recommendation flow",
      "Category and mood-based discovery",
      "Fast search and filtering",
      "Responsive cinematic UI",
      "Optimized content rendering",
    ],
    category: "featured",
    status: "live",
    github: "https://github.com/sanikommu-bhanu",
    demo: "https://cinai-movie-platform.vercel.app/",
    image: "/projects/resume-analyzer.svg",
    accent: "#0ea5e9",
    year: "2024",
    challenges:
      "Balancing dynamic, data-rich interfaces with speed and visual polish required focused frontend optimization.",
    learnings:
      "Strengthened skills in recommendation UX, API data modeling, and building product-grade media interfaces.",
  },
  {
    id: "3",
    slug: "civiclens-app",
    title: "CivicLens",
    tagline: "A civic-tech platform for clearer public issue reporting and visibility",
    description:
      "A civic-focused web app built to improve transparency and public participation by organizing local issues into an accessible, trackable digital workflow.",
    problem:
      "People often have no clear, easy channel to report and track civic problems in their locality, which reduces participation and accountability.",
    solution:
      "Created a streamlined civic reporting and tracking interface that makes issue visibility and status updates understandable for all users.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Database Integration"],
    features: [
      "Structured civic issue reporting",
      "Status visibility and tracking",
      "User-friendly public dashboard",
      "Responsive design for mobile access",
      "Clean data presentation for clarity",
    ],
    category: "featured",
    status: "live",
    github: "https://github.com/sanikommu-bhanu",
    demo: "https://civiclens-app.vercel.app/",
    image: "/projects/github-analytics.svg",
    accent: "#8b5cf6",
    year: "2024",
    challenges:
      "Creating a clear civic workflow that is simple for citizens but still structured enough for meaningful tracking.",
    learnings:
      "Improved product thinking for social-impact apps and gained stronger experience in transparency-first interface design.",
  },
  {
    id: "4",
    slug: "fairy-dairy",
    title: "Fairy Dairy",
    tagline: "A modern dairy platform for operations, visibility, and customer trust",
    description:
      "A polished dairy-focused digital platform that supports core workflows, product visibility, and brand presentation with a fast, responsive experience.",
    problem:
      "Dairy businesses often rely on fragmented or outdated digital experiences that make operations and communication less efficient.",
    solution:
      "Built a user-friendly, brand-forward platform with clear workflows and responsive design to improve daily usability and customer engagement.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Node.js"],
    features: [
      "Operations-friendly interface",
      "Mobile-responsive customer experience",
      "Clean service/product presentation",
      "Performance-focused frontend",
      "Modern brand-aligned UI system",
    ],
    category: "featured",
    status: "live",
    github: "https://github.com/sanikommu-bhanu",
    demo: "https://fairy-dairy-g51a-kappa.vercel.app/",
    image: "/projects/study-assistant.svg",
    accent: "#f59e0b",
    year: "2024",
    challenges:
      "Converting business requirements into a simple digital flow while preserving visual quality and speed.",
    learnings:
      "Deepened practical skills in product UX, frontend architecture, and performance-aware implementation.",
  },
  {
    id: "5",
    slug: "realtime-coding-interview-platform",
    title: "Real-Time Coding Interview Platform",
    tagline: "Collaborative coding interviews with AI feedback",
    description:
      "A full-stack real-time collaborative coding platform designed for technical interviews, with shared code editors, video calling, AI code review, and automated evaluation.",
    problem:
      "Remote technical interviews are fragmented — interviewers juggle Zoom, Google Docs, LeetCode, and Slack. Candidates lack real-time feedback on their approach.",
    solution:
      "A unified platform with WebSocket-powered real-time collaboration, integrated video calls, multi-language code execution in sandboxed environments, and LLM-based code quality analysis.",
    tech: ["Next.js", "TypeScript", "Socket.io", "Node.js", "Monaco Editor", "Docker", "Redis", "PostgreSQL", "WebRTC"],
    features: [
      "Real-time collaborative code editor (Monaco)",
      "Multi-language execution (Python, JS, Java, C++)",
      "Sandboxed code runner with Docker",
      "AI code review and hints",
      "Integrated video calling (WebRTC)",
      "Session recording & playback",
      "Problem library with test cases",
      "Interview report generation",
    ],
    category: "featured",
    status: "development",
    github: "https://github.com/sanikommu-bhanu",
    demo: undefined,
    image: "/projects/interview-platform.svg",
    accent: "#ef4444",
    year: "2024",
    challenges:
      "Building a low-latency collaborative editor while handling code execution security required careful WebSocket architecture and container isolation strategies.",
    learnings:
      "WebSocket architecture at scale, container security, operational transformation for collaborative editing, and WebRTC implementation.",
  },
];

export const getFeaturedProjects = () =>
  projects.filter((p) => p.category === "featured");

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);
