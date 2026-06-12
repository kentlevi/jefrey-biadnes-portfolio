import { Reveal } from "./ui/Reveal";

export default function Skills() {
  const skillCategories = [
    {
      id: "05.01",
      title: "Languages",
      skills: ["JavaScript (ES6+)", "Python", "HTML5", "CSS3", "JSON"]
    },
    {
      id: "05.02",
      title: "Backend & Frameworks",
      skills: ["Django", "Express.js", "RESTful APIs", "Server Scripting"]
    },
    {
      id: "05.03",
      title: "Databases",
      skills: ["MySQL", "MariaDB", "Database Design", "SQL Query Optimization"]
    },
    {
      id: "05.04",
      title: "Platforms & Automation",
      skills: ["ERPNext", "ServiceNow (In Progress)", "Webhooks", "Custom Workflow Rules"]
    },
    {
      id: "05.05",
      title: "Workflow & Delivery",
      skills: ["Agile Scrum", "Git Version Control", "Automated Testing Mindset", "Debugging", "Deployment"]
    },
    {
      id: "05.06",
      title: "Core Competencies",
      skills: ["Business Analysis", "Problem Solving", "Adaptability", "Team Collaboration", "Technical Communication"]
    }
  ];

  return (
    <section id="skills" className="py-24 md:py-32 bg-[#050506] border-t border-neutral-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal>
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#bca280] mb-4 block">
            05 / TECHNICAL ARSENAL
          </div>
          <h2 className="text-3xl md:text-5xl font-light text-white mb-20 tracking-tight leading-tight">
            Core <span className="gold-gradient-text font-normal font-display">Capabilities</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {skillCategories.map((category, index) => (
            <Reveal key={index} delay={index * 0.08}>
              <div className="flex flex-col h-full bg-[#0b0b0c] border border-neutral-800/50 p-8 rounded-sm hover:border-[#bca280]/20 transition-all duration-300">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-800">
                  <h3 className="text-base font-display font-medium text-white">
                    {category.title}
                  </h3>
                  <span className="text-[10px] font-mono text-neutral-600">{category.id}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1.5 bg-[#111113] border border-neutral-800 text-neutral-400 text-xs font-mono hover:border-neutral-700 hover:text-white transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
