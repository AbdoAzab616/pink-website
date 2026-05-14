import { useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./BestSellers.css";

type BestSeller = {
  id: string;
  img: string;
  tag?: string;
};

const bestSellers: BestSeller[] = [
  {
    id: "facial550",
    img: "/products/pink-facial-classic-tissue-550t.png",
  },
  {
    id: "kitchenXXL",
    img: "/products/pink-kitchen-jumpo-roll-xxl.png",
  },
  {
    id: "toilet6",
    img: "/products/pink-toilet-compressed-6r.png",
  },
  {
    id: "cFold200",
    img: "/products/pink-c-fold-200t.png",
  },
  {
    id: "facial500",
    img: "/products/pink-facial-classic-tissue-500t.png",
  },
];

export default function BestSellers() {
  const { t } = useTranslation();
  const trackRef = useRef<HTMLDivElement | null>(null);

  const scrollBy = (dir: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;

    const amount = Math.round(el.clientWidth * 0.85) * dir;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="bspro">
      <div className="bspro__container">
        <div className="bspro__head">
          <div>
            <h2 className="bspro__title">
              {t("bestsellers.title")}
            </h2>

            <p className="bspro__desc">
              {t("bestsellers.subtitle")}
            </p>
          </div>

          <div
            className="bspro__controls"
            aria-label={t("bestsellers.controls")}
          >
            <button
              className="bspro__btnIcon"
              onClick={() => scrollBy(-1)}
              aria-label={t("bestsellers.scrollLeft")}
            >
              ‹
            </button>

            <button
              className="bspro__btnIcon"
              onClick={() => scrollBy(1)}
              aria-label={t("bestsellers.scrollRight")}
            >
              ›
            </button>
          </div>
        </div>

        <div ref={trackRef} className="bspro__track">
          {bestSellers.map((p) => (
            <article key={p.id} className="bspro__card">
              {p.tag && <div className="bspro__tag">{p.tag}</div>}

              <div className="bspro__media">
                <img
                  src={p.img}
                  alt={t(`bestsellers.products.${p.id}.name`)}
                  className="bspro__img"
                  loading="lazy"
                />
              </div>

              <div className="bspro__body">
                <div className="bspro__name">
                  {t(`bestsellers.products.${p.id}.name`)}
                </div>

                <div className="bspro__sub">
                  {t(`bestsellers.products.${p.id}.subtitle`)}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="bspro__cta">
          <Link
            to="/products"
            className="bspro__ctaBtn bspro__ctaBtn--primary"
          >
            {t("bestsellers.viewAll")}
          </Link>

          <Link
            to="/where-to-buy"
            className="bspro__ctaBtn bspro__ctaBtn--ghost"
          >
            {t("bestsellers.whereToBuy")}
          </Link>
        </div>
      </div>
    </section>
  );
}