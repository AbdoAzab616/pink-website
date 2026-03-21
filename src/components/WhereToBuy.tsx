const stores = [
  {
    name: "Noon",
    url: "https://www.noon.com/egypt-en/seller/p-467418/?offer_code=e5096e9646972cec&sku=Z244D003A8D0A187C8077Z",
    logo: "/logos/noon.png",
  },
];

export default function WhereToBuy() {
  return (
    <div className="container section">
      <h2 className="section-title">Where to Buy</h2>
      <p className="section-sub">
        You can find Pink on trusted platforms. More stores will be added soon.
      </p>

      <div className="stores-grid">
        {stores.map((s) => (
          <a
            key={s.name}
            className="store-card"
            href={s.url}
            target="_blank"
            rel="noreferrer"
          >
            <div className="storeLogoWrap">
              <img src={s.logo} alt={s.name} className="storeLogo" />
            </div>

            <div className="store-sub">Available on {s.name}</div>
          </a>
        ))}
      </div>

      <div className="stores-note">
        Want Pink in your store?{" "}
        <a
          href="https://wa.me/201142787920"
          target="_blank"
          rel="noreferrer"
        >
          Contact us on WhatsApp
        </a>
      </div>
    </div>
  );
}