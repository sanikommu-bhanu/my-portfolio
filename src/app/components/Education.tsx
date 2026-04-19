"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Sparkles, MapPin, Calendar, TrendingUp } from "lucide-react";

const education = [
  {
    id: 1,
    institution: "Saveetha School of Engineering",
    degree: "B.Tech — Artificial Intelligence & Machine Learning",
    period: "2022 – 2026",
    status: "current",
    score: "9.3 CGPA",
    location: "Chennai, Tamil Nadu",
    description:
      "Specializing in AI/ML with deep coursework in machine learning algorithms, deep learning, computer vision, NLP, and cloud computing. Active in tech clubs and hackathons.",
    highlights: [
      "Machine Learning & Deep Learning",
      "Computer Vision & NLP",
      "Data Structures & Algorithms",
      "Cloud Computing",
      "Full Stack Development",
      "Database Systems",
    ],
    accent: "#0ea5e9",
    icon: GraduationCap,
  },
  {
    id: 2,
    institution: "Sri Chaitanya Junior College",
    degree: "Intermediate — MPC (Mathematics, Physics, Chemistry)",
    period: "2020 – 2022",
    status: "completed",
    score: "96%",
    location: "Andhra Pradesh",
    description:
      "Completed intermediate education with distinction, building a rigorous foundation in mathematics and sciences that now underpins my algorithmic and ML capabilities.",
    highlights: [
      "Advanced Mathematics",
      "Physics & Chemistry",
      "Competitive Problem Solving",
    ],
    accent: "#8b5cf6",
    icon: BookOpen,
  },
  {
    id: 3,
    institution: "Ravindra Bharathi School, Guntur",
    degree: "Secondary School Certificate (SSC)",
    period: "Completed 2020",
    status: "completed",
    score: "95%",
    location: "Guntur, Andhra Pradesh",
    description:
      "Achieved outstanding marks with a consistent academic record, demonstrating discipline and dedication that continues to drive my work ethic today.",
    highlights: ["All Subjects", "Consistent Excellence"],
    accent: "#10b981",
    icon: Award,
  },
];

export default function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32">
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
            <GraduationCap size={12} />
            Education
          </div>
          <h2 className="section-title max-w-2xl">
            Academic{" "}
            <span className="gradient-text">foundation</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg">
            Consistent excellence across every stage of education, building the
            foundation for real-world engineering.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl">
          {/* Vertical line */}
          <div className="absolute left-6 top-4 bottom-4 w-px bg-gradient-to-b from-primary via-primary/30 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {education.map((edu, i) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative sm:pl-16"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-3.5 top-5 hidden sm:flex w-5 h-5 rounded-full border-2 border-background items-center justify-center"
                  style={{ backgroundColor: edu.accent }}
                >
                  <edu.icon size={10} className="text-white" />
                </div>

                {/* Card */}
                <div className="glass-card p-6 border-gradient">
                  {/* Top Row */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        {edu.status === "current" && (
                          <span className="flex items-center gap-1 text-[11px] font-medium text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2 py-0.5 rounded-full">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Current
                          </span>
                        )}
                        <span
                          className="text-xs font-mono px-2 py-0.5 rounded-md"
                          style={{
                            backgroundColor: `${edu.accent}20`,
                            color: edu.accent,
                          }}
                        >
                          {edu.score}
                        </span>
                      </div>
                      <h3 className="font-display font-bold text-lg text-foreground">
                        {edu.institution}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-0.5">{edu.degree}</p>
                    </div>
                    <div className="text-right text-xs text-muted-foreground space-y-1">
                      <div className="flex items-center gap-1 justify-end">
                        <Calendar size={11} />
                        {edu.period}
                      </div>
                      <div className="flex items-center gap-1 justify-end">
                        <MapPin size={11} />
                        {edu.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {edu.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-lg border"
                        style={{
                          backgroundColor: `${edu.accent}10`,
                          borderColor: `${edu.accent}25`,
                          color: `${edu.accent}cc`,
                        }}
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Score summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 grid grid-cols-3 gap-4 max-w-sm"
        >
          {[
            { label: "B.Tech CGPA", value: "9.3" },
            { label: "Intermediate", value: "96%" },
            { label: "SSC", value: "95%" },
          ].map(({ label, value }) => (
            <div key={label} className="glass-card p-4 text-center">
              <div className="font-display font-bold text-xl gradient-text">{value}</div>
              <div className="text-[11px] text-muted-foreground mt-1">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
