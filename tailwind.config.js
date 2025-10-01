const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./hooks/**/*.{js,jsx,ts,tsx}",
    "./data/**/*.{js,jsx,ts,tsx}"
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
          primary: '#0B1F3A',
          accent: '#FF7A00',
          accentSoft: '#FFE0C2'
        },
        surface: {
          light: '#F3F4F6',
          muted: '#6B7280'
        },
        state: {
          success: '#16A34A',
          warn: '#F59E0B',
          error: '#DC2626'
        }
      },
      fontFamily: {
        heading: ['Inter', 'Manrope', 'SF Pro Display', ...defaultTheme.fontFamily.sans],
        body: ['Inter', 'SF Pro Text', ...defaultTheme.fontFamily.sans]
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
