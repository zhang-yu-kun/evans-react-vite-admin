import { Layout } from "antd";
import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { GlobalStore } from "../../router";
import Footer from "./Footer";
import Sider from "./Sider";
import UserDrop from "./UserDrop";

const { Content, Header } = Layout;

const SiderLayout: React.FC = () => {
  const store: any = useContext(GlobalStore);

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider />
      <Layout>
        <Header
          style={{
            background: store.currentTheme.MenuBg,
            boxShadow: `6px 2px 6px ${store.currentTheme.MenuHover}`,
          }}
        >
          <UserDrop />
        </Header>
        <Content
          style={{
            padding: 10,
            minHeight: 280,
          }}
        >
          <Outlet />
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default observer(SiderLayout);
