import { ConfigProvider } from "antd";
import { observer } from "mobx-react-lite";
import store from "./common/mobx/globalStore";
import HeaderLayout from "./page/comporent/HeaderLayout";
import SiderLayout from "./page/comporent/SiderLayout";

const App: React.FC = () => {
  const { bodyBg, primary, colorBgContainer, MenuBg, MenuHover } =
    store.currentTheme;
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            // Seed Token，影响范围大
            colorPrimary: primary,
            borderRadius: 2,

            // 派生变量，影响范围小
            colorBgContainer: colorBgContainer,
          },
          components: {
            Layout: {
              /* 这里是你的组件 token */
              bodyBg: bodyBg,
              headerBg: MenuBg,
              siderBg: MenuBg,
            },
            Menu: {
              itemBorderRadius: 8,
              subMenuItemBorderRadius: 8,
              itemBg: MenuBg,
              itemColor: "#8a8a8a",
              itemHoverBg: MenuHover, //二级菜单悬浮背景
              itemHoverColor: primary,
              itemSelectedBg: MenuHover, //二级菜单选择颜色
              itemSelectedColor: primary,
              horizontalItemHoverBg: "#fff",
              horizontalItemHoverColor: primary,
              horizontalItemSelectedBg: "#fff",
              horizontalItemSelectedColor: primary,
            },
          },
        }}
      >
        {store.layout === "total" ? <HeaderLayout /> : <SiderLayout />}
      </ConfigProvider>
    </>
  );
};

export default observer(App);
