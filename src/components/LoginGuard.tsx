import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const LoginGuard: React.FC = () => {
  // 去抓她的狀態是否登入
  const isAuthenticated = () =>
    localStorage.getItem("isAuthenticated") === "true";

  if (!isAuthenticated()) {
    // 如果用戶未登入，重定向到登入頁面
    return <Navigate to="/login" />;
  }

  // 用戶已登入，渲染 Outlet 內容
  return <Outlet />;
};

export default LoginGuard;
