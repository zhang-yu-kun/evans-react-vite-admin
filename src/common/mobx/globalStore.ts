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
  layout: globalType["layout"] = "back";
  themeAlgorithm: globalType["themeAlgorithm"] = "defaultAlgorithm";
  collapsed: boolean = false;

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

  get siderBorder() {
    if (this.currentTheme.themeName === "dark") {
      return "#DFDFDF80";
    }
    return "#80808080";
  }
  get footerColor() {
    if (this.currentTheme.themeName === "dark") {
      return "#fff";
    }
    return "#8a8a8a";
  }
  get themeColor() {
    return this.currentTheme.themeName;
  }
  get themeStatus() {
    if (this.currentTheme.themeName === "dark") {
      return "dark";
    }
    return "light";
  }
}

const global = new Global();

export default global;
