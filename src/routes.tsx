import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Sidebar from "./components/Sidebar";
import SidebarProject from "./components/SidebarProject";
import { Outlet, useLocation } from "react-router-dom";
// import Breadcrumbs from "react-breadcrumbs-dynamic";
import Header from "./components/Header";
import LoginGuard from "./components/LoginGuard";
import ProjectPage from "./pages/ProjectPage";
import ProjectPageEvent from "./pages/ProjectPageEvent";
import ProjectPageUUID from "./pages/ProjectPageUUID";
import ProjectPageManage from "./pages/ProjectPageManage";

const Layout: React.FC = () => {
  const location = useLocation();
  // const isBreadcrumbsVisible = location.pathname !== "/login";
  // 判斷目前路徑是否包含動態路由，決定使用哪一個側邊欄
  // const isProjectPage =
  //   /^\/[^/]+$/.test(location.pathname) &&
  //   location.pathname.split("/").length === 2;
  return (
    <div className="flex flex-row">
      <Sidebar />
      {/* {isProjectPage ? <SidebarProject /> : <Sidebar />} */}

      <main className="flex flex-col items-center  w-full mx-5">
        <Header />
        <Outlet />
      </main>
    </div>
  );
};
// 用來放:projectId的路由
const Layout2: React.FC = () => {
  const location = useLocation();

  return (
    <div className="flex flex-row">
      <SidebarProject />
      {/* {isProjectPage ? <SidebarProject /> : <Sidebar />} */}

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
          {/* <Route path="/projects" element={<ProjectPage />}> */}
          {/* 動態路由，顯示ProjectPage*/}
          {/* <Route path="/:projectId" element={<ProjectPage />} /> */}
          {/* </Route> */}
        </Route>

        {/* 專案頁面的路由配置 */}
        <Route element={<Layout2 />}>
          {/* 動態路由，顯示ProjectPage*/}
          <Route path="/:projectId" element={<ProjectPage />} />
          <Route path="/:projectId/View" element={<ProjectPage />} />
          <Route path="/:projectId/Event" element={<ProjectPageEvent />} />
          <Route path="/:projectId/UID-List" element={<ProjectPageUUID />} />
          <Route
            path="/:projectId/Project-manage"
            element={<ProjectPageManage />}
          />
          <Route />
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
