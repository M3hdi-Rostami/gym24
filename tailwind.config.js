/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "768px",
      // => @media (min-width: 768px) { ... }

      md: "992px",
      // => @media (min-width: 992px) { ... }

      lg: "1200px",
      // => @media (min-width: 1200px) { ... }

      xl: "1920px",
      // => @media (min-width: 1920px) { ... }

      "2xl": "2176px",
      // => @media (min-width: 2176px) { ... }
    },
    extend: {
      colors: {
        yellow: "#FAFF00",
        'dark-gray': "#222222",
      },
      fontSize: {
        10: ["0.625rem", "0.75rem"],
        11: ["0.688rem", "0.75rem"],
        12: ["0.75rem", "1rem"],
        14: ["0.875rem", "1.25rem"],
        16: ["1rem", "1.5rem"],
        18: ["1.125rem", "1.75rem"],
        20: ["1.25rem", "1.75rem"],
        26: ["1.625rem", "1.75rem"],
      },
    },
  },
  plugins: [],
};
