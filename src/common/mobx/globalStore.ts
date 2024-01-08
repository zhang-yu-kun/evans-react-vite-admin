import { makeAutoObservable } from "mobx";
import { totalThemes } from "./themes";
import type { themesType } from "./themes";
type globalType = {
  themeAlgorithm: "defaultAlgorithm" | "darkAlgorithm" | "compactAlgorithm";
  layout: "total" | "back";
};

class Global {
  constructor() {
    // @ts-ignore：
    makeAutoObservable(this, {}, { autobind: true });
  }
  collapsed: boolean = false; //侧边栏开关
  layout: globalType["layout"] = "back"; //布局
  themeAlgorithm: globalType["themeAlgorithm"] = "defaultAlgorithm";

  /**当前颜色主题  长期使用通过复制对应的theme*/
  currentTheme = {
    bodyBg: "#fafafa",
    themeName: "blue", //颜色名
    primary: "#5677fc", //主题色
    PrimaryBorder: "#85C1E9", //主题边框
    colorBgContainer: "#e7e9fd35", //容器颜色
    MenuCorol: "#8a8a8a",
    MenuBg: "#e7e9fd35", //浅色加透明度
    MenuHover: "#e7e9fd", //浅色
  };
  setCollapsed() {
    this.collapsed = !this.collapsed;
  }

  setTheme(color: "blue" | "red" | "purpel" | "green" | "dark") {
    let current: themesType | undefined;
    current = totalThemes.find((item) => item.themeName === color);
    this.currentTheme = current as themesType;
  }

  setLayout(mode: "total" | "back") {
    this.layout = mode;
  }

  /**
   * 计算得出全部背景颜色
   */
  get footerColor() {
    if (this.currentTheme.themeName === "dark") {
      return "#fff";
    }
    return "#8a8a8a";
  }
  /**
   * 获取当前主题的主题名
   */
  get themeColor() {
    return this.currentTheme.themeName;
  }
  /**
   * 计算暗色或亮色模式
   */
  get themeStatus() {
    if (this.currentTheme.themeName === "dark") {
      return "dark";
    }
    return "light";
  }
}

const global = new Global();

export default global;
