import { PROJECTS } from "../data/portfolioData";
import { useTranslation } from "react-i18next";

function ProjectItem({ project, index }) {
  const { t } = useTranslation();
  return (
    <div
      className={`group py-10 border-t border-white/10 flex flex-col md:flex-row gap-8 items-start hover:bg-white/[0.02] transition-all px-4 animate-fade-in-up`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
   
      <div className="shrink-0 w-full md:w-48">
        <span className="font-mono text-sm text-text-muted">
          {project.index}{t('projects.projectSuffix')}
        </span>
      </div>

   
      <div className="grow">
        <h4 className="font-headline text-2xl font-bold text-text-primary mb-2 group-hover:text-accent transition-colors">
          {t(project.titleKey)}
        </h4>
        <div className="flex gap-4 mb-4 flex-wrap">
          {project.tags.map((tag) => (
            <span key={tag} className="font-mono text-xs text-accent">
              [ {tag} ]
            </span>
          ))}
        </div>
        <p className="text-text-secondary max-w-2xl leading-relaxed">
          {t(project.descKey)}
        </p>
      </div>

    
      <div className="shrink-0">
        <button className="p-4 border border-white/10 rounded-md hover:border-accent transition-colors spring-motion">
          <span className="material-symbols-outlined text-text-secondary group-hover:text-accent transition-colors">
            arrow_outward
          </span>
        </button>
      </div>
    </div>
  );
}

export default function Projects() {
  const { t } = useTranslation();
  return (
    <section id="projects" className="mb-24">
    
      <div className="flex items-baseline justify-between mb-12">
        <h3 className="font-headline text-4xl font-extrabold tracking-tight text-text-primary">
          {t('projects.sectionTitle')}
        </h3>
      </div>

     
      <div className="space-y-0">
        {PROJECTS.map((project, i) => (
          <ProjectItem key={project.index} project={project} index={i} />
        ))}
       
        <div className="border-t border-white/10" />
      </div>
    </section>
  );
}
