module.exports = {
  name: "MAREK VÍTEK",
  tagline: "VRATA • BRÁNY • ROLETY",
  description:
    "Autorizovaný dealer Hörmann pro Ústí nad Orlicí a okolí. Dodávka a montáž garážových vrat, vjezdových bran, rolet a žaluzií. 15+ let zkušeností, profesionální servis.",
  email: "info@marekvitek.cz",
  ico: "19538685",
  phoneForTel: "+420724311719",
  phoneFormatted: "+420 724 311 719",
  address: {
    lineOne: "Vzorková prodejna",
    lineTwo: "Nádražní 26",
    city: "Žamberk",
    zip: "561 84",
    district: "Okres Ústí nad Orlicí",
    mapLink: "https://maps.app.goo.gl/GQmwqUWKd6JMZi8Y7",
  },
  socials: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    youtube: "https://www.youtube.com/",
    tiktok: "https://www.tiktok.com/",
    whatsapp: "https://wa.me/",
  },
  // SEO and business information
  foundingYear: "2008",
  businessHours: {
    weekdays: "Po-Pá 8:00-17:00",
    saturday: "So 8:00-12:00",
    sunday: "Neděle zavřeno",
  },
  services: [
    "Garážová vrata Hörmann",
    "Vjezdové brány automatické",
    "Rolety okenní",
    "Žaluzie venkovní a vnitřní",
    "Markýzy a pergoly",
    "Stínicí technika",
    "Montáž a servis",
  ],
  //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
  domain: "https://www.marekvitek.cz",
  // Passing the isProduction variable for use in HTML templates
  isProduction: process.env.ELEVENTY_ENV === "PROD",
};
