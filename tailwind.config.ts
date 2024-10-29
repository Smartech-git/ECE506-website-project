import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|navbar|scroll-shadow|select|ripple|spinner|listbox|divider|popover).js"
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#F7B42D",
        tertiary: "#5FECBE",
        background: {
          secondary: "#EEEEEE",
          tertiary: "#444444",
          surface: "#1A1A1AB2",
        },
        link: {
          secondary: "#666666",
        },
        text: {
          secondary: "#AAAAAA",
        },
        gray: {
          500: "#F6F7F969",
        },
      },
      backgroundImage: {
        "1stPosition-gradient": "linear-gradient(to bottom, #D9B902CC, #F5E587CC)",
        "2ndPosition-gradient": "linear-gradient(to bottom, #AEAEAE99, #D9D9D999)",
        "3rdPosition-gradient": "linear-gradient(to bottom, #BD5A1480, #DCC5B580)",
      },
      boxShadow: {
        main: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        "main-lg": "0 8px 8px -4px rgba(0, 0, 0, 0.03), 0 20px 24px -4px rgba(0, 0, 0, 0.08)",
        "main-xl": "4px 8px 8px -2px rgba(0, 0, 0, 0.05), 10px 20px 24px -2px rgba(0, 0, 0, 0.10)",
      },
      screens: {
        "4kScreen": "2000px",
      },
    },
  },
  plugins: [nextui(), require("tailwind-scrollbar")],
};
export default config;
