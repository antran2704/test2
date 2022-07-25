module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "hover-color": "#ffffff40",
      },
      lineClamp: {
        2: '2'
      }
    },
    screens: {
      sm: { max: "600px" },
      md: { min: "600px", max: "900px" },
      lg: { min: "900px" },
      all: { max: "900px" },
    },
  },
  plugins: [],
};
