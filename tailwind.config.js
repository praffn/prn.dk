const defaultConfig = require("tailwindcss/defaultConfig");

const fontFamilyDisplay = [
  "DM Serif Display",
  defaultConfig.theme.fontFamily.sans,
];

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      display: fontFamilyDisplay,
      sans: ["Inter", defaultConfig.theme.fontFamily.sans],
    },
    extend: {
      colors: {
        watermelon: {
          DEFAULT: "#FF4757",
          50: "#FFD1D5",
          100: "#FFC1C7",
          200: "#FFA3AB",
          300: "#FF848F",
          400: "#FF6673",
          500: "#FF4757",
          600: "#FF1E32",
          700: "#F40015",
          800: "#CC0012",
          900: "#A3000E",
        },
      },
      typography(theme) {
        return {
          DEFAULT: {
            css: {
              h1: {
                fontSize: "3em",
                fontWeight: 100,
                fontFamily: fontFamilyDisplay.join(", "),
              },
              h2: {
                fontSize: "2em",
                fontFamily: fontFamilyDisplay.join(", "),
                fontWeight: 500,
              },
            },
          },
          light: {
            css: {
              color: theme("colors.gray.300"),
              h1: {
                color: theme("colors.gray.50"),
              },
              h2: {
                color: theme("colors.gray.50"),
              },
              h3: {
                color: theme("colors.gray.50"),
              },
              h4: {
                color: theme("colors.gray.50"),
              },
              a: {
                color: theme("colors.white"),
              },
            },
          },
        };
      },
    },
  },
  variants: {
    extend: {
      typography: ["dark"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
