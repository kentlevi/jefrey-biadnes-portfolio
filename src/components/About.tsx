import { Reveal } from "./ui/Reveal";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-40 bg-[#070708] border-t border-neutral-900 noise-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          <div className="lg:col-span-4">
            <Reveal>
              <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[#bca280] mb-4 block">
                01 / BRAND NARRATIVE
              </h2>
              <div className="text-4xl md:text-5xl font-display font-light text-white leading-tight mb-8">
                Building the engine <br />
                <span className="gold-gradient-text font-normal">behind the interface.</span>
              </div>
              
              <div className="space-y-6 hidden lg:block">
                <div className="h-px bg-neutral-800 w-full"></div>
                <div className="flex justify-between text-xs font-mono text-neutral-500">
                  <span>SYSTEM ARCHITECTURE</span>
                  <span>CEBU, PH</span>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-12">
            <Reveal delay={0.1}>
              <div className="prose prose-invert prose-lg max-w-3xl text-neutral-300 font-light leading-relaxed">
                <p className="text-xl text-neutral-200 font-light mb-6">
                  I am a high-value software developer with a deep focus on backend systems, integration pipelines, and custom platform automation. I don't just write code; I orchestrate workflows that solve real business scenarios, minimize manual overhead, and secure enterprise architectures.
                </p>
                <p className="mb-6">
                  My engineering execution is rooted in full-stack implementation, RESTful API automation, ERPNext customization, and optimized database architectures across MySQL and MariaDB. I specialize in translating complex client requirements into scalable, testable technical solutions within Agile environments.
                </p>
                <div className="bg-[#111113] border border-neutral-800/80 p-8 my-8 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#bca280]/5 rounded-full blur-2xl pointer-events-none"></div>
                  <h4 className="text-[#bca280] font-mono text-xs uppercase tracking-wider mb-2">ServiceNow Development Readiness</h4>
                  <p className="text-white font-light leading-relaxed m-0 text-base">
                    Actively translating my heavy background in JavaScript server-side scripting, workflow automation, and deep business analysis directly into the ServiceNow platform lifecycle to automate complex enterprise IT workflows.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-neutral-800/80 text-neutral-400">
                <div>
                  <div className="text-xs uppercase tracking-wider mb-2 font-mono text-neutral-500">Location</div>
                  <div className="text-white font-medium">Cebu, Philippines</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider mb-2 font-mono text-neutral-500">Primary Focus</div>
                  <div className="text-white font-medium">Backend & Systems</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider mb-2 font-mono text-neutral-500">Pathfinder</div>
                  <div className="text-[#bca280] font-semibold">ServiceNow Dev</div>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
