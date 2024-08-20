import React, { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumns from "./Breadcrumbs";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  // 測試全部專案夏拉是選單
  const allProject = ["麥卡倫", "LV", "The North Face"];
  const [Projects, setProjects] = useState("艾邁格所有專案");
  // const [searchTerm, setSearchTerm] = useState(""); //追蹤搜尋框的輸入
  const navigate = useNavigate(); //使用導航

  // 根據搜尋框的輸入來篩選專案
  // const filteredProjects = allProject.filter((project) => {
  //   project.toLowerCase().includes(searchTerm.toLowerCase());
  // });

  // const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   const selectProject = e.target.value;
  //   setProjects(selectProject);

  //   if (selectProject) {
  //     navigate(`/projects/${selectProject}`);
  //   }
  // };

  const handleLogout = () => {
    console.log("登出");
  };
  return (
    <header className="flex items-center justify-between px-4 ml-5 mr-5 w-full pb-4 border-b-solid  mt-5">
      {/* 引入麵包屑部分 */}
      <div className="">
        <Breadcrumns />
      </div>
      {/* 搜索框 */}
      <input
        type="text"
        placeholder="搜索..."
        className="h-[42px] w-80 px-4 py-2 rounded-lg border-2 border-gray-500 placeholder-gray-400 transition-transform transform hover:scale-105"
        // style={{ pointerEvents: "auto" }}
      />
      {/* 各個專案的下拉式選單 */}
      <section className="allProject  flex items-center justify-center flex-col ">
        {/* <h1>所有專案</h1> */}
        <select
          className=" w-80 px-4 py-2 rounded-lg border-2 border-gray-500 placeholder-gray-400 transition-transform transform hover:scale-105 "
          value={Projects}
          onChange={(e) => {
            setProjects(e.target.value);
          }}
        >
          <option value="">請選擇專案</option>
          {allProject.map((v, i) => {
            return (
              <option key={i} value={v}>
                {v}
              </option>
            );
          })}
        </select>
      </section>
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
