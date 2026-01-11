import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        accent: {
          50: "#fef3c7",
          100: "#fde68a",
          200: "#fcd34d",
          300: "#fbbf24",
          400: "#f59e0b",
          500: "#d97706",
          600: "#b45309",
          700: "#92400e",
          800: "#78350f",
          900: "#451a03",
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
        "slide-in-bottom": "slideInFromBottom 0.6s ease-out forwards",
        "slide-in-left": "slideInFromLeft 0.6s ease-out forwards",
        "scale-in": "scaleIn 0.5s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)", opacity: "0.3" },
          "50%": { transform: "translateY(-20px) rotate(180deg)", opacity: "0.8" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        slideInFromBottom: {
          from: { transform: "translateY(50px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        slideInFromLeft: {
          from: { transform: "translateX(-50px)", opacity: "0" },
          to: { transform: "translateX(0)", opacity: "1" },
        },
        scaleIn: {
          from: { transform: "scale(0.8)", opacity: "0" },
          to: { transform: "scale(1)", opacity: "1" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
