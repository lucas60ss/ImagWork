import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // 路徑到中文的映射
  const breadcrumbNameMap: { [key: string]: string } = {
    "/": "首頁",
    about: "關於我們",
    option1: "選項1",
    option2: "選項2",
    option3: "選項3",
  };

  return (
    <nav className="flex items-center space-x-2 text-sm">
      <Link to="/">首頁</Link>
      {pathnames.map((value, index) => {
        const pathname = `/${pathnames.slice(0, index + 1).join("/")}`;
        const breadcrumbLabel = breadcrumbNameMap[value] || value; // 使用映射，找不到則使用原值

        return (
          <React.Fragment key={pathname}>
            <span>&gt;</span>
            <Link to={pathname}>{breadcrumbLabel}</Link>
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
