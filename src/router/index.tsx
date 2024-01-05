import { BrowserRouter, useRoutes, Navigate } from "react-router-dom";
import App from "../App";
import Login from "../page/login/Login";
import Home from "../page/business/home/Home";

import { createContext } from "react";
import store from "../common/mobx/globalStore";
import MenuManage from "../page/business/menuManage/MenuManage";
import MenuCreate from "../page/business/menuManage/Create";
import RoleManage from "../page/business/roleManage/RoleManage";
import Color from "../page/business/configPage/color/Color";
export const GlobalStore = createContext({});

const IndexRouter = () => {
  return (
    <GlobalStore.Provider value={store}>
      <BrowserRouter>
        <MyRoute />
      </BrowserRouter>
    </GlobalStore.Provider>
  );
};

const MyRoute = () => {
  const element = useRoutes([
    { path: "*", element: <Navigate to="/home" /> },
    { path: "/login", element: <Login /> },
    {
      path: "/",
      element: <App />,
      children: [
        { path: "home", element: <Home /> },
        { path: "menuManage", element: <MenuManage /> },
        { path: "menuManage/create", element: <MenuCreate /> },
        { path: "roleManage", element: <RoleManage /> },
        { path: "configPage/color", element: <Color /> },
      ],
    },
  ]);
  return element;
};

export default IndexRouter;
