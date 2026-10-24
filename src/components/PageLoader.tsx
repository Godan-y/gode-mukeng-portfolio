import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface PageLoaderProps {
  onComplete?: () => void;
}

export const PageLoader: React.FC<PageLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Smooth progress counter from 0 to 100 in ~1100ms
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            if (onComplete) onComplete();
          }, 300);
          return 100;
        }
        // Random incremental step
        const step = Math.floor(Math.random() * 15) + 10;
        return Math.min(100, prev + step);
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="page-loader"
          initial={{ opacity: 1 }}
          exit={{
            y: '-100%',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#060911] text-white overflow-hidden pointer-events-auto"
        >
          {/* Subtle background glow */}
          <div className="absolute w-[500px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center max-w-md px-6 text-center space-y-6">
            {/* Monogram emblem */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 p-0.5 shadow-xl shadow-blue-500/20"
            >
              <div className="w-full h-full bg-[#090d16] rounded-[14px] flex items-center justify-center">
                <span className="text-xl font-extrabold tracking-wider bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">
                  GM
                </span>
              </div>
            </motion.div>

            {/* Name with mask/stagger reveal */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white"
              >
                {PERSONAL_INFO.name}
              </motion.h1>
            </div>

            {/* Title / Role */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-xs sm:text-sm text-blue-400 font-medium tracking-wide uppercase"
            >
              Développeur Web & Mobile · Bac +3 Gestion Informatique
            </motion.p>

            {/* Progress counter & bar */}
            <div className="w-48 space-y-2 pt-2">
              <div className="flex justify-between items-center text-[11px] font-mono text-slate-400">
                <span>Chargement</span>
                <span className="tabular-nums text-blue-300">{progress}%</span>
              </div>
              <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'easeOut', duration: 0.1 }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
