import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./sider.module.scss";
import { menuItem } from "./Menu";
import Logo from "./Logo";
const { Sider } = Layout;
const Asider = () => {
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(false);
  const toPage = (e: any) => {
    navigate("/" + e.key);
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
            items={menuItem}
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
export default Asider;
