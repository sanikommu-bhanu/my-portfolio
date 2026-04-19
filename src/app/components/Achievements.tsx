"use client";

import { motion } from "framer-motion";
import {
  Zap, Award, BadgeCheck, Globe, GraduationCap, Layers,
  Sparkles, Trophy
} from "lucide-react";
import { achievements } from "@/data/achievements";

import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Zap, Award, BadgeCheck, Globe, GraduationCap, Layers,
};

const categoryColors: Record<string, string> = {
  hackathon: "#f59e0b",
  certification: "#0ea5e9",
  academic: "#8b5cf6",
  project: "#10b981",
};

const categoryLabels: Record<string, string> = {
  hackathon: "Hackathon",
  certification: "Certification",
  academic: "Academic",
  project: "Projects",
};

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-amber-500/3 rounded-full blur-3xl" />
      </div>

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
            <Trophy size={12} />
            Achievements
          </div>
          <h2 className="section-title max-w-2xl">
            Recognition &{" "}
            <span className="gradient-text">milestones</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg">
            Certifications, hackathons, and academic excellence that validate the
            real-world skill behind the code.
          </p>
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((achievement, i) => {
            const Icon = iconMap[achievement.icon];
            const color = achievement.accent;
            const catColor = categoryColors[achievement.category];

            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass-card p-6 border-gradient group relative overflow-hidden"
              >
                {/* Background glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{ background: `radial-gradient(circle at 0% 0%, ${color}10, transparent 60%)` }}
                />

                <div className="relative">
                  {/* Icon + Category */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${color}20` }}
                    >
                      {Icon && <Icon size={22} style={{ color }} />}
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span
                        className="text-[11px] font-mono px-2 py-0.5 rounded-full"
                        style={{
                          backgroundColor: `${catColor}15`,
                          color: catColor,
                        }}
                      >
                        {categoryLabels[achievement.category]}
                      </span>
                      <span className="text-[11px] text-muted-foreground font-mono">
                        {achievement.year}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-display font-bold text-base text-foreground mb-2 leading-snug">
                    {achievement.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>

                  {achievement.issuer && (
                    <div
                      className="mt-4 flex items-center gap-1.5 text-[11px] font-medium"
                      style={{ color: `${color}cc` }}
                    >
                      <BadgeCheck size={12} />
                      {achievement.issuer}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Summary stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl"
        >
          {[
            { value: "3", label: "Certifications", color: "#0ea5e9" },
            { value: "1", label: "Hackathons", color: "#f59e0b" },
            { value: "5+", label: "AI Projects Built", color: "#10b981" },
            { value: "9.3", label: "CGPA Score", color: "#8b5cf6" },
          ].map(({ value, label, color }) => (
            <div key={label} className="glass-card p-4 text-center">
              <div
                className="font-display font-bold text-2xl mb-1"
                style={{ color }}
              >
                {value}
              </div>
              <div className="text-xs text-muted-foreground">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
