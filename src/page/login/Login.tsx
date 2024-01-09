import LoginForm from "./LoginForm";
import style from "./login.module.scss";
const Login = () => {
  return (
    <div className={style.box}>
      <div className={style.material_1}></div>
      <div className={style.material_2}></div>
      <div className={style.material_3}>
        <div className={style.texts}>
          <p className={style.text1}>欢迎进入</p>
          <p className={style.text2}>Evans的管理台模板</p>
        </div>
        <p className={style.text3}>
          Life is full of unexpected twists and turns, but it is how we handle
          them that defines our character. We may not always get what we want,
          but if we keep pushing forward with positivity and determination, good
          results will come. It's not about the destination, but the journey
          that matters most.
        </p>
      </div>
      <div className={style.material_4}>
        <p className={style.title}>登录</p>
        <div className={style.content}>
          <LoginForm />
        </div>
      </div>
      {/* <div className={style.material_5}></div> */}
      {/* <div className={style.material_6}></div> */}
      {/* <div className={style.content}></div> */}
    </div>
  );
};

export default Login;
