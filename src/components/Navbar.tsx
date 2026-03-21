import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // close mobile menu when navigating
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

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
            Home
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Products
          </NavLink>

          <NavLink
            to="/where-to-buy"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Where to Buy
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact
          </NavLink>

        </nav>

        <div className="nav-cta">

          {/* Order Now Button */}
          <NavLink to="/where-to-buy" className="btn btn-pink">
            Order Now
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
            Home
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Products
          </NavLink>

          <NavLink
            to="/where-to-buy"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Where to Buy
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact
          </NavLink>

          {/* Mobile Order Button */}
          <NavLink
            to="/where-to-buy"
            className="btn btn-pink nav-mobile-cta"
          >
            Order Now
          </NavLink>

        </div>
      )}
    </header>
  );
}