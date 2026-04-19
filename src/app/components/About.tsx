"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Code2, Brain, Layers, ArrowUpRight, Sparkles, Target, Cpu } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.25, 0.4, 0.25, 1] },
});

const cards = [
  {
    icon: Brain,
    title: "AI / ML Engineer",
    description: "Building intelligent systems using TensorFlow, scikit-learn, OpenCV and LLM frameworks. From computer vision to RAG pipelines.",
    accent: "text-violet-400",
    bg: "bg-violet-400/10",
    border: "border-violet-400/20",
  },
  {
    icon: Code2,
    title: "Full Stack Developer",
    description: "End-to-end product development with Next.js, React, Node.js, FastAPI and modern databases. Production-ready code.",
    accent: "text-sky-400",
    bg: "bg-sky-400/10",
    border: "border-sky-400/20",
  },
  {
    icon: Layers,
    title: "UI/UX & 3D Designer",
    description: "Designing premium digital experiences with deep attention to typography, spacing, motion, and visual hierarchy.",
    accent: "text-pink-400",
    bg: "bg-pink-400/10",
    border: "border-pink-400/20",
  },
  {
    icon: Target,
    title: "Product Thinker",
    description: "I don't just write code — I think about users, problems, and impact. Every project starts with 'why', not 'how'.",
    accent: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/20",
  },
];

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="relative py-24 sm:py-32" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div {...fadeUp(0)} className="mb-16">
          <div className="section-tag">
            <Sparkles size={12} />
            About Me
          </div>
          <h2 className="section-title max-w-2xl">
            Building things that{" "}
            <span className="gradient-text">matter</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text Content */}
          <div className="space-y-6">
            <motion.p
              {...fadeUp(0.1)}
              className="text-lg sm:text-xl text-foreground/80 leading-relaxed"
            >
              I&apos;m{" "}
              <span className="text-foreground font-semibold">Sanikommu Bhanu</span> — a
              3rd-year{" "}
              <span className="text-primary font-medium">AI & Machine Learning</span>{" "}
              student at Saveetha School of Engineering with a{" "}
              <span className="text-primary font-medium">9.3 CGPA</span>.
            </motion.p>

            <motion.p {...fadeUp(0.2)} className="text-base text-muted-foreground leading-relaxed">
              I build modern full-stack applications, AI systems, app experiences, and
              high-quality digital products that solve real problems. I care deeply about
              clean design, performance, and creating software with genuine real-world
              impact.
            </motion.p>

            <motion.p {...fadeUp(0.3)} className="text-base text-muted-foreground leading-relaxed">
              What sets me apart isn&apos;t just technical ability — it&apos;s the combination of
              engineering depth, product thinking, and design sensibility. I don&apos;t ship
              features; I ship experiences. I don&apos;t write code; I build systems.
            </motion.p>

            <motion.p {...fadeUp(0.35)} className="text-base text-muted-foreground leading-relaxed">
              Currently exploring the intersection of{" "}
              <span className="text-foreground">LLM applications, RAG architectures</span>,
              and production AI systems — the kind of work that moves from notebook to
              production and actually reaches users.
            </motion.p>

            {/* Quick facts */}
            <motion.div {...fadeUp(0.4)} className="grid grid-cols-2 gap-3 pt-2">
              {[
                { label: "University", value: "Saveetha, Chennai" },
                { label: "Degree", value: "B.Tech AI & ML" },
                { label: "Year", value: "3rd Year (2022–26)" },
                { label: "CGPA", value: "9.3 / 10.0" },
                { label: "Location", value: "India" },
                { label: "Status", value: "Seeking Internship" },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="flex flex-col gap-0.5 p-3 rounded-xl bg-secondary/30 border border-border/50"
                >
                  <span className="text-xs text-muted-foreground font-mono">{label}</span>
                  <span className="text-sm font-semibold text-foreground">{value}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-3 pt-2">
              <a
                href="mailto:sanikommu.bhanu@gmail.com"
                className="btn-primary group"
              >
                Let&apos;s Connect
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <button
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-ghost"
              >
                See My Work
              </button>
            </motion.div>
          </div>

          {/* Right: Expertise Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`p-5 rounded-2xl glass-card border ${card.border} border-gradient relative overflow-hidden group`}
              >
                {/* Hover glow */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${card.bg} rounded-2xl`} />

                <div className="relative">
                  <div className={`w-10 h-10 rounded-xl ${card.bg} flex items-center justify-center mb-4`}>
                    <card.icon size={20} className={card.accent} />
                  </div>
                  <h3 className={`font-display font-semibold text-sm mb-2 ${card.accent}`}>
                    {card.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Currently learning */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="sm:col-span-2 p-5 rounded-2xl glass-card border border-primary/20 relative overflow-hidden"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Cpu size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-sm text-primary mb-1">
                    Currently Exploring
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Production LLM apps, agentic AI systems, multi-modal models, and
                    real-time ML pipelines. Always at the edge of what&apos;s possible.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {["LangChain", "RAG", "Agents", "WebRTC", "Docker", "Edge ML"].map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
