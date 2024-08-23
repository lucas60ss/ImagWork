import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { DownloadSimple } from "phosphor-react";
import * as XLSX from "xlsx";
// import html2pdf from "../types/html2pdf";
import html2pdf from "html2pdf.js";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  Legend,
} from "recharts";

const Table: React.FC = () => {
  // 狀態用來控制當前顯示的是表格還是圖表，初始是table
  const [view, setView] = useState("table");
  const [downloadType, setDownloadType] = useState("excel");

  // 測試用假資料
  // const data = [
  //   { name: "首頁", pv: 3, uv: 4, time: 20240801 },
  //   { name: "會員資料頁", pv: 2, uv: 3, time: 20240801 },
  //   { name: "任務頁", pv: 1, uv: 2, time: 20240801 },
  //   { name: "第四頁", pv: 1, uv: 2, time: 20240801 },
  //   { name: "第五頁", pv: 1, uv: 2, time: 20240801 },
  // ];

  const [data] = useState([
    { name: "首頁", pv: 3, uv: 4, time: 20240801 },
    { name: "會員資料頁", pv: 2, uv: 3, time: 20240801 },
    { name: "任務頁", pv: 1, uv: 2, time: 20240801 },
    { name: "第四頁", pv: 1, uv: 2, time: 20240801 },
    { name: "第五頁", pv: 1, uv: 2, time: 20240801 },
  ]);

  useEffect(() => {
    if (chartRef.current) {
      // 確保 DOM 元素已經渲染
      console.log("chartRef.current:", chartRef.current);
    }
  }, []);
  // 下載excel表單
  const downloadExcel = () => {
    // Create a new workbook and a worksheet
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(data);
    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    // Generate a download link and trigger the download
    XLSX.writeFile(wb, "表單下載.xlsx");
  };
  // ref為圖表容器建立一個：ref為元件中的圖表容器定義一個。
  const chartRef = useRef<HTMLDivElement | null>(null);

  // 下載pdf表單
  const downloadPDF = () => {
    if (chartRef.current) {
      const element = chartRef.current;
      const opt = {
        margin: 1,
        filename: "chart.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      };

      html2pdf().from(element).set(opt).save("chart.pdf");
    }
  };
  // const downloadPDF = () => {
  //   if (chartRef.current) {
  //     const element = chartRef.current;
  //     console.log("Element to be converted to PDF:", element); // 確保這裡輸出了正確的 DOM 元素
  //     const opt = {
  //       margin: 1,
  //       filename: "chart.pdf",
  //       image: { type: "jpeg", quality: 0.98 },
  //       html2canvas: { scale: 2 },
  //       jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  //     };

  //     html2pdf().from(element).set(opt).save("ascas");
  //   } else {
  //     console.error("chartRef.current is null");
  //   }
  // };
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
        <button
          className="px-4 py-2 border-[#948469] text-[#948469] border-2 flex rounded-lg hover:scale-105 transition-all duration-300"
          onClick={() => {
            if (downloadType === "excel") {
              downloadExcel();
            } else if (downloadType === "pdf") {
              downloadPDF();
            }
          }}
        >
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
            {data.map((item, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2">
                  {item.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">{item.pv}</td>
                <td className="border border-gray-300 px-4 py-2">{item.uv}</td>
                <td className="border border-gray-300 px-4 py-2">{`${item.time
                  .toString()
                  .slice(0, 4)}/${item.time.toString().slice(4, 6)}/${item.time
                  .toString()
                  .slice(6)}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div
          className="chart-container m-10 w-full flex  gap-4 flex-col items-center "
          ref={chartRef}
        >
          {/* 圖表中第一列 */}
          <div className="flex flex-row gap-10 w-full justify-between">
            <div className="chart p-12 border-2 ps-1 relative rounded-lg w-[50%] justify-center flex pt-16">
              {/* 折現圖表 */}
              <div className="top absolute top-0 w-full left-0 text-[#A3A3A3] bg-[#E5E7EB] ps-4 h-[40px] flex items-center">
                折線圖 - PV
              </div>
              <LineChart width={500} height={300} data={data}>
                <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
              </LineChart>
            </div>

            {/* 如果你要使用柱狀圖，可以用以下代碼替換 */}
            <div className="chart p-12 border-2 ps-1 relative rounded-lg w-[50%] justify-center flex pt-16">
              {/* 折現圖表 */}
              <div className="top absolute top-0 w-full left-0 text-[#A3A3A3] bg-[#E5E7EB] ps-4 h-[40px] flex items-center">
                折線圖 - PV
              </div>
              <LineChart width={500} height={300} data={data}>
                <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
              </LineChart>
            </div>
          </div>
          {/* 圖表中第二列 */}
          <div className="flex flex-row gap-10 w-full  justify-between">
            {/* 圖表中第二列 */}

            <div className="chart p-12 border-2 ps-1 relative rounded-lg w-[50%] justify-center flex pt-16">
              {/* 折現圖表 */}
              <div className="top absolute top-0 w-full left-0 text-[#A3A3A3] bg-[#E5E7EB] ps-4 h-[40px] flex items-center">
                長條圖 - PV
              </div>
              <BarChart width={500} height={300} data={data} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" /> {/* X轴表示数值 */}
                <YAxis type="category" dataKey="name" width={80} />{" "}
                {/* Y轴表示类别 */}
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#1a73e8" />
                <Bar dataKey="uv" fill="green" />
              </BarChart>
            </div>
            {/* 如果你要使用柱狀圖，可以用以下代碼替換 */}
            <div className="chart p-12 border-2 ps-1 relative rounded-lg w-[50%] justify-center flex pt-16">
              {/* 折現圖表 */}
              <div className="top absolute top-0 w-full left-0 text-[#A3A3A3] bg-[#E5E7EB] ps-4 h-[40px] flex items-center">
                長條圖 - PV
              </div>
              <BarChart width={500} height={300} data={data} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" /> {/* X轴表示数值 */}
                <YAxis type="category" dataKey="name" width={80} />{" "}
                {/* Y轴表示类别 */}
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#1a73e8" />
                <Bar dataKey="uv" fill="green" />
              </BarChart>
            </div>
          </div>
        </div>
      )}

      {/* 下面分頁面選擇 */}
      {/* <div className="Pagination"></div> */}
    </div>
  );
};

export default Table;
