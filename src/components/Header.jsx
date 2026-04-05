import { useState } from "react";
import { NAV_LINKS } from "../data/portfolioData";
import { useTranslation } from "react-i18next";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const currentLang = i18n.language?.startsWith('es') ? 'ES' : 'EN';
  const toggleLanguage = () => {
    i18n.changeLanguage(currentLang === 'ES' ? 'en' : 'es');
  };

  return (
    <header
      id="site-header"
      className="fixed top-0 w-full z-50 border-b border-border backdrop-blur-xl flex justify-between items-center px-6 py-3"
      style={{ backgroundColor: "rgba(19, 19, 21, 0.6)" }}
    >
    
      <div className="flex items-center gap-3">
        <span className="material-symbols-outlined text-accent">terminal</span>
        <h1 className="font-mono text-lg font-black text-accent tracking-tighter">
          {t('header.title')}
        </h1>
      </div>

    
      <nav className="hidden md:flex gap-8 items-center">
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={`font-headline uppercase tracking-tight text-sm transition-all duration-200 ${
              link.active
                ? "text-accent font-bold border-b-2 border-accent"
                : "text-text-muted font-medium hover:text-accent-dim"
            }`}
          >
            {t(link.labelKey)}
          </a>
        ))}
      </nav>

     
      <button
        id="mobile-menu-toggle"
        className="md:hidden text-text-muted hover:text-accent transition-colors"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle navigation menu"
      >
        <span className="material-symbols-outlined">
          {mobileOpen ? "close" : "menu"}
        </span>
      </button>

   
      <div className="hidden md:flex items-center gap-4">
        <button 
          onClick={toggleLanguage}
          className="font-mono text-xs font-bold text-text-muted hover:text-accent transition-colors border border-white/10 px-2 py-1 rounded"
        >
          {currentLang}
        </button>
        <button className="text-text-muted hover:text-accent transition-colors">
          <span className="material-symbols-outlined">settings_ethernet</span>
        </button>
      </div>

     
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-surface border-b border-border md:hidden">
          <nav className="flex flex-col px-6 py-4 gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`font-mono uppercase tracking-widest text-xs py-2 transition-colors ${
                  link.active
                    ? "text-accent"
                    : "text-text-muted hover:text-accent-dim"
                }`}
              >
                {t(link.labelKey)}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
