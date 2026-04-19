"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Download, ExternalLink, MapPin, Sparkles } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

export default function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16"
    >
      {/* ── Animated background grid ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)/0.3) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--foreground)/0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* ── Glow orbs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-sky-500/20 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-violet-500/20 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-cyan-500/10 blur-[100px]"
        />
      </div>

      {/* ── Floating tech badges ── */}
      {[
        { label: "React", x: "8%", y: "20%", delay: 0 },
        { label: "Python", x: "88%", y: "15%", delay: 0.5 },
        { label: "TensorFlow", x: "5%", y: "72%", delay: 1 },
        { label: "Next.js", x: "87%", y: "68%", delay: 1.5 },
        { label: "FastAPI", x: "15%", y: "45%", delay: 0.8 },
        { label: "OpenCV", x: "82%", y: "42%", delay: 1.2 },
      ].map((badge) => (
        <motion.div
          key={badge.label}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.5 + badge.delay }}
          className="absolute hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-full glass border border-white/10 text-xs font-mono text-muted-foreground float-animation pointer-events-none"
          style={{ left: badge.x, top: badge.y, animationDelay: `${badge.delay}s` }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          {badge.label}
        </motion.div>
      ))}

      {/* ── Main Content ── */}
      <div className="section-container relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status badge */}
          <motion.div
            {...fadeUp}
            animate="animate"
            initial="initial"
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-emerald-400/20 text-sm text-emerald-400 font-medium mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            Open to internships & opportunities
            <MapPin size={12} className="text-emerald-400/70" />
            India
          </motion.div>

          {/* Name */}
          <motion.div
            {...fadeUp}
            animate="animate"
            initial="initial"
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight mb-2">
              <span className="text-foreground">Sanikommu </span>
              <span className="gradient-text">Bhanu</span>
            </h1>
          </motion.div>

          {/* Typewriter headline */}
          <motion.div
            {...fadeUp}
            animate="animate"
            initial="initial"
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-6 mb-4"
          >
            <div className="text-xl sm:text-2xl md:text-3xl font-display font-semibold text-foreground/90 min-h-[2.5rem]">
              <TypeAnimation
                sequence={[
                  "Building AI products.",
                  2000,
                  "Building full-stack apps.",
                  2000,
                  "Building premium digital experiences.",
                  2500,
                  "Solving real-world problems.",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
          </motion.div>

          {/* Roles */}
          <motion.div
            {...fadeUp}
            animate="animate"
            initial="initial"
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm sm:text-base text-muted-foreground mb-10"
          >
            {[
              "Full Stack Developer",
              "UI/UX Designer",
              "AI/ML Builder",
              "3D Designer",
              "App Developer",
            ].map((role, i) => (
              <span key={role} className="flex items-center gap-3">
                <span className="hover:text-foreground transition-colors cursor-default">{role}</span>
                {i < 4 && <span className="text-border">·</span>}
              </span>
            ))}
          </motion.div>

          <motion.p
            {...fadeUp}
            animate="animate"
            initial="initial"
            transition={{ duration: 0.6, delay: 0.72 }}
            className="mx-auto max-w-2xl text-sm sm:text-base text-muted-foreground leading-relaxed mb-8"
          >
            I turn complex ideas into polished products with clear UX, strong architecture,
            and demo-ready delivery that makes hiring decisions easier.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            {...fadeUp}
            animate="animate"
            initial="initial"
            transition={{ duration: 0.6, delay: 0.82 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-12"
          >
            <button
              onClick={() => scrollTo("#projects")}
              className="btn-primary shadow-xl shadow-primary/20 glow-primary group"
            >
              <Sparkles size={16} className="group-hover:rotate-12 transition-transform" />
              View Projects & Demos
            </button>
            <a
              href="/assets/resume_updated-2.pdf"
              download
              className="btn-secondary group"
            >
              <Download size={16} className="group-hover:-translate-y-0.5 transition-transform" />
              Download Resume
            </a>
            <button
              onClick={() => scrollTo("#contact")}
              className="btn-ghost group"
            >
              <Mail size={16} />
              Contact Me
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            {...fadeUp}
            animate="animate"
            initial="initial"
            transition={{ duration: 0.6, delay: 0.85 }}
            className="flex items-center justify-center gap-4 mb-16"
          >
            {[
              {
                href: "https://github.com/sanikommu-bhanu",
                icon: Github,
                label: "GitHub",
              },
              {
                href: "https://linkedin.com/in/Bhanu-Sanikommu",
                icon: Linkedin,
                label: "LinkedIn",
              },
              {
                href: "mailto:sanikommu.bhanu@gmail.com",
                icon: Mail,
                label: "Email",
              },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border/50 bg-secondary/30 text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 text-sm font-medium backdrop-blur-sm"
              >
                <Icon size={15} />
                <span className="hidden sm:inline">{label}</span>
              </a>
            ))}
          </motion.div>

          {/* Stats Row */}
          <motion.div
            {...fadeUp}
            animate="animate"
            initial="initial"
            transition={{ duration: 0.6, delay: 0.95 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto"
          >
            {[
              { value: "9.3", label: "CGPA", suffix: "" },
              { value: "5", label: "AI/ML Projects", suffix: "+" },
              { value: "10", label: "Tech Stacks", suffix: "+" },
              { value: "3", label: "Certifications", suffix: "" },
            ].map(({ value, label, suffix }) => (
              <div
                key={label}
                className="glass-card p-4 text-center border-gradient"
              >
                <div className="font-display text-2xl font-bold gradient-text">
                  {value}{suffix}
                </div>
                <div className="text-xs text-muted-foreground mt-1">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={() => scrollTo("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
        aria-label="Scroll down"
      >
        <span className="text-xs font-mono tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="group-hover:text-primary transition-colors" />
        </motion.div>
      </motion.button>
    </section>
  );
}
