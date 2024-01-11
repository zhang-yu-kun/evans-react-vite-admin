import {
  GlobalOutlined,
  HomeOutlined,
  LinkOutlined,
  ProfileOutlined,
  SafetyOutlined,
  SettingOutlined,
  WifiOutlined,
} from "@ant-design/icons";

const Icon = (icon: string) => {
  const icons: { [key: string]: any } = {
    GlobalOutlined: <GlobalOutlined />,
    HomeOutlined: <HomeOutlined />,
    LinkOutlined: <LinkOutlined />,
    SettingOutlined: <SettingOutlined />,
    WifiOutlined: <WifiOutlined />,
    SafetyOutlined: <SafetyOutlined />,
    ProfileOutlined: <ProfileOutlined />,
  };

  const IsIcon = icons[icon];
  if (IsIcon != void 0) {
    return IsIcon;
  }

  return <ProfileOutlined />;
};

export default Icon;
