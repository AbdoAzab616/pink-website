import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer__glow" />

      <div className="footer__container">
        <div className="footer__top footer__top--compact">
          <div className="footer__leftMini">
            <div className="footer__logoWrap footer__logoWrap--only">
              <img
                src="/logos/pink-logo.png"
                alt="Pink"
                className="footer__logo"
              />
            </div>

            <div className="footer__socials">
              <a
                href="https://www.facebook.com/PinkTissuesEgypt/"
                aria-label="Facebook"
                className="footer__social"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/pink.tissues.eg/?hl=en"
                aria-label="Instagram"
                className="footer__social"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.linkedin.com/company/pinktissues"
                aria-label="LinkedIn"
                className="footer__social"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          <div className="footer__links">
            {/* Company */}
            <div className="footer__col">
              <h4>{t("footer.company")}</h4>

              <Link to="/about">
                {t("footer.aboutUs")}
              </Link>

              <Link to="/about">
                {t("footer.ourValues")}
              </Link>

              <Link to="/about">
                {t("footer.whyPink")}
              </Link>
            </div>

            {/* Products */}
            <div className="footer__col">
              <h4>{t("footer.products")}</h4>

              <Link to="/products/facial">
                {t("footer.facial")}
              </Link>

              <Link to="/products/kitchen">
                {t("footer.kitchen")}
              </Link>

              <Link to="/products/toilet">
                {t("footer.toilet")}
              </Link>

              <Link to="/products/multipurpose">
                {t("footer.multipurpose")}
              </Link>
            </div>

            {/* Support */}
            <div className="footer__col">
              <h4>{t("footer.support")}</h4>

              <Link to="/contact">
                {t("footer.contact")}
              </Link>

              <Link to="/where-to-buy">
                {t("footer.storeLocator")}
              </Link>

              <a
                href="https://wa.me/201114768013"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom footer__bottom--compact">
          <p className="footer__copy">
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}