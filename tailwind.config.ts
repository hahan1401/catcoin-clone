import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        bg: "rgb(var(--color-bg) / <alpha-value>)",
      },
      spacing: {
        2.5: "0.625rem",
        4.5: "1.125rem",
      },
      fontSize: {
        lg: ["1.125rem", { lineHeight: "1.3125rem" }],
      },
    },
  },
  plugins: [],
};
export default config;
