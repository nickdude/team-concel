/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,tsx,mdx}",
    "./pages/**/*.{js,jsx,tsx,mdx}",
    "./components/**/*.{js,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        '125': '125%',
      },
      fontFamily: {
        onest: ["var(--font-onest)", "sans-serif"],
        bricolage: ["var(--font-bricolage)", "sans-serif"],
        spacegrotesk: ["var(--font-spacegrotesk)", "sans-serif"],
        ptserif: ["var(--font-ptserif)", "serif"],
      },
      colors: {
        brand: {
          blue: "#0383D0",
          navy: "#1B4878",
          deepBlue: "#1F558E",
          white: "#FFFFFF",
          navyAlpha: "#5C7B9B",
          navyDarkAlpha: "#1B4878CC",
          gold: "#FCD183",
          beige: "#EBDBCB",
          sand: "#D9BCA2",
          amber: "#E9AF35",
          grayish: "#CDD8DD",
          whiteAlpha: "#FFFFFF99",
          blackAlpha: "#00000033",
          gray: "#F3F1EE",
          navyDark: "#1B4878CC",
          darkBlue: "#143150",
          darkBlueAlpha: "#14315026",
          slate: "#16427140",
          rose: "#F8F7F5",
          teal: "#B1BFC8",
          sky: "#4A74A1",
          cyan: "#5C7B9B"

        },
      },
      boxShadow: {
        around: "0 4px 12px rgba(0, 0, 0, 0.15)",
      },
      keyframes: {
        scrollX: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        scrollX: "scrollX 30s linear infinite",
      },
    },
  },
  plugins: [],
};
