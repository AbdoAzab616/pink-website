import { useRef } from "react";
import { Link } from "react-router-dom";
import "./BestSellers.css";

type BestSeller = {
  name: string;
  subtitle: string;
  img: string;
  tag?: string;
};

const bestSellers: BestSeller[] = [
  {
    name: "Facial Tissue 550 Sheets",
    subtitle: "Ultra soft • 3 ply",
    img: "/products/pink-facial-classic-tissue-550t.png",
    tag: "Top pick",
  },
  {
    name: "Kitchen Roll XXL",
    subtitle: "Strong absorption",
    img: "/products/pink-kitchen-jumpo-roll-xxl.png",
    tag: "Kitchen",
  },
  {
    name: "Toilet Tissue 12 Rolls",
    subtitle: "Soft • long lasting",
    img: "/products/pink-toilet-compressed-12r.png",
    tag: "Value",
  },
  {
    name: "C-Fold 200 Sheets",
    subtitle: "Offices • washrooms",
    img: "/products/pink-c-fold-200t.png",
    tag: "Pro",
  },
  {
    name: "Facial Tissue 500 Sheets",
    subtitle: "Daily comfort",
    img: "/products/pink-facial-classic-tissue-500t.png",
  },
];

export default function BestSellers() {
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
            <h2 className="bspro__title">Bestsellers</h2>
            <p className="bspro__desc">
              The most loved PINK products — selected for quality and everyday use.
            </p>
          </div>

          <div className="bspro__controls" aria-label="Bestsellers controls">
            <button className="bspro__btnIcon" onClick={() => scrollBy(-1)} aria-label="Scroll left">
              ‹
            </button>
            <button className="bspro__btnIcon" onClick={() => scrollBy(1)} aria-label="Scroll right">
              ›
            </button>
          </div>
        </div>

        <div ref={trackRef} className="bspro__track">
          {bestSellers.map((p) => (
            <article key={p.name} className="bspro__card">
              {p.tag && <div className="bspro__tag">{p.tag}</div>}

              <div className="bspro__media">
                <img src={p.img} alt={p.name} className="bspro__img" loading="lazy" />
              </div>

              <div className="bspro__body">
                <div className="bspro__name">{p.name}</div>
                <div className="bspro__sub">{p.subtitle}</div>
              </div>
            </article>
          ))}
        </div>

        <div className="bspro__cta">
          <Link to="/products" className="bspro__ctaBtn bspro__ctaBtn--primary">
            View all products
          </Link>
          <Link to="/where-to-buy" className="bspro__ctaBtn bspro__ctaBtn--ghost">
            Where to buy
          </Link>
        </div>
      </div>
    </section>
  );
}