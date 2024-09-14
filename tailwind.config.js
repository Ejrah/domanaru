/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", './public/**/*.{html,js}'],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", './public/**/*.{html,js}'],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        ptSerif: ['PT Serif', 'serif'],
      },
      colors: {
        palette: {
          lightest: '#D29A48',
          lighter: '#8A5A1A',
          light: '#693C0C',
          base: '#60370B',
          dark: '#492906',
          darker: '#3D2206',
          darkest: '#301B05',
          add001: '#F0DDB8',
          // Persona 5 Color Pallette
          red: '#C9161D',
          redbase: '#d92323',
          reddarker: '#732424',
          gold: '#f2e852',
          golddarker: '	#8c6723',
        }
      },
    },
  },
  plugins: [],
}
