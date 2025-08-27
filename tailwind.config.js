/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Figtree', 'ui-sans-serif', 'system-ui'],
        'serif': ['Champion-Light', 'ui-serif', 'Georgia'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in forwards',
        'scroll': 'scroll 2s ease-in-out infinite',
        'bounce': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scroll: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
      },
      colors: {
        church: {
          yellow: '#FBD719',  // Church Yellow
          gray: '#6B7280',    // Gray
          black: '#1F2937',   // Rich Black
          white: '#FFFFFF',   // Pure White
        },
        primary: {
          DEFAULT: '#FBD719', // Church Yellow
          light: '#FDE68A',   // Light Yellow
          dark: '#D6B517',    // Darker Yellow
        },
        secondary: {
          DEFAULT: '#6B7280', // Gray
          light: '#9CA3AF',   // Light Gray
          dark: '#4B5563',    // Dark Gray
        },
        accent: {
          DEFAULT: '#1F2937', // Black
          light: '#374151',   // Light Black
          dark: '#111827',    // Darker Black
          50: '#fef2f2',      // Light Red
          100: '#fee2e2',     // Lighter Red
          200: '#fecaca',     // Light Warm
          300: '#fca5a5',     // Warm
          400: '#f87171',     // Primary Warm
          500: '#ef4444',     // Deep Warm
          600: '#dc2626',     // Darker Warm
          700: '#b91c1c',     // Dark Warm
          800: '#991b1b',     // Very Dark Warm
          900: '#7f1d1d',     // Darkest Warm
        }
      }
    },
  },
  plugins: [],
}
