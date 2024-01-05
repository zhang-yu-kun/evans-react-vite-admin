import { useContext } from "react";
import { GlobalStore } from "../../../../router";

export default function Color() {
  const store: any = useContext(GlobalStore);
  const setcolor = (color: "blue" | "purpel" | "red" | "green" | "dark") => {
    store.setTheme(color);
  };
  return (
    <div>
      <button onClick={() => setcolor("blue")}>蓝色</button>
      <button onClick={() => setcolor("red")}>红色</button>
      <button onClick={() => setcolor("purpel")}>紫色</button>
      <button onClick={() => setcolor("green")}>绿色</button>
      <button onClick={() => setcolor("dark")}>暗色</button>
      <button onClick={() => store.setLayout("total")}>门户布局</button>
      <button onClick={() => store.setLayout("back")}>管理台布局</button>
    </div>
  );
}
