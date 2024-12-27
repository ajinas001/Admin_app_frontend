module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background:"#f8f5f0",
        primary: "#ff9500", // Button color
        hovercolor: "#fcc578", // Button color
        textPrimary: "#333333",
        textSecondary: "#666666",
      },
      fontFamily: {
        sans: ["Noto Sans JP", "sans-serif"], // Use the font from Figma
      },
      screens: {
        xs: '280px', // Example breakpoint for xs
      },
    },
  },
  plugins: [],
};
