// src/pages/HomePage.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { projectMappings } from "../components/projectMappings"; // 导入映射表

const HomePage: React.FC = () => {
  const allProject = Object.keys(projectMappings);
  const [Projects, setProjects] = useState("艾邁格所有專案");
  // 搜索詞的狀態
  const [searchTerm, setSearchTerm] = useState("");
  //搜索結果的狀態
  const [searchResults, setSearchResults] = useState<
    { name: string; link: string }[]
  >([]);
  const navigate = useNavigate();

  // 控制下拉專案改變
  const handleProjectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedProject = e.target.value;
    setProjects(selectedProject);
    if (selectedProject && projectMappings[selectedProject]) {
      navigate(`/projects/${projectMappings[selectedProject]}`);
    }
  };

  // 控制搜尋按鈕
  const handleSearch = () => {
    const results = Object.keys(projectMappings)
      .filter((key) => key.toLowerCase().includes(searchTerm.toLowerCase()))
      .map((key) => ({
        name: key,
        link: `/projects/${projectMappings[key]}`,
      }));
    setSearchResults(results);
  };

  // 麵包屑的路徑
  // const handleProjectClick = (project: string) => {
  //   const projectId = projectMappings[project];
  //   if (projectId) {
  //     navigate(`/projects/${projectId}`);
  //   }
  // };

  return (
    <div className="flex w-full overflow-hidden">
      <div className="w-full justify-start items-start flex flex-row mr-10">
        <section className="allProject w-full flex items-center justify-center flex-col h-80">
          <select
            className="mt-5 w-80 px-4 py-2 rounded-lg border-2 border-gray-500 placeholder-gray-400 transition-transform transform hover:scale-105"
            value={Projects}
            onChange={handleProjectChange} // 處理下拉式選單
          >
            <option value="">請選擇專案</option>
            {allProject.map((v, i) => (
              <option key={i} value={v}>
                {v}
              </option>
            ))}
          </select>

          {/* <input
            type="text"
            className="mt-5 h-[42px] w-80 px-4 py-2 rounded-lg border-2 border-gray-500 placeholder-gray-400 transition-transform transform hover:scale-105"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="請輸入搜尋詞"
          />
          <button
            className="px-4 py-2 mt-5 rounded-lg bg-gray-400 hover:bg-gray-800 hover:text-gray-400 focus:outline-none custom-hover"
            onClick={handleSearch}
          >
            搜尋
          </button> */}
          <input
            type="text"
            className="mt-5 h-[42px] w-80 px-4 py-2 rounded-lg border-2 border-gray-500 placeholder-gray-400 transition-transform transform hover:scale-105"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="請輸入搜尋詞"
          />
          <button
            className="px-4 py-2 mt-5 rounded-lg bg-gray-400 hover:bg-gray-800 hover:text-gray-400 focus:outline-none custom-hover"
            onClick={handleSearch}
          >
            搜尋
          </button>
          <div className="mt-5">
            <h2 className="text-lg font-bold">搜尋結果:</h2>
            <ul>
              {searchResults.length > 0 ? (
                searchResults.map((result, index) => (
                  <li key={index} className="border-b border-gray-300 py-2">
                    <a
                      href={result.link}
                      className="text-blue-500 hover:underline"
                      onClick={(e) => {
                        e.preventDefault(); // 防止預設行為
                        navigate(result.link); // 使用 React Router 進行導航
                      }}
                    >
                      {result.name}
                    </a>
                  </li>
                ))
              ) : (
                <li>沒有找到匹配的結果</li>
              )}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
