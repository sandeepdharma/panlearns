import './OrganisationsEditView.scss';
import { Typography, Input, Space, Button, Select,Modal } from "antd";
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
const OrganisationsEditView = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const history = useHistory();
    const { Text } = Typography;
    const showModal = () => {
      setIsModalOpen(true);
    };
  
    const handleOk = () => {
      setIsModalOpen(false);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };
    const onChange = (value) => {
      console.log(`selected ${value}`);
    };
    const onSearch = (value) => {
      console.log("search:", value);
    };
    return (
      <>
        <div className="organisations-edit-view-container">
          <Text level={3}>Add Organisation</Text>
          <div className="organisations-edit-view-card-container">
            <div className='reset'>
            <div className='organisations-edit-view-icon-container'>
            MD
            </div>
            <Button size="large" onClick={showModal} style={{color:'#007784',margin:'5%'}}>Reset Password</Button>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Reset Page</p>
        
      </Modal>
            
            </div>
            <div className="organisations-edit-view-input">
              <Space
                direction="vertical"
                style={{
                  width: "90%",
                  marginLeft: "5%",
                }}
              >
                <Input
                  allowClear
                  size="large"
                  style={{ width: "100%" }}
                  defaultValue="defaultValue"
                />
                <Input
                  size="large"
                  allowClear
                  style={{ width: "100%" }}
                  defaultValue="defaultValue"
                />
                <Input
                  size="large"
                  allowClear
                  style={{ width: "100%" }}
                  defaultValue="defaultValue"
                />
                
                <Select
                  style={{width:"100%"}}
                  size='large'
                  showSearch
                  placeholder="Select a person"
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
                      value: "sandeep",
                      label: "sandeep",
                    },
                    {
                      value: "lucy",
                      label: "Lucy",
                    },
                    {
                      value: "tom",
                      label: "Tom",
                    },
                  ]}
                />
                
              </Space>
            </div>
            <div className="organisations-edit-view-input">
              <Space
                direction="vertical"
                style={{
                  width: "90%",
                  marginLeft: "5%",
                }}
              >
                <Input
                  allowClear
                  size="large"
                  style={{ width: "100%" }}
                  defaultValue="defaultValue"
                />
                <Input
                  size="large"
                  allowClear
                  style={{ width: "100%" }}
                  defaultValue="defaultValue"
                />
                <Select
                  style={{width:"100%"}}
                  size='large'
                  showSearch
                  placeholder="Select a person"
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
                      value: "sandeep",
                      label: "sandeep",
                    },
                    {
                      value: "lucy",
                      label: "Lucy",
                    },
                    {
                      value: "tom",
                      label: "Tom",
                    },
                  ]}
                />
                <Input
                  size="large"
                  allowClear
                  style={{ width: "100%" }}
                  defaultValue="defaultValue"
                />
              </Space>
            </div>
          </div>
          <Space direction="horizontal" className="button-container">
            <Button size="large" onClick={() => history.goBack()} style={{color:'#007784'}}>Cancel</Button>
            <Button size="large" type="primary">
              save
            </Button>
          </Space>
        </div>
      </>
    );
}
 
export default OrganisationsEditView;