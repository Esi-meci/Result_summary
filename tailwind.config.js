/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens:{
      sm: '375px',
      md: '1440px'
    },
    extend: {
      colors: {
        // Gradient Colors"
        // LightBlue: 'hsl(252, 100%, 67%)',
        // Light_RoyalBlue:'hsl(241, 81%, 54%)',
        // Violet_blue: 'hsl(256, 72%, 46%)',
        // Persian_blue: 'hsl(241, 72%, 46%)',

        // Neutral Colors        
        White: 'hsl(0, 0%, 100%)',
        Pale_Blue: 'hsl(221, 100%, 96%)',
        Light_Lavender: 'hsl(241, 100%, 89%)',
        Dark_Gray_Blue: 'hsl(224, 30%, 27%)',
      
        // Primary colrs
        Light_Red: 'hsl(0, 100%, 67%)',
        Light_Red_Transparent: 'hsla(0, 100%, 67%, 0.2)',
        Orangey_Yellow: 'hsl(39, 100%, 56%)',
        Orangey_Yellow_Transparent: 'hsla(39, 100%, 56%, 0.2)',
        Green_Teal: 'hsl(166, 100%, 37%)',
        Green_Teal_Transparent: 'hsla(166, 100%, 37%, 0.2)',
        Cobalt_Blue: 'hsl(234, 85%, 45%)',
        Cobalt_Blue_Transparent: 'hsla(234, 85%, 45%, 0.3)',
      }
    },
  },
  plugins: [],
}

