import { useState } from "react";
import { Outlet } from "react-router-dom";
import App from "@/pages/App";
import { categories } from "@/assets/data";

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
