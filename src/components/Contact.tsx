export default function Contact() {
  return (
    <div className="contact-wrap">
      <div className="container contact">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-sub">Have questions? We'd love to hear from you</p>

        <div className="contact-cards">
          <a href="tel:+0233873100" className="contact-card">
            <div className="contact-icon">📞</div>
            <div className="contact-label">Phone</div>
            <div className="contact-value">+202 33 873 100</div>
          </a>

          <a href="mailto:info@newonepink.com" className="contact-card">
            <div className="contact-icon">✉️</div>
            <div className="contact-label">Email</div>
            <div className="contact-value">info@newonepink.com</div>
          </a>

          <a
            href="https://maps.app.goo.gl/WcjGsr6E9U1ad8qV8"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <div className="contact-icon">📍</div>
            <div className="contact-label">Location</div>
            <div className="contact-value">Head Office – Egypt</div>
          </a>
        </div>

        <div className="contact-action">
          <a
            className="btn btn-white"
            href="https://wa.me/201114768013"
            target="_blank"
            rel="noreferrer"
          >
            Contact Us
          </a>

          <div className="contact-note">لطلبات الجملة و التوزيع تواصل واتساب</div>
        </div>
      </div>
    </div>
  );
}