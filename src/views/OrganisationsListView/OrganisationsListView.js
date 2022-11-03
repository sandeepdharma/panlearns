import "antd/dist/antd.min.css";
import "./OrganisationsListView.scss";
import { Table } from "antd";
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
              width="13%"
              alt="img-logo"
              className="list-view-logo"
              src={record.orgLogo}
            />
            {/*<Avatar src={record.productimage}/> */}
            <p className="list-view-name">{record.orgTitle}</p>
          </div>
        );
      },
      // key: 'orgTitle',
      width: "30%",
    },
    {
      title: "Email",
      dataIndex: "orgEmail",
      // key: 'orgEmail',
      width: "20%",
    },
    {
      title: "Domain",
      dataIndex: "orgDomain",
      // key: 'orgDomain',
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
