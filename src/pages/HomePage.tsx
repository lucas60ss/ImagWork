// src/pages/HomePage.tsx
import React, { useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import Select from "react-select/dist/declarations/src/Select";

const HomePage: React.FC = () => {
  const allProject = ["麥卡倫", "LV", "The North Face"];
  const [Projects, setProjects] = useState("艾邁格所有專案");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // const

  const handleSearch = () => {
    if (Projects) {
      // 將選擇的專案和搜尋詞組合進行搜尋
      const query = searchTerm
        ? `/projects/${Projects}?search=${searchTerm}`
        : `/projects/${Projects}`;
      navigate(query);
    } else {
      alert("請選擇一個專案！");
    }
  };
  return (
    <div className="flex w-full overflow-hidden">
      {/* <div className="sideBar">
        <Sidebar />
      </div> */}
      <div className=" w-full justify-start items-start flex  flex flex-row mr-10">
        {/* <Header />  */}
        {/* header 放在全域的地方 */}

        {/* 各個專案的下拉式選單 */}
        <section className="allProject  w-full flex items-center justify-center flex-col h-60">
          {/* <h1>所有專案</h1> */}
          <select
            className="mt-5 w-80  px-4 py-2 rounded-lg border-2 border-gray-500 placeholder-gray-400 transition-transform transform hover:scale-105 "
            value={Projects}
            onChange={(e) => {
              setProjects(e.target.value);
            }}
          >
            <option value="">請輸入/選擇專案</option>
            {allProject.map((v, i) => {
              return (
                <option key={i} value={v}>
                  {v}
                </option>
              );
            })}
          </select>

          <input
            type="text"
            className="mt-5  h-[42px] w-80 px-4 py-2 rounded-lg border-2 border-gray-500 placeholder-gray-400 transition-transform transform hover:scale-105 "
          />
          <button className="px-4 py-2  mt-5 rounded-lg bg-gray-400 hover:bg-gray-800 hover:text-gray-400 focus:outline-none custom-hover">
            搜尋
          </button>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
