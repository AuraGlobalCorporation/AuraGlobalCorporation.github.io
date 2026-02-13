/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        aura: {
          navy: '#0D1B2A',
          midnight: '#1B263B',
          slate: '#243447',
          cyan: '#00E5FF',
          'cyan-dim': '#00B8D4',
          red: '#FF1744',
          mint: '#A8E6CF',
          teal: '#00838F',
          dusk: '#4C5578',
          'light-bg': '#F7FBFF',
          'light-sec': '#E3F2FD',
          'light-accent': '#42A5F5',
          'text-primary': '#F7FBFF',
          'text-secondary': '#E3F2FD',
          'text-muted': '#8899AA',
        },
      },
      fontFamily: {
        display: ['Outfit', 'system-ui', 'sans-serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'scan-line': 'scan-line 4s linear infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0,229,255,0.3), 0 0 60px rgba(0,229,255,0.1)' },
          '50%': { boxShadow: '0 0 30px rgba(0,229,255,0.5), 0 0 80px rgba(0,229,255,0.2)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scan-line': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': 'linear-gradient(rgba(0,229,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.03) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
    },
  },
  plugins: [],
};
