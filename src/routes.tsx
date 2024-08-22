import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Sidebar from "./components/Sidebar";
import { Outlet, useLocation } from "react-router-dom";
// import Breadcrumbs from "react-breadcrumbs-dynamic";
import Header from "./components/Header";
import LoginGuard from "./components/LoginGuard";
import ProjectPage from "./pages/ProjectPage";

const Layout: React.FC = () => {
  const location = useLocation();
  const isBreadcrumbsVisible = location.pathname !== "/login";

  return (
    <div className="flex flex-row">
      <Sidebar />
      <main className="flex flex-col items-center  w-full mx-5">
        <Header />
        <Outlet />
      </main>
    </div>
  );
};

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* 登入的Login，沒有sideBar */}
      <Route path="/login" element={<LoginPage />} />

      <Route element={<LoginGuard />}>
        <Route element={<Layout />}>
          {/* 所有路由套用sidebar */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" />
          <Route path="/option1" />
          <Route path="/option2" />
          <Route path="/option3" />
          {/* 添加 點進去各個專案 的動態路由 */}
          <Route path="/projects" element={<ProjectPage />}>
            {/* 動態路由 */}
            <Route path="/projects:projectId" element={<ProjectPage />} />
          </Route>
        </Route>
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
