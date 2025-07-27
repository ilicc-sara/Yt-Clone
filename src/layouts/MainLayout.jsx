import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Home from "../pages/Home";
import App from "../pages/App";
import { categories } from "../data";

function MainLayout() {
  const [id, setId] = useState(categories[0].id);

  return (
    <>
      <App />
      <Outlet context={{ id, setId }} />
    </>
  );
}

export default MainLayout;
