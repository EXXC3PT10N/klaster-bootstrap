module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    corePlugins: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem',
            },
        },
    },
    content: [
        'index.html',
        'header.php',
        'footer.php',
        './templates/**/*.php',
        './build/js/*.js',
    ],
    theme: {
        colors: {
            // Base colors
            transparent: 'transparent',
            'white': '#ffffff',
            'black': '#000000',
            // Custom Colors
            blue: {
                DEFAULT: '#437AB5',
                dark: '#1A3450',
                light: '#BDD7EB'
            },
            red: {
                DEFAULT: '#F2C0A3',
                dark: '#B9562A',
                light: '#F7E4D7'
            },
            mustard: {
                DEFAULT: '#7F8046',
                light: '#D8E4BF'
            },
            green: {
                DEFAULT: '#193E2F',
            },
            beige: {
                DEFAULT: '#F1EADF',
                light: '#FFFAF4'
            },
        },
        fontFamily: {
            'canela': ['"Canela"', 'sans-serif'],
            'prophet': ['Prophet', 'sans-serif'],
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
            'lg': '1024px',
            'xl': '1366px',
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
                    paddingLeft: '1.688rem',
                    paddingRight: '1.688rem',
                    '@screen md': {
                        maxWidth: '752px',
                    },
                    '@screen lg': {
                        maxWidth: '950px',
                    },
                    '@screen xl': {
                        maxWidth: '1260px',
                    },
                    '@screen 2xl': {
                        maxWidth: '1706px',
                    },
                }
            })
        },
        function ({ addVariant }) {
            addVariant('oneb4last', '&:nth-last-child(2)')
        }
    ]
};