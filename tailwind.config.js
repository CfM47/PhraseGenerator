/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "background-color": "#f3f4f6",
        "color1": "#111827",
        "color2": "#6b7280",
        "color3": "#f9fafb",
        "color4": "#030712",
        //dark colors
        "background-color-dark": "#030712",
        "color1-dark": "#f9fafb",
        "color2-dark": "#9ca3af",
        "color3-dark": "#111827",
        "color4-dark": "#d1d5db"
      }
    },
    fontFamily:{
      "inter": ["Inter", "sans-serif"]
    }
  },
  plugins: [],
  darkMode: "class"
}