const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,mdx}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '1.5rem',
        lg: '2rem'
      },
      screens: {
        '2xl': '1240px'
      }
    },
    extend: {
      colors: {
        brand: {
          primary: '#0C2530',
          accent: '#158F6A',
          accentSoft: '#E2F5EE'
        },
        surface: {
          light: '#F4F6F5',
          muted: '#415165'
        },
        state: {
          success: '#16A34A',
          warn: '#F59E0B',
          error: '#DC2626'
        }
      },
      fontFamily: {
        heading: ['var(--font-heading)', ...defaultTheme.fontFamily.sans],
        body: ['var(--font-body)', ...defaultTheme.fontFamily.sans]
      },
      borderRadius: {
        'brand-xl': '1rem',
        'brand-2xl': '1.5rem'
      },
      boxShadow: {
        card: '0 20px 45px -20px rgba(11, 31, 58, 0.35)',
        overlay: '0 25px 50px -20px rgba(11, 31, 58, 0.45)'
      },
      maxWidth: {
        'content': '1240px'
      },
      transitionTimingFunction: {
        brand: 'cubic-bezier(0.16, 1, 0.3, 1)'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
};
