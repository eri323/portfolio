import { useEffect, useRef, useState } from "react";
import { ABOUT_STATS } from "../data/portfolioData";
import { useTranslation } from "react-i18next";

function useInView(options = { threshold: 0.3 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, options);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, inView];
}

function CountUp({ target, duration = 1200 }) {
  const [value, setValue] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.4 });

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);

  return <span ref={ref}>{value}</span>;
}

function StatRow({ stat, index }) {
  const { t } = useTranslation();
  const isLast = index === ABOUT_STATS.length - 1;
  return (
    <div
      className={`grid grid-cols-12 items-baseline gap-4 py-6 ${
        !isLast ? "border-b border-white/5" : ""
      } animate-fade-in-up`}
      style={{ animationDelay: `${0.15 + index * 0.1}s` }}
    >
      <div className="col-span-7 flex items-baseline gap-3">
        <span className="font-headline text-6xl lg:text-7xl font-bold text-text-primary leading-none tracking-tight">
          {stat.animate ? <CountUp target={stat.value} /> : t(stat.valueKey)}
        </span>
        <span className="font-mono text-xs text-text-muted uppercase tracking-[0.2em]">
          {t(stat.suffixKey)}
        </span>
      </div>
      <div className="col-span-5 text-right">
        <p className="font-body text-xs lg:text-sm text-text-secondary leading-snug">
          {t(stat.descKey)}
        </p>
      </div>
    </div>
  );
}

export default function About() {
  const { t } = useTranslation();
  return (
    <section id="about" className="relative mb-28 px-4 md:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: copy */}
        <div className="lg:col-span-7">
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent block mb-4 animate-fade-in-up">
            {t("about.upperTitle")}
          </span>
          <h3 className="font-headline text-3xl lg:text-5xl font-bold text-text-primary tracking-tight leading-[1.05] mb-8 animate-fade-in-up-delay-1">
            {t("about.sectionTitle")}
          </h3>
          <div className="space-y-5 text-text-secondary text-base leading-relaxed max-w-2xl">
            <p className="animate-fade-in-up-delay-2">{t("about.paragraph1")}</p>
            <p className="animate-fade-in-up-delay-2">{t("about.paragraph2")}</p>
            <p className="text-text-primary font-medium animate-fade-in-up-delay-3 pt-2 border-l-2 border-accent pl-4 italic font-headline text-lg">
              {t("about.paragraph3")}
            </p>
          </div>
        </div>

        {/* Right: editorial stats */}
        <div className="lg:col-span-5 lg:pt-2">
          {ABOUT_STATS.map((stat, i) => (
            <StatRow key={stat.descKey} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
