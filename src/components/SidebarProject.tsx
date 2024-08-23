import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const SidebarProject: React.FC = () => {
  return (
    <div className="w-[225px] bg-gray-800 text-white min-h-screen flex flex-col items-center">
      <div className="p-4 mt-5">
        <Link to="/">
          <img
            src="/imag_img.png"
            className=" border-t border-x rounded-lg"
            alt=""
          />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link
              to="/:projectId/View"
              className=" block px-8 py-2 hover:bg-gray-700 hover:scale-105 hover:text-slate-200 hover:rounded-lg transition-all duration-300"
            >
              數據報表 - View{" "}
            </Link>
          </li>
          <li>
            <Link
              to="/:projectId/Event"
              className="block px-8 py-2 hover:bg-gray-700 hover:scale-105 hover:text-slate-200 hover:rounded-lg transition-all duration-300 w-[225px] flex justify-between cursor-pointer"
            >
              數據報表 - Event
            </Link>
          </li>
          <li>
            <Link
              to="/:projectId/UID-List"
              className="block px-8  py-2 hover:bg-gray-700 hover:scale-105 hover:text-slate-200 hover:rounded-lg transition-all duration-300 
              flex flex-row justify-between"
            >
              數據報表 - UID List
            </Link>
          </li>
          <li>
            <Link
              to="/:projectId/Project-manage"
              className="block px-8  py-2 hover:bg-gray-700 hover:scale-105 hover:text-slate-200 hover:rounded-lg transition-all duration-300 
              flex flex-row justify-between"
            >
              專案帳號權限管理
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default SidebarProject;
