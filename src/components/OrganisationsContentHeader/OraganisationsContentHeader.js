import "./OrganisationsContentHeader.scss";
import "antd/dist/antd.min.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Button,
  Dropdown,
  Space,
  Input,
  Menu,
  message,
} from "antd";
import {
  SearchOutlined,
  UserOutlined,
  DownOutlined,
  AppstoreOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { dummydata } from "../../fixtures/dummydata";
const OrganisationsContentHeader = ({callbackfunction}) => {
  const [dataSource, setDataSource] = useState(dummydata);

  const [value, setValue] = useState("");
  const { Text } = Typography;
  const handleMenuClick = (e) => {
    console.log("click", e);
    message.info("Click on menu item.");
  };
  const menu = (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          label: "1st menu item",
          key: "1",
          icon: <UserOutlined />,
        },
        {
          label: "2nd menu item",
          key: "2",
          icon: <UserOutlined />,
        },
        {
          label: "3rd menu item",
          key: "3",
          icon: <UserOutlined />,
        },
      ]}
    />
  );

  return (
    <div className="organisations-content-header-container">
      <Text level={3}>List Of Organisations</Text>
      <Input
        placeholder="Search for a oraganisation"
        enterButton
        value={value}
        onChange={(e) => {
          const currValue = e.target.value;
          setValue(currValue);
          const filteredData = dummydata.filter((entry) =>
            entry.orgTitle.includes(currValue)
          );
          setDataSource(filteredData)
          callbackfunction(filteredData);
        }}
        prefix={<SearchOutlined />}
      />

      <div className="gridview-icon-container">
        <Menu mode="horizontal">
          <Menu.Item>
          <Link to="/">
          <AppstoreOutlined style={{ fontSize: "18px"}}/>
        </Link>
          </Menu.Item>
       <Menu.Item>
        <Link to="/OrganisationsListView">
          <UnorderedListOutlined
            style={{ fontSize: "19px"}}
          />
        </Link>
        </Menu.Item>
        </Menu>
      </div>

      <Dropdown overlay={menu}>
        <Button>
          <Space>
            Sort By
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>

      <Link to="/OrganisationsAddView">
        <Button type="primary">Add Organisation</Button>
      </Link>
    </div>
  );
};

export default OrganisationsContentHeader;
