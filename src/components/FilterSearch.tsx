import React from "react";
import { Link, useLocation } from "react-router-dom";

interface DropdownProps {
  // 在這裡定義你需要的 props 類型
  // 目前沒有傳遞任何 props，可以定義為空的接口
}

// interface FilterSearchProps{
//   onFilterChange:()
// }
const FilterSearch: React.FC<DropdownProps> = () => {
  return (
    <div className="flex w-full  gap-6">
      <div className="left flex flex-row gap-6 w-full">
        <div className="flex flex-col w-[10%] min-w-[80px]">
          <label
            htmlFor="report-type"
            className="block text-gray-700 mb-2 ps-1 font-bold"
          >
            格式
          </label>
          <select
            id="report-type"
            className="w-full px-2 py-2 border border-gray-300 rounded-lg"
            defaultValue=""
          >
            <option value="" disabled>
              日報
            </option>
            <option value="monthly">日報</option>
            <option value="quarterly">周报</option>
            <option value="annual">季報</option>
            {/* 添加更多选项 */}
          </select>
        </div>

        <div className="flex flex-col w-[20%] min-w-[150px]">
          <label
            htmlFor="start-time"
            className="block text-gray-700 mb-2 ps-1 font-bold"
          >
            開始時間
          </label>
          <input
            type="date"
            id="start-time"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg h-button-h"
          />
        </div>

        <div className="flex flex-col w-[20%] min-w-[150px]">
          <label
            htmlFor="end-time"
            className="block text-gray-700 mb-2 ps-1 font-bold"
          >
            結束時間
          </label>
          <input
            type="date"
            id="end-time"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg h-button-h"
          />
        </div>

        <div className="flex flex-col w-[20%] min-w-[150px]">
          <label
            htmlFor="time-zone"
            className="block text-gray-700 mb-2 ps-1 font-bold"
          >
            時區
          </label>
          <select
            id="time-zone"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            // value={timeZone}
            // onChange={handleTimeZoneChange}
          >
            <option value="" disabled>
              選擇時區
            </option>

            <option value="tailwind">台灣（GMT+8）</option>
            <option value="tailand">泰國（GMT+7）</option>
          </select>
        </div>

        <div className="flex flex-col w-[20%] min-w-[150px]">
          <label
            htmlFor="page-display"
            className="block text-gray-700 mb-2 ps-1 font-bold"
          >
            顯示頁面
          </label>
          <select
            id="page-display"
            className="w-full px-2 py-2 border border-gray-300 rounded-lg"
            defaultValue=""
          >
            <option value="" disabled>
              全部頁面
            </option>
            <option value="">首頁</option>
            <option value="quarterly">會員資料頁</option>
            <option value="annual">任務頁</option>
            <option value="annual">第四頁</option>
            <option value="annual">第五頁</option>
            {/* 添加更多选项 */}
          </select>
        </div>
      </div>
      <div className="flex items-end">
        <button className="h-button-h w-button-w mr-2.5  flex justify-center items-center custom-button hover:scale-105 transition-all duration-300">
          清除
        </button>
        <button className="h-button-h w-button-w flex justify-center items-center hover:scale-105 transition-all duration-300 custom-button2">
          搜尋
        </button>
      </div>
    </div>
  );
};

export default FilterSearch;
