"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, User, Code2, Github, Mail } from "lucide-react";

const navItems = [
  { href: "#home", icon: Home, label: "Home" },
  { href: "#about", icon: User, label: "About" },
  { href: "#projects", icon: Code2, label: "Projects" },
  { href: "#github", icon: Github, label: "GitHub" },
  { href: "#contact", icon: Mail, label: "Contact" },
];

export default function BottomNav() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((n) => n.href.replace("#", ""));
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
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="bottom-nav md:hidden" aria-label="Mobile navigation">
      {navItems.map(({ href, icon: Icon, label }) => {
        const isActive = activeSection === href.replace("#", "");
        return (
          <button
            key={href}
            onClick={() => scrollTo(href)}
            aria-label={label}
            className="relative flex flex-col items-center gap-1 py-1 px-3 min-w-[52px]"
          >
            {isActive && (
              <motion.div
                layoutId="bottom-nav-active"
                className="absolute inset-0 bg-primary/10 rounded-xl"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <Icon
              size={20}
              className={`relative transition-colors duration-200 ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`}
            />
            <span
              className={`relative text-[10px] font-medium transition-colors duration-200 ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
