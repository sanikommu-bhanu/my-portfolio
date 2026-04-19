"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2, Monitor, Server, Brain, Database,
  Wrench, Palette, Sparkles, ChevronRight
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { skillCategories, type SkillCategory } from "@/data/skills";

const iconMap: Record<string, LucideIcon> = {
  Code2, Monitor, Server, Brain, Database, Wrench, Palette,
};

const levelConfig = {
  expert: { label: "Expert", width: "w-full", color: "bg-emerald-400" },
  advanced: { label: "Advanced", width: "w-4/5", color: "bg-sky-400" },
  intermediate: { label: "Intermediate", width: "w-3/5", color: "bg-violet-400" },
};

export default function Skills() {
  const [active, setActive] = useState<string>("aiml");

  const activeCategory = skillCategories.find((c) => c.id === active)!;

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="section-tag">
            <Sparkles size={12} />
            Skills & Expertise
          </div>
          <h2 className="section-title max-w-2xl">
            A full-spectrum{" "}
            <span className="gradient-text">technical toolkit</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg">
            From pixels to pipelines — I work across the entire product stack with
            depth in AI/ML and modern web development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* ── Category Sidebar ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 flex flex-col gap-2"
          >
            {skillCategories.map((category) => {
              const Icon = iconMap[category.icon];
              const isActive = active === category.id;
              return (
                <motion.button
                  key={category.id}
                  onClick={() => setActive(category.id)}
                  whileTap={{ scale: 0.98 }}
                  className={`relative w-full flex items-center gap-3 p-4 rounded-xl text-left transition-all duration-200 group ${
                    isActive
                      ? "glass border-l-2 text-foreground"
                      : "hover:bg-secondary/50 text-muted-foreground hover:text-foreground border border-transparent"
                  }`}
                  style={isActive ? { borderLeftColor: category.accent } : {}}
                >
                  {isActive && (
                    <motion.div
                      layoutId="skill-active"
                      className="absolute inset-0 rounded-xl bg-white/5 border border-white/10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}

                  <div
                    className="relative w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors"
                    style={{
                      backgroundColor: isActive ? `${category.accent}20` : undefined,
                    }}
                  >
                    {Icon && (
                      <Icon
                        size={18}
                        className="transition-colors"
                        style={{ color: isActive ? category.accent : undefined }}
                      />
                    )}
                  </div>

                  <div className="relative flex-1 min-w-0">
                    <div className="font-semibold text-sm">{category.title}</div>
                    <div className="text-xs text-muted-foreground truncate">
                      {category.skills.length} skills
                    </div>
                  </div>

                  <ChevronRight
                    size={14}
                    className={`relative transition-all duration-200 ${
                      isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1"
                    }`}
                    style={{ color: category.accent }}
                  />
                </motion.button>
              );
            })}
          </motion.div>

          {/* ── Skills Detail Panel ── */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="glass-card p-6 sm:p-8 min-h-[400px]"
              >
                {/* Panel Header */}
                <div className="flex items-center gap-3 mb-8">
                  {(() => {
                    const Icon = iconMap[activeCategory.icon];
                    return (
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: `${activeCategory.accent}20` }}
                      >
                        {Icon && <Icon size={24} style={{ color: activeCategory.accent }} />}
                      </div>
                    );
                  })()}
                  <div>
                    <h3 className="font-display font-bold text-xl text-foreground">
                      {activeCategory.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {activeCategory.description}
                    </p>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-5">
                  {activeCategory.skills.map((skill, i) => {
                    const level = levelConfig[skill.level];
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                        className="group"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">
                            {skill.name}
                          </span>
                          <span
                            className="text-xs font-mono px-2 py-0.5 rounded-md"
                            style={{
                              backgroundColor: `${activeCategory.accent}15`,
                              color: activeCategory.accent,
                            }}
                          >
                            {level.label}
                          </span>
                        </div>
                        <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: undefined }}
                            className={`h-full rounded-full ${level.width} ${level.color} opacity-80`}
                            style={{
                              background: `linear-gradient(90deg, ${activeCategory.accent}99, ${activeCategory.accent})`,
                            }}
                            transition={{ duration: 0.6, delay: i * 0.05 }}
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ── All Skills Cloud ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12"
        >
          <p className="text-xs font-mono text-muted-foreground mb-4 text-center">
            ALL TECHNOLOGIES
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {skillCategories.flatMap((cat) =>
              cat.skills.map((skill) => (
                <motion.span
                  key={`${cat.id}-${skill.name}`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="skill-badge text-xs"
                >
                  {skill.name}
                </motion.span>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
