import { COMPETENCIES } from "../data/portfolioData";
import { useTranslation } from "react-i18next";

function CompetencyCard({ item, index }) {
  const { t } = useTranslation();
  return (
    <div
      className="bg-surface border border-white/5 p-6 hover:bg-surface-high transition-all duration-300 group relative flex flex-col min-h-[140px] animate-fade-in-up"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      {/* Top row: Icon and Index */}
      <div className="flex justify-between items-start mb-8">
        <span className="material-symbols-outlined text-[20px] text-accent">
          {item.icon}
        </span>
        <span className="text-[10px] font-mono text-text-muted opacity-50 tracking-widest">
          {item.index}
        </span>
      </div>
      
      {/* Middle row: Title and Category */}
      <div className="mt-auto">
        <h4 className="font-headline text-[17px] font-bold text-text-primary tracking-tight leading-none mb-1">
          {item.title}
        </h4>
        <span className="text-[9px] font-mono text-text-muted uppercase tracking-[0.2em]">
          {t(item.categoryKey)}
        </span>
      </div>

      {/* Subtle border glow */}
      <div className="absolute inset-0 border border-accent/0 group-hover:border-accent/10 transition-colors pointer-events-none" />
    </div>
  );
}

export default function Competencies() {
  const { t } = useTranslation();
  return (
    <section id="competencies" className="mb-24 px-4 md:px-0">
      {/* Header layout from image */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end">
        <div className="lg:col-span-8">
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent block mb-4">
            {t('competencies.upperTitle')}
          </span>
          <h3 className="font-headline text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight">
            {t('competencies.sectionTitle')}
          </h3>
        </div>
        <div className="lg:col-span-4 lg:text-right">
          <p className="text-text-secondary text-sm leading-relaxed max-w-sm lg:ml-auto">
            {t('competencies.sectionDesc')}
          </p>
        </div>
      </div>

      {/* Grid from image (4 columns) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {COMPETENCIES.map((item, i) => (
          <CompetencyCard key={item.title} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
