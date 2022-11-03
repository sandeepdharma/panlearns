import { Typography, Input, Button, Form, Select } from "antd";
import "./OrganisationsAddView.scss";
import { useHistory } from "react-router-dom";
import FloatInput from "../../components/FloatInput/FloatInput";
const OrganisationsAddView = () => {
  const history = useHistory();
  const { Text } = Typography;
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };

  const onFinish = (values) => {
    console.log(values);
  };

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
  return (
    <>
      <div className="organisations-add-view-container">
        <Text level={3}>Add New Organisation</Text>
        <div className="organisations-add-view-card-container">
          <div className="organisations-add-view-icon-container">MD</div>
          <Form
           {...layout}
            name="nest-messages"
            onFinish={onFinish}
            validateMessages={validateMessages}
          >
            <Form.Item
              name={["user", "name"]}
              label="Organisation Name  :"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input allowClear size="small" style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item
        name={["user",'Phone']}
        label="Phone"
        rules={[
          {
          },
        ]}
      >
            <Input size="small" allowClear style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item name={['user', 'city']} label="City">
            <Input size="small" allowClear style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item name={['user', 'Admin']} label="Admin">
            <Select
              style={{ width: "100%" }}
              size="small"
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
            <Form.Item name={['user', 'Services']} label="Services">
            <Input allowClear size="small" style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item
        name={['user', 'email']}
        label="Email"
        rules={[
          {
            type: 'email',
          },
        ]}
      >
        <Input />
            </Form.Item>
            <Form.Item name={['user', 'State']} label="State">
            <Select
              style={{ width: "100%" }}
              size="small"
              showSearch
              placeholder="Select a State"
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
            <Form.Item name={['user', 'city']} label="City">
            <Input size="small" allowClear style={{ width: "100%" }} />
            </Form.Item> 
            <Form.Item
            wrapperCol={{
              ...layout.wrapperCol,
              offset: 8,
            }}>
            <Button size="large" onClick={() => history.goBack()}>Cancel</Button>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};
export default OrganisationsAddView;
