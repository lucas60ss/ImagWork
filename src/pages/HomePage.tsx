// src/pages/HomePage.tsx
import React, { useState } from "react";
// import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const allProject = ["麥卡倫", "LV", "The North Face"];
  const [Projects, setProjects] = useState("艾邁格所有專案");
  // const toggleProject = () => {
  //   setAllProject(!allProject);
  // };
  const navigate = useNavigate();
  return (
    <div className="flex w-full overflow-hidden">
      {/* <div className="sideBar">
        <Sidebar />
      </div> */}
      <div className=" w-full justify-start items-start flex mt-10 flex flex-col mr-10">
        {/* <Header />  */}
        {/* header 放在全域的地方 */}

        {/* 各個專案的下拉式選單 */}
        {/* <section className="allProject  w-full flex items-center justify-center flex-col ">
          <h1>所有專案</h1>
          <select
            className="mt-5 w-80 px-4 py-2 rounded-lg border-2 border-gray-500 placeholder-gray-400 transition-transform transform hover:scale-105 "
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
      </div>
    </div>
  );
};

export default HomePage;
