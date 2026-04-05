export default function Footer() {
  return (
    <footer
      id="site-footer"
      className="lg:ml-64 bg-canvas border-t border-white/10 w-full"
    >
      <div className="flex flex-col md:flex-row justify-between items-center px-8 py-6 gap-4">
    
        <div className="flex items-center gap-4">
          <span className="font-mono text-accent font-bold text-[10px]">
            JR_SYSTEMS_V1.0.0
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-success" />
          <p className="font-mono text-[10px] tracking-tighter text-text-faint">
            &copy; {new Date().getFullYear()} QA &amp; DEV PORTFOLIO
          </p>
        </div>

      
        <div className="flex gap-8">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] tracking-tighter text-text-faint hover:text-accent transition-colors uppercase"
          >
            GITHUB
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] tracking-tighter text-text-faint hover:text-accent transition-colors uppercase"
          >
            LINKEDIN
          </a>
          <a
            href="#hero"
            className="font-mono text-[10px] tracking-tighter text-text-faint hover:text-accent transition-colors uppercase"
          >
            TOP
          </a>
        </div>

      
        <div className="text-[10px] font-mono text-text-faint">
          BUILT_WITH: REACT + VITE
        </div>
      </div>
    </footer>
  );
}
