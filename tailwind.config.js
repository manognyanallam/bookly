/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm ivory / cream page backgrounds & card surfaces
        cream: {
          50: '#FDFBF7',
          100: '#FAF7F2', // Primary warm ivory page background
          200: '#F3EDE2',
          300: '#E8DEC9',
          400: '#D9C8A8',
          500: '#C7AF85',
        },
        // Deep forest-green primary colour
        forest: {
          50: '#F0F6F2',
          100: '#DCEDE2',
          200: '#B9DBC6',
          300: '#8AC3A3',
          400: '#4F9E75',
          500: '#2D7A54',
          600: '#236243',
          700: '#1B4332', // Deep forest-green primary
          800: '#143326', // Deep forest header / hero
          900: '#0F281E',
          950: '#0A1B14',
        },
        // Muted sage secondary colour
        sage: {
          50: '#F4F7F5',
          100: '#E9EFEA', // Light sage badge background
          200: '#D5DFD8',
          300: '#B5C7BD',
          400: '#8FAA9A',
          500: '#6C8E7C',
          600: '#52796F', // Muted sage secondary
          700: '#416158',
          800: '#324A43',
          900: '#253732',
        },
        // Charcoal text with high legibility and contrast
        charcoal: {
          50: '#F8F9FA',
          100: '#F1F3F5',
          200: '#E9ECEF',
          300: '#DEE2E6',
          400: '#CED4DA',
          500: '#868E96',
          600: '#495057', // Secondary text
          700: '#343A40',
          800: '#212529', // Primary body text
          900: '#1A1D20', // Headings
          950: '#111315',
        },
        // Restrained gold accents
        gold: {
          50: '#FDFBF2',
          100: '#FAF5DE',
          200: '#F4E8B7',
          300: '#EBD688',
          400: '#DFC056',
          500: '#C59B27', // Restrained gold accent
          600: '#A7811B',
          700: '#826316',
          800: '#604814',
          900: '#453412',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['var(--font-serif)', 'Playfair Display', 'Merriweather', 'Georgia', 'serif'],
      },
      boxShadow: {
        'bookly-sm': '0 2px 8px -1px rgba(27, 67, 50, 0.05), 0 1px 3px -1px rgba(0, 0, 0, 0.03)',
        'bookly': '0 6px 20px -2px rgba(27, 67, 50, 0.07), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'bookly-lg': '0 12px 32px -4px rgba(27, 67, 50, 0.12), 0 4px 12px -2px rgba(0, 0, 0, 0.06)',
        'bookly-hover': '0 16px 40px -4px rgba(27, 67, 50, 0.16), 0 6px 16px -2px rgba(197, 155, 39, 0.1)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
};
