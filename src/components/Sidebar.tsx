import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Sidebar: React.FC = () => {
  // 下拉式選單1
  const [isOpen, setIsOpen] = useState(false);
  // 下拉式選單2
  const [isOpen2, setIsOpen2] = useState(false);

  // 下拉式選單按鈕一
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  // 下拉式選單按鈕二
  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };
  return (
    <div className="w-[225px] bg-gray-800 text-white min-h-screen flex flex-col items-center">
      <div className="p-4 mt-5">
        {/* <h2 className="text-xl font-bold">Sidebar</h2> */}
        <Link to="/">
          <img
            src="/imag_img.png"
            className=" border-t border-x rounded-lg"
            alt=""
          />
        </Link>
      </div>
      <nav className="">
        <ul>
          <li className="relative">
            <div
              onClick={toggleDropdown} // 點擊時觸發toggleDropdown方法
              className="block px-4 py-2 hover:bg-gray-700 hover:scale-105 hover:text-slate-200 hover:rounded-lg transition-all duration-300 w-[225px] flex justify-between cursor-pointer"
            >
              首頁設定
              <span className="ml-2 mt-1">
                {isOpen ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </div>
            {isOpen && (
              <div className=" my-2 w-full rounded-md shadow-lg bg-gray-700 ring-1 ring-black ring-opacity-5 z-10">
                <div className="py-1">
                  <Link
                    to="/option1"
                    className="block px-4 py-2 text-sm text-gray-100 hover:transition-all duration-300 hover:text-lg"
                  >
                    選項1
                  </Link>
                  <Link
                    to="/option2"
                    className="block px-4 py-2 text-sm text-gray-100 hover:transition-all duration-300 hover:text-lg"
                  >
                    選項2
                  </Link>
                  <Link
                    to="/option3"
                    className="block px-4 py-2 text-sm text-gray-100 hover:transition-all duration-300 hover:text-lg"
                  >
                    選項3
                  </Link>
                </div>
              </div>
            )}
          </li>
          <li>
            <div
              onClick={toggleDropdown2}
              className="block px-4 py-2 hover:bg-gray-700 hover:scale-105 hover:text-slate-200 hover:rounded-lg transition-all duration-300 
              flex flex-row justify-between"
            >
              權限、帳號管理
              <span className="ml-2 mt-1">
                {isOpen2 ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </div>
            {isOpen2 && (
              <div className=" my-2 w-full rounded-md shadow-lg bg-gray-700 ring-1 ring-black ring-opacity-5 z-10">
                <div className="py-1">
                  <Link
                    to="/option1"
                    className="block px-4 py-2 text-sm text-gray-100 hover:transition-all duration-300 hover:text-lg"
                  >
                    選項1
                  </Link>
                  <Link
                    to="/option2"
                    className="block px-4 py-2 text-sm text-gray-100 hover:transition-all duration-300 hover:text-lg"
                  >
                    選項2
                  </Link>
                  <Link
                    to="/option3"
                    className="block px-4 py-2 text-sm text-gray-100 hover:transition-all duration-300 hover:text-lg"
                  >
                    選項3
                  </Link>
                </div>
              </div>
            )}
          </li>
          <li>
            <Link
              to="/about"
              className="block px-4 py-2 hover:bg-gray-700 hover:scale-105 hover:text-slate-200 hover:rounded-lg transition-all duration-300"
            >
              設定
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Sidebar;
