/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "./src/layouts/**/*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        archivo: ["Archivo", "sans-serif"],
      },
      colors: {
        primery: "#FE7762",
        secondaryButton: `rgba(254, 119, 98, 0.2)`,
        whiteBorder: `rgba(255,255,255,0.3)`,
        dark_gray: `rgba(29, 31, 36, 1)`,
        page_bg: `rgba(14, 14, 14)`,
        black_button: `#0E0E0E`,
        green: "#26DBDC",
      },
      screens: {
        // sm: "640px",
        md: "768px",
        lg: "1024px",
        // xl: "1280px",
      },
    },
  },
  plugins: [],
};
