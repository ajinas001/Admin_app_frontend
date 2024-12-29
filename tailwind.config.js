module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background:"#f8f5f0",
        primary: "#ff9500", 
        hovercolor: "#fcc578", 
        textPrimary: "#333333",
        textSecondary: "#666666",
      },
      fontFamily: {
        sans: ["Noto Sans JP", "sans-serif"], 
      },
      screens: {
        xs: '280px',
      },
    },
  },
  plugins: [],
};
