import { withUt } from "uploadthing/tw";

export default withUt({
  /** @type {import('tailwindcss').Config} */
  // Your existing Tailwind config
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./src/**/*.{ts,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  darkMode: "class",
  plugins: [
    require('@tailwindcss/typography'),
    require("tw-elements/dist/plugin.cjs")

  ],
});