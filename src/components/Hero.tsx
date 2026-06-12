import { Reveal } from "./ui/Reveal";
import { ArrowDown } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[#070708] noise-bg">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[45vw] h-[45vw] bg-[#bca280]/5 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-neutral-900/30 rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,#070708_90%)]"></div>
      </div>

      {/* Top spacer for flex alignment */}
      <div className="h-4"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10 flex flex-col justify-center my-auto py-8">
        <Reveal delay={0.1}>
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-neutral-800/80 bg-neutral-900/60 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-[#bca280] animate-pulse"></span>
            <span className="text-[10px] font-mono text-neutral-300 uppercase tracking-widest">ENTERPRISE DEPLOYMENT READY</span>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-light tracking-tighter leading-[1.05] text-white max-w-5xl mb-8">
            Engineering Reliable Backends for <br className="hidden md:block" />
            <span className="gold-gradient-text font-normal font-display">Real Business Workflows.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="text-base md:text-xl text-neutral-400 font-light max-w-3xl leading-relaxed mb-12">
            Software Developer specializing in automation, backend engines, REST integrations, and workflow-driven custom platforms — with a dedicated roadmap toward specialized ServiceNow automation.
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
            <a
              href="#projects"
              className="inline-flex justify-center items-center h-14 px-8 bg-white text-black font-semibold hover:bg-[#e2d1bc] transition-all duration-300 rounded-sm text-sm"
            >
              View Case Studies
            </a>
            <a
              href="#contact"
              className="inline-flex justify-center items-center h-14 px-8 border border-neutral-800 text-white font-medium bg-transparent hover:bg-neutral-900/50 hover:border-[#bca280]/40 transition-all duration-300 rounded-sm text-sm"
            >
              Contact Jefrey
            </a>
          </div>
        </Reveal>
      </div>

      {/* Aligned scroll down block in normal layout flow preventing overlaps */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10 mt-auto">
        <Reveal delay={0.8} className="flex">
          <a href="#about" className="flex items-center gap-3 text-[10px] font-mono tracking-widest uppercase text-neutral-400 hover:text-white transition-colors">
            <motion.div 
              animate={{ y: [0, 5, 0] }} 
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <ArrowDown className="w-3.5 h-3.5 text-[#bca280]" />
            </motion.div>
            Scroll to explore
          </a>
        </Reveal>
      </div>
    </section>
  );
}
