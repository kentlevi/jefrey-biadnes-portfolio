import { Reveal } from "./ui/Reveal";

export default function Education() {
  return (
    <section className="py-24 bg-[#050506] border-t border-b border-neutral-950 noise-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-4">
            <Reveal>
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#bca280] mb-4 block">
                06 / ACADEMIC FOUNDATION
              </div>
              <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight leading-tight">
                Academic <br className="hidden lg:block" />
                <span className="gold-gradient-text font-normal font-display">Credentials</span>
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <Reveal delay={0.1}>
              <div className="p-8 md:p-12 bg-[#0b0b0c] border border-neutral-800/60 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#bca280]/40 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
                <div>
                  <h3 className="text-xl md:text-2xl font-display font-medium text-white mb-2 leading-snug">
                    Bachelor of Science in Information Technology
                  </h3>
                  <p className="text-neutral-400 text-sm md:text-base font-light">
                    Cebu Technological University — Ginatilan Campus
                  </p>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="inline-block px-4 py-2 bg-neutral-900 border border-neutral-800 text-[#bca280] font-mono text-xs tracking-widest uppercase">
                    2019 — 2023
                  </div>
                </div>
              </div>
            </Reveal>
            
            <Reveal delay={0.2} className="mt-8">
               <p className="text-neutral-500 font-light max-w-2xl text-xs md:text-sm leading-relaxed italic pl-4 border-l border-neutral-800">
                  Rigorous theoretical and structural baseline focusing on hardware architectures, database modeling, and automated algorithm processes—equipping me to operate elegantly inside massive, mission-critical ServiceNow enterprise workflows.
               </p>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
