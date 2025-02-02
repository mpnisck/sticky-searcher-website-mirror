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
    themes: ["pastel"], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
