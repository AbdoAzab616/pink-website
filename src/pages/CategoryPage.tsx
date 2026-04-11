import { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { CATALOG } from "../data/catalog";
import type { CatalogProduct } from "../data/catalog";

function ProductModal({
  open,
  onClose,
  product,
}: {
  open: boolean;
  onClose: () => void;
  product: CatalogProduct | null;
}) {
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

export default function CategoryPage() {
  const { categoryId } = useParams();
  const [selected, setSelected] = useState<CatalogProduct | null>(null);

  const category = useMemo(() => {
    return CATALOG.find((c) => c.id === categoryId) ?? null;
  }, [categoryId]);

  if (!category) {
    return (
      <div className="container section">
        <h1 className="section-title">Category not found</h1>
        <Link className="btn" to="/products">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container section">
      <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
        <Link className="btn" to="/products">
          ← All Categories
        </Link>
      </div>

      <h1 className="section-title" style={{ marginTop: 14 }}>
        {category.title}
      </h1>
      <p className="section-sub">{category.description}</p>

      <div className="cards-grid" style={{ marginTop: 18 }}>
        {category.products.map((p) => (
          <button key={p.id} className="info-card" onClick={() => setSelected(p)} type="button">
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

      <ProductModal open={!!selected} onClose={() => setSelected(null)} product={selected} />
    </div>
  );
}