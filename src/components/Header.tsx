import React, { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumns from "./Breadcrumbs";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Header: React.FC = () => {
  const handleLogout = () => {
    console.log("登出");
  };
  return (
    <header className="flex items-center justify-between px-4 ml-5 mr-5 w-full pb-4 border-b-solid border-b-2 ">
      {/* 引入麵包屑部分 */}
      <div className="">
        <Breadcrumns />
      </div>
      {/* 搜索框 */}
      <input
        type="text"
        placeholder="搜索..."
        className="w-80 px-4 py-2 rounded-lg border-2 border-gray-500 placeholder-gray-400 transition-transform transform hover:scale-105"
        // style={{ pointerEvents: "auto" }}
      />
      <button
        onClick={handleLogout}
        className="px-4 py-2 mr-5 rounded-lg bg-gray-400 hover:bg-gray-800 hover:text-gray-400 focus:outline-none custom-hover"
      >
        登出
      </button>
    </header>
  );
};
export default Header;
