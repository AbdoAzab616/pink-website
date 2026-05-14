import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { CATALOG } from "../data/catalog";
import "./ProductsPage.css";

export default function ProductsPage() {
  const { t, i18n } = useTranslation();

  return (
    <main className="prodCats">
      <header className="prodCats__head">
        <h1>{t("productsPage.title")}</h1>

        <p>{t("productsPage.subtitle")}</p>
      </header>

      <section className="prodCats__grid">
        {CATALOG.map((c) => (
          <Link
            key={c.id}
            to={`/products/${c.id}`}
            className="catIconCard"
          >
            <div className="catIconCard__icon">
              <img
                src={c.icon}
                alt={
                  i18n.language === "ar"
                    ? c.titleAr
                    : c.title
                }
              />
            </div>

            <div className="catIconCard__name">
              {i18n.language === "ar"
                ? c.titleAr
                : c.title}
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}