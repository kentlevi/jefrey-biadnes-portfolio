import { Reveal } from "./ui/Reveal";
import { Mail, Phone, MapPin, Download } from "lucide-react";

export default function Contact() {
  const handleDownloadResume = () => {
    // Generate simple programmatic download of Jefrey's resume context or prompt
    const resumeText = `
Name: Jefrey Biadnes
Phone: 09333263665
Email: jefreybiadnes@gmail.com
Location: Palanas, Ginatilan, Cebu, Philippines
Primary Role: Software Developer
Positioning: Backend Developer / System Integration Developer / ServiceNow Developer

Professional Summary:
Software Developer with strong experience in JavaScript scripting, database design, and custom platform automation, eager to grow into a ServiceNow Developer role. Proven experience in full stack development, REST API automation, workflow integration, ERP customization, backend scripting, and optimized database architecture. Strong understanding of Agile Scrum methodologies, debugging, testable software delivery, and business analysis for translating client requirements into scalable technical solutions.

Technical Skills:
- Scripting & Languages: JavaScript (ES6+), Python, Django, HTML5, CSS3, JSON
- Integrations & APIs: REST API Automation, Data Integration, Webhooks, API Gateway Integration
- Custom Platforms: ERPNext Customization, Custom Workflow Rules, Server Automation Scripting
- Databases & Admin: MySQL, MariaDB, Database Design, SQL Query Optimization, Server Administration
- Development Practices: Agile Scrum, Automated Testing Mindset, Debugging, Deployment, Git Version Control
- Soft Skills: Business Analysis, Adaptability, Analytical Thinking, Team Collaboration, Technical Communication

Work Experience:
- Software Developer at Dinnox IT Solutions (2023 - 2025)
  * Created custom scripts using JavaScript and Python to extend platform capabilities and automate workflows (30% efficiency increase).
  * Built RESTful APIs and webhook integration pipelines for Ordering and Enterprise systems.
  * Customised ERPNext installations (server scripts, security rules, fields, automated reporting).
  * Engineered MySQL & MariaDB enterprise databases.
  * Collaborated in Agile environments to analyze user stories and resolve bugs.

Education:
- Bachelor of Science in Information Technology
  Cebu Technological University - Ginatilan Extension Campus (2019 - 2023)
`;
    const blob = new Blob([resumeText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Jefrey_Biadnes_Resume.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="contact" className="py-24 md:py-40 bg-[#070708] noise-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-light tracking-tighter text-white mb-6">
              Let's Build Workflows <br />
              <span className="gold-gradient-text font-normal font-display">That Matter.</span>
            </h2>
            <p className="text-neutral-400 text-sm md:text-base font-light max-w-xl mx-auto leading-relaxed">
              Ready to construct reliable digital pipelines, transition to ServiceNow, or deploy high-performance backend schemas.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 max-w-4xl mx-auto">
          <Reveal delay={0.1}>
            <a href="mailto:jefreybiadnes@gmail.com" className="group flex flex-col items-center justify-center p-12 bg-[#0b0b0c] border border-neutral-800/60 hover:border-[#bca280]/35 transition-colors text-center aspect-square rounded-sm">
              <Mail className="w-6 h-6 text-neutral-500 group-hover:text-[#bca280] mb-6 transition-colors" />
              <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-2">Email</div>
              <div className="text-white text-xs md:text-sm font-light">jefreybiadnes@gmail.com</div>
            </a>
          </Reveal>
          
          <Reveal delay={0.2}>
            <div className="group flex flex-col items-center justify-center p-12 bg-[#0b0b0c] border border-neutral-800/60 hover:border-[#bca280]/35 transition-colors text-center aspect-square rounded-sm">
              <Phone className="w-6 h-6 text-neutral-500 group-hover:text-[#bca280] mb-6 transition-colors" />
              <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-2">Phone</div>
              <div className="text-white text-xs md:text-sm font-light">0933-326-3665</div>
            </div>
          </Reveal>
          
          <Reveal delay={0.3}>
            <div className="group flex flex-col items-center justify-center p-12 bg-[#0b0b0c] border border-neutral-800/60 hover:border-[#bca280]/35 transition-colors text-center aspect-square rounded-sm">
              <MapPin className="w-6 h-6 text-neutral-500 group-hover:text-[#bca280] mb-6 transition-colors" />
              <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-2">Location</div>
              <div className="text-white text-xs md:text-sm font-light pb-1">Cebu, Philippines</div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.4}>
            <div className="flex justify-center">
                <button 
                  onClick={handleDownloadResume}
                  className="flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold hover:bg-[#e2d1bc] transition-all duration-300 group rounded-sm"
                >
                    <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                    Download Career Summary
                </button>
            </div>
        </Reveal>
      </div>
    </section>
  );
}
