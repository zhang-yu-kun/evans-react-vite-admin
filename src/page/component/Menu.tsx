import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
export const menuItem = [
  {
    key: "home",
    icon: <UserOutlined />,

    label: "首页",
  },
  {
    key: "configPage",
    icon: <VideoCameraOutlined />,
    label: "页面配置",
    children: [
      {
        key: "configPage/color",

        label: "布局颜色",
      },
    ],
  },
  {
    key: "3",
    icon: <UploadOutlined />,
    label: "权限管理",
    children: [
      {
        key: "menuManage",

        label: "菜单管理",
      },
    ],
  },
  {
    key: "test",
    icon: <UploadOutlined />,
    label: "测试页面",
  },
];
