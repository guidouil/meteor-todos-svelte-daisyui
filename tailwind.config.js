module.exports = {
  content: ["./client/**/*.{html,js, css}", "./imports/ui/*.svelte"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
