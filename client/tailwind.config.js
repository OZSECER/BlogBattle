/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    // tailwind.config.js içinde theme.extend altına ekle
    animation: {
      "flap-wings-smooth": "flapSmooth 3s ease-in-out infinite",
      "flap-wings-smooth-reverse": "flapSmooth 3s ease-in-out infinite reverse",
      gradient: "gradient 15s ease infinite",
    },
    keyframes: {
      flapSmooth: {
        "0%, 100%": { transform: "rotate(0deg) translateY(0)" },
        "25%": { transform: "rotate(10deg) translateY(-5px)" },
        "50%": { transform: "rotate(0deg) translateY(-10px)" },
        "75%": { transform: "-10deg translateY(-5px)" },
        gradient: {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};
