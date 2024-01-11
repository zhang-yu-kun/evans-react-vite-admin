import { Button, Col, Form, Input, Row, Table, Space } from "antd";
import { useEffect, useState } from "react";
import HeadTitle from "../../component/busiComp/header";
import type { ColumnsType } from "antd/es/table";
import { useNavigate } from "react-router-dom";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
}

const WrapperForm = () => {
  const [form] = Form.useForm();
  const [clientReady, setClientReady] = useState<boolean>(false);
  const navigate = useNavigate();
  // To disable submit button at the beginning.
  useEffect(() => {
    setClientReady(true);
  }, []);

  const onFinish = (values: any) => {
    console.log("Finish:", values);
  };
  const toCreate = () => {
    navigate("/menuManage/create");
  };
  return (
    <Form form={form} onFinish={onFinish}>
      <Row gutter={16}>
        <Col span={6}>
          <Form.Item
            label="第一项"
            name="aaa"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            label="第二项"
            name="bbb"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item shouldUpdate>
            {() => (
              <Button
                type="primary"
                htmlType="submit"
                disabled={
                  !clientReady ||
                  !form.isFieldsTouched(true) ||
                  !!form.getFieldsError().filter(({ errors }) => errors.length)
                    .length
                }
              >
                Log in
              </Button>
            )}
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item shouldUpdate>
            {() => <Button onClick={() => toCreate()}>新增</Button>}
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};
function MenuManage() {
  const columns: ColumnsType<DataType> = [
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "年龄",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "地址",
      dataIndex: "address",
      key: "address",
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  const data: DataType[] = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
    },
  ];
  return (
    <div>
      <HeadTitle text="菜单管理" />
      <div className="thisForm">
        <WrapperForm />
      </div>

      <div className="thisTable">
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
}

export default MenuManage;
