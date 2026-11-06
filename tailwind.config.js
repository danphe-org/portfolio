/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#080808",
          surface: "#101010",
          card: "#141414",
          cardHover: "#181818",
          red: "#e31b23",
          redDark: "#850f14",
          redMuted: "rgba(227, 27, 35, 0.12)",
          redBorder: "rgba(227, 27, 35, 0.35)",
          border: "rgba(255, 255, 255, 0.08)",
          textMuted: "#8e8e93",
          textLight: "#cccccc",
        }
      },
      fontFamily: {
        display: ['"Bebas Neue"', '"Syne"', 'sans-serif'],
        script: ['"Caveat"', '"Reenie Beanie"', 'cursive'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widestplus: '0.25em',
        mega: '0.05em'
      }
    },
  },
  plugins: [],
};
