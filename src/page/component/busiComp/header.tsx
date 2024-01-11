import classNames from "classnames";
import style from "./style.module.scss";
import { useContext } from "react";
import { GlobalStore } from "../../../router";
import { observer } from "mobx-react-lite";
function HeadTitle({ text }: { text: string }) {
  const store: any = useContext(GlobalStore);
  return (
    <div
      className={classNames(style[`theme_${store.themeStatus}`])}
      style={{
        width: "100%",
        height: "80px",
        fontSize: 27,
        fontWeight: "bold",
        padding: "0 20px",
        lineHeight: "80px",
      }}
    >
      {text}
    </div>
  );
}
export default observer(HeadTitle);
