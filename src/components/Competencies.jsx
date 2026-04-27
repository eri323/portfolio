import { DEV_STACK, QA_STACK } from "../data/portfolioData";
import { useTranslation } from "react-i18next";

function CompetencyCard({ item, index, accentClass }) {
  const { t } = useTranslation();
  return (
    <div
      className="bg-surface border border-white/5 p-6 hover:bg-surface-high transition-all duration-300 group relative flex flex-col min-h-[140px] animate-fade-in-up rounded-md"
      style={{ animationDelay: `${index * 0.04}s` }}
    >
      <div className="flex justify-between items-start mb-8">
        <span className={`material-symbols-outlined text-[20px] ${accentClass}`}>
          {item.icon}
        </span>
        <span className="text-[10px] font-mono text-text-muted opacity-50 tracking-widest">
          {item.index}
        </span>
      </div>
      <div className="mt-auto">
        <h4 className="font-headline text-[17px] font-bold text-text-primary tracking-tight leading-none mb-1">
          {item.title}
        </h4>
        <span className="text-[9px] font-mono text-text-muted uppercase tracking-[0.2em]">
          {t(item.categoryKey)}
        </span>
      </div>
      <div className="absolute inset-0 border border-accent/0 group-hover:border-accent/10 transition-colors pointer-events-none rounded-md" />
    </div>
  );
}

function StackGroup({ titleKey, descKey, items, accentClass, dotClass }) {
  const { t } = useTranslation();
  return (
    <div>
      <div className="flex items-baseline gap-3 mb-6">
        <span className={`w-2 h-2 rounded-full ${dotClass}`} />
        <h4 className="font-mono text-xs font-bold text-text-primary tracking-[0.3em] uppercase">
          {t(titleKey)}
        </h4>
        <span className="font-mono text-[10px] text-text-muted tracking-wider">
          / {t(descKey)}
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item, i) => (
          <CompetencyCard
            key={`${titleKey}-${item.title}`}
            item={item}
            index={i}
            accentClass={accentClass}
          />
        ))}
      </div>
    </div>
  );
}

export default function Competencies() {
  const { t } = useTranslation();
  return (
    <section id="competencies" className="mb-24 px-4 md:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end">
        <div className="lg:col-span-8">
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent block mb-4">
            {t("competencies.upperTitle")}
          </span>
          <h3 className="font-headline text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight">
            {t("competencies.sectionTitle")}
          </h3>
        </div>
        <div className="lg:col-span-4 lg:text-right">
          <p className="text-text-secondary text-sm leading-relaxed max-w-sm lg:ml-auto">
            {t("competencies.sectionDesc")}
          </p>
        </div>
      </div>

      <div className="space-y-12">
        <StackGroup
          titleKey="competencies.groups.qa"
          descKey="competencies.groups.qaDesc"
          items={QA_STACK}
          accentClass="text-accent"
          dotClass="bg-accent"
        />
        <StackGroup
          titleKey="competencies.groups.dev"
          descKey="competencies.groups.devDesc"
          items={DEV_STACK}
          accentClass="text-success"
          dotClass="bg-success"
        />
      </div>
    </section>
  );
}
