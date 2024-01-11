import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Layout, Menu, message } from "antd";
import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalStore } from "../../router";
import Logo from "./Logo";
import style from "./sider.module.scss";
import Icon from "./Icons";

type MenuItem = Required<MenuProps>["items"][number];
const { Sider } = Layout;

const Asider = () => {
  const store: any = useContext(GlobalStore);
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(false);
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

  const toPage = (e: any) => {
    const role: string = localStorage.getItem("role") as string;
    const key: string = e.key;
    const arr: string[] = store.authMenu[key];
    console.log(e);

    if (arr.includes(role)) {
      navigate("/" + key);
    } else {
      navigate("/home");
      message.warning("暂无权限");
    }
  };
  return (
    <>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className={style.sider}
      >
        <div className={style.demo_logo_vertical}>
          <Logo />
        </div>
        <div className={style.menu}>
          <Menu
            onClick={toPage}
            mode="inline"
            defaultSelectedKeys={["1"]}
            style={{ border: "none" }}
            items={menus}
          />
        </div>

        <div className={style.btn}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </div>
      </Sider>
    </>
  );
};
export default observer(Asider);
