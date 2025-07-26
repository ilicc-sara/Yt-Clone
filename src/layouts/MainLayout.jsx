import React from "react";
import { Outlet } from "react-router-dom";
import Home from "../Home";
import App from "../App";

function MainLayout() {
  return (
    <>
      <App />
      <Outlet />
    </>
  );
}

export default MainLayout;
