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
        gold: {
          DEFAULT: "#c8973a",
          light: "#dba84a",
          dim: "rgba(200,151,58,0.15)",
        },
        surface: {
          DEFAULT: "#13151a",
          2: "#1a1d24",
        },
      },
      animation: {
        "float-a": "floatA 5s ease-in-out infinite",
        "float-b": "floatB 5s ease-in-out infinite",
        "float-c": "floatC 5s ease-in-out infinite",
      },
      keyframes: {
        floatA: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        floatB: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        floatC: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
    },
  },
  plugins: [],
};