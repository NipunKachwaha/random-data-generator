/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        chassis: '#e0e5ec',
        panel: '#f0f2f5',
        recessed: '#d1d9e6',
        'text-primary': '#2d3436',
        'text-muted': '#4a5568',
        accent: '#ff4757',
        'accent-light': '#ff6b7a',
        'accent-dark': '#c0392b',
        'border-shadow': '#babecc',
        'border-highlight': '#ffffff',
        'border-dark': '#a3b1c6',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Roboto Mono', 'monospace'],
      },
      boxShadow: {
        'neu-card': '8px 8px 16px #babecc, -8px -8px 16px #ffffff',
        'neu-floating': '12px 12px 24px #babecc, -12px -12px 24px #ffffff',
        'neu-pressed': 'inset 6px 6px 12px #babecc, inset -6px -6px 12px #ffffff',
        'neu-recessed': 'inset 4px 4px 8px #babecc, inset -4px -4px 8px #ffffff',
        'neu-sharp': '4px 4px 8px rgba(0,0,0,0.15), -1px -1px 1px rgba(255,255,255,0.8)',
        'led-green': '0 0 10px 2px rgba(34,197,94,0.6)',
        'led-red': '0 0 10px 2px rgba(255,71,87,0.6)',
        'led-accent': '0 0 10px 2px rgba(255,71,87,0.5)',
      },
      borderRadius: {
        'neu-sm': '4px',
        'neu-md': '8px',
        'neu-lg': '16px',
        'neu-xl': '24px',
        'neu-2xl': '30px',
      },
      animation: {
        'led-pulse': 'led-pulse 2s ease-in-out infinite',
      },
      keyframes: {
        'led-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
    },
  },
  plugins: [],
}
