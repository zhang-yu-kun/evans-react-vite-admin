import * as echarts from "echarts";
import { useContext, useEffect, useRef } from "react";
import { GlobalStore } from "../../../router";
type EChartsOption = echarts.EChartsOption;
const ThreeChart: React.FC = () => {
  const store: any = useContext(GlobalStore);
  const threeChartRef = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      chart();
    }, 200);
  }, []);
  const chart = () => {
    const myChart = echarts.init(threeChartRef.current, store.themeStatus);
    const data: number[][] = [];
    let option: EChartsOption;
    for (let i = 0; i <= 100; i++) {
      let theta = (i / 100) * 360;
      let r = 5 * (1 + Math.sin((theta / 180) * Math.PI));
      data.push([r, theta]);
    }

    option = {
      title: {
        text: "图表3",
      },

      polar: {},
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
      radiusAxis: {},
      series: [
        {
          coordinateSystem: "polar",
          name: "line",
          type: "line",
          data: data,
        },
      ],
    };
    option && myChart.setOption(option);
  };
  return (
    <div
      ref={threeChartRef}
      style={{ width: "100%", height: "100%", background: "#fff" }}
    ></div>
  );
};

export default ThreeChart;
