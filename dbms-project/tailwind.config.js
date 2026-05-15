/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
         fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        scrollX: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }, // move left
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in forwards',
        scrollX: "scrollX 30s linear infinite",
      },
    },
  },
  plugins: [],
};


