import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <>
      <h1>Page Not Found</h1>
      <Link to="/">Home</Link>
    </>
  );
}

export default NotFoundPage;
