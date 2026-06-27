/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      screens: {
        sm: "360pt",
        md: "480pt",
        lg: "768pt",
        xl: "1024pt",
        "2xl": "1440pt",
      },
    },
  },
  plugins: [],
};
