import React, { useContext } from "react";
import { Button, Form, Input, Space } from "antd";
import style from "./login.module.scss";
import { useNavigate } from "react-router-dom";
import { GlobalStore } from "../../router";
import { observer } from "mobx-react-lite";

const layout = {
  wrapperCol: { span: 20, offset: 2 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const LoginForm: React.FC = () => {
  const store: any = useContext(GlobalStore);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const isAuth = (values: any) => {
    if (values.name === "user") {
      if (values.password === "user123") return true;
    } else if (values.name === "admin") {
      if (values.password === "admin456") return true;
    }
    return false;
  };
  const onFinish = (values: any) => {
    const _isAuth = isAuth(values);
    if (_isAuth) {
      store.setAuth({
        name: values.name,
        role: values.name,
      });
      localStorage.setItem("token", "90329872168");

      navigate("/home");
    } else {
      navigate("/login");
    }
  };

  const onUser = () => {
    form.setFieldsValue({ name: "user", password: "user123" });
  };
  const onAdmin = () => {
    form.setFieldsValue({ name: "admin", password: "admin456" });
  };

  return (
    <div className={style.Loginform}>
      <Form
        {...layout}
        labelAlign="left"
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
      >
        <Form.Item
          name="name"
          rules={[{ required: true, message: "请输入正确的用户名" }]}
        >
          <Input placeholder="用户名" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "请输入正确的密码" }]}
        >
          <Input.Password placeholder="密码" />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Space>
            <Button
              type="link"
              htmlType="button"
              onClick={onUser}
              style={{ color: "#888888" }}
            >
              user
            </Button>
            <Button
              type="link"
              htmlType="button"
              onClick={onAdmin}
              style={{ color: "#888888" }}
            >
              admin
            </Button>
          </Space>
        </Form.Item>
        <Form.Item>
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Button className={style.submit} type="primary" htmlType="submit">
              登录
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default observer(LoginForm);
