import type { MenuProps } from "antd";
import { Space, Dropdown } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";

const clearToken = () => {
  sessionStorage.setItem("token", "fff");
};
const getNmae = () => {
  return sessionStorage.getItem("name");
};
const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <Link onClick={() => clearToken()} to="/home">
        退出
      </Link>
    ),
  },
];

const UserDrop: React.FC = () => (
  <>
    <Dropdown menu={{ items }} placement="bottom">
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          {getNmae()}
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  </>
);

export default UserDrop;
