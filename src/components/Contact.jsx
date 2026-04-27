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
          {t("contact.title1")} <br />
          <span className="text-accent italic">{t("contact.title2")}</span>{" "}
          {t("contact.title3")}
        </h3>
        <p className="font-body text-xl text-text-secondary max-w-xl mb-12 animate-fade-in-up-delay-1">
          {t("contact.desc")}
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 animate-fade-in-up-delay-2">
          <a
            href="mailto:erickgutierrez085@gmail.com"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent text-canvas font-black uppercase tracking-widest text-sm spring-motion hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] rounded-md"
          >
            <span className="material-symbols-outlined">mail</span>
            {t("contact.cta")}
          </a>
          <a
            href="https://www.linkedin.com/in/erick-gutiérrez-8b4289248"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-surface-high text-text-primary border border-white/10 font-bold uppercase tracking-widest text-sm hover:border-accent hover:text-accent transition-colors rounded-md"
          >
            <span className="material-symbols-outlined">work</span>
            {t("contact.ctaLinkedin")}
          </a>
          <a
            href="https://github.com/eri323"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 text-text-muted border border-white/10 font-bold uppercase tracking-widest text-sm hover:border-accent hover:text-accent transition-colors rounded-md"
          >
            <span className="material-symbols-outlined">code</span>
            {t("contact.github")}
          </a>
        </div>
      </div>

      <div className="absolute right-[-10%] bottom-[-20%] rotate-12 opacity-[0.03] pointer-events-none select-none">
        <span className="font-mono text-[20rem] font-black">{"{}"}</span>
      </div>
    </section>
  );
}
