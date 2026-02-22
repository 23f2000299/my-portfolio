/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
  colors: {
    primary: '#0f172a',       // deep slate navy background (premium)
  secondary: '#111827',     // card background (rich dark)
  accent: '#3b82f6',        // elegant blue accent (professional)
  accentSoft: '#60a5fa',    // hover accent (soft blue glow)

  textPrimary: '#e5e7eb',   // main text (clean white-gray)
  textSecondary: '#94a3b8', // secondary text (soft slate)
  
  border: '#1f2937',        // subtle borders
  cardHover: '#1e293b'   // secondary text color      // softer blue
  },
  fontFamily: {
    sans: ['Inter', 'sans-serif'],
  },
},
  },
  plugins: [],
};