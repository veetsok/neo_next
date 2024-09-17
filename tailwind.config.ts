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
      container: {
        center: true,
        screens: {
          xl: "1200px",
        },
      },
      colors: colorsTW,
      fontSize: {
        h1: "25px",
        h2: "20px",
        h3: "17px",
        h4: "15px",
        h5: "12px",
        h6: "10px",
      },
      boxShadow: {
        "card-box": "0 0 20px rgba(0, 0, 0, .1)",
      },
    },
  },
  plugins: [],
};
export default config;
