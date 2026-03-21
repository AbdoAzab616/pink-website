type Product = {
  id: string;
  name: string;
  sub: string;
  desc: string;
  image: string;
};

const products: Product[] = [
  {
    id: "pink-550",
    name: "Pink Facial Classic Tissue 550T",
    sub: "550 Sheets",
    desc: "Soft white tissues with premium quality for daily comfort.",
    image: "/products/pink-facial-classic-tissue-550t.png",
  },
  {
    id: "pink-kitchen-xl",
    name: "Pink Kitchen Jumbo Roll XL",
    sub: "Kitchen Towels",
    desc: "Strong and absorbent kitchen roll for everyday cleaning needs.",
    image: "/products/pink-kitchen-jumpo-roll-xl.png",
  },
  {
    id: "pink-toilet-8r",
    name: "Pink Toilet Compressed 8 Roll",
    sub: "Toilet Tissue",
    desc: "Comfortable and practical tissue rolls for home and hospitality use.",
    image: "/products/pink-toilet-compressed-8r.png",
  },
];

export default function Products() {
  return (
    <div className="products-wrap">
      <div className="container section">
        <h2 className="section-title">Featured Products</h2>
        <p className="section-sub">
          Discover Pink’s premium tissue essentials designed for softness,
          hygiene, and daily comfort.
        </p>

        <div className="product-grid">
          {products.map((p) => (
            <div key={p.id} className="product-card">
              <div className="product-image-wrap">
                <img src={p.image} alt={p.name} className="product-image" />
              </div>

              <div className="product-body">
                <div className="product-name">{p.name}</div>
                <div className="product-sub">{p.sub}</div>
                <div className="product-desc">{p.desc}</div>

                <div className="product-bottom">
                  <a href="/products" className="product-link">
                    <span>View details</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}