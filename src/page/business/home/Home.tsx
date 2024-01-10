import { Avatar } from "antd";
import classNames from "classnames";
import { useContext } from "react";
import { GlobalStore } from "../../../router";
import style from "./Home.module.scss";
import OneChart from "./OneChart";
import ThreeChart from "./ThreeChart";
import TwoChart from "./TwoChart";
import { List, Timeline } from "antd";
import { observer } from "mobx-react-lite";
function Home() {
  const store: any = useContext(GlobalStore);
  const app = [
    { title: "apply 1" },
    { title: "apply 2" },
    { title: "apply 3" },
    { title: "apply 4" },
    { title: "apply 5" },
    { title: "apply 6" },
    { title: "apply 7" },
    { title: "apply 8" },
    { title: "apply 9" },
    { title: "apply 10" },
  ];
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

  return (
    <>
      <div className={baseClass}>
        <div className={style.left}>
          <div className={style.top}>
            {/*  */}
            <Avatar
              size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
              style={{ backgroundColor: "#f56a00", color: "#fde3cf" }}
            >
              E
            </Avatar>
            <p>欢迎来到Evans的工作台</p>
          </div>
          <div className={style.part}>
            <p className={style.title}>最新事件</p>
            <ul>
              {news.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className={style.part}>
            <p className={style.title}>一些消息</p>
            <ul>
              {news.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className={style.main}>
          <div className={style.part}>
            <p className={style.title}>图表1</p>
            <div className={style.chart}>
              <OneChart />
            </div>
          </div>
          <div className={style.part}>
            <p className={style.title}>图表2</p>
            <div className={style.chart}>
              <div className={style.item}>
                <TwoChart />
              </div>
              <div className={style.item}>
                <ThreeChart />
              </div>
            </div>
          </div>
        </div>
        <div className={style.right}>
          <div className={style.apply}>
            <p className={style.title}>应用集</p>
            <List
              grid={{ gutter: 12, column: 3 }}
              dataSource={app}
              renderItem={(item) => (
                <List.Item>
                  <div className={style.app}>{item.title}</div>
                </List.Item>
              )}
            />
          </div>
          <div className={style.part}>
            <p className={style.title}>时间线</p>
            <Timeline
              items={[
                {
                  children: "Create a services site 2015-09-01",
                },
                {
                  children: "Solve initial network problems 2015-09-01",
                },
                {
                  children: "Technical testing 2015-09-01",
                },
                {
                  children: "Network problems being solved 2015-09-01",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default observer(Home);
