import { Typography, Input, Button, Form, Select, Space } from "antd";
import "./OrganisationsAddView.scss";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
// import { dummydata } from "../../fixtures/dummydata";
import { TreeSelect } from 'antd';

const { SHOW_PARENT } = TreeSelect;
const treeData = [
  {
    title: 'AMD',
    value: 'AMD',
    key: '0-0',
  },
  {
    title: 'AP',
    value: 'AP',
    key: 'AP',
  },
  {
    title: 'CMS',
    value: 'CMS',
    key: 'CMS',
  },
  {
    title: 'EP',
    value: 'EP',
    key: 'EP',
  },
  {
    title: 'HRMS',
    value: 'HRMS',
    key: 'HRMS',
  },
  {
    title: 'LMS',
    value: 'LMS',
    key: 'LMS',
  },
  {
    title: 'LXP',
    value: 'LXP',
    key: 'LXP',
  },
];
const OrganisationsAddView = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const [entries, setEntries] = useState([]);
  const [multiselectvalue, setMultiselectvalue] = useState();
  const funct = (newmultiselectvalue) => {
    console.log('onChange ', multiselectvalue);
    setMultiselectvalue(newmultiselectvalue);
  };
  const tProps = {
    treeData,
    multiselectvalue,
    onChange:{funct},
    defaultValue:['AMD','CMS','HRMS','LXP'],
    treeCheckable: true,
    showCheckedStrategy: SHOW_PARENT,
    placeholder: 'Please select',
    style: {
      width: '100%',
    },}
  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };
  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };
  const history = useHistory();
  const { Text } = Typography;
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };

  const onFinish = (e) => {
    var date = new Date();
    const json = JSON.stringify(e);
    localStorage.setItem(date, json);
    setEntries(e);
  };
  return (
    <>
      <div className=" organisations-add-view-container">
        <div className="main-space">
          <Text level={3}>Add New Organisation</Text>
          <div className="main-space-1">
            <Form onFinish={onFinish}>
              <div className="main-space-2">
                <div>
                  <Upload
                    name="avatar"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    beforeUpload={beforeUpload}
                    onChange={handleChange}
                  >
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt="avatar"
                        style={{
                          width: "100%",
                        }}
                      />
                    ) : (
                      uploadButton
                    )}
                  </Upload>
                </div>
                <div>
                  <Form.Item
                    name={["user", "name"]}
                    // label='Organisatuon name'
                    rules={[
                      {
                        // type: 'email',
                        message: 'The input is not valid Name',
                      },
                      {
                        // required: true,
                        message: 'Please input your Name',
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      placeholder="Organisation name"
                      style={{ width: "100%" }}
                    />
                  </Form.Item>
                  <Form.Item
                    name={["user", "Phone"]}
                    rules={[
                      {
                        minlength: 9,
                        maxlength: 10,
                        number: true,
                        message: "Mobile number must be 10 digits",
                       
                      },
                      {
                        // required: true,
                        message: 'Please input your Mobile number',
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      style={{ width: "100%" }}
                      placeholder="Mobile number"
                    />
                  </Form.Item>
                  <Form.Item name={["user", "city"]}rules={[{
                    // required:true
                    }]}>
                    <Input size="large"placeholder="City" style={{ width: "100%" }} />
                  </Form.Item>
                  <Form.Item name={["user", "Admin"]}>
                    <Select
                      style={{ width: "100%" }}
                      size="large"
                      showSearch
                      placeholder="Admin"
                      optionFilterProp="children"
                      onChange={onChange}
                      onSearch={onSearch}
                      filterOption={(input, option) =>
                        (option?.label ?? "")
                          .toLowerCase()
                          .includes(input.toLowerCase())
                      }
                      options={[
                        {
                          value: "Admin1",
                          label: "Admin1",
                        },
                        {
                          value: "Admin2",
                          label: "Admin2",
                        },
                        {
                          value: "Admin3",
                          label: "Admin3",
                        },
                      ]}
                    />
                  </Form.Item>
                </div>
                <div>
                  <Form.Item name={["user", "services"]}>
                    {/* <Input size="large" placeholder="Services" style={{ width: "100%" }} /> */}
                    <TreeSelect {...tProps} />
                  </Form.Item>
                  <Form.Item
                    name={["user", "email"]}
                    rules={[
                      {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                      },
                      {
                        // required: true,
                        message: 'Please input your E-mail!',
                      },
                    ]}
                  >
                    <Input size="large"placeholder="Email" style={{ width: "100%" }} />
                  </Form.Item>
                  <Form.Item name={["user", "State"]}>
                    <Select
                      style={{ width: "100%" }}
                      size="large"
                      showSearch
                      placeholder="State"
                      optionFilterProp="children"
                      onChange={onChange}
                      onSearch={onSearch}
                      filterOption={(input, option) =>
                        (option?.label ?? "")
                          .toLowerCase()
                          .includes(input.toLowerCase())
                      }
                      options={[
                        {
                          value: "Andhra Pradesh",
                          label: "Andhra Pradesh",
                        },
                        {
                          value: "Tamlinadu",
                          label: "Tamlinadu",
                        },
                        {
                          value: "Kerala",
                          label: "Kerala",
                        },
                      ]}
                    />
                  </Form.Item>
                  <Form.Item name={["user", "address"]}
                  rules={[{
                    // required:true
                  }]}>
                    <Input size="large" placeholder='Address' style={{ width: "100%" }} />
                  </Form.Item>

                  <Space className="buttons-container">
                    <Button size="large" onClick={() => history.goBack()}>
                      Cancel
                    </Button>
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Space>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};
export default OrganisationsAddView;
