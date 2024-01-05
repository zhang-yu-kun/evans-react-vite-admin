import { Layout, theme } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Sider from "./Sider";

const { Content } = Layout;

const SiderLayout: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider />
      <Layout>
        <Content
          style={{
            padding: 10,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default SiderLayout;
