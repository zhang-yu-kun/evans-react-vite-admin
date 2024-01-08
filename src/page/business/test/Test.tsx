import { Button } from "antd";
import TestChild from "./TestChild";
import { useNavigate } from "react-router-dom";

const Test = () => {
  const navigate = useNavigate();
  const toPath = () => {
    navigate("/testRouter");
  };
  return (
    <>
      <h1>测试界面</h1>
      <TestChild TestData="子组件数据" />
      <Button onClick={() => toPath()}>跳转相关界面</Button>
    </>
  );
};
export default Test;