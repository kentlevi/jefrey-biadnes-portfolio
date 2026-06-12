import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);

  const statuses = [
    "INITIALIZING DATABASE SCHEMAS",
    "ESTABLISHING API WEBHOOK PIPELINES",
    "OPTIMIZING WORKFLOW CONFIGURATIONS",
    "PREPARING ENTERPRISE ENVIRONMENT",
    "RENDER READY"
  ];

  useEffect(() => {
    // Elegant incremental speed for premium feel, optimized for speed
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 350);
          return 100;
        }
        
        // Varying speed increments
        const remaining = 100 - prev;
        const increment = remaining > 50 
          ? Math.floor(Math.random() * 20) + 10 
          : Math.floor(Math.random() * 12) + 4;
          
        return Math.min(prev + increment, 100);
      });
    }, 80);

    return () => clearInterval(timer);
  }, [onComplete]);

  useEffect(() => {
    if (progress < 25) setStatusIndex(0);
    else if (progress < 50) setStatusIndex(1);
    else if (progress < 75) setStatusIndex(2);
    else if (progress < 95) setStatusIndex(3);
    else setStatusIndex(4);
  }, [progress]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        y: "-100%",
        transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
      }}
      className="fixed inset-0 bg-[#070708] z-[100] flex flex-col justify-between p-8 md:p-12 font-sans selection:bg-none"
    >
      {/* Structural visual cues to resemble luxury high-end UI */}
      <div className="flex justify-between items-start text-neutral-500 font-mono text-[10px] tracking-[0.3em]">
        <span>PORTFOLIO FRAMEWORK v22.6</span>
        <span>JEFREY BIADNES // BACKEND & AUTOMATION</span>
      </div>

      <div className="flex flex-col items-center text-center gap-4">
        <div className="overflow-hidden">
          <motion.div 
            initial={{ y: 80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl lg:text-9xl font-display font-light text-white tracking-tighter"
          >
            {progress.toString().padStart(3, "0")} <span className="font-sans text-lg md:text-2xl text-[#bca280] font-normal tracking-normal relative -top-6 md:-top-12">%</span>
          </motion.div>
        </div>

        <div className="flex flex-col gap-1.5 h-12 justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={statusIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="text-[#bca280] font-mono text-[11px] tracking-[0.25em]"
            >
              [ {statuses[statusIndex]} ]
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-t border-neutral-900 pt-8 text-neutral-500 font-mono text-[10px] tracking-[0.2em] uppercase">
        <span>ESTABLISHED CEBU, PHILIPPINES</span>
        <div className="w-48 bg-neutral-900 h-[1px] relative overflow-hidden hidden md:block">
          <motion.div 
            style={{ width: `${progress}%` }}
            className="absolute left-0 top-0 bottom-0 bg-[#bca280]"
          />
        </div>
        <span>TRANSITION PATHWAY: SERVICENOW</span>
      </div>
    </motion.div>
  );
}
