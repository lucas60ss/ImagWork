import React from "react";
import { useParams } from "react-router-dom";
// import { Table } from "phosphor-react";
import Table from "../components/Table";
import FilterSearch from "../components/FilterSearch";

const ProjectPage: React.FC = () => {
  const { projectId } = useParams();

  return (
    <div className="mt-6 w-[90%] items-center flex flex-col ">
      <h1 className="text-[40px]">{projectId}</h1>
      {/* 這邊是圖表的篩選、搜尋功能 */}
      <FilterSearch />
      {/* 這邊是圖表 */}
      <Table />
    </div>
  );
};

export default ProjectPage;
