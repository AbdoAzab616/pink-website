import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Splash from "./components/Splash";

import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import CategoryPage from "./pages/CategoryPage";
import WhereToBuyPage from "./pages/WhereToBuyPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  const location = useLocation();
  const [showSplash, setShowSplash] = useState(true);

  // يظهر أول مرة + عند كل تغيير route
  useEffect(() => {
    setShowSplash(true);
    const t = window.setTimeout(() => setShowSplash(false), 650); // مدة السبلاتش
    return () => window.clearTimeout(t);
  }, [location.pathname]);

  return (
    <div>
      <Splash show={showSplash} />

      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:categoryId" element={<CategoryPage />} />

          <Route path="/where-to-buy" element={<WhereToBuyPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}