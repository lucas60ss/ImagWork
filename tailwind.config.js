/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",

  // 指定在專案中會使用到 Tailwind CSS 的檔案路徑
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "login-h": "385px",
        "button-h": "40px",
      },
      width: {
        "login-w": "320px",
        "button-w": "60px",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      // 定義自訂的 hover 樣式
      addComponents({
        ".custom-hover": {
          transition: "all 0.3s ease", // 添加通用過渡效果
        },
        ".custom-hover:hover": {
          transform: "scale(1.1)", // 放大效果
          color: "#948469", // 文字顏色
          borderBottom: "2px solid #948469", // 底邊框顏色
        },
        ".hover-scale-text:hover": {
          fontSize: "1.1rem", // 增加字型大小
          transition: "font-size 0.3s ease", // 平滑過渡效果
        },
        ".custom-button": {
          border: "2px solid #948469", // 自訂邊框顏色和寬度
          color: "#948469", // 自訂文字顏色
          borderRadius: "0.5rem", // rounded-lg 樣式（0.5rem 是 lg 的預設值）
        },
        ".custom-button2": {
          border: "2px solid #948469", // 自訂邊框顏色和寬度
          backgroundColor: "#948469", // 自訂文字顏色
          borderRadius: "0.5rem", // rounded-lg 樣式（0.5rem 是 lg 的預設值）
        },
      });
    },
  ],
};
