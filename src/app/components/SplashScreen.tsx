"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if splash already shown this session
    if (sessionStorage.getItem("splashShown")) {
      setVisible(false);
      return;
    }

    const timer = setTimeout(() => {
      sessionStorage.setItem("splashShown", "true");
      setVisible(false);
    }, 2800);

    // Animate progress bar
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center splash-bg"
        >
          {/* Background glow */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-sky-500/5 blur-3xl" />
            <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-violet-500/5 blur-3xl" />
          </div>

          {/* Logo mark */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
            className="relative mb-8"
          >
            {/* Outer ring */}
            <motion.div
              initial={{ rotate: 0, opacity: 0 }}
              animate={{ rotate: 360, opacity: 1 }}
              transition={{ duration: 2, ease: "linear", repeat: Infinity, delay: 0.3 }}
              className="absolute inset-[-12px] rounded-full border border-sky-400/20 border-dashed"
            />

            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-sky-500 to-violet-600 flex items-center justify-center shadow-2xl shadow-sky-500/30">
              <span className="text-white font-display text-3xl font-bold">B</span>
            </div>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mb-8"
          >
            <h1 className="text-2xl font-display font-bold text-white mb-1">
              Sanikommu Bhanu
            </h1>
            <p className="text-sm text-white/40 font-mono tracking-wider">
              LOADING PORTFOLIO...
            </p>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 200 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="relative h-[2px] bg-white/10 rounded-full overflow-hidden"
          >
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-sky-400 to-violet-500 rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </motion.div>

          {/* Percentage */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-3 text-xs font-mono text-white/30"
          >
            {progress}%
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
