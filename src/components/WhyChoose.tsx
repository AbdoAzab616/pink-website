import { useTranslation } from "react-i18next";

export default function WhyChoose() {
  const { t } = useTranslation();

  const bullets = [
    {
      title: t("whyChoose.item1"),
      desc: t("whyChoose.item1Desc"),
    },
    {
      title: t("whyChoose.item2"),
      desc: t("whyChoose.item2Desc"),
    },
    {
      title: t("whyChoose.item3"),
      desc: t("whyChoose.item3Desc"),
    },
  ];

  return (
    <div className="container section why">
      <div className="why-left">
        <img
          src="/images/about-product.png"
          alt={t("whyChoose.imageAlt")}
          className="why-image"
        />
      </div>

      <div className="why-right">
        <h2 className="why-title">{t("whyChoose.title")}</h2>

        <p className="why-sub">{t("whyChoose.subtitle")}</p>

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