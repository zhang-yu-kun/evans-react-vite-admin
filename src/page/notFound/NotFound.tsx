import { useNavigate } from "react-router-dom";
import style from "./NotFound.module.scss";
function NotFound() {
  const navigate = useNavigate();

  const toHome = () => {
    navigate("/home");
  };
  return (
    <div className={style.notfound}>
      <div className={style.content}>
        <div className={style.left}>
          <span className={style.num}>
            4<b />4
          </span>
        </div>
        <div className={style.right}>
          <p className={style.text}>
            we could find the page you're looking for.
          </p>
          <p className={style.btn} onClick={() => toHome()}>
            go home
          </p>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
