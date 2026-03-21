import { Link } from "react-router-dom";
import { CATALOG } from "../data/catalog";
import "./ProductsPage.css";

export default function ProductsPage() {
  return (
    <main className="prodCats">
      <header className="prodCats__head">
        <h1>Our Products</h1>
        <p>Browse Pink categories. Choose a collection to view all items.</p>
      </header>

      <section className="prodCats__grid">
        {CATALOG.map((c) => (
          <Link key={c.id} to={`/products/${c.id}`} className="catIconCard">
            <div className="catIconCard__icon">
              <img src={c.icon} alt={c.title} />
            </div>
            <div className="catIconCard__name">{c.title}</div>
          </Link>
        ))}
      </section>
    </main>
  );
}