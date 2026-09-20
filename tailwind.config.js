/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: "#f8fafc",
          card: "rgba(255, 255, 255, 0.9)",
          border: "rgba(99, 102, 241, 0.2)",
          neon: "#4f46e5",
          cyan: "#0284c7",
          emerald: "#059669",
          rose: "#e11d48",
          amber: "#d97706"
        }
      },
      boxShadow: {
        'neon-glow': '0 0 25px -5px rgba(99, 102, 241, 0.25)',
        'cyan-glow': '0 0 25px -5px rgba(2, 132, 199, 0.25)',
        'card-3d': '0 20px 45px -10px rgba(99, 102, 241, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.04)',
        'inset-glow': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.8)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotateX(0deg)' },
          '50%': { transform: 'translateY(-8px) rotateX(2deg)' },
        }
      }
    },
  },
  plugins: [],
}
