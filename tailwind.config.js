const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["JetBrains Mono", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    styled: true,
    themes: [
      {
        lofi: {
          ...require("daisyui/src/colors/themes")["[data-theme=lofi]"],
          "base-100": "#202122",
          "base-content": "#ccc",
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
  },
};
