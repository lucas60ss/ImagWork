import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useSelectedItem } from "../hooks/SelectedItemContext";

const SidebarProject: React.FC = () => {
  // 預設選取狀態，預設"View"被選取
  const { selectedItem, setSelectedItem } = useSelectedItem();

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
              onClick={() => setSelectedItem("View")}
              className={`block px-8 py-2 transition-all duration-300 ${
                selectedItem === "View"
                  ? "bg-gray-700 scale-105 text-slate-200 rounded-lg"
                  : "hover:bg-gray-700 hover:scale-105 hover:text-slate-200 hover:rounded-lg"
              }`}
            >
              數據報表 - View{" "}
            </Link>
          </li>
          <li>
            <Link
              to="/:projectId/Event"
              onClick={() => setSelectedItem("Event")}
              className={`block px-8 py-2 w-[225px] flex justify-between cursor-pointer transition-all duration-300 ${
                selectedItem === "Event"
                  ? "bg-gray-700 scale-105 text-slate-200 rounded-lg"
                  : "hover:bg-gray-700 hover:scale-105 hover:text-slate-200 hover:rounded-lg"
              }`}
            >
              數據報表 - Event
            </Link>
          </li>
          <li>
            <Link
              to="/:projectId/UID-List"
              onClick={() => setSelectedItem("UID List")}
              className={`block px-8 py-2 w-[225px] flex justify-between cursor-pointer transition-all duration-300 ${
                selectedItem === "UID List"
                  ? "bg-gray-700 scale-105 text-slate-200 rounded-lg"
                  : "hover:bg-gray-700 hover:scale-105 hover:text-slate-200 hover:rounded-lg"
              }`}
            >
              數據報表 - UID List
            </Link>
          </li>
          <li>
            <Link
              to="/:projectId/Project-manage"
              onClick={() => setSelectedItem("Project Manage")}
              className={`block px-8 py-2 w-[225px] flex justify-between cursor-pointer transition-all duration-300 ${
                selectedItem === "Project Manage"
                  ? "bg-gray-700 scale-105 text-slate-200 rounded-lg"
                  : "hover:bg-gray-700 hover:scale-105 hover:text-slate-200 hover:rounded-lg"
              }`}
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
