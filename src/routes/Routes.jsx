import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import { Component } from "react";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Orders from "../components/Orders";
import PrivateRoutes from "./PrivateRoutes";
import Profiles from "../components/Profiles";
import Dashboard from "../components/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: "/",
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/orders",
        // Component: Orders,
        element: (
          <PrivateRoutes>
            <Orders></Orders>
          </PrivateRoutes>
        ),
      },
      {
        path: "/profiles",
        element: (
          <PrivateRoutes>
            <Profiles></Profiles>
          </PrivateRoutes>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoutes>
            <Dashboard></Dashboard>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
