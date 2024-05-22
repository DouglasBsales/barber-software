/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        bluePrimary: "#064FC5",
        whiteOpacity: "#F5F5F7",
        blackPrimary: "#3C3C3C",
        blackOpacity: "#B8B8B8",
        greenPrimary: "#46E068",
        redPrimary: "#E8270E",
      },
    },
  },
  plugins: [],
};
