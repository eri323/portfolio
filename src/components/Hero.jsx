import { useEffect, useRef, useState } from "react";
import { CODE_SNIPPET } from "../data/portfolioData";
import { useTranslation } from "react-i18next";

function TerminalWindow() {
  const [renderedLines, setRenderedLines] = useState(
    CODE_SNIPPET.map((l) => ({ ...l, content: "", rest: "" }))
  );
  const [done, setDone] = useState(false);

  useEffect(() => {
    let lineIdx = 0;
    let phase = "content";
    let charIdx = 0;
    const speed = 18;

    const tick = () => {
      if (lineIdx >= CODE_SNIPPET.length) {
        setDone(true);
        return;
      }
      const target = CODE_SNIPPET[lineIdx];
      const field = phase === "content" ? "content" : "rest";
      const targetText = target[field];

      setRenderedLines((prev) => {
        const next = [...prev];
        next[lineIdx] = {
          ...next[lineIdx],
          [field]: targetText.slice(0, charIdx + 1),
        };
        return next;
      });

      charIdx += 1;
      if (charIdx >= targetText.length) {
        if (phase === "content") {
          phase = "rest";
          charIdx = 0;
        } else {
          lineIdx += 1;
          phase = "content";
          charIdx = 0;
        }
      }
      timeout = setTimeout(tick, speed);
    };

    let timeout = setTimeout(tick, 600);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="bg-canvas/90 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] animate-fade-in-up-delay-2">
      <div className="flex items-center justify-between px-4 py-2 bg-surface-high border-b border-white/5">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-error/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-warning/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-success/50" />
        </div>
        <span className="font-mono text-[10px] text-text-faint tracking-widest uppercase">
          booking.test.js
        </span>
      </div>

      <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto min-h-[180px]">
        {renderedLines.map((line, i) => {
          const isLast = i === renderedLines.length - 1;
          return (
            <div key={line.line} className="flex gap-4">
              <span className="text-text-faint select-none">{line.line}</span>
              <span>
                <span
                  className={
                    line.highlight === "cyan"
                      ? "text-accent"
                      : line.highlight === "purple"
                      ? "text-accent-dim"
                      : "text-text-primary"
                  }
                >
                  {line.content}
                </span>
                <span className="text-text-secondary">{line.rest}</span>
                {isLast && done && (
                  <span className="animate-terminal-blink text-accent">▌</span>
                )}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section
      id="hero"
      className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 mb-32 items-start pt-8 lg:pt-12"
    >
      {/* Tech grid background */}
      <div className="absolute inset-0 bg-tech-grid pointer-events-none opacity-60 [mask-image:radial-gradient(ellipse_at_top_left,black_30%,transparent_75%)]" />

      {/* Editorial number watermark */}
      <span
        aria-hidden
        className="hidden lg:block absolute right-[2%] top-[-1rem] font-headline text-[20rem] leading-none font-black text-accent/[0.05] select-none pointer-events-none tracking-tighter"
      >
        01
      </span>

      {/* Left: Copy */}
      <div className="relative lg:col-span-7 pt-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/30 rounded-full mb-8 animate-fade-in-up">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="font-mono text-[10px] text-accent tracking-[0.2em] uppercase">
            {t("hero.available")}
          </span>
        </div>

        <h2 className="font-headline text-5xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-text-primary mb-8 leading-[0.95] animate-fade-in-up-delay-1">
          {t("hero.titleP1")}
          <br />
          <span className="text-accent italic font-normal">+</span>{" "}
          <span className="italic font-normal">{t("hero.titleP2")}</span>
        </h2>

        <p className="font-body text-base lg:text-lg text-text-secondary max-w-xl mb-10 leading-relaxed animate-fade-in-up-delay-2">
          {t("hero.subtitle")}
        </p>

        <div className="flex flex-wrap gap-4 animate-fade-in-up-delay-3">
          <a
            href="#contact"
            className="px-7 py-3 bg-accent text-canvas font-bold rounded-md hover:scale-95 active:scale-90 transition-all duration-200 uppercase tracking-wider text-sm font-mono"
          >
            {t("hero.cta1")}
          </a>
          <a
            href="#projects"
            className="px-7 py-3 bg-surface-high text-accent font-bold rounded-md hover:bg-surface-highest transition-all duration-200 uppercase tracking-wider text-sm border border-white/10 font-mono"
          >
            {t("hero.cta2")}
          </a>
        </div>
      </div>

      {/* Right: Terminal with editorial offset */}
      <div className="relative lg:col-span-5 lg:translate-y-12 lg:-translate-x-2">
        <TerminalWindow />
      </div>
    </section>
  );
}
