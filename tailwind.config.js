/** @type {import('tailwindcss').Config} */
import fluid, { extract, fontSize, screens } from "fluid-tailwind";
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "selector",
  content: {
    files: ["./src/**/*.{html,njk,js}"],
    extract,
  },
  theme: {
    fontSize: fontSize,
    screens: screens,
    extend: {
      fontFamily: {
        sans: ["Poppins", defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: {
          orange: "#FAB423",
          blue: "#141F36",
          gradient: {
            from: "#F6D365",
            to: "#FDA085",
          },
        },
        primary: "#E11D48",
      },
      backgroundImage: {
        "gradient-custom": "linear-gradient(0deg, #F6D365 0%, #FDA085 100%)",
        "gradient-custom-to-r": "linear-gradient(to right, #F6D365, #FDA085)",
        "gradient-custom-to-l": "linear-gradient(to left, #F6D365, #FDA085)",
        "gradient-custom-to-t": "linear-gradient(to top, #F6D365, #FDA085)",
        "gradient-custom-to-b": "linear-gradient(to bottom, #F6D365, #FDA085)",
      },
      borderImage: {
        "gradient-custom": "linear-gradient(to right, #F6D365, #FDA085) 1",
        "gradient-custom-vertical":
          "linear-gradient(to bottom, #F6D365, #FDA085) 1",
      },
    },
  },
  plugins: [
    fluid,
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar"),
    require("tailwindcss-motion"),
    function ({ addUtilities, theme }) {
      const borderGradients = theme("borderImage");
      const utilities = {};

      Object.keys(borderGradients).forEach((key) => {
        utilities[`.border-gradient-${key}`] = {
          "border-image": borderGradients[key],
          "border-style": "solid",
        };
      });

      // Add the specific border-gradient-custom class you want to use
      utilities[".border-gradient-custom"] = {
        "border-image": "linear-gradient(to right, #F6D365, #FDA085) 1",
        "border-style": "solid",
      };

      // Add rounded gradient border utility using pseudo-element approach
      utilities[".border-gradient-custom-rounded"] = {
        position: "relative",
        background: "transparent",
        "border-radius": "0.75rem", // 12px, equivalent to rounded-xl
        "&::before": {
          content: '""',
          position: "absolute",
          inset: "0",
          padding: "2px", // Border width
          background: "linear-gradient(to right, #F6D365, #FDA085)",
          "border-radius": "inherit",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          "mask-composite": "xor",
          "-webkit-mask":
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          "-webkit-mask-composite": "xor",
        },
      };

      addUtilities(utilities);
    },
  ],
};
