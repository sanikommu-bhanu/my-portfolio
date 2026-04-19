"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

export default function Footer() {
  return (
    <footer className="relative border-t border-border/30 py-10 pb-24 md:pb-10">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo + tagline */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-violet-600 flex items-center justify-center">
              <span className="text-white font-display text-sm font-bold">B</span>
            </div>
            <div>
              <div className="text-sm font-display font-semibold text-foreground">
                Sanikommu Bhanu
              </div>
              <div className="text-xs text-muted-foreground">
                Full Stack · AI/ML · Design
              </div>
            </div>
          </div>

          {/* Center: copyright */}
          <p className="text-xs text-muted-foreground flex items-center gap-1.5">
            Built with <Heart size={11} className="text-red-400 fill-red-400" /> by Bhanu ·{" "}
            {new Date().getFullYear()}
          </p>

          {/* Right: socials + scroll up */}
          <div className="flex items-center gap-3">
            {[
              { href: "https://github.com/sanikommu-bhanu", icon: Github, label: "GitHub" },
              { href: "https://linkedin.com/in/Bhanu-Sanikommu", icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:sanikommu.bhanu@gmail.com", icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all duration-200"
              >
                <Icon size={15} />
              </a>
            ))}

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all duration-200 ml-1"
              aria-label="Scroll to top"
            >
              <ArrowUp size={15} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
