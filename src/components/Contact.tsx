import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="contact-wrap">
      <div className="container contact">
        <h2 className="contact-title">
          {t("contactPage.title")}
        </h2>

        <p className="contact-sub">
          {t("contactPage.subtitle")}
        </p>

        <div className="contact-cards">
          {/* Phone */}
          <a href="tel:+0233873100" className="contact-card">
            <div className="contact-icon">📞</div>

            <div className="contact-label">
              {t("contactPage.phone")}
            </div>

            <div className="contact-value">
              +202 33 873 100
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:info@newonepink.com"
            className="contact-card"
          >
            <div className="contact-icon">✉️</div>

            <div className="contact-label">
              {t("contactPage.email")}
            </div>

            <div className="contact-value">
              info@newonepink.com
            </div>
          </a>

          {/* Location */}
          <a
            href="https://maps.app.goo.gl/WcjGsr6E9U1ad8qV8"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <div className="contact-icon">📍</div>

            <div className="contact-label">
              {t("contactPage.location")}
            </div>

            <div className="contact-value">
              {t("contactPage.locationValue")}
            </div>
          </a>
        </div>

        <div className="contact-action">
          <a
            className="btn btn-white"
            href="https://wa.me/201114768013"
            target="_blank"
            rel="noreferrer"
          >
            {t("contactPage.button")}
          </a>

          <div className="contact-note">
            {t("contactPage.whatsapp")}
          </div>
        </div>
      </div>
    </div>
  );
}