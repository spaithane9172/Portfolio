/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent:    "#6366f1",
        "accent-2":"#8b5cf6",
        surface:   "#141414",
        "surface-2":"#1c1c1c",
        ink:       "#f0f0f0",
        muted:     "#888888",
        "dark-bg": "#0d0d0d",
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      backgroundImage: {
        "gradient-accent": "linear-gradient(135deg, #6366f1, #8b5cf6, #c084fc)",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":       { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};
