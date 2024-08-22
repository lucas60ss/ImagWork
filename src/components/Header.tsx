import React, { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumns from "./Breadcrumbs";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { SignOut, Gear, UserCircle } from "phosphor-react";

const Header: React.FC = () => {
  // 測試全部專案夏拉是選單
  // const allProject = ["麥卡倫", "LV", "The North Face"];
  // const [Projects, setProjects] = useState("艾邁格所有專案");
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
    // 刪除登入狀態
    localStorage.removeItem("isAuthenticated");
    // 導向登入頁面
    navigate("/login");
  };
  return (
    <header className="flex items-center justify-between px-4 mx-3 w-full pb-4 border-b-solid border-b-[1px]  mt-5">
      {/* 引入麵包屑部分 */}
      <div className="">
        <Breadcrumns />
      </div>
      {/* 搜索框 */}
      {/* <input
        type="text"
        placeholder="搜索..."
        className="h-[42px] w-80 px-4 py-2 rounded-lg border-2 border-gray-500 placeholder-gray-400 transition-transform transform hover:scale-105"
        style={{ pointerEvents: "auto" }}
      /> */}
      {/* 各個專案的下拉式選單 */}
      {/* <section className="allProject  flex items-center justify-center flex-col ">
        <h1>所有專案</h1>
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
      </section> */}

      {/* 右上角登出、設定區塊 */}
      <div className="logout flex flex-row w-[160px] h-[60px] justify-between rounded-lg bg-white p-2 shadow">
        <div className="left flex items-center">
          <UserCircle size={24} color="#504949" weight="regular" />
        </div>
        <div className="middle ">
          <div className="text-sm">admin</div>
          <div className="text-sm">超級管理員</div>
        </div>
        <div className="right flex items-center flex-col ps-2 justify-center border-l-[1px]">
          <Link
            to="/settings"
            className="  hover:text-gray-400 focus:outline-none pb-1 custom-hover"
          >
            <Gear size={20} color="#504949" weight="regular" />
          </Link>
          <button
            onClick={handleLogout}
            className="  flex items-center pt-1 border-t-[1px] "
          >
            <SignOut
              size={20}
              color="#504949"
              weight="regular"
              className="custom-hover"
            />
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
