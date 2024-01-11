import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import React, { useState, useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Logo from "./Logo";
import UserDrop from "./UserDrop";
import { observer } from "mobx-react-lite";
import { GlobalStore } from "../../router";
import Icon from "./Icons";

const { Header, Content } = Layout;
type MenuItem = Required<MenuProps>["items"][number];
const HeaderLayout: React.FC = () => {
  const [current, setCurrent] = useState("");
  const navigate = useNavigate();
  const store: any = useContext(GlobalStore);
  const [menus, setMenus] = useState<any[]>();

  useEffect(() => {
    const arr = getMenuItems(store.menus);
    setMenus(arr);
  }, [store.menus]);

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: "group"
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }
  const toPage: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
    navigate("/" + e.key);
  };

  function getMenuItems(items: any[]): any[] {
    let result = [];
    for (let item of items) {
      if (item.children) {
        result.push(
          getItem(
            item.label,
            item.key,
            Icon(item.icon),

            getMenuItems(item.children)
          )
        );
      } else {
        result.push(getItem(item.label, item.key, Icon(item.icon)));
      }
    }
    return result;
  }
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
          items={menus}
        />
        <UserDrop />
      </Header>
      <Content style={{ padding: "40px 48px", flex: 1, overflow: "auto" }}>
        <Outlet />
      </Content>
      <Footer />
    </Layout>
  );
};

export default observer(HeaderLayout);
