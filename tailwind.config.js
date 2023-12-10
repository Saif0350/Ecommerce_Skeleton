/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      oswald: "Oswald, sans-serif",
      urbanist: "Urbanist, sans-serif",
      "great-vibes": ["Great Vibes", "cursive"],
      Kaushan: ["Kaushan Script", "cursive"],
      poppins: ["'Poppins', sans-serif;"],
    },
    extend: {},
  },
  plugins: [],
};
