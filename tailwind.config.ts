import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "999px",
      xl: "1440px",
      "2xl": "1920px",
    },
    extend: {
      colors: {
        ink: "#181E4B",
        slate: "#5E6282",
        coral: "#DF6951",
        gold: "#F1A501",
        mist: "#F7F7F7",
        lavender: "#DFD7F9",
        peach: "#FFF1DA",
        cloud: "#F9F9F9",
      },
      fontFamily: {
        display: ["var(--font-volkhov)", "serif"],
        body: ["var(--font-poppins)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 40px 90px rgba(89, 177, 230, 0.08)",
        card: "0 24px 48px rgba(41, 45, 79, 0.08)",
        lift: "0 30px 60px rgba(89, 177, 230, 0.12)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      backgroundImage: {
        "hero-blob": "radial-gradient(circle at top right, rgba(255,241,218,1) 0%, rgba(255,241,218,1) 58%, rgba(255,241,218,0) 59%)",
        "newsletter-ring-left": "radial-gradient(circle at center, transparent 56%, rgba(223,215,249,0.55) 57%, transparent 58%)",
      },
    },
  },
  plugins: [],
};

export default config;
