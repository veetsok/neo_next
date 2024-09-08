import type { Config } from "tailwindcss";
import colorsTW from "./src/lib/styles/tailwind.config/colorsTW";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: colorsTW,
      fontSize: {
        h1: "25px",
        h2: "20px",
        h3: "17px",
        h4: "15px",
        h5: "12px",
        h6: "10px",
      },
    },
  },
  plugins: [],
};
export default config;
