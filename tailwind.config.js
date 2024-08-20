/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",

  //指定在專案中會使用到 Tailwind CSS 的檔案路徑
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "login-h": "385px",
      },
      width: {
        "login-w": "320px",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      // 這個是登出按鈕的hover
      addComponents({
        ".custom-hover:hover": {
          backgroundColor: "#2d2d2d",
          transform: "scale(1.05)",
          color: "#e0e0e0",
          borderRadius: "0.5rem", // Tailwind's rounded-lg equivalent
          transition: "all 0.3s ease",
        },
      });
    },
  ],
};
