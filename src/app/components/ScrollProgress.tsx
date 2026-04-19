"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const raw = useMotionValue(0);
  const scaleX = useSpring(raw, { stiffness: 400, damping: 40 });

  useEffect(() => {
    const update = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      raw.set(total > 0 ? scrolled / total : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [raw]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[100] origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, #0ea5e9, #06b6d4, #8b5cf6)",
      }}
    />
  );
}
