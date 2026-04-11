import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__glow" />

      <div className="footer__container">
        <div className="footer__top footer__top--compact">
          <div className="footer__leftMini">
            <div className="footer__logoWrap footer__logoWrap--only">
              <img src="/logos/pink-logo.png" alt="Pink" className="footer__logo" />
            </div>

            <div className="footer__socials">
              <a href="https://www.facebook.com/PinkTissuesEgypt/" aria-label="Facebook" className="footer__social">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/pink.tissues.eg/?hl=en" aria-label="Instagram" className="footer__social">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/company/pinktissues" aria-label="LinkedIn" className="footer__social">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          <div className="footer__links">
            <div className="footer__col">
              <h4>Company</h4>
              <Link to="/about">About Us</Link>
              <Link to="/about">Our Values</Link>
              <Link to="/about">Why Pink</Link>
            </div>

            <div className="footer__col">
              <h4>Products</h4>
              <Link to="/products/facial">Facial</Link>
              <Link to="/products/kitchen">Kitchen</Link>
              <Link to="/products/toilet">Toilet</Link>
              <Link to="/products/multipurpose">Multipurpose</Link>
            </div>

            <div className="footer__col">
              <h4>Support</h4>
              <Link to="/contact">Contact</Link>
              <Link to="/where-to-buy">Store Locator</Link>
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
            © 2026 Pink Sterile Tissues. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}