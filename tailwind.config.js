module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // Add custom scrollbar hide utility
      scrollbarHide: {
        /* For Chrome, Safari, and Opera */
        "&::-webkit-scrollbar": {
          display: "none",
        },
        /* For IE, Edge, and Firefox */
        "-ms-overflow-style": "none",
        "scrollbar-width": "none",
      },
    },
  },
  plugins: [],
};
