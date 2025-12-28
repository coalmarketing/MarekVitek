module.exports = {
  name: "MAREK VÍTEK",
  tagline: "VRATA • BRÁNY • ROLETY",
  description:
    "Regionální exkluzivní dealer značky Hörmann pro Ústí nad Orlicí a okolí. Nabízíme kompletní sortiment garážových vrat, vjezdových bran, rolet a žaluzií.",
  email: "info@marekvitek.cz",
  ico: "19538685",
  phoneForTel: "+420724311719",
  phoneFormatted: "+420 724 311 719",
  address: {
    lineOne: "Showroom Marek Vítek",
    lineTwo: "Ulice 123",
    city: "Ústí nad Orlicí",
    zip: "562 01",
    mapLink: "https://maps.app.goo.gl/GQmwqUWKd6JMZi8Y7",
  },
  socials: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    youtube: "https://www.youtube.com/",
    tiktok: "https://www.tiktok.com/",
    whatsapp: "https://wa.me/",
  },
  //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
  domain: "https://www.senoweb.cz",
  // Passing the isProduction variable for use in HTML templates
  isProduction: process.env.ELEVENTY_ENV === "PROD",
};
