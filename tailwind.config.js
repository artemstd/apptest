module.exports = {
  purge: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'sm': '768px',
        'md': '980px',
        'lg': '1400px',
        'xl': '1920px'
      },
      minWidth: {
        'body': '20rem',
      },
      maxWidth: {
        'main': '1600px'
      },
      fontSize: {
        'base-xs': ['16px', '24px'],
        'base-sm': ['18px', '28px'],
        '3xl': ['28px', '40px'],
        '4xl': ['32px', '46px'],
        '6xl': ['56px', '64px'],
        '7xl': ['82px', '92px'],
        '8xl': ['96px', '108px']
      },
      fontFamily: {
        'spartan': ['Spartan', 'sans']
      },
      opacity: {
        '85': '0.85'
      },
      boxShadow: {
        'btn': '0 4px 24px rgba(0,0,0,0.32)'
      },
      borderRadius: {
        '4xl': '3rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
