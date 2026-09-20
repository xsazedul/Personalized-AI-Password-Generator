/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: "#07090e",
          card: "rgba(18, 22, 34, 0.75)",
          border: "rgba(99, 102, 241, 0.2)",
          neon: "#6366f1",
          cyan: "#06b6d4",
          emerald: "#10b981",
          rose: "#f43f5e",
          amber: "#f59e0b"
        }
      },
      boxShadow: {
        'neon-glow': '0 0 25px -5px rgba(99, 102, 241, 0.45)',
        'cyan-glow': '0 0 25px -5px rgba(6, 182, 212, 0.45)',
        'card-3d': '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 20px rgba(99, 102, 241, 0.15)',
        'inset-glow': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.15)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotateX(0deg)' },
          '50%': { transform: 'translateY(-10px) rotateX(3deg)' },
        }
      }
    },
  },
  plugins: [],
}
