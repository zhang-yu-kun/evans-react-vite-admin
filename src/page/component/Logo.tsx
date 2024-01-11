import { useContext } from "react";

import { GlobalStore } from "../../router/index";
import { observer } from "mobx-react-lite";

const Logo = () => {
  const store: any = useContext(GlobalStore);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 20,
          width: "100%",
          height: "100%",
          background: store.currentTheme.MenuBg,
          color: store.currentTheme.primary,
        }}
      >
        Evans后台管理模板
      </div>
    </>
  );
};
export default observer(Logo);
