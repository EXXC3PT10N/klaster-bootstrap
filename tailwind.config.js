module.exports = {


    future: {
      removeDeprecatedGapUtilities: true,
      purgeLayersByDefault: true,
    },
    content: [
      "./src/index.html",
      "./src/**/*.html",
      "./src/layouts/**/*.html",
      "./src/partials/**/*.html",
      
      './node_modules/flowbite/**/*.js',
    ],
    theme: {
      borderRadius: {
        full: '9999px',
        DEFAULT: '0.625rem',
        sm: '5px',
        none: '0px',
      },
      boxShadow: {
        'sm' : '0px 0px 12px rgba(0, 0, 0, 0.1)',
      },
      colors: {
        'primary': {
          DEFAULT: '#23C878', 
        },
        // Base colors
        transparent: 'transparent',
        'white': '#ffffff',
        'black': '#000000',
        // Custom Colors
        grey: {
          DEFAULT: "#D6D6D6",
          light: "rgba(217, 217, 217, 0.2)",
          medium: "#8A92A6",
          dark: "#656565",
          '100': "#EFEFEF",
          '200': "#DFDFDF",
          '300': "#C4C4C4",
          '400': "#EEEEEE"
        },
        blue: {
          DEFAULT: "#08AEEA",
          dark: "#302B3F",
          
        },
        green: {
          DEFAULT: '#23C878',
          light: "rgba(35, 200, 120, 0.5);"
        },
        yellow: {
          DEFAULT: '#EBB51E',
        }
      },
      fontFamily: {
        'fira-sans': ['"Fira Sans"', 'sans-serif'],
  
      },
      letterSpacing: {
        normal: '0',
        wide: '.02em',
        wider: '.05em',
      },
      extend: {
        fontSize: {
          xxs: '0.675rem',
          'head': '3.125rem',
          'subhead-small': '2rem',
          'subhead-big': '2.375rem',
          'subhead-smaller': '1.75rem',
        },
        lineHeight: {
          tighter: '1.125',
        },
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '992px',
        'lg-max': {'max': '992px'},
        'xl': '1366px',
        'xl-max': {'max': '1919px'},
        '2xl': '1920px',
      },
    },
    plugins: [
      
      function ({
        addComponents
      }) {
        addComponents({
          '.container': {
            width: '100%',
            maxWidth: '912px',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingLeft: '15px',
            paddingRight: '15px',
            '@screen sm': {
              maxWidth: '570px'
            },
            '@screen md': {
              maxWidth: '740px',
            },
            '@screen lg': {
              maxWidth: '980px',
            },
            '@screen xl': {
              maxWidth: '1200px',
            },
            '@screen 2xl': {
              maxWidth: '1200px',
            },
          }
        })
      },
      require('flowbite/plugin'),
 
    ],
  }
  