import "./Categories.css";

const categories = [
  { name: "Pocket", icon: "/icons/pocket.png" },
  { name: "Facial", icon: "/icons/facial.png" },
  { name: "Toilet", icon: "/icons/toilet.png" },
  { name: "Kitchen", icon: "/icons/kitchen.png" },
  { name: "Napkins", icon: "/icons/napkins.png" },
];

export default function Categories() {
  return (
    <section className="categories">
      <div className="categories__container">

        {categories.map((cat) => (
          <div key={cat.name} className="categoryCard">

            <div className="categoryIcon">
              <img src={cat.icon} alt={cat.name} />
            </div>

            <div className="categoryName">
              {cat.name}
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}