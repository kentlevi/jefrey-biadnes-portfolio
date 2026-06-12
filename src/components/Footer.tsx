export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-neutral-900 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex flex-col items-center md:items-start">
          <span className="font-display font-bold tracking-wide text-white mb-1">
            JEFREY BIADNES
          </span>
          <span className="text-xs uppercase tracking-widest text-neutral-500">
            Software Engineer
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-neutral-400">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#expertise" className="hover:text-white transition-colors">Expertise</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
        </div>

        <div className="text-xs text-neutral-600 font-light">
          &copy; {new Date().getFullYear()} Jefrey Biadnes. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
