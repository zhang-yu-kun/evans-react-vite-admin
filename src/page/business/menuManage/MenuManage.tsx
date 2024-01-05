import { Link } from "react-router-dom";

export default function MenuManage() {
  return (
    <div>
      <Link to={"/menuManage/create"}>新建</Link>
    </div>
  );
}
