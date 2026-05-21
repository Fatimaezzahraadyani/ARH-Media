/*@type {import('tailwindcss').Config}*/
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#050505',
        // ✅ AJOUT : Couleurs cyan pour le Header
        cyan: {
          400: '#00d9ff',
          500: '#00d9ff',
        },
        // Palette écosystème (optionnel pour plus tard)
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
      fontFamily: {
        // Tu pourras ajouter ta police Clash Display ici plus tard
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Clash Display', 'system-ui', 'sans-serif'],
      },
      backdropBlur: {
        xl: '20px',
      },
    },
  },
  plugins: [],
}