/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx",
  "./index.html"],
  theme: {
    extend: {
      colors: {
        yellow: {
          400: '#FBC601'
        },
        black: {
          400: '#212121'
        },
        brandgreen: {
          400: '#345C64'
        },
        brandblue: {
          300: '#70C5D7'
        },
      }
    },
  },
  plugins: [],
}
