import { useRef } from "react";
import { PROJECTS } from "../data/portfolioData";
import { useTranslation } from "react-i18next";

function ProjectCard({ project, index }) {
  const { t } = useTranslation();
  return (
    <div
      className="flex-none w-[85vw] md:w-[600px] snap-start group animate-fade-in-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
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

      <div className="px-1">
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-[11px] text-accent font-bold">
            {project.index} {t("projects.projectSuffix")} {t(project.categoryKey)}
          </span>
        </div>

        <h4 className="font-headline text-3xl font-extrabold text-text-primary mb-4 group-hover:text-accent transition-colors">
          {t(project.titleKey)}
        </h4>

        <p className="text-text-secondary text-sm leading-relaxed max-w-xl opacity-90 mb-4">
          {t(project.descKey)}
        </p>

        {project.tags && (
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] text-text-muted bg-surface-high border border-white/5 px-2 py-1 rounded tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {project.qaNoteKey && (
          <div className="bg-success/5 border-l-2 border-success/60 pl-4 py-3 mb-5 rounded-r">
            <div className="flex items-center gap-2 mb-1">
              <span className="material-symbols-outlined text-success text-[14px]">
                verified
              </span>
              <span className="font-mono text-[10px] text-success font-bold tracking-[0.2em] uppercase">
                {t("projects.qaLabel")}
              </span>
            </div>
            <p className="text-text-secondary text-xs leading-relaxed">
              {t(project.qaNoteKey)}
            </p>
          </div>
        )}

        <div className="flex flex-wrap gap-3">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-canvas font-mono text-[11px] font-bold uppercase tracking-widest rounded hover:scale-95 transition-transform"
            >
              <span className="material-symbols-outlined text-[14px]">
                open_in_new
              </span>
              {t("projects.demo")}
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-surface-high text-text-primary border border-white/10 font-mono text-[11px] font-bold uppercase tracking-widest rounded hover:border-accent hover:text-accent transition-colors"
            >
              <span className="material-symbols-outlined text-[14px]">
                code
              </span>
              {t("projects.code")}
            </a>
          )}
        </div>
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
      <div className="flex items-center justify-between mb-12 px-2">
        <div>
          <h3 className="font-headline text-4xl lg:text-5xl font-black text-text-primary tracking-tight">
            {t("projects.sectionTitle")}
          </h3>
        </div>
        <div className="flex items-center gap-8">
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll projects left"
              className="p-3 border border-white/10 rounded-full hover:border-accent transition-colors group"
            >
              <span className="material-symbols-outlined text-sm text-text-muted group-hover:text-accent">
                arrow_back_ios
              </span>
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll projects right"
              className="p-3 border border-white/10 rounded-full hover:border-accent transition-colors group"
            >
              <span className="material-symbols-outlined text-sm text-text-muted group-hover:text-accent">
                arrow_forward_ios
              </span>
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-8 px-2"
      >
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.index} project={project} index={i} />
        ))}
        <div className="flex-none w-[5vw]" />
      </div>
    </section>
  );
}
