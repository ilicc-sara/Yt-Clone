import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <>
      <h1>Page Not Found</h1>
      <Link className="home-link not-found" to="/">
        Home
      </Link>
    </>
  );
}

export default NotFoundPage;
