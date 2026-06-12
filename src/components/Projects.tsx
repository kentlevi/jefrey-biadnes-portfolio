import { Reveal } from "./ui/Reveal";
import { ArrowUpRight } from "lucide-react";
import imgEnterprise from "../assets/images/enterprise_db_dashboard_1781270151053.webp";
import imgApi from "../assets/images/cariton_delivery_api_1781270166138.webp";

export default function Projects() {
  const projects = [
    {
      id: "04.01",
      title: "Enterprise Web-Based System",
      role: "Core Backend Developer",
      summary: "Served as the core backend construct for a large-scale enterprise web application. Developed sophisticated modules governing secure user authentication, complex backend data processing workflows, and custom script execution.",
      impact: "Designed highly normalized database schemas in MySQL, optimizing indices and queries to handle enterprise workloads with uncompromising reliability & security.",
      stack: ["Python", "Django", "MySQL", "Server Scripting"],
      image: imgEnterprise
    },
    {
      id: "04.02",
      title: "Cariton Core Integration",
      role: "Backend & API Engineer",
      summary: "Architected and maintained the backend APIs for a robust web-based online ordering and transaction ecosystem, transitioning legacy manual processing parameters to live endpoints.",
      impact: "Implemented real-time order tracking, client integration endpoints, and transaction mapping in MariaDB, tightly synchronizing backend state with a responsive JavaScript frontend.",
      stack: ["Python", "Django", "MariaDB", "REST API", "JavaScript"],
      image: imgApi
    }
  ];

  return (
    <section id="projects" className="py-24 md:py-40 bg-[#050506] border-t border-neutral-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
            <div>
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#bca280] mb-4 block">
                04 / CASE STUDIES
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-white tracking-tight leading-tight">
                Featured <span className="gold-gradient-text font-normal font-display">Work</span>
              </h2>
            </div>
            <p className="text-neutral-400 text-base md:text-lg font-light max-w-lg leading-relaxed">
              Applications engineered for intensive workloads, tight schema security, and automated transaction pipelines.
            </p>
          </div>
        </Reveal>

        <div className="space-y-16 lg:space-y-32">
          {projects.map((project, index) => (
            <Reveal key={index} delay={0.1}>
              <div className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                
                {/* Visual Representation */}
                <div className={`lg:col-span-6 aspect-[4/3] bg-neutral-950 overflow-hidden relative flex items-center justify-center border border-neutral-800/80 ${index % 2 === 1 ? 'lg:order-last' : ''}`}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-[0.16,1,0.3,1]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050506]/90 via-[#050506]/10 to-transparent pointer-events-none"></div>
                  <span className="absolute top-4 left-4 font-mono text-xs text-white/50 bg-[#070708]/80 px-3 py-1 border border-neutral-800/60 backdrop-blur-md">
                    {project.id}
                  </span>
                </div>

                {/* Content */}
                <div className="lg:col-span-6 flex flex-col justify-center">
                  <div className="text-[#bca280] font-mono text-xs uppercase mb-3 tracking-widest">{project.role}</div>
                  <h3 className="text-2xl md:text-4xl font-display font-medium text-white mb-6 group-hover:text-neutral-100 transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="space-y-6 mb-8 text-neutral-400 font-light text-sm md:text-base leading-relaxed">
                     <p>{project.summary}</p>
                     <p className="pl-4 border-l-2 border-[#bca280]/40 text-neutral-300 bg-neutral-900/30 py-2 pr-4">
                       <strong className="text-[#e2d1bc] text-xs font-mono uppercase tracking-wider block mb-1">Architectural Safeguard:</strong>
                       {project.impact}
                     </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.stack.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-[#111113] border border-neutral-800 text-neutral-300 text-xs font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Aesthetic link button structure */}
                  <a href="#contact" className="inline-flex items-center gap-2 text-[#bca280] font-medium tracking-wide uppercase text-xs border-b border-[#bca280]/30 hover:border-[#bca280] pb-1 transition-all w-max group/btn">
                    Discuss this architecture <ArrowUpRight className="w-4 h-4 group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>

              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
