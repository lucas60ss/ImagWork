// src/pages/AboutPage.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// 獲取環境變數中的帳號和密碼
const loginAccount = process.env.REACT_APP_LOGIN_ACCOUNT || "";
const loginPassword = process.env.REACT_APP_LOGIN_PASSWORD || "";
const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // 用於顯示錯誤信息

  // 這邊設定登入按鈕導向
  const handleLogin = () => {
    console.log("Input Account:", account);
    console.log("Input Password:", password);
    console.log("Stored Account:", loginAccount);
    console.log("Stored Password:", loginPassword);

    if (account === loginAccount && password === loginPassword) {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/");
    } else {
      setError("帳號或密碼錯誤");
    }
  };
  return (
    <div className="flex justify-center items-center	w-screen	h-screen bg-gray-50">
      <div className="min-w-80 overflow-hidden rounded-lg bg-white p-4 shadow  w-login-w">
        <div>
          <img
            src="/imag_img.png"
            className=" border-t border-x rounded-t-lg"
            alt=""
          />
        </div>
        <div className="flex justify-center items-center mb-4 text-2xl font-medium border-b border-x  py-4 pb-4 rounded-b-lg">
          會員中心管理
        </div>
        <div className="top"></div>
        <div className="middle"></div>
        <form
          className="flex flex-col"
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <div className="account flex flex-col w-full">
            <label htmlFor="" className="my-2 text-lg">
              帳號
            </label>
            <input
              type="text"
              placeholder="請輸入帳號"
              value={account}
              onChange={(e) => {
                setAccount(e.target.value);
              }}
              className="px-3 py-2 border-solid border-2 rounded-lg placeholder:text-sm py-2
              transition-transform transform hover:scale-105"
            />
          </div>

          <div className="password flex flex-col w-full mt-2">
            <label htmlFor="" className="my-2">
              密碼
            </label>
            <input
              type="password"
              placeholder="請輸入密碼"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="px-3 py-2 border-solid border-2 rounded-lg
              transition-transform transform hover:scale-105"
            />
          </div>
          <div className="flex items-center justify-center mt-3 text-red-600">
            {error}
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-blue-500 py-2 rounded-lg 
          bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white
          transition-transform transform hover:scale-105"
          >
            登入
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
