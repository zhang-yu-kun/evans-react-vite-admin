export type themesType = {
  bodyBg: "#fafafa" | "#212121";
  themeName: string;
  primary: string;
  PrimaryBorder: string;
  colorBgContainer: string;
  MenuCorol: string;
  MenuBg: string;
  MenuHover: string;
};

const totalThemes: themesType[] = [
  {
    bodyBg: "#fafafa",
    themeName: "blue", //颜色名
    primary: "#5677fc", //主题色
    PrimaryBorder: "#85C1E9", //主题边框
    colorBgContainer: "#e7e9fd35", //容器颜色
    MenuCorol: "#8a8a8a",
    MenuBg: "#e7e9fd35", //浅色加透明度
    MenuHover: "#e7e9fd", //浅色
  },
  {
    bodyBg: "#fafafa",
    themeName: "purpel",
    primary: "#673ab7",
    PrimaryBorder: "#9575cd",
    colorBgContainer: "#ede7f635",
    MenuCorol: "#8a8a8a",
    MenuBg: "#ede7f635", //浅色加透明度
    MenuHover: "#ede7f6", //浅色
  },
  {
    bodyBg: "#fafafa",
    themeName: "red",
    primary: "#e51c23",
    PrimaryBorder: "#85C1E9",
    colorBgContainer: "#ffebee35",
    MenuCorol: "#8a8a8a",
    MenuBg: "#ffebee35", //浅色加透明度
    MenuHover: "#ffebee", //浅色
  },
  {
    bodyBg: "#fafafa",
    themeName: "green",
    primary: "#259b24",
    PrimaryBorder: "#85C1E9",
    colorBgContainer: "#e8f5e935",
    MenuCorol: "#8a8a8a",
    MenuBg: "#e8f5e935", //浅色加透明度
    MenuHover: "#ef5e9", //浅色
  },
  {
    bodyBg: "#212121",
    themeName: "dark",
    primary: "#9e9e9e",
    PrimaryBorder: "#85C1E9",
    colorBgContainer: "#303030",
    MenuCorol: "#ffffff",
    MenuBg: "#21212135", //浅色加透明度
    MenuHover: "#212121", //浅色
  },
];

export { totalThemes };
