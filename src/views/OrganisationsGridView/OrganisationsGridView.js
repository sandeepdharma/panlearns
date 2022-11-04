import "antd/dist/antd.min.css";
import "./OrganisationsGridView.scss";
import { List, Card, Avatar } from "antd";
import { dummydata } from "../../fixtures/dummydata";
import OrganisationsEditView from '../OrganisationsEditView/OrganisationsEditView.js'
import {useState,useEffect} from "react";

import OrganisationsContentPagination from "../../components/OrganisationsContentPagination/OrganisationsContentPagination";
import { Link } from "react-router-dom";
export const OrganisationsGridView = () => {
  const { Meta } = Card;
  const [page, setpage]= useState(1)
  const [filterData, setFilterData]= useState()
  const pageSize = 9
  useEffect (() => {
      const pageNumber = (page - 1)*pageSize
      console.log(pageNumber)
      const filterArray = dummydata.slice(pageNumber,pageNumber+pageSize)
        setFilterData(filterArray)
    },[page])

  return (
    <>
    {/* <OrganisationsContentHeader/> */}

      <List
        itemLayout="horizontal"
        grid={{ column: 3 }}
        gutter={3}
        dataSource={filterData}
        renderItem={(item) => (
          <Link to='/OrganisationsEditView'>
          <List.Item>
            <Card 
            // onClick={() => <OrganisationsEditView selectedRow={item}/>}
            >
              <Meta
                avatar={<Avatar src={item.orgLogo}/>}
                title={item.orgTitle}
                description={[
                  <div>
                    <p>{item.orgDomain}</p>
                    <p>{item.orgEmail}</p>
                  </div>
                ]}
              />
            </Card>
          </List.Item></Link>
        )}
      />

    <OrganisationsContentPagination setpage={setpage} pageSize={pageSize}/>
    </>
  );
};
