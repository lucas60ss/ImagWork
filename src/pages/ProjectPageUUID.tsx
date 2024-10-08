import React from "react";
import { useParams } from "react-router-dom";
// import { Table } from "phosphor-react";
import Table from "../components/Table";
import FilterSearch from "../components/FilterSearch";
import { Link } from "react-router-dom";
import TableUUID from "../components/TableUUID";

const ProjectPage3: React.FC = () => {
  const { projectId } = useParams();

  return (
    <div className="mt-6 w-[90%] items-center flex flex-col ">
      <h1 className="text-[40px]">{projectId}</h1>
      {/* <div>
        {" "}
        <Link to={`/${projectId}/View`}>查看專案</Link>
      </div> */}
      {/* 這邊是圖表的篩選、搜尋功能 */}
      <FilterSearch />
      {/* 這邊是圖表 */}
      {/* <Table /> */}
      <TableUUID />
    </div>
  );
};

export default ProjectPage3;
