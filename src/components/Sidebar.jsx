import { SIDEBAR_LINKS } from "../data/portfolioData";
import { useTranslation } from "react-i18next";

export default function Sidebar() {
  const { t } = useTranslation();
  return (
    <nav
      id="sidebar-nav"
      className="fixed left-0 top-0 h-screen w-64 border-r border-border bg-canvas flex-col py-20 z-40 hidden lg:flex"
    >
 
      <div className="px-6 mb-8">
        <p className="font-mono text-xs uppercase tracking-widest text-text-muted">
          {t('sidebar.navTree')}
        </p>
      </div>

      <div className="flex flex-col gap-1">
        {SIDEBAR_LINKS.map((link, i) => (
          <a
            key={link.labelKey}
            href={link.href}
            className={`flex items-center gap-3 px-4 py-2 font-mono text-xs uppercase tracking-widest spring-motion ${
              i === 0
                ? "text-accent bg-accent/10 border-l-2 border-accent"
                : "text-text-muted hover:bg-white/5 hover:text-accent-dim border-l-2 border-transparent"
            }`}
          >
            <span className="material-symbols-outlined">{link.icon}</span>
            <span>{t(link.labelKey)}</span>
          </a>
        ))}
      </div>

      <div className="mt-auto px-6 py-4">
        <div className="bg-surface-high p-4 rounded-lg border border-white/5">
          <p className="text-[10px] font-mono text-accent mb-1">
            {t('sidebar.systemStatus')}
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span className="text-[10px] font-mono text-text-secondary">
              {t('sidebar.operational')}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
