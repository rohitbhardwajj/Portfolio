/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "neon-purple": "#9c27b0",
        "deep-blue": "#1a237e",
        "gradient-pink": "#e91e63",
        "electric-cyan": "#00bcd4",
        "sunset-orange": "#ff5722",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      },
    },
  },
  plugins: [],
}