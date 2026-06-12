import { Reveal } from "./ui/Reveal";
import { SectionHeader } from "./ui/SectionHeader";
import { Server, Combine, Workflow, Settings2, Database, Briefcase } from "lucide-react";

export default function Expertise() {
  const expertises = [
    {
      id: "02.01",
      title: "Backend Development",
      description: "Building robust, secure, and highly available server-side architectures using Python, Django, and modern JavaScript.",
      icon: <Server className="w-5 h-5" />
    },
    {
      id: "02.02",
      title: "API & System Integrations",
      description: "Designing seamless communication between decoupled systems via REST APIs, webhooks, and gateway pipelines.",
      icon: <Combine className="w-5 h-5" />
    },
    {
      id: "02.03",
      title: "Workflow Automation",
      description: "Translating manual business operations into automated script-driven routines that increase throughput and reduce human error.",
      icon: <Workflow className="w-5 h-5" />
    },
    {
      id: "02.04",
      title: "ERP & Custom Scripting",
      description: "Deep customization of enterprise platforms like ERPNext, modifying core behaviors, security rules, and reporting logic.",
      icon: <Settings2 className="w-5 h-5" />
    },
    {
      id: "02.05",
      title: "Database Architecture",
      description: "Designing structured, normalized, and performant relational schemas in MySQL and MariaDB for high-volume environments.",
      icon: <Database className="w-5 h-5" />
    },
    {
      id: "02.06",
      title: "ServiceNow Readiness",
      description: "Applying strong JavaScript foundations, business logic translation, and automation experience toward the ServiceNow ecosystem.",
      icon: <Briefcase className="w-5 h-5" />
    }
  ];

  return (
    <section id="expertise" className="py-24 md:py-40 bg-[#050506] border-t border-neutral-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal>
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#bca280] mb-4">02 / CORE CAPABILITIES</div>
          <SectionHeader 
            title="Engineered for Scale" 
            subtitle="Building robust digital pipelines. From structural schema optimizations to cross-service webhooks, I focus on the high-fidelity setups that keep workflows perfectly synchronized."
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {expertises.map((item, index) => (
            <Reveal key={index} delay={index * 0.08}>
              <div className="group h-full flex flex-col p-8 bg-[#0b0b0c] border border-neutral-800/60 hover:border-[#bca280]/20 transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#bca280]/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                
                <div className="flex items-center justify-between mb-8">
                  <div className="w-10 h-10 bg-neutral-900 border border-neutral-800 rounded flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:border-[#bca280]/30 transition-all duration-500">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-mono text-neutral-600 group-hover:text-[#bca280] transition-colors">{item.id}</span>
                </div>

                <h3 className="text-xl font-display font-medium text-white mb-3 group-hover:text-neutral-100 transition-colors">
                  {item.title}
                </h3>
                <p className="text-neutral-400 font-light text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
