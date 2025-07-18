/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blueprint: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        accent: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        sage: {
          50: '#f6f7f6',
          100: '#e1e8e1',
          200: '#c3d1c3',
          300: '#9bb59b',
          400: '#7a9a7a',
          500: '#5f7f5f',
          600: '#4a654a',
          700: '#3d533d',
          800: '#334433',
          900: '#2a3a2a',
        }
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'Consolas', 'Monaco', 'Courier New', 'monospace'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'Georgia', 'serif'],
      },
      animation: {
        'blueprint-draw': 'blueprint-draw 2s ease-in-out infinite',
        'fade-in': 'fade-in 0.6s ease-out',
        'slide-up': 'slide-up 0.8s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'blueprint-draw': {
          '0%, 100%': { 'stroke-dashoffset': '0' },
          '50%': { 'stroke-dashoffset': '10' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'blueprint-grid': `
          linear-gradient(rgba(37, 99, 235, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(37, 99, 235, 0.1) 1px, transparent 1px)
        `,
        'blueprint-dots': `radial-gradient(circle, rgba(37, 99, 235, 0.2) 1px, transparent 1px)`,
      },
      backgroundSize: {
        'grid-20': '20px 20px',
        'grid-40': '40px 40px',
        'dots-20': '20px 20px',
      },
      boxShadow: {
        'blueprint': '0 0 20px rgba(37, 99, 235, 0.3)',
        'accent-glow': '0 0 30px rgba(245, 158, 11, 0.4)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
