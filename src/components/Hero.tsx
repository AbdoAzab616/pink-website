import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./Hero.css";

export default function Hero() {
  const { t } = useTranslation();
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const reduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    el.style.setProperty("--sx", "0.5");
    el.style.setProperty("--sy", "0.5");
    el.style.setProperty("--px", "0");
    el.style.setProperty("--py", "0");

    if (reduced) return;

    let raf = 0;

    const clamp = (v: number) => Math.max(-1, Math.min(1, v));

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      const x = clamp(dx);
      const y = clamp(dy);

      const sx = (e.clientX - rect.left) / rect.width;
      const sy = (e.clientY - rect.top) / rect.height;

      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--px", x.toFixed(3));
        el.style.setProperty("--py", y.toFixed(3));
        el.style.setProperty("--sx", sx.toFixed(3));
        el.style.setProperty("--sy", sy.toFixed(3));
      });
    };

    const onLeave = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--px", "0");
        el.style.setProperty("--py", "0");
        el.style.setProperty("--sx", "0.5");
        el.style.setProperty("--sy", "0.5");
      });
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <section ref={heroRef} className="hero hero--type hero--parallax">
      <div className="hero__spotlight" aria-hidden="true" />
      <div className="hero__bg" aria-hidden="true" />

      <div className="hero__container hero__container--type">
        <div className="type type--split">
          <div className="type__left">
            <div className="hero__pill">
              <span className="hero__dot" />
              {t("hero.pill")}
            </div>

            <h1 className="type__h1 type__h1--oneLine">
              {t("hero.title")} <span>{t("hero.titleHighlight")}</span>
            </h1>
          </div>

          <div className="type__right">
            <p className="type__p">{t("hero.subtitle")}</p>

            <div className="type__chips">
              <span className="type__chip">{t("hero.chip1")}</span>
              <span className="type__chip">{t("hero.chip2")}</span>
              <span className="type__chip">{t("hero.chip3")}</span>
            </div>
          </div>
        </div>

        <div className="type__bgWord" aria-hidden="true">
          {t("hero.bgWord")}
        </div>
      </div>
    </section>
  );
}


