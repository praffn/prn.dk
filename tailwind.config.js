const defaultConfig = require("tailwindcss/defaultConfig");
const { rotate, scale } = require("tailwindcss/defaultTheme");

const fontFamilyDisplay = [
  "DM Serif Display",
  defaultConfig.theme.fontFamily.sans,
];

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
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
      animation: {
        growshrink:
          "growshrink 1500ms cubic-bezier(0.59, 0.14, 0.17, 0.86) forwards",
        halfspin: "halfspin 1500ms linear forwards",
      },
      keyframes: {
        growshrink: {
          "0%, 100%": { transform: "scale(0)" },
          "50%": { transform: "scale(1)" },
        },

        halfspin: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(180deg)" },
        },
        // sparkle: {
        //   "0%": { transform: "scale(0) rotate(0deg)" },
        //   "50%": { transform: "scale(1) rotate(90deg)" },
        //   "100%": { transform: "scale(0) rotate(180deg)" },
        // },
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
