export default function WhyChoose() {
  const bullets = [
    { title: "Medical Grade Sterility", desc: "Meets the highest standards for cleanliness and safety" },
    { title: "Sustainable Production", desc: "Environmentally responsible manufacturing process" },
    { title: "Trusted Quality", desc: "Loved by families across the region" },
  ];

  return (
    <div className="container section why">

      <div className="why-left">
        <img
          src="/images/about-product.png"
          alt="Pink Sterile Tissue"
          className="why-image"
        />
      </div>

      <div className="why-right">
        <h2 className="why-title">Why Choose Pink ?</h2>

        <p className="why-sub">
          Pink tissues are crafted with care, combining advanced sterile technology
          with the softest materials. Comfort matters — every sheet is designed to be gentle.
        </p>

        <div className="why-list">
          {bullets.map((b) => (
            <div key={b.title} className="why-item">
              <div className="why-check">✓</div>

              <div>
                <div className="why-item-title">{b.title}</div>
                <div className="why-item-desc">{b.desc}</div>
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
}