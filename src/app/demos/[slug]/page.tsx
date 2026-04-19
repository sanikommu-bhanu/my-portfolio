import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Github, Sparkles } from "lucide-react";

import { getProjectBySlug, projects, type Project } from "@/data/projects";

type DemoProfile = {
  spotlight: string;
  headline: string;
  summary: string;
  metrics: Array<{
    value: string;
    label: string;
  }>;
  notes: string[];
};

const demoProfiles: Record<string, DemoProfile> = {
  "ai-crop-disease-detection": {
    spotlight: "Field AI",
    headline: "Scan a leaf and get a clear next step in seconds.",
    summary:
      "A mobile-first diagnosis flow that turns crop images into a confidence score, a treatment plan, and a faster decision for farmers.",
    metrics: [
      { value: "94%+", label: "Accuracy" },
      { value: "4", label: "Crop types" },
      { value: "Offline", label: "Ready" },
    ],
    notes: [
      "Built for low-bandwidth environments and quick mobile usage.",
      "Surfaces treatment guidance right after classification.",
      "Designed to reduce confusion when experts are not nearby.",
    ],
  },
  "ai-resume-analyzer": {
    spotlight: "Career intelligence",
    headline: "See ATS fit, keyword gaps, and better wording instantly.",
    summary:
      "A resume review flow that compares a CV against a job description, scores the match, and gives specific improvements a recruiter will understand.",
    metrics: [
      { value: "0-100", label: "ATS score" },
      { value: "RAG", label: "Engine" },
      { value: "PDF", label: "Ready" },
    ],
    notes: [
      "Highlights keyword gaps before a resume reaches human review.",
      "Uses structured feedback so the next revision is obvious.",
      "Built for fast, repeatable job application workflows.",
    ],
  },
  "github-analytics-dashboard": {
    spotlight: "Developer signal",
    headline: "Turn GitHub activity into a story hiring teams can scan fast.",
    summary:
      "A live analytics layer that makes contribution trends, language mix, and repository impact easy to read at a glance.",
    metrics: [
      { value: "Live", label: "GraphQL" },
      { value: "AI", label: "Summary" },
      { value: "PDF", label: "Export" },
    ],
    notes: [
      "Focuses on clear signals instead of raw repository noise.",
      "Makes developer growth easy to compare over time.",
      "Built to feel polished enough for public sharing.",
    ],
  },
  "ai-study-assistant": {
    spotlight: "Learning loop",
    headline: "Convert notes into recall, quizzes, and confidence.",
    summary:
      "An AI study companion that turns passive reading into active learning with questions, flashcards, and progress tracking.",
    metrics: [
      { value: "RAG", label: "Core" },
      { value: "Quiz", label: "Mode" },
      { value: "Progress", label: "Tracked" },
    ],
    notes: [
      "Focuses on active recall instead of just reading content back.",
      "Keeps the learning flow personalized and adaptable.",
      "Useful for students who want visible progress, not noise.",
    ],
  },
  "realtime-coding-interview-platform": {
    spotlight: "Interview flow",
    headline: "Keep coding, reviewing, and collaborating in one place.",
    summary:
      "A real-time interview workspace with shared code, AI feedback, and session tooling designed to remove interview friction.",
    metrics: [
      { value: "WebRTC", label: "Calls" },
      { value: "Low", label: "Latency" },
      { value: "Docker", label: "Runner" },
    ],
    notes: [
      "Reduces tool switching during technical interviews.",
      "Keeps the review loop fast and collaborative.",
      "Built to support live, high-stakes technical sessions.",
    ],
  },
};

