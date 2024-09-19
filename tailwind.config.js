/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        bw: '90%',
      },

      margin: {
        bm: 'auto',
      },

      fontFamily: {
        righteous: ['Righteous', 'sans-serif'],
        saira: ['Saira', 'sans-serif'],
      },
      
      backgroundImage: {
        'mycolor': 'linear-gradient(to right, #04016C, #4A16BD)',
        'mycolor1': 'linear-gradient(to right, #083f9b, #7f56d9)',
        'mycolor2': 'radial-gradient(ellipse 50% 80% at center, rgba(255, 255, 255, 1) 55%, rgba(255, 255, 255, 0.9) 65%, rgba(255, 255, 255, 0.6) 80%, rgba(255, 255, 255, 0) 100%)',
        'mycolor3': 'linear-gradient(to right, #2E08C7 0%, #7E08C7 100%)',
        'subscribe': "url('D:\Guvi Task\Landing-Page-2\src\images\Subscribe Bg.png')",
      },

      textColor: {
        customGray: '4A4A4A',
      },

      screens: {
        xxs: '320px', 
        xs: '475px',  
        xl2: '1440px',
      },
  },
  plugins: [],
}
}
