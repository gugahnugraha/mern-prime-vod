module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
 extend: {
      colors: {
        primary: '#1c1c1e', // Dark background
        secondary: '#ff9900', // Accent color
        gray: {
          light: '#f5f5f5', // Light gray for cards
          DEFAULT: '#8e8e93', // Default gray for text
        },
        blue: {
          DEFAULT: '#007aff', // Blue for buttons
        },
      },
      fontFamily: {
        sans: ['Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')],
}