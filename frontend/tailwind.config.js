export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      roboto: ['Roboto', "sans-serif"],
      poppins: ['Poppins', "sans-serif"]
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
 
