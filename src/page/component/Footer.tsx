import { useContext } from "react";
import { GlobalStore } from "../../router";
import { Layout } from "antd";

const { Footer } = Layout;
const Afooter: React.FC = () => {
  const store: any = useContext(GlobalStore);
  return (
    <>
      <Footer
        style={{
          height: "25px",
          padding: "0",
          textAlign: "center",
          background: store.currentTheme.bodyBg,
          color: store.footerColor,
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </>
  );
};

export default Afooter;
