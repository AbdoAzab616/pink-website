import { useTranslation } from "react-i18next";
import { useMemo, useState, useEffect } from "react";
import { CATALOG } from "../data/catalog";
import type { CatalogProduct } from "../data/catalog";

function Modal({
  open,
  onClose,
  product,
}: {
  open: boolean;
  onClose: () => void;
  product: CatalogProduct | null;
}) {
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open || !product) return null;

  const wa = `https://wa.me/201114768013?text=${encodeURIComponent(
    `Hello Pink, I want to ask about: ${product.name}`
  )}`;

  return (
    <div className="modal-backdrop" onClick={onClose} role="presentation">
      <div className="modal" onClick={(e) => e.stopPropagation()} role="presentation">
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ✕
        </button>

        <div className="modal-grid">
          <div className="modal-media">
            <img
              className="modal-img"
              src={product.image}
              alt={product.name}
              onError={(e) => {
                e.currentTarget.src = "/products/placeholder.png";
              }}
            />
          </div>

          <div className="modal-body">
            <h3 className="modal-title">{product.name}</h3>
            <div className="modal-sub">{product.subtitle}</div>

            <div style={{ marginTop: 8, color: "var(--muted)", fontWeight: 700 }}>
              {product.nameAr}
            </div>

            <p className="modal-text">{product.short}</p>

            <div className="modal-bullets">
              {product.bullets.map((b) => (
                <div key={b} className="chip">
                  {b}
                </div>
              ))}
            </div>

            <div className="modal-actions">
              <a className="btn btn-pink" href={wa} target="_blank" rel="noreferrer">
                Ask on WhatsApp
              </a>
              <button className="btn" onClick={onClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Collections() {
  const [active, setActive] = useState(CATALOG[0]?.id ?? "facial");
  const [selected, setSelected] = useState<CatalogProduct | null>(null);
  const { t } = useTranslation();

  const category = useMemo(() => {
    return CATALOG.find((c) => c.id === active) ?? CATALOG[0];
  }, [active]);

  if (!category) return null;

  return (
    <div className="collections-wrap">
      <div className="container section">
        <h2 className="section-title">{t("collections.title")}</h2>
        <p className="section-sub">
          {t("collections.subtitle")}
        </p>

        <div className="tabs">
          {CATALOG.map((c) => (
            <button
              key={c.id}
              className={`tab ${c.id === active ? "active" : ""}`}
              onClick={() => setActive(c.id)}
              type="button"
            >
              {c.title}
            </button>
          ))}
        </div>

        <div className="category-head">
          <div className="category-title">{category.title}</div>
          <div className="category-desc">{category.description}</div>
        </div>

        <div className="cards-grid">
          {category.products.map((p) => (
            <button
              key={p.id}
              className="info-card"
              onClick={() => setSelected(p)}
              type="button"
            >
              <div className="info-media">
                <img
                  className="info-img"
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "/products/placeholder.png";
                  }}
                />
              </div>

              <div className="info-body">
                <div className="info-name">{p.name}</div>
                <div className="info-sub">{p.subtitle}</div>
                <div className="info-short">{p.nameAr}</div>

                <div className="info-more">
                  <span>View details</span>
                  <span className="arrow">→</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Modal open={!!selected} onClose={() => setSelected(null)} product={selected} />
    </div>
  );
}