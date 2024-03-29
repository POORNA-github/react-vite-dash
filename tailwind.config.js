/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      "custombg-color": "#101010",
      "noti-color": "#DC3434",
      "custom-white": "#FFFFFF",
      "over-color": "E5E5E5",
      "custom-ash": "#F9FAFC",
      "cart-blue": "#32A7E2",
      "bus-color": "#B548C6",
      "house-color": "#FF8700",
      "food-color": "#DC3434",
      "e-color": "#4BA83D",
      "color-grey" : "#ECEFF5",
      "color-progress": "#31BA96",
      "color-box": "#EDF0F6",
      "new-grey": "#404852",
    },
    fontFamily: {
      "f-poppins": ["Poppins", "sans-serif"],
      avenir: ["Avenir", "sans-serif"],
    },
    fontWeight: {
      "p-600": 600,
      "p-400": 400,
      "p-500": 500,
    },
    
  },
  plugins: [],
};
