import classNames from "classnames";
import { useContext } from "react";
import { GlobalStore } from "../../../../router";
import { Button } from "antd";
import style from "./Color.module.scss";
import { observer } from "mobx-react-lite";
function Color() {
  const store: any = useContext(GlobalStore);
  const baseClass = classNames(
    style["color"],
    style[`theme_${store.themeStatus}`]
  );
  const setcolor = (color: "blue" | "purpel" | "red" | "green" | "dark") => {
    store.setTheme(color);
  };
  const setClass = (cla: string) => {
    return classNames(style[cla], style["colorBox"]);
  };

  return (
    <>
      {" "}
      <div className={baseClass}>
        <div className={style.header}>布局颜色</div>

        <div className={style.part}>
          <p className={style.title}>主题颜色</p>
          <div className={style.content}>
            <div
              className={setClass("blue")}
              onClick={() => setcolor("blue")}
            ></div>
            <div
              className={setClass("purpel")}
              onClick={() => setcolor("purpel")}
            ></div>
            <div
              className={setClass("red")}
              onClick={() => setcolor("red")}
            ></div>
            <div
              className={setClass("green")}
              onClick={() => setcolor("green")}
            ></div>
            <div
              className={setClass("dark")}
              onClick={() => setcolor("dark")}
            ></div>
          </div>
        </div>
        <div className={style.part}>
          <p className={style.title}>布局切换</p>
          <div className={style.content}>
            <Button
              onClick={() => store.setLayout("total")}
              className={style.layoutBtn}
              type="primary"
            >
              门户布局
            </Button>
            <Button
              onClick={() => store.setLayout("back")}
              className={style.layoutBtn}
              type="primary"
            >
              管理台布局
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
export default observer(Color);
