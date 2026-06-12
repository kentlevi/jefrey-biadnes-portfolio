import { Reveal } from "./ui/Reveal";

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-40 bg-[#070708] border-t border-neutral-900 noise-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal>
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#bca280] mb-4 block">
            03 / PROFESSIONAL HISTORY
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-white mb-24 tracking-tight leading-tight">
            Work <span className="gold-gradient-text font-normal font-display">Experience</span>
          </h2>
        </Reveal>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[9px] md:left-1/2 top-0 bottom-0 w-px bg-neutral-800"></div>

          {/* Experience Item */}
          <Reveal delay={0.1}>
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
              
              {/* Left Column (Desktop Date Label, right-aligned, sticky on scroll) */}
              <div className="md:sticky md:top-32 self-start md:text-right md:pr-16 relative pt-1">
                <div className="text-[#bca280] text-sm font-mono uppercase tracking-widest mb-2">
                  FULL-TIME POSITION
                </div>
                <div className="text-3xl md:text-4xl font-display font-light text-white mb-2">
                  2023 — 2025
                </div>
                <p className="text-neutral-500 text-sm font-mono uppercase tracking-wider">
                  Cebu, Philippines
                </p>
              </div>

              {/* Central Circle Marker (Desktop-only placement) */}
              <div className="hidden md:block absolute left-1/2 -translate-x-[4.5px] top-4 w-2 h-2 bg-[#bca280] rounded-full shadow-[0_0_12px_rgba(188,162,128,0.8)] z-10"></div>
              
              {/* Right Column (Achievements & Content Card) */}
              <div className="md:pl-16 relative">
                {/* Mobile Marker Only */}
                <div className="md:hidden absolute -left-[27px] top-3 w-2 h-2 bg-[#bca280] rounded-full"></div>
                
                <h3 className="text-2xl md:text-3xl font-display font-normal text-white mb-2">
                  Software Developer
                </h3>
                <h4 className="text-lg text-neutral-400 font-normal mb-8 font-mono">
                  Dinnox IT Solutions
                </h4>

                <div className="space-y-6">
                  <p className="text-base text-neutral-300 leading-relaxed font-light">
                    Orchestrated and scaled backend architectures, focusing on system automation pipelines, ERPNext configurations, and database orchestration.
                  </p>
                  
                  <ul className="space-y-5">
                    {[
                      {
                        label: "Efficiency Automation",
                        text: "Formulated highly automated scripting solutions via Python and JavaScript, shrinking workflow processing friction and raising team throughput by 30%."
                      },
                      {
                        label: "API Operations",
                        text: "Architected RESTful integration pipelines and dynamic webhooks to sync transaction data across web apps and internal platform modules instantly."
                      },
                      {
                        label: "Platform Engineering",
                        text: "Managed and fine-tuned structured databases across MySQL/MariaDB and curated custom server configurations, security layers, and scheduled reporting algorithms on ERPNext."
                      },
                      {
                        label: "Agile Alignment",
                        text: "Collaborated in Agile sprints alongside key platform stakeholders to construct detailed test cases, diagnose root-cause defects, and guarantee secure updates."
                      }
                    ].map((point, i) => (
                      <li key={i} className="flex gap-4 items-start bg-[#111113] p-5 border border-neutral-800/60 rounded-sm">
                        <div className="text-xs font-mono text-[#bca280] mt-1 flex-shrink-0">
                          [0{i+1}]
                        </div>
                        <div>
                          <strong className="text-white text-sm font-medium block mb-1">{point.label}</strong>
                          <span className="text-neutral-400 text-sm font-light leading-relaxed">{point.text}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
