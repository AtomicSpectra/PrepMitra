/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Scan all JS/TS/JSX/TSX files in the src folder
    "./pages/**/*.{js,ts,jsx,tsx}", // For Next.js pages
    "./components/**/*.{js,ts,jsx,tsx}", // For components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

