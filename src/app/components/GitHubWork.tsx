"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Github, Star, GitFork, ExternalLink, Search, Filter,
  Sparkles, Clock, Code2, AlertCircle, RefreshCw
} from "lucide-react";
import { useGitHubRepos, LANGUAGE_COLORS, type GitHubRepo } from "@/hooks/useGitHub";
import { formatRelativeDate } from "@/lib/utils";

const GITHUB_USERNAME = "sanikommu-bhanu";

function RepoCard({ repo }: { repo: GitHubRepo }) {
  const langColor = repo.language ? LANGUAGE_COLORS[repo.language] || "#64748b" : "#64748b";

  return (
    <motion.a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className="repo-card flex flex-col gap-3 group no-underline"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <Github size={15} className="text-muted-foreground flex-shrink-0" />
          <h3 className="font-mono text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate">
            {repo.name}
          </h3>
        </div>
        <ExternalLink
          size={13}
          className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 opacity-0 group-hover:opacity-100"
        />
      </div>

      {/* Description */}
      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 flex-1">
        {repo.description || "No description provided."}
      </p>

      {/* Topics */}
      {repo.topics && repo.topics.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {repo.topics.slice(0, 3).map((topic) => (
            <span
              key={topic}
              className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20"
            >
              {topic}
            </span>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center gap-3 text-xs text-muted-foreground pt-1 border-t border-border/30">
        {repo.language && (
          <span className="flex items-center gap-1.5">
            <span
              className="w-2.5 h-2.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: langColor }}
            />
            {repo.language}
          </span>
        )}
        {repo.stargazers_count > 0 && (
          <span className="flex items-center gap-1">
            <Star size={11} />
            {repo.stargazers_count}
          </span>
        )}
        {repo.forks_count > 0 && (
          <span className="flex items-center gap-1">
            <GitFork size={11} />
            {repo.forks_count}
          </span>
        )}
        <span className="ml-auto flex items-center gap-1">
          <Clock size={10} />
          {formatRelativeDate(repo.updated_at)}
        </span>
      </div>
    </motion.a>
  );
}

function SkeletonCard() {
  return (
    <div className="glass-card p-5 space-y-3">
      <div className="shimmer h-4 w-3/4 rounded-md" />
      <div className="shimmer h-3 w-full rounded-md" />
      <div className="shimmer h-3 w-4/5 rounded-md" />
      <div className="flex gap-2 mt-1">
        <div className="shimmer h-5 w-16 rounded-full" />
        <div className="shimmer h-5 w-14 rounded-full" />
      </div>
      <div className="shimmer h-3 w-1/2 rounded-md" />
    </div>
  );
}

export default function GitHubWork() {
  const { repos, user, loading, error } = useGitHubRepos();
  const [search, setSearch] = useState("");
  const [langFilter, setLangFilter] = useState<string>("All");

  const languages = useMemo(() => {
    const langs = repos
      .map((r) => r.language)
      .filter(Boolean) as string[];
    return ["All", ...Array.from(new Set(langs))];
  }, [repos]);

  const filtered = useMemo(() => {
    return repos.filter((repo) => {
      const matchSearch =
        !search ||
        repo.name.toLowerCase().includes(search.toLowerCase()) ||
        (repo.description || "").toLowerCase().includes(search.toLowerCase()) ||
        repo.topics.some((t) => t.toLowerCase().includes(search.toLowerCase()));
      const matchLang = langFilter === "All" || repo.language === langFilter;
      return matchSearch && matchLang;
    });
  }, [repos, search, langFilter]);

  return (
    <section id="github" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="section-tag">
            <Github size={12} />
            GitHub Work
          </div>
          <h2 className="section-title max-w-2xl">
            Open source &{" "}
            <span className="gradient-text">real code</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg">
            Live data pulled directly from GitHub. Every repository is real work,
            real commits, real problem-solving.
          </p>
        </motion.div>

        {/* GitHub Profile Stats */}
        {user && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-5 mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-violet-600 flex items-center justify-center">
                <Github size={22} className="text-white" />
              </div>
              <div>
                <div className="font-semibold text-sm text-foreground">
                  @{GITHUB_USERNAME}
                </div>
                <div className="text-xs text-muted-foreground">
                  {user.bio || "AI/ML & Full Stack Developer"}
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 sm:ml-auto">
              {[
                { label: "Repositories", value: user.public_repos },
                { label: "Followers", value: user.followers },
                { label: "Following", value: user.following },
              ].map(({ label, value }) => (
                <div key={label} className="text-center">
                  <div className="font-display font-bold text-lg gradient-text">{value}</div>
                  <div className="text-[11px] text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
            >
              View Profile <ExternalLink size={12} />
            </a>
          </motion.div>
        )}

        {/* Search & Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-3 mb-8"
        >
          <div className="relative flex-1">
            <Search
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <input
              type="text"
              placeholder="Search repositories..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-secondary border border-border/50 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
            />
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <Filter size={13} className="text-muted-foreground flex-shrink-0" />
            {languages.slice(0, 6).map((lang) => (
              <button
                key={lang}
                onClick={() => setLangFilter(lang)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                  langFilter === lang
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary border border-border/50 text-muted-foreground hover:text-foreground"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Error State */}
        {error && !loading && (
          <div className="glass-card p-6 text-center mb-6">
            <AlertCircle size={24} className="text-amber-400 mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">
              Showing cached data. Live fetch failed — rate limit or network issue.
            </p>
          </div>
        )}

        {/* Repos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <SkeletonCard />
                </motion.div>
              ))
            : filtered.map((repo, i) => (
                <motion.div
                  key={repo.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <RepoCard repo={repo} />
                </motion.div>
              ))}
        </div>

        {/* Empty state */}
        {!loading && filtered.length === 0 && (
          <div className="text-center py-16">
            <Search size={32} className="text-muted-foreground mx-auto mb-4 opacity-50" />
            <p className="text-muted-foreground">No repositories match your search.</p>
            <button
              onClick={() => { setSearch(""); setLangFilter("All"); }}
              className="mt-3 text-xs text-primary hover:text-primary/80 transition-colors"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Results count */}
        {!loading && filtered.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 text-center text-xs text-muted-foreground"
          >
            Showing {filtered.length} of {repos.length} repositories
            {error && (
              <span className="ml-2 text-amber-400/70">(cached data)</span>
            )}
          </motion.div>
        )}

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-8 flex justify-center"
        >
          <a
            href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost group text-sm"
          >
            <Github size={15} />
            View All Repositories on GitHub
            <ExternalLink size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
