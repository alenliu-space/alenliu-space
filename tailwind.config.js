/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // 👈 关键修复：告诉 Tailwind 通过切换 class 来激活暗黑模式
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}