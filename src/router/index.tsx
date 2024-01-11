import { Suspense, createContext, lazy } from "react";
import { BrowserRouter, Navigate, useRoutes } from "react-router-dom";
import App from "../App";
import store from "../common/mobx/globalStore";
import AuthComp from "./AuthComp";
export const GlobalStore = createContext({});
import NotFound from "../page/notFound/NotFound";
const Home = lazy(() => import("../page/business/home/Home"));
const Login = lazy(() => import("../page/login/Login"));
const MenuManage = lazy(() => import("../page/business/menuManage/MenuManage"));
const MenuCreate = lazy(() => import("../page/business/menuManage/Create"));
const Color = lazy(() => import("../page/business/configPage/color/Color"));
const Test = lazy(() => import("../page/business/test/Test"));
const TestRouter = lazy(() => import("../page/business/test/TestRouter"));

const IndexRouter = () => {
  return (
    <GlobalStore.Provider value={store}>
      <BrowserRouter>
        <Suspense fallback={""}>
          <MyRoute />
        </Suspense>
      </BrowserRouter>
    </GlobalStore.Provider>
  );
};

const MyRoute = () => {
  const element = useRoutes([
    { path: "*", element: <Navigate to="/home" /> },
    { path: "/", element: <Navigate to="/home" /> },
    { path: "/login", element: <Login /> },
    { path: "/404", element: <NotFound /> },
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "home",

          element: (
            <AuthComp>
              <Home />
            </AuthComp>
          ),
        },
        {
          path: "menuManage",
          element: (
            <AuthComp>
              <MenuManage />
            </AuthComp>
          ),
        },
        {
          path: "menuManage/create",
          element: (
            <AuthComp>
              <MenuCreate />
            </AuthComp>
          ),
        },

        {
          path: "configPage/color",
          element: (
            <AuthComp>
              <Color />
            </AuthComp>
          ),
        },
        {
          path: "test",
          element: (
            <AuthComp>
              <Test />
            </AuthComp>
          ),
        },
        {
          path: "testRouter",
          element: (
            <AuthComp>
              <TestRouter />
            </AuthComp>
          ),
        },
      ],
    },
  ]);
  return element;
};

export default IndexRouter;
