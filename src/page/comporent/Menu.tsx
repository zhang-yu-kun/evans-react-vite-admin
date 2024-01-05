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
    key: "configPage/color",
    icon: <VideoCameraOutlined />,
    label: "颜色设置",
  },
  {
    key: "3",
    icon: <UploadOutlined />,
    label: "nav 3",
    children: [
      {
        key: "menuManage/create",

        label: "新建菜单",
      },
      {
        key: "menuManage",

        label: "2222",
      },
      {
        key: "menuManage/44444",

        label: "333333",
      },
    ],
  },
  {
    key: "4",
    icon: <UploadOutlined />,
    label: "nav 3",
    children: [
      {
        key: "menuManage/create",

        label: "新建菜单",
      },
      {
        key: "menuManage",

        label: "2222",
      },
      {
        key: "menuManage/44444",

        label: "333333",
      },
    ],
  },
  {
    key: "5",
    icon: <UploadOutlined />,
    label: "nav 3",
    children: [
      {
        key: "menuManage/create",

        label: "新建菜单",
      },
      {
        key: "menuManage",

        label: "2222",
      },
      {
        key: "menuManage/44444",

        label: "333333",
      },
      {
        key: "menuManage/5",

        label: "333333",
      },
      {
        key: "menuManage/6",

        label: "333333",
      },
      {
        key: "menuManage/7",

        label: "333333",
      },
      {
        key: "menuManage/8",

        label: "333333",
      },
      {
        key: "menuManage/9",

        label: "333333",
      },
      {
        key: "menuManage/10",

        label: "333333",
      },
    ],
  },
];
