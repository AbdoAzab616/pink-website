export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-col">
          <div className="footer-logo">PINK</div>
          <div className="footer-muted">Soft touch, pure care for every moment.</div>
        </div>

        <div className="footer-col">
          <div className="footer-title">Company</div>
          <a className="footer-link" href="#about">About Us</a>
          <a className="footer-link" href="#about">Our Values</a>
          <a className="footer-link" href="#about">Sustainability</a>
        </div>

        <div className="footer-col">
          <div className="footer-title">Support</div>
          <a className="footer-link" href="#contact">Contact</a>
          <a className="footer-link" href="#contact">FAQ</a>
          <a className="footer-link" href="#contact">Store Locator</a>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Pink Sterile Tissues. All rights reserved.
      </div>
    </footer>
  );
}
