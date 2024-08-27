// 最上方麵包屑
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // 路徑到中文的映射
  const breadcrumbNameMap: { [key: string]: string } = {
    "/": "選擇專案",
    about: "關於我們",
    option1: "選項1",
    option2: "選項2",
    option3: "選項3",
  };

  return (
    <nav className="flex items-center space-x-2 text-sm">
      <Link to="/">選擇專案</Link>
      {pathnames.map((value, index) => {
        // 處理動態路由，例如 :projectId
        const isDynamic = !breadcrumbNameMap[value] && !isNaN(Number(value));
        const pathname = `/${pathnames.slice(0, index + 1).join("/")}`;
        const breadcrumbLabel = isDynamic
          ? `專案 ID: ${value}`
          : breadcrumbNameMap[value] || value;

        console.log(value);
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
