/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6CAFD9",
        subPrimary1: "#333",
        subPrimary2: "#fff",
      },
      width: {
        btnW: "170px",
        DelBtnW: "40px",
      },
      height: {
        btnH: "50px",
        DelBtnH: "40px",
      },
      fontSize: {
        xs: ["12px", { lineHeight: "18px" }],
        sm: ["14px", { lineHeight: "22px" }],
        base: ["16px", { lineHeight: "22px" }],
        lg: ["20px", { lineHeight: "26px" }],
        xl: ["28px", { lineHeight: "40px" }],
      },
      fontFamily: {
        NEXON: ["NEXON Lv1 Gothic OTF"],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["pastel"],
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
  },
};
