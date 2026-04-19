"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Only show custom cursor on non-touch devices
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(pointer: coarse)").matches);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateCursorType = () => {
      const el = document.elementFromPoint(position.x, position.y);
      const isClickable =
        el?.closest("a, button, [role='button'], input, textarea, select, label") !== null;
      setIsPointer(isClickable);
    };

    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mousemove", updateCursorType);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mousemove", updateCursorType);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isMobile, position.x, position.y]);

  if (isMobile) return null;

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: position.x - 6,
          y: position.y - 6,
          opacity: isHidden ? 0 : 1,
          scale: isPointer ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30, mass: 0.1 }}
      >
        <div className="w-3 h-3 bg-white rounded-full" />
      </motion.div>

      {/* Trailing cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        animate={{
          x: position.x - 20,
          y: position.y - 20,
          opacity: isHidden ? 0 : isPointer ? 1 : 0.4,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 25, mass: 0.3 }}
      >
        <div
          className={`w-10 h-10 rounded-full border transition-colors duration-200 ${
            isPointer
              ? "border-sky-400/70 bg-sky-400/10"
              : "border-white/20"
          }`}
        />
      </motion.div>
    </>
  );
}
