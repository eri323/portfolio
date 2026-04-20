import { useRef } from "react";
import { PROJECTS } from "../data/portfolioData";
import { useTranslation } from "react-i18next";

function ProjectCard({ project, index }) {
  const { t } = useTranslation();
  return (
    <div className="flex-none w-[85vw] md:w-[600px] snap-start group animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
      {/* Image Container with Badge */}
      <div className="relative aspect-video rounded-lg overflow-hidden border border-white/5 bg-surface-low mb-6">
        <img 
          src={project.image} 
          alt={t(project.titleKey)}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute top-4 right-4 px-3 py-1 bg-surface/80 backdrop-blur-md border border-white/10 rounded-full flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="font-mono text-[9px] text-text-primary tracking-widest uppercase">
            {t(project.statusKey)}
          </span>
        </div>
      </div>

      {/* Project Metadata */}
      <div className="px-1">
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-[11px] text-accent font-bold">
            {project.index} {t('projects.projectSuffix')} {t(project.categoryKey)}
          </span>
        </div>
        
        <h4 className="font-headline text-3xl font-extrabold text-text-primary mb-4 group-hover:text-accent transition-colors">
          {t(project.titleKey)}
        </h4>
        
        <p className="text-text-secondary text-sm leading-relaxed max-w-xl opacity-80">
          {t(project.descKey)}
        </p>
      </div>
    </div>
  );
}

export default function Projects() {
  const { t } = useTranslation();
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const scrollAmount = direction === "left" ? -600 : 600;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section id="projects" className="mb-32">
      {/* Header with Nav */}
      <div className="flex items-center justify-between mb-12 px-2">
        <div>
          <h3 className="font-headline text-4xl lg:text-5xl font-black text-text-primary tracking-tight">
            Selected_Modules
          </h3>
        </div>
        <div className="flex items-center gap-8">
          <button className="font-mono text-[10px] tracking-widest text-text-muted hover:text-accent transition-colors">
            {t('projects.viewAll')}
          </button>
          
          <div className="flex gap-2">
            <button 
              onClick={() => scroll("left")}
              className="p-3 border border-white/10 rounded-full hover:border-accent transition-colors group"
            >
              <span className="material-symbols-outlined text-sm text-text-muted group-hover:text-accent">
                arrow_back_ios
              </span>
            </button>
            <button 
              onClick={() => scroll("right")}
              className="p-3 border border-white/10 rounded-full hover:border-accent transition-colors group"
            >
              <span className="material-symbols-outlined text-sm text-text-muted group-hover:text-accent">
                arrow_forward_ios
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Slider Area */}
      <div 
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-8 px-2"
      >
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.index} project={project} index={i} />
        ))}
        {/* Spacer at the end for final snap */}
        <div className="flex-none w-[5vw]" />
      </div>
    </section>
  );
}
