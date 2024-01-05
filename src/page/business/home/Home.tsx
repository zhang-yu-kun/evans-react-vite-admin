import { Avatar, List } from "antd";
import classNames from "classnames";
import { useContext } from "react";
import { GlobalStore } from "../../../router";
import style from "./Home.module.scss";
export default function Home() {
  const store: any = useContext(GlobalStore);

  const news = [
    "知之愈明，则行之愈笃;行之愈笃，则知之益明。——朱熹(宋)   ",
    "治大国,若烹小鲜。——老子",
    "天无边,智无限。——谚语",
    "宁死不背理，宁贫不堕志。一谚语",
    "天见其明，地见其光，君子贵其全也。",
  ];
  const baseClass = classNames(
    style["home"],
    style[`theme_${store.themeStatus}`]
  );
  const setClass = (cla: string) => {
    return classNames(style[cla], style[store.themeColor]);
  };
  return (
    <>
      <div className={baseClass}>
        <div className={style.left}>
          <div className={setClass("top")}>
            {/*  */}
            <Avatar
              size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
              style={{ backgroundColor: "#f56a00", color: "#fde3cf" }}
            >
              E
            </Avatar>
            <p>欢迎来到Evans的工作台</p>
          </div>
          <div className={setClass("part")}>
            <List
              header={<p className={style.title}>最新事件</p>}
              size="small"
              bordered={false}
              dataSource={news}
              renderItem={(item) => <List.Item>{item}</List.Item>}
            />
          </div>
          <div className={setClass("part")}>
            <List
              header={<p className={style.title}>一些消息</p>}
              size="small"
              bordered={false}
              dataSource={news}
              renderItem={(item) => <List.Item>{item}</List.Item>}
            />
          </div>
        </div>
        <div className={setClass("main")}>
          <div className={style.part}>
            <p className={style.title}>图表</p>
          </div>
          <div className={style.part}></div>
          <div className={style.part}></div>
        </div>
        <div className={setClass("right")}></div>
      </div>
    </>
  );
}
