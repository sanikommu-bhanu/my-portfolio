"use client";

import { motion } from "framer-motion";
import {
  Download, FileText, GraduationCap, Award, Target,
  Sparkles, ExternalLink, CheckCircle2, ArrowUpRight
} from "lucide-react";
import { toast } from "sonner";

export default function Resume() {
  const handleDownload = () => {
    toast.success("Resume download started!", {
      description: "Your copy of Bhanu's resume is downloading.",
    });
  };

  return (
    <section id="resume" className="relative py-24 sm:py-32">
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
            <FileText size={12} />
            Resume
          </div>
          <h2 className="section-title max-w-2xl">
            Everything you need to{" "}
            <span className="gradient-text">hire me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Resume Summary */}
          <div className="space-y-6">
            {/* Career Objective */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card p-6 border border-primary/20"
            >
              <div className="flex items-center gap-2 mb-4">
                <Target size={16} className="text-primary" />
                <h3 className="font-display font-semibold text-sm text-primary">
                  Career Objective
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Seeking a challenging internship or entry-level role where I can apply my
                expertise in full-stack development and AI/ML to build impactful products.
                I bring deep technical skills, product thinking, and the drive to ship
                real software that solves real problems.
              </p>
            </motion.div>

            {/* Education Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-card p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap size={16} className="text-sky-400" />
                <h3 className="font-display font-semibold text-sm text-sky-400">
                  Education
                </h3>
              </div>
              <div className="space-y-4">
                {[
                  {
                    degree: "B.Tech — AI & Machine Learning",
                    school: "Saveetha School of Engineering",
                    score: "9.3 CGPA",
                    period: "2022–2026",
                  },
                  {
                    degree: "Intermediate MPC",
                    school: "Sri Chaitanya Junior College",
                    score: "96%",
                    period: "2020–2022",
                  },
                  {
                    degree: "SSC",
                    school: "Ravindra Bharathi School, Guntur",
                    score: "95%",
                    period: "2020",
                  },
                ].map((edu) => (
                  <div key={edu.degree} className="flex items-start justify-between gap-2">
                    <div>
                      <div className="text-sm font-medium text-foreground">{edu.degree}</div>
                      <div className="text-xs text-muted-foreground">{edu.school}</div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-sm font-semibold text-sky-400">{edu.score}</div>
                      <div className="text-xs text-muted-foreground">{edu.period}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <Award size={16} className="text-violet-400" />
                <h3 className="font-display font-semibold text-sm text-violet-400">
                  Certifications
                </h3>
              </div>
              <div className="space-y-2">
                {[
                  "Infosys Certified — Enterprise Software Development",
                  "IBM Certified — AI & Cloud Technologies",
                  "Global Professional Certification",
                ].map((cert) => (
                  <div key={cert} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 size={14} className="text-violet-400 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Download CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Main download card */}
            <div className="glass-card p-8 text-center border border-primary/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-violet-500/5" />
              <div className="relative">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-violet-500/20 border border-primary/30 flex items-center justify-center mx-auto mb-6">
                  <FileText size={36} className="text-primary" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-2">
                  Bhanu&apos;s Resume
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Full resume with projects, skills, education, and contact information.
                  Up to date as of 2024.
                </p>

                <a
                  href="/assets/resume_updated-2.pdf"
                  download
                  onClick={handleDownload}
                  className="btn-primary w-full justify-center text-base py-3.5 shadow-2xl shadow-primary/25 glow-primary group"
                >
                  <Download size={18} className="group-hover:-translate-y-0.5 transition-transform" />
                  Download Resume (PDF)
                </a>

                <p className="mt-3 text-xs text-muted-foreground">
                  PDF format · Generated from live portfolio data
                </p>
              </div>
            </div>

            {/* Internship CTA */}
            <div className="glass-card p-6 border border-emerald-400/20">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-400/10 flex items-center justify-center flex-shrink-0">
                  <Sparkles size={18} className="text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-1">
                    Internship Ready
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                    Open to internships in Full Stack Development, AI/ML Engineering,
                    and Product Design. Available immediately.
                  </p>
                  <a
                    href="mailto:sanikommu.bhanu@gmail.com?subject=Internship Opportunity"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    Let&apos;s Talk
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick skills highlight */}
            <div className="glass-card p-5">
              <p className="text-xs font-mono text-muted-foreground mb-3">CORE SKILLS</p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Python", "TypeScript", "React", "Next.js", "FastAPI",
                  "TensorFlow", "LangChain", "MongoDB", "Docker", "Git"
                ].map((skill) => (
                  <span key={skill} className="skill-badge text-xs">{skill}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
