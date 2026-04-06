import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <section
      id="contact"
      className="mb-24 py-20 bg-surface-low rounded-xl border border-white/5 px-8 md:px-16 relative overflow-hidden"
    >
      <div className="relative z-10">
        <h3 className="font-headline text-5xl md:text-6xl font-extrabold text-text-primary mb-8 tracking-tighter animate-fade-in-up">
          {t('contact.title1')} <br />
          <span className="text-accent italic">{t('contact.title2')}</span> {t('contact.title3')}
        </h3>
        <p className="font-body text-xl text-text-secondary max-w-xl mb-12 animate-fade-in-up-delay-1">
          {t('contact.desc')}
        </p>
        <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up-delay-2">
          <a
            href="mailto:erickgutierrez085@gmail.com"
            className="inline-flex items-center gap-3 px-10 py-5 bg-accent text-canvas font-black uppercase tracking-widest text-sm spring-motion hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
          >
            <span className="material-symbols-outlined">mail</span>
            {t('contact.cta')}
          </a>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/eri323"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent transition-colors font-mono text-sm tracking-widest"
            >
              {t('contact.github')}
            </a>
            <a
              href="https://www.linkedin.com/in/erick-gutiérrez-8b4289248"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent transition-colors font-mono text-sm tracking-widest"
            >
              {t('contact.linkedin')}
            </a>
          </div>
        </div>
      </div>

     
      <div className="absolute right-[-10%] bottom-[-20%] rotate-12 opacity-[0.03] pointer-events-none select-none">
        <span className="font-mono text-[20rem] font-black">JR</span>
      </div>
    </section>
  );
}
