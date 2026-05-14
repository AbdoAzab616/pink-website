import { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
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
  const { t, i18n } = useTranslation();

  if (!open || !product) return null;

  const productName =
    i18n.language === "ar" ? product.nameAr : product.name;

  const wa = `https://wa.me/201114768013?text=${encodeURIComponent(
    `Hello Pink, I want to ask about: ${product.name}`
  )}`;

  return (
    <div className="modal-backdrop" onClick={onClose} role="presentation">
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
        role="presentation"
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label={t("categoryPage.close")}
        >
          ✕
        </button>

        <div className="modal-grid">
          <div className="modal-media">
            <img
              className="modal-img"
              src={product.image}
              alt={productName}
              onError={(e) => {
                e.currentTarget.src = "/products/placeholder.png";
              }}
            />
          </div>

          <div className="modal-body">
            <h3 className="modal-title">{productName}</h3>

            <div className="modal-sub">{product.subtitle}</div>

            <p className="modal-text">{product.short}</p>

            <div className="modal-bullets">
              {product.bullets.map((b) => (
                <div key={b} className="chip">
                  {b}
                </div>
              ))}
            </div>

            <div className="modal-actions">
              <a
                className="btn btn-pink"
                href={wa}
                target="_blank"
                rel="noreferrer"
              >
                {t("categoryPage.askWhatsapp")}
              </a>

              <button className="btn" onClick={onClose}>
                {t("categoryPage.close")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CategoryPage() {
  const { t, i18n } = useTranslation();
  const { categoryId } = useParams();
  const [selected, setSelected] = useState<CatalogProduct | null>(null);

  const category = useMemo(() => {
    return CATALOG.find((c) => c.id === categoryId) ?? null;
  }, [categoryId]);

  if (!category) {
    return (
      <div className="container section">
        <h1 className="section-title">
          {t("categoryPage.notFound")}
        </h1>

        <Link className="btn" to="/products">
          {t("categoryPage.backToProducts")}
        </Link>
      </div>
    );
  }

  const categoryTitle =
    i18n.language === "ar" ? category.titleAr : category.title;

  const categoryDescription =
    i18n.language === "ar"
      ? category.descriptionAr
      : category.description;

  return (
    <div className="container section">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          flexWrap: "wrap",
        }}
      >
        <Link className="btn" to="/products">
          {t("categoryPage.allCategories")}
        </Link>
      </div>

      <h1 className="section-title" style={{ marginTop: 14 }}>
        {categoryTitle}
      </h1>

      <p className="section-sub">{categoryDescription}</p>

      <div className="cards-grid" style={{ marginTop: 18 }}>
        {category.products.map((p) => {
          const productName =
            i18n.language === "ar" ? p.nameAr : p.name;

          return (
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
                  alt={productName}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "/products/placeholder.png";
                  }}
                />
              </div>

              <div className="info-body">
                <div className="info-name">{productName}</div>

                <div className="info-sub">{p.subtitle}</div>

                <div className="info-more">
                  <span>{t("categoryPage.viewDetails")}</span>
                  <span className="arrow">
                    {i18n.language === "ar" ? "←" : "→"}
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <ProductModal
        open={!!selected}
        onClose={() => setSelected(null)}
        product={selected}
      />
    </div>
  );
}