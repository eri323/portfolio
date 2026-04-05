import { COMPETENCIES } from "../data/portfolioData";
import { useTranslation } from "react-i18next";

function CompetencyCard({ item, index }) {
  const { t } = useTranslation();
  return (
    <div
      className={`${item.span} bg-surface-mid border border-white/5 p-8 hover:bg-surface-high transition-colors group relative overflow-hidden animate-fade-in-up`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative z-10">
        <span className="material-symbols-outlined text-3xl text-accent mb-6 block">
          {item.icon}
        </span>
        <h4 className="font-headline text-2xl font-bold text-text-primary mb-4">
          {t(item.titleKey)}
        </h4>
        <p className="text-text-secondary max-w-lg mb-6 leading-relaxed text-sm">
          {t(item.descKey)}
        </p>

      
        {item.tags.length > 0 && (
          <div className="flex gap-2 flex-wrap">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono px-2 py-1 bg-surface-highest text-accent"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

     
        {item.hasProgressBar && (
          <div className="w-full h-1 bg-surface-highest overflow-hidden mt-4">
            <div className="w-2/3 h-full bg-accent animate-pulse" />
          </div>
        )}
      </div>

    
      {item.decorativeIcon && (
        <div className="absolute right-0 top-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity pointer-events-none">
          <span className="material-symbols-outlined text-8xl">
            {item.decorativeIcon}
          </span>
        </div>
      )}
    </div>
  );
}

export default function Competencies() {
  const { t } = useTranslation();
  return (
    <section id="competencies" className="mb-24">
    
      <div className="flex items-baseline justify-between mb-12 border-b border-white/5 pb-4">
        <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
          {t('competencies.sectionTitle')}
        </h3>
        <span className="text-[10px] font-mono text-text-faint">
          {t('competencies.gridOffset')}
        </span>
      </div>

     
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {COMPETENCIES.map((item, i) => (
          <CompetencyCard key={item.titleKey} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
