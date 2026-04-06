import { CODE_SNIPPET } from "../data/portfolioData";
import { useTranslation } from "react-i18next";

function TerminalWindow() {
  return (
    <div className="bg-canvas rounded-xl border border-white/10 overflow-hidden shadow-2xl animate-fade-in-up-delay-2">
     
      <div className="flex items-center justify-between px-4 py-2 bg-surface-high border-b border-white/5">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-error/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-warning/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-success/50" />
        </div>
      </div>

     
      <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
        {CODE_SNIPPET.map((line) => (
          <div key={line.line} className="flex gap-4">
            <span className="text-text-faint select-none">{line.line}</span>
            <span>
              <span
                className={
                  line.highlight === "cyan"
                    ? "text-accent"
                    : line.highlight === "purple"
                    ? "text-purple-400"
                    : "text-text-primary"
                }
              >
                {line.content}
              </span>
              <span className="text-text-secondary">{line.rest}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section
      id="hero"
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24 items-start"
    >
      {/* Left: Copy */}
      <div className="lg:col-span-7 pt-12">
        {/* Build badge */}
        <div className="inline-block px-3 py-1 bg-accent/10 border border-accent/30 rounded-full mb-6 animate-fade-in-up">
          <span className="font-mono text-xs text-accent tracking-tighter">
            {t('hero.available')}
            <span className="animate-terminal-blink ml-1">_</span>
          </span>
        </div>

        <h2 className="font-headline text-5xl lg:text-7xl font-extrabold tracking-tight text-text-primary mb-8 leading-[0.95] animate-fade-in-up-delay-1">
          {t('hero.titleP1')} <br />
          <span className="text-accent">+</span> <br />
          {t('hero.titleP2')}
        </h2>

        <p className="font-body text-lg text-text-secondary max-w-xl mb-10 leading-relaxed animate-fade-in-up-delay-2">
          {t('hero.subtitle')}
        </p>

        <div className="flex flex-wrap gap-4 animate-fade-in-up-delay-3">
          <a
            href="#contact"
            className="px-8 py-3 bg-accent text-canvas font-bold rounded-md hover:scale-95 active:scale-90 transition-all duration-200 uppercase tracking-wider text-sm"
          >
            {t('hero.cta1')}
          </a>
          <a
            href="#projects"
            className="px-8 py-3 bg-surface-high text-accent font-bold rounded-md hover:bg-surface-highest transition-all duration-200 uppercase tracking-wider text-sm border border-white/10"
          >
            {t('hero.cta2')}
          </a>
        </div>
      </div>

      {/* Right: Terminal graphic */}
      <div className="lg:col-span-5">
        <TerminalWindow />
      </div>
    </section>
  );
}
