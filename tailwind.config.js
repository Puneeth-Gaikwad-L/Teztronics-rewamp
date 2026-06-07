/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        "dm-sans": ["DM Sans", "sans-serif"],
      },
      colors: {
        // Brand palette
        primary: {
          DEFAULT: "#1E88FF",   // Electric Blue — main accent
          hover:   "#3d9fff",   // Lighter on hover
          dark:    "#003B8E",   // Primary Dark Blue — deep navy accent
        },
        neutral: {
          DEFAULT: "#4F4F4F",   // Neutral Grey
        },
        surface: {
          DEFAULT: "#0b1020",
          2: "#0f1525",
        },
        bg: "#060912",
      },
      animation: {
        "float-a": "floatA 5s ease-in-out infinite",
        "float-b": "floatB 5s ease-in-out infinite",
        "float-c": "floatC 5s ease-in-out infinite",
      },
      keyframes: {
        floatA: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%":     { transform: "translateY(-12px)" },
        },
        floatB: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%":     { transform: "translateY(-8px)" },
        },
        floatC: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%":     { transform: "translateY(-14px)" },
        },
      },
    },
  },
  plugins: [],
};