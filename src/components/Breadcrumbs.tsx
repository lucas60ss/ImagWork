import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="flex items-center space-x-2 text-sm">
      <Link to="/">Home</Link>
      {pathnames.map((value, index) => {
        const pathname = `/${pathnames.slice(0, index + 1).join("/")}`;
        return (
          <React.Fragment key={pathname}>
            <span>&gt;</span>
            <Link to={pathname}>{value}</Link>
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
