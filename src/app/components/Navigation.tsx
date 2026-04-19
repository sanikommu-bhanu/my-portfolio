"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X, Download } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#github", label: "GitHub" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Active section detection
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      const current = sections.findLast((section) => {
        const el = document.getElementById(section);
        if (!el) return false;
        return el.getBoundingClientRect().top <= 100;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-background/80 border-b border-border/50 shadow-xl shadow-background/20"
            : "bg-transparent"
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => scrollTo("#home")}
              className="flex items-center gap-2.5 group"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-500 to-violet-600 flex items-center justify-center shadow-lg shadow-sky-500/20 group-hover:shadow-sky-500/40 transition-shadow">
                <span className="text-white font-display text-base font-bold">B</span>
              </div>
              <div className="hidden sm:block">
                <span className="font-display font-bold text-foreground text-sm leading-none">
                  Bhanu
                </span>
                <span className="block text-[10px] text-muted-foreground font-mono leading-none mt-0.5">
                  DEVELOPER & DESIGNER
                </span>
              </div>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isActive
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="nav-active"
                        className="absolute inset-0 bg-primary/10 rounded-lg"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative">{link.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Right Controls */}
            <div className="flex items-center gap-2">
              {/* Theme Toggle */}
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-xl border border-border/50 bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground transition-all duration-200"
                aria-label="Toggle theme"
              >
                {mounted ? theme === "dark" ? <Sun size={16} /> : <Moon size={16} /> : <span className="inline-block h-4 w-4" />}
              </button>

              {/* Resume Button - Desktop */}
              <a
                href="/resume.pdf"
                download
                className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold bg-primary text-primary-foreground hover:opacity-90 active:scale-95 transition-all duration-200 shadow-lg shadow-primary/25"
              >
                <Download size={14} />
                Resume
              </a>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-xl border border-border/50 bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground transition-all"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 lg:hidden backdrop-blur-xl bg-background/95 border-b border-border/50"
          >
            <nav className="section-container py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(link.href)}
                  className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all duration-200"
                >
                  {link.label}
                </motion.button>
              ))}
              <a
                href="/resume.pdf"
                download
                className="mt-2 flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-200"
              >
                <Download size={14} />
                Download Resume
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
