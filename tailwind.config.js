/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: "1rem",
      screens: {
        
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1390px",
        
        minsm: { min: "640px" },
        minmd: { min: "768px" },
        minlg: { min: "1024px" },
        minxl: { min: "1200px" },
        min2xl: { min: "1536px" },
      },
    
    },
    extend: {},
  },
  plugins: [],
};
