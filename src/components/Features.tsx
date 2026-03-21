export default function Features() {
  const items = [
    {
      title: "100% Sterile",
      desc: "Medical-grade sterility for your peace of mind",
      icon: "🛡️",
    },
    {
      title: "Ultra Soft",
      desc: "Premium quality fibers for ultimate comfort",
      icon: "✨",
    },
    {
      title: "Skin Friendly",
      desc: "Dermatologically tested and approved",
      icon: "💗",
    },
    {
      title: "Eco Friendly",
      desc: "Sustainable and environmentally conscious",
      icon: "📦",
    },
  ];

  return (
    <div className="container features-section">
      <div className="features-grid">
        {items.map((item) => (
          <div key={item.title} className="feature-card">
            <div className="feature-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
