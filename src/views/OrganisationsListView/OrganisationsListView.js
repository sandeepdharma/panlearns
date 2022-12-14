import "antd/dist/antd.min.css";
import "./OrganisationsListView.scss";

import { Table} from "antd";
import {  useHistory } from "react-router-dom";
import { dummydata } from "../../fixtures/dummydata";
import { useState, useEffect } from "react";
// import OrganisationsContentHeader from "../../components/OrganisationsContentHeader/OraganisationsContentHeader";
import OrganisationsContentPagination from "../../components/OrganisationsContentPagination/OrganisationsContentPagination";
export const OrganisationsListView = () => {
  const history = useHistory();
  const [page, setpage] = useState(1);
  const [filterData, setFilterData] = useState();
  const pageSize = 7;
  useEffect(() => {
    const pageNumber = (page - 1) * pageSize;
    console.log(pageNumber);
    const filterArray = dummydata.slice(pageNumber, pageNumber + pageSize);
    setFilterData(filterArray);
  }, [page]);

  const columns = [
    {
      title: "Name",
      key: "orgTitle",
      dataIndex: "orgTitle",
      render: (text, record) => {
        return (
          <div className="list-view-container">
            <img
              width="10%"
              height="10%"
              alt="img-logo"
              className="list-view-logo"
              src={record.orgLogo}
            />
            
            <p className="list-view-name">{record.orgTitle}</p>
          </div>
        );
      },
      // key: 'orgTitle',
      width: "25%",
    },
    {
      title: "Email",
      dataIndex: "orgEmail",
      // key: 'orgEmail',
      width: "25%",
    },
    {
      title: "Domain",
      dataIndex: "orgDomain",
      // key: 'orgDomain',
      width:"25%"
    },
    {
      title: "Status",
      dataIndex: "orgStatus",
        render : (data) => (
          <div style={{height : "12px", width : "12px", background : data? "green" : "red", borderRadius : "50%"}} className='center'></div>
          ) ,
      // key: 'orgDomain',
      width:"25%"
    },
  ];
  return (
    <>
    <div className="organisations-listview-container">
      <Table
      size="small"
        className="org-table"
        columns={columns}
        dataSource={filterData}
        pagination={false}
        onRow={(i) => ({
          onClick: (e) => 
              history.push('/OrganisationsEditView')
      })}
      />
      
    </div>
    <OrganisationsContentPagination setpage={setpage} pageSize={pageSize} />
    </>
  );
};
