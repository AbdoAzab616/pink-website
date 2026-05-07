import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

export default function Navbar() {
  const { t } = useTranslation();

  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // close mobile menu when navigating
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const changeLanguage = (lang: "en" | "ar") => {
    i18n.changeLanguage(lang);

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  };

  return (
    <header className="nav">
      <div className="container nav-inner">

        <NavLink to="/" className="brand" aria-label="Pink Home">
          <img className="brand-logo" src="/logo.png" alt="Pink" />
        </NavLink>

        <nav className="nav-links" aria-label="Primary navigation">

          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
            end
          >
            {t("nav.home")}
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {t("nav.products")}
          </NavLink>

          <NavLink
            to="/where-to-buy"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {t("nav.whereToBuy")}
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {t("nav.about")}
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {t("nav.contact")}
          </NavLink>

        </nav>

        <div className="nav-cta">

          {/* Language Switch */}
          <div className="lang-switch">
            <button onClick={() => changeLanguage("en")}>
              EN
            </button>

            <button onClick={() => changeLanguage("ar")}>
              AR
            </button>
          </div>

          {/* Order Now Button */}
          <NavLink to="/where-to-buy" className="btn btn-pink">
            {t("hero.button")}
          </NavLink>

          <button
            className="nav-burger"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            ☰
          </button>

        </div>
      </div>

      {menuOpen && (
        <div className="nav-mobile" aria-label="Mobile navigation">

          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
            end
          >
            {t("nav.home")}
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {t("nav.products")}
          </NavLink>

          <NavLink
            to="/where-to-buy"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {t("nav.whereToBuy")}
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {t("nav.about")}
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {t("nav.contact")}
          </NavLink>

          <NavLink
            to="/where-to-buy"
            className="btn btn-pink nav-mobile-cta"
          >
            {t("hero.button")}
          </NavLink>

        </div>
      )}
    </header>
  );
}