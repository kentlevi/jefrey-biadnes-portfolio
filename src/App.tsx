import { useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <div className="min-h-screen bg-[#070708] text-neutral-50 font-sans selection:bg-neutral-800 selection:text-white">
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Slim, fixed top scroll progress bar */}
            <motion.div 
              className="fixed top-0 left-0 right-0 h-[2.5px] bg-[#bca280] origin-[0%] z-[150] shadow-[0_0_8px_rgba(188,162,128,0.4)]"
              style={{ scaleX }}
            />
            
            <Navbar />
            <main>
              <Hero />
              <About />
              <Expertise />
              <Experience />
              <Projects />
              <Skills />
              <Education />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </div>
    </>
  );
}

