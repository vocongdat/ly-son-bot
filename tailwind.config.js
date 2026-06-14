/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
      },
      colors: {
        // Semantic tokens (driven by CSS variables for light/dark)
        border: 'hsl(var(--border) / <alpha-value>)',
        input: 'hsl(var(--input) / <alpha-value>)',
        ring: 'hsl(var(--ring) / <alpha-value>)',
        background: 'hsl(var(--background) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        primary: {
          DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
          foreground: 'hsl(var(--primary-foreground) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
          foreground: 'hsl(var(--accent-foreground) / <alpha-value>)',
        },
        card: {
          DEFAULT: 'hsl(var(--card) / <alpha-value>)',
          foreground: 'hsl(var(--card-foreground) / <alpha-value>)',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
          foreground: 'hsl(var(--muted-foreground) / <alpha-value>)',
        },
        // Brand scales (for gradients & accents)
        ocean: {
          50: '#ecfeff',
          100: '#cff8fe',
          200: '#a4effc',
          300: '#66e2f9',
          400: '#1fcaee',
          500: '#05aed4',
          600: '#078bb2',
          700: '#0d6f90',
          800: '#155b75',
          900: '#164b63',
          950: '#083144',
        },
        sand: {
          50: '#fbf8f1',
          100: '#f5eede',
          200: '#ebdabb',
          300: '#dec291',
          400: '#d2a566',
          500: '#c88f48',
          600: '#ba783d',
          700: '#9b5e34',
          800: '#7e4d30',
          900: '#67402a',
          950: '#382014',
        },
        coral: {
          50: '#fff3ed',
          100: '#ffe3d4',
          200: '#ffc2a8',
          300: '#ff9870',
          400: '#ff6336',
          500: '#fe4116',
          600: '#ef2a0c',
          700: '#c61d0c',
          800: '#9d1912',
          900: '#7e1812',
          950: '#440807',
        },
      },
      borderRadius: {
        '2xl': '1.125rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      spacing: {
        18: '4.5rem',
        112: '28rem',
        128: '32rem',
      },
      zIndex: {
        100: '100',
      },
      boxShadow: {
        soft: '0 1px 2px -1px hsl(200 40% 20% / 0.08), 0 2px 8px -2px hsl(200 40% 20% / 0.08)',
        elevated:
          '0 4px 12px -4px hsl(200 45% 18% / 0.12), 0 12px 32px -8px hsl(200 45% 18% / 0.14)',
        glow: '0 0 0 1px hsl(var(--primary) / 0.18), 0 8px 30px -6px hsl(var(--primary) / 0.45)',
      },
      backgroundImage: {
        'brand-gradient':
          'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(190 90% 36%) 45%, hsl(14 88% 60%) 130%)',
        'ocean-mesh':
          'radial-gradient(at 18% 12%, hsl(190 90% 55% / 0.20) 0px, transparent 55%), radial-gradient(at 82% 8%, hsl(14 90% 62% / 0.16) 0px, transparent 50%), radial-gradient(at 70% 88%, hsl(200 85% 50% / 0.16) 0px, transparent 55%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-22px) translateX(10px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'typing-bounce': {
          '0%, 60%, 100%': { transform: 'translateY(0)', opacity: '0.45' },
          '30%': { transform: 'translateY(-5px)', opacity: '1' },
        },
        aurora: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(4%, -6%) scale(1.08)' },
          '66%': { transform: 'translate(-5%, 4%) scale(0.94)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 11s ease-in-out infinite',
        'gradient-x': 'gradient-x 6s ease infinite',
        'typing-bounce': 'typing-bounce 1.2s ease-in-out infinite',
        aurora: 'aurora 18s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
