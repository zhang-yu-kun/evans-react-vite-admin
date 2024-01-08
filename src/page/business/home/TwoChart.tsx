import * as echarts from "echarts";
type EChartsOption = echarts.EChartsOption;
import { useContext, useEffect, useRef } from "react";
import { GlobalStore } from "../../../router";
const TwoChart: React.FC = () => {
  const store: any = useContext(GlobalStore);
  const twoChartRef = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      chart();
    }, 200);
  }, []);
  const chart = () => {
    const myChart = echarts.init(twoChartRef.current, store.themeStatus);
    const data: number[][] = [];
    let option: EChartsOption;
    for (let i = 0; i <= 360; i++) {
      let t = (i / 180) * Math.PI;
      let r = Math.sin(2 * t) * Math.cos(2 * t);
      data.push([r, i]);
    }

    option = {
      title: {
        text: "图表2",
      },

      polar: {
        center: ["50%", "54%"],
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
        },
      },
      angleAxis: {
        type: "value",
        startAngle: 0,
      },
      radiusAxis: {
        min: 0,
      },
      series: [
        {
          coordinateSystem: "polar",
          name: "line",
          type: "line",
          showSymbol: false,
          data: data,
        },
      ],
      animationDuration: 2000,
    };
    option && myChart.setOption(option);
  };
  return (
    <div
      ref={twoChartRef}
      style={{ width: "100%", height: "100%", background: "#fff" }}
    ></div>
  );
};

export default TwoChart;
