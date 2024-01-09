import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Logo from "./Logo";
import { menuItem } from "./Menu";
const { Header, Content } = Layout;

const HeaderLayout: React.FC = () => {
  const [current, setCurrent] = useState("");
  const navigate = useNavigate();

  const toPage: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
    navigate("/" + e.key);
  };
  return (
    <Layout
      style={{ height: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Header style={{ display: "flex", alignItems: "center", height: "auto" }}>
        <div style={{ marginRight: "50px" }}>
          <Logo />
        </div>

        <Menu
          onClick={toPage}
          theme="light"
          mode="horizontal"
          selectedKeys={[current]}
          defaultSelectedKeys={["home"]}
          style={{ flex: 1, minWidth: 0 }}
          items={menuItem}
        />
      </Header>
      <Content style={{ padding: "40px 48px", flex: 1, overflow: "auto" }}>
        <Outlet />
      </Content>
      <Footer />
    </Layout>
  );
};

export default HeaderLayout;
