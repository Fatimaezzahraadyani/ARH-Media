/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Fond ultra-sombre premium
        dark: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#050505', // Notre fond principal
        },
        // Palette écosystème
        ecosystem: {
          cyan: {
            50: '#ecffff',
            100: '#cfffff',
            200: '#a0ffff',
            300: '#61ffff',
            400: '#00f0ff',
            500: '#00d9ff',
            600: '#00b8d4',
            700: '#0099cc',
            800: '#0077a3',
            900: '#001a33',
          },
          orange: {
            50: '#fff7ed',
            100: '#ffedd5',
            200: '#fed7aa',
            300: '#fdba74',
            400: '#fb923c',
            500: '#ff6b35',
            600: '#ff5722',
            700: '#ff8c42',
            800: '#cc5528',
            900: '#331a0f',
          },
          green: {
            50: '#f0fdf4',
            100: '#dcfce7',
            200: '#bbf7d0',
            300: '#86efac',
            400: '#4ade80',
            500: '#00ff88',
            600: '#00dd66',
            700: '#22c55e',
            800: '#16a34a',
            900: '#001a0f',
          },
        },
      },
      backgroundColor: {
        glass: 'rgba(255, 255, 255, 0.05)',
        'glass-dark': 'rgba(0, 0, 0, 0.3)',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        glow: '0 0 20px rgba(0, 217, 255, 0.3)',
        'glow-orange': '0 0 20px rgba(255, 107, 53, 0.3)',
        'glow-green': '0 0 20px rgba(0, 255, 136, 0.3)',
        'glow-lg': '0 0 40px rgba(0, 217, 255, 0.4)',
        'glow-xl': '0 0 60px rgba(0, 217, 255, 0.5)',
        'inner-glow': 'inset 0 0 20px rgba(0, 217, 255, 0.1)',
      },
      borderColor: {
        glass: 'rgba(255, 255, 255, 0.1)',
        'glass-light': 'rgba(255, 255, 255, 0.2)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-overlay': 'radial-gradient(circle at center, rgba(5, 5, 5, 0) 0%, rgba(5, 5, 5, 0.8) 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Clash Display', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-sm': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite',
        'magnetic': 'magnetic 0.3s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        magnetic: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(var(--mx), var(--my))' },
        },
      },
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
      },
      opacity: {
        '2': '0.02',
        '5': '0.05',
        '8': '0.08',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.glass': {
          '@apply bg-white/5 backdrop-blur-md border border-white/10': {},
        },
        '.glass-dark': {
          '@apply bg-black/20 backdrop-blur-md border border-white/5': {},
        },
        '.glass-hover': {
          '@apply transition-all duration-300 hover:bg-white/10 hover:border-white/20': {},
        },
        '.text-glow': {
          '@apply drop-shadow-[0_0_8px_rgba(0,217,255,0.5)]': {},
        },
        '.text-glow-orange': {
          '@apply drop-shadow-[0_0_8px_rgba(255,107,53,0.5)]': {},
        },
        '.text-glow-green': {
          '@apply drop-shadow-[0_0_8px_rgba(0,255,136,0.5)]': {},
        },
      });
    },
  ],
};