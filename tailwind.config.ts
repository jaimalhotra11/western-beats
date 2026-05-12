import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blu:  '#0A64C3',
        nav:  '#002A8D',
        sky:  '#5CB2DC',
        crm:  '#C41230',
        mid:  '#080F1A',
        ice:  '#B8D4EA',
        dnav: '#0A1535',
        fog:  '#E2EAF2',
        owt:  '#F0F4F8',
        mut:  '#6B7A8D',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        inter:  ['Inter', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 28s linear infinite',
        'float': 'float 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4,0,0.6,1) infinite',
      },
    },
  },
  plugins: [],
}
export default config