function DemoMetric({
  value,
  label,
  accent,
}: {
  value: string;
  label: string;
  accent: string;
}) {
  return (
    <div className="rounded-2xl border border-border/50 bg-background/70 px-3 py-3 text-center">
      <div className="font-display text-xl font-bold" style={{ color: accent }}>
        {value}
      </div>
      <div className="mt-1 text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

function DemoPreview({ project }: { project: Project }) {
  const profile = demoProfiles[project.slug] ?? demoProfiles["github-analytics-dashboard"];

  return (
    <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-background/70 p-4 sm:p-5">
      <div
        className="absolute inset-0 opacity-80"
        style={{
          background: `radial-gradient(circle at top left, ${project.accent}30, transparent 52%), radial-gradient(circle at bottom right, ${project.accent}18, transparent 42%)`,
        }}
      />
      <div className="relative space-y-4">
        <div className="flex items-center justify-between gap-3">
          <span
            className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em]"
            style={{
              backgroundColor: `${project.accent}15`,
              borderColor: `${project.accent}30`,
              color: project.accent,
            }}
          >
            <Sparkles size={11} />
            Live preview
          </span>
          <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-muted-foreground">
            {project.year}
          </span>
        </div>

        <div className="rounded-2xl border border-border/50 bg-background/80 p-5 shadow-2xl shadow-black/10">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-[11px] font-mono uppercase tracking-[0.28em] text-muted-foreground">
                {profile.spotlight}
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold text-foreground">
                {profile.headline}
              </h2>
            </div>
            <div
              className="hidden sm:flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10"
              style={{ backgroundColor: `${project.accent}15` }}
            >
              <Sparkles size={20} style={{ color: project.accent }} />
            </div>
          </div>

          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {profile.summary}
          </p>

          <div className="mt-5 grid grid-cols-3 gap-3">
            {profile.metrics.map((metric) => (
              <DemoMetric
                key={metric.label}
                value={metric.value}
                label={metric.label}
                accent={project.accent}
              />
            ))}
          </div>
        </div>

        <div className="grid gap-2">
          {profile.notes.map((note) => (
            <div
              key={note}
              className="flex items-start gap-2 rounded-xl border border-border/40 bg-secondary/40 px-3 py-2 text-xs text-foreground/75"
            >
              <CheckCircle2 size={13} className="mt-0.5 flex-shrink-0 text-primary" />
              {note}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Demo not found",
    };
  }

  return {
    title: `${project.title} Live Demo`,
    description: `${project.tagline} Live demo and project breakdown for ${project.title}.`,
  };
}

export default function DemoPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-mesh">
      <section className="section-container py-6 sm:py-8 lg:py-10">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft size={14} />
            Back to portfolio
          </Link>
          <div className="hidden sm:flex items-center gap-2 text-xs font-mono uppercase tracking-[0.24em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Live demo route
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative overflow-hidden rounded-[2rem] border border-border/50 bg-background/70 p-6 sm:p-8">
            <div
              className="absolute inset-0 opacity-80"
              style={{
                background: `radial-gradient(circle at top left, ${project.accent}22, transparent 45%), radial-gradient(circle at bottom right, ${project.accent}14, transparent 38%)`,
              }}
            />
            <div className="relative">
              <div
                className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium"
                style={{
                  backgroundColor: `${project.accent}15`,
                  borderColor: `${project.accent}30`,
                  color: project.accent,
                }}
              >
                {project.status.toUpperCase()} DEMO
              </div>

              <h1 className="mt-5 max-w-3xl font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                {project.title}
              </h1>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {project.tagline}
              </p>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-foreground/75 sm:text-base">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary group"
                >
                  <Github size={16} />
                  View source
                  <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
                <Link href="/#contact" className="btn-primary group">
                  Hire me
                </Link>
                <Link href="/#projects" className="btn-ghost group">
                  Explore more projects
                </Link>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  {
                    label: "Problem",
                    value: project.problem,
                  },
                  {
                    label: "Solution",
                    value: project.solution,
                  },
                  {
                    label: "What this demo proves",
                    value: demoProfiles[project.slug]?.summary ?? project.tagline,
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-border/40 bg-secondary/40 p-4"
                  >
                    <div className="text-[11px] font-mono uppercase tracking-[0.22em] text-muted-foreground">
                      {item.label}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <DemoPreview project={project} />

            <div className="glass-card p-6">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[11px] font-mono uppercase tracking-[0.24em] text-muted-foreground">
                    Tech stack
                  </p>
                  <h2 className="mt-2 font-display text-xl font-semibold text-foreground">
                    Built with real production tools
                  </h2>
                </div>
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
                  {project.features.length} features
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border/50 bg-secondary/50 px-3 py-1 text-[11px] font-mono text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-5 space-y-2">
                {project.features.slice(0, 4).map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-2 rounded-xl border border-border/40 bg-background/60 px-3 py-2 text-xs text-foreground/75"
                  >
                    <CheckCircle2 size={13} className="mt-0.5 flex-shrink-0 text-primary" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}