import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Home from "../Home";
import App from "../App";
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
