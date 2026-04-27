import { SERVICES } from "../data/portfolioData";
import { useTranslation } from "react-i18next";

function ServiceCard({ service, index }) {
  const { t } = useTranslation();
  return (
    <div
      className="relative bg-surface border border-white/5 rounded-md p-7 flex flex-col h-full hover:bg-surface-high hover:border-accent/30 transition-all duration-300 group animate-fade-in-up"
      style={{ animationDelay: `${0.1 + index * 0.1}s` }}
    >
      <div className="flex items-start justify-between mb-8">
        <span className="material-symbols-outlined text-accent text-[28px]">
          {service.icon}
        </span>
        <span className="font-mono text-[10px] text-text-faint tracking-[0.3em]">
          {service.index}
        </span>
      </div>

      <h4 className="font-headline text-2xl font-bold text-text-primary leading-tight mb-3">
        {t(service.titleKey)}
      </h4>

      <p className="text-text-secondary text-sm leading-relaxed mb-6">
        {t(service.descKey)}
      </p>

      <ul className="mt-auto space-y-2">
        {service.bullets.map((bulletKey) => (
          <li
            key={bulletKey}
            className="flex items-start gap-2 font-mono text-[11px] text-text-muted leading-relaxed"
          >
            <span className="text-accent select-none mt-[2px]">▸</span>
            <span>{t(bulletKey)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Services() {
  const { t } = useTranslation();
  return (
    <section id="services" className="mb-24 px-4 md:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-end">
        <div className="lg:col-span-8">
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent block mb-4">
            {t("services.upperTitle")}
          </span>
          <h3 className="font-headline text-4xl lg:text-5xl font-bold text-text-primary tracking-tight leading-[1.05]">
            {t("services.sectionTitle")}
          </h3>
        </div>
        <div className="lg:col-span-4 lg:text-right">
          <p className="text-text-secondary text-sm leading-relaxed max-w-sm lg:ml-auto">
            {t("services.sectionDesc")}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SERVICES.map((service, i) => (
          <ServiceCard key={service.index} service={service} index={i} />
        ))}
      </div>
    </section>
  );
}
