import React from "react";

const stores = [
  {
    name: "Noon",
    url: "https://www.noon.com/egypt-en/seller/p-467418/?offer_code=e5096e9646972cec&sku=Z244D003A8D0A187C8077Z",
    logo: "/logos/noon.png",
    logoClass: "noonLogo",
    wrapClass: "noonWrap",
  },
  {
    name: "GoodsMart",
    url: "#",
    logo: "/logos/goodsmart.png",
    logoClass: "goodsmartLogo",
    wrapClass: "goodsmartWrap",
  },
  {
    name: "الشركة الوطنية للمشروعات الانتاجية (صافي)",
    logo: "/logos/Safy.png",
    logoClass: "safyLogo",
    wrapClass: "safyWrap",
  },
    {
    name: "Amazon",
    url: "https://www.amazon.eg/s?k=pink+tissues&crid=1KYISDGJBM1SF&sprefix=pink+tissues%2Caps%2C231&ref=nb_sb_noss_1",
    logo: "/logos/amazon.png",
    logoClass: "amazonLogo",
    wrapClass: "amazonWrap",
  },
    {
    name: "BIM Stores",
    logo: "/logos/bim.png",
    logoClass: "bimLogo",
    wrapClass: "bimWrap",
  },
];

export default function WhereToBuy() {
  const openGoodsmart = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const ua = navigator.userAgent;
    const isAndroid = /android/i.test(ua);
    const isIOS = /iPhone|iPad|iPod/i.test(ua);

    if (isAndroid) {
      window.open(
        "https://play.google.com/store/apps/details?id=hussein.apps.talabaty",
        "_blank"
      );
    } else if (isIOS) {
      window.open(
        "https://apps.apple.com/app/goodsmart/id905717961",
        "_blank"
      );
    } else {
      window.open("https://goodsmartegypt.com/download", "_blank");
    }
  };

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
            onClick={s.name === "GoodsMart" ? openGoodsmart : undefined}
          >
            <div className={`storeLogoWrap ${s.wrapClass}`}>
              <img
                src={s.logo}
                alt={s.name}
                className={`storeLogo ${s.logoClass}`}
              />
            </div>

            <div className="store-sub">Available on {s.name}</div>
          </a>
        ))}
      </div>

      <div className="stores-note">
        Want Pink in your store?{" "}
        <a
          href="https://wa.me/201114768013"
          target="_blank"
          rel="noreferrer"
        >
          Contact us on WhatsApp
        </a>
      </div>
    </div>
  );
}