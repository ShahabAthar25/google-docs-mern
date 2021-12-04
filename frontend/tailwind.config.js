module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        44: "11rem",
        xxs: "12rem",
        xs: "15rem",
        md: "20rem",
      },
      height: {
        "5/7": "90%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
