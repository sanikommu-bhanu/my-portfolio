"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github, X, ChevronRight, Code2, ArrowUpRight, Play, CheckCircle2, Clock
} from "lucide-react";
import { projects, type Project } from "@/data/projects";

const statusConfig = {
  live: { label: "Live", icon: CheckCircle2, color: "text-emerald-400", bg: "bg-emerald-400/10" },
  completed: { label: "Completed", icon: CheckCircle2, color: "text-sky-400", bg: "bg-sky-400/10" },
  development: { label: "In Dev", icon: Clock, color: "text-amber-400", bg: "bg-amber-400/10" },
};

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  const status = statusConfig[project.status];
  const StatusIcon = status.icon;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="glass-card border-gradient overflow-hidden cursor-pointer group"
      onClick={onClick}
    >
      {/* Project Visual */}
      <div
        className="h-44 relative overflow-hidden flex items-center justify-center"
        style={{ backgroundColor: `${project.accent}10` }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${project.accent}, transparent 70%)`,
          }}
        />
        {/* Abstract code visualization */}
        <div className="relative z-10 font-mono text-[10px] leading-relaxed opacity-30 select-none text-center px-4 overflow-hidden max-h-full">
          {project.tech.slice(0, 6).map((t, i) => (
            <div key={t} style={{ color: project.accent }}>
              {i % 2 === 0 ? `import { ${t} } from '...'` : `const ${t.toLowerCase()}Model = new ${t}()`}
            </div>
          ))}
        </div>
        {/* Accent icon */}
        <div
          className="absolute bottom-4 right-4 w-10 h-10 rounded-xl flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity"
          style={{ backgroundColor: `${project.accent}25` }}
        >
          <ArrowUpRight size={18} style={{ color: project.accent }} />
        </div>
      </div>

      <div className="p-5">
        {/* Status + Year */}
        <div className="flex items-center justify-between mb-3">
          <div className={`flex items-center gap-1.5 text-xs font-medium px-2 py-1 rounded-lg ${status.bg} ${status.color}`}>
            <StatusIcon size={11} />
            {status.label}
          </div>
          <div className="flex items-center gap-2">
            {project.demo && (
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                Live Demo
              </span>
            )}
            <span className="text-xs font-mono text-muted-foreground">{project.year}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-base text-foreground mb-1 group-hover:text-primary transition-colors leading-snug">
          {project.title}
        </h3>
        <p className="text-xs text-muted-foreground mb-4 leading-relaxed line-clamp-2">
          {project.tagline}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-secondary border border-border/50 text-muted-foreground"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-secondary border border-border/50 text-muted-foreground">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center gap-2 pt-1 border-t border-border/30">
          <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors flex items-center gap-1">
            View Details <ChevronRight size={12} />
          </span>
          <div className="ml-auto flex gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground text-xs font-medium"
              aria-label="Source on GitHub"
            >
              <Github size={13} />
              Source
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-primary/10 text-primary border border-primary/20 transition-colors hover:bg-primary/15 text-xs font-medium"
                aria-label="Open live demo"
              >
                <Play size={13} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-xl" />
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 60, scale: 0.96 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="relative z-10 w-full sm:max-w-3xl max-h-[92vh] sm:max-h-[85vh] glass-card border border-border/50 overflow-hidden rounded-t-3xl sm:rounded-3xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Drag handle (mobile) */}
          <div className="flex justify-center pt-3 pb-1 sm:hidden">
            <div className="w-10 h-1 rounded-full bg-border" />
          </div>

          {/* Header */}
          <div
            className="relative p-6 pb-4 overflow-hidden"
            style={{ backgroundColor: `${project.accent}10` }}
          >
            <div
              className="absolute inset-0 opacity-20"
              style={{
                background: `radial-gradient(circle at 0% 50%, ${project.accent}, transparent 70%)`,
              }}
            />
            <div className="relative flex items-start justify-between">
              <div>
                <div
                  className="inline-flex items-center gap-1.5 text-xs font-mono px-2 py-1 rounded-lg mb-3"
                  style={{ backgroundColor: `${project.accent}20`, color: project.accent }}
                >
                  {project.year} · {project.status.toUpperCase()}{project.demo ? " · LIVE DEMO" : ""}
                </div>
                <h2 className="font-display font-bold text-xl sm:text-2xl text-foreground mb-1 pr-8">
                  {project.title}
                </h2>
                <p className="text-sm text-muted-foreground">{project.tagline}</p>
              </div>
              <button
                onClick={onClose}
                className="flex-shrink-0 p-2 rounded-xl hover:bg-white/10 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Action buttons */}
            <div className="flex gap-2 mt-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-all"
              >
                <Github size={13} /> View source
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white transition-all"
                  style={{ backgroundColor: project.accent }}
                >
                  <Play size={13} /> Open live demo
                </a>
              )}
            </div>
          </div>

          {/* Scrollable Body */}
          <div className="overflow-y-auto max-h-[60vh] p-6 space-y-6">
            {/* Overview */}
            <div>
              <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-2">Overview</h3>
              <p className="text-sm text-foreground/80 leading-relaxed">{project.description}</p>
            </div>

            {/* Problem + Solution */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-secondary/30 border border-border/40">
                <h4 className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-2">🔍 Problem</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{project.problem}</p>
              </div>
              <div className="p-4 rounded-xl bg-secondary/30 border border-border/40">
                <h4 className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">✨ Solution</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{project.solution}</p>
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-3">Key Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.features.map((f) => (
                  <div key={f} className="flex items-start gap-2 text-xs text-foreground/70">
                    <CheckCircle2 size={13} className="text-primary mt-0.5 flex-shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-3">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2.5 py-1 rounded-lg border"
                    style={{
                      backgroundColor: `${project.accent}15`,
                      borderColor: `${project.accent}30`,
                      color: project.accent,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Challenges & Learnings */}
            {(project.challenges || project.learnings) && (
              <div className="grid sm:grid-cols-2 gap-4">
                {project.challenges && (
                  <div className="p-4 rounded-xl bg-secondary/30 border border-border/40">
                    <h4 className="text-xs font-mono text-violet-400 uppercase tracking-wider mb-2">⚡ Challenges</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{project.challenges}</p>
                  </div>
                )}
                {project.learnings && (
                  <div className="p-4 rounded-xl bg-secondary/30 border border-border/40">
                    <h4 className="text-xs font-mono text-sky-400 uppercase tracking-wider mb-2">🎯 Learnings</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{project.learnings}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="section-tag">
            <Code2 size={12} />
            Projects
          </div>
          <h2 className="section-title max-w-2xl">
            Real products,{" "}
            <span className="gradient-text">real impact</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg">
            Every project solves a genuine problem. Open any card for the full
            breakdown, then launch the source or live demo in one click.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <ProjectCard project={project} onClick={() => setSelectedProject(project)} />
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="https://github.com/sanikommu-bhanu"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost group"
          >
            <Github size={16} />
            See all projects on GitHub
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
