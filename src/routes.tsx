import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Sidebar from "./components/Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import Breadcrumbs from "./components/Breadcrumbs";

const Layout: React.FC = () => {
  const location = useLocation();
  const isBreadcrumbsVisible = location.pathname !== "/login";

  return (
    <div className="flex">
      <Sidebar />
      {/* <div className="flex-grow"> */}
      <Outlet /> {/* This will render the matched child route */}
      {/* </div> */}
    </div>
  );
};

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* 登入的Login，沒有sideBar */}
      <Route path="/login" element={<LoginPage />} />
      {/* 所有路由套用sidebar */}
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

// <Routes>
//   <Route path="/" element={<HomePage />} />
//   <Route path="/login" element={<LoginPage />} />
//   {/* <Route path="*" element={<NotFoundPage />} /> */}
// </Routes>
