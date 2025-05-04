/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F4B400',
          50: '#FFF9E6',
          100: '#FFF3CC',
          200: '#FFE299',
          300: '#FFD166',
          400: '#FFC033',
          500: '#FFAD00',
          600: '#F4A200',
          700: '#E49700',
          800: '#D48C00',
          900: '#C48100',
        },
        secondary: {
          DEFAULT: '#4A4A4A',
          50: '#F5F5F5',
          100: '#E5E5E5',
          200: '#D5D5D5',
          300: '#C5C5C5',
          400: '#B5B5B5',
          500: '#A5A5A5',
          600: '#959595',
          700: '#858585',
          800: '#757585',
          900: '#656565',
        },
      },
      fontWeight: {
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
        'black': '900',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#4A4A4A',
            maxWidth: '100%',
            a: {
              color: '#F4B400',
              textDecoration: 'underline',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')({
      modifiers: ['DEFAULT'],
    }),
  ],
}
