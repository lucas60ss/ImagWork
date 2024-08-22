import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { DownloadSimple } from "phosphor-react";

// 定義組件的props類型
interface SimpleFormProps {
  data: string[];
}

const Table: React.FC = () => {
  // 狀態用來控制當前顯示的是表格還是圖表，初始是table
  const [view, setView] = useState("table");
  const [downloadType, setDownloadType] = useState("excel");

  return (
    <div className="w-full  items-center flex flex-col mt-5">
      {/* 包住數值、下載按鈕 */}
      <div className="download flex justify-between w-full">
        {/* 圖表、數值轉換按鈕 */}
        <div className="leftLink flex items-center">
          <div
            className={`w-16 h-10 flex justify-center items-center border-b-2 hover:text-[#948469] hover:border-b-[#948469] hover-scale-text ${
              view === "chart" ? "text-[#948469] border-b-[#948469]" : ""
            }`}
            onClick={() => {
              setView("chart");
              setDownloadType("pdf");
            }}
          >
            圖表
          </div>
          <div
            className={`w-16 h-10 flex justify-center items-center border-b-2 hover:text-[#948469] hover:border-b-[#948469] hover-scale-text ${
              view === "table" ? "text-[#948469] border-b-[#948469]" : ""
            }`}
            onClick={() => {
              setView("table");
              setDownloadType("excel");
            }}
          >
            表格
          </div>
        </div>
        {/* 下載按鈕 */}
        <button className="px-4 py-2 border-[#948469] text-[#948469] border-2 flex rounded-lg hover:scale-105 transition-all duration-300">
          <DownloadSimple size={24} />
          {downloadType === "excel" ? "下載Excel" : "下載PDF"}
        </button>
      </div>

      {/* 依狀態顯示不同內容 */}
      {view === "table" ? (
        <table className="w-full border border-gray-200 rounded-xl mt-10">
          <thead className="bg-gray-100 text-[#A3A3A3]">
            <tr>
              <th className="border border-gray-300 px-4 py-2">頁面</th>
              <th className="border border-gray-300 px-4 py-2">PV</th>
              <th className="border border-gray-300 px-4 py-2">UV</th>
              <th className="border border-gray-300 px-4 py-2">時間</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">2</td>
              <td className="border border-gray-300 px-4 py-2">3</td>
              <td className="border border-gray-300 px-4 py-2">4</td>
              <td className="border border-gray-300 px-4 py-2">5</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">2</td>
              <td className="border border-gray-300 px-4 py-2">3</td>
              <td className="border border-gray-300 px-4 py-2">4</td>
              <td className="border border-gray-300 px-4 py-2">5</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">2</td>
              <td className="border border-gray-300 px-4 py-2">3</td>
              <td className="border border-gray-300 px-4 py-2">4</td>
              <td className="border border-gray-300 px-4 py-2">5</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <div className="chart-container mt-10">
          {/* 替換為表格或圖表 */}
          <div className="w-full h-[400px] bg-gray-200 flex justify-center items-center">
            圖表內容
          </div>
        </div>
      )}

      {/* 下面分頁面選擇 */}
      {/* <div className="Pagination"></div> */}
    </div>
  );
};

export default Table;
