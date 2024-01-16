import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import TestChild from "./TestChild";

const Test = () => {
  const navigate = useNavigate();
  const toPath = () => {
    navigate("/testRouter");
  };

  const clearToken = () => {
    sessionStorage.setItem("token", "fff");
    navigate("/home");
  };
  return (
    <>
      <h1>测试界面</h1>
      <TestChild TestData="子组件数据" />
      <Button onClick={() => clearToken()}>退出登录</Button>
      <Button onClick={() => toPath()}>跳转相关界面</Button>
    </>
  );
};
export default Test;
